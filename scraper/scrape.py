from bs4 import BeautifulSoup
import requests
import re
import pandas as pd
from io import StringIO
import pymongo
from bson.objectid import ObjectId
from datetime import datetime
import time
import sys
import mongoconfig

url = r'http://var2.astro.cz/ETD/'

exoplanets = requests.get(url)
planet_soup = BeautifulSoup(exoplanets.text, 'html.parser')
pattern = re.compile(r'Show data as ASCII table separated by semicolon')

current_row = 0
client = pymongo.MongoClient(mongoconfig.uri) # connection string to mongodb atlas
db = client['planetb']

# list of constellations and their abbreviations according to Wikipedia
constellations_df = pd.read_csv('constellations.csv')

# same as on the ETD site
transit_columns = [
    '#',
    'HJDmid',
    'HJDmid Error',
    'Epoch',
    'O-C',
    'Duration',
    'Duration Error',
    'Depth',
    'Depth Error',
    'Band',
    'DQ',
    'Observer',
    'Reference',
    'Inserted'
    ]

for planet in planet_soup.find('div', {'class': 'centerlike'}).find('table').findAll('tr'):
    if current_row < 2:
        # skip first two blank rows
        pass
    else:
        print(current_row)
        print(current_row, file=sys.stderr)
        columns = planet.findAll('td')

        constellation = columns[2].string.lower().strip()
        lookup = constellations_df.loc[constellations_df['abbr_IAU'] == constellation, 'constellation']
        if lookup.shape[0] == 0:
            # in case there were some abbreviations not listed on Wikipedia
            print('Error: Constellation not found for abbreviation: {}'.format(constellation), file=sys.stderr)
        else:
            constellation = lookup.values[0].strip()

        # todo: determine number_of_data, first_insert_date, last_insert_date from the transits schema
        # instead of taking it directly from the ETD website
        first_insert_date = columns[4].string
        if first_insert_date is None:
            print('Error: First insert date missing', file=sys.stderr)            
        elif len(first_insert_date) != 7:
            print('Error: First insert date incorrectly formatted', file=sys.stderr)            
        else:
            first_insert_date = datetime.strptime(first_insert_date, '%Y-%m')

        last_insert_date = columns[5].string
        if last_insert_date is None:
            print('Error: Last insert date missing', file=sys.stderr)            
        elif len(last_insert_date) != 7:
            print('Error: Last insert date incorrectly formatted', file=sys.stderr)            
        else:
            last_insert_date = datetime.strptime(last_insert_date, '%Y-%m')

        planet_record = db['exoplanets-test'].insert_one({
            'object_name': str(columns[1].string),
            'constellation': str(constellation),
            'number_of_data': int(columns[3].string),
            'first_insert_date': first_insert_date,
            'last_insert_date': last_insert_date
        })

        transits = requests.get(url + columns[1].find('a')['href'])
        transit_soup = BeautifulSoup(transits.text, 'html.parser')

        print(url + transit_soup.find('a', text=pattern)['href'], file=sys.stderr)
        transit_data = requests.get(url + transit_soup.find('a', text=pattern)['href'])
        # special characters which didn't get encoded properly by the website?
        cleaned_data = (transit_data.text.replace('&#232;', u'è')
                                         .replace('&#241;', u'ñ')
                                         .replace('&#287;', u'ğ'))

        df = pd.DataFrame()
        if current_row in [289, 291, 299, 336, 337]:
            # these rows have too many semicolons in the first row, so skip the first row
            # need to be input manually later
            df = (pd.read_csv(StringIO(cleaned_data),
                sep=';',
                skiprows=6,
                error_bad_lines=False,
                names=transit_columns,
                header=None,
                index_col=False))
        else:
            df = (pd.read_csv(StringIO(cleaned_data),
                sep=';',
                skiprows=4,
                error_bad_lines=False))            

        for index, row in df.iterrows():
            transit_record = db['transits-test'].insert_one({
                'exoplanet_id': ObjectId(planet_record.inserted_id),
                'HJD_mid': float(row['HJDmid']),
                'HJD_mid_error': float(row['HJDmid Error']),
                'epoch': int(row['Epoch']),
                'OC': float(row['O-C']),
                'duration': float(row['Duration']),
                'duration_error': float(row['Duration Error']),
                'depth': float(row['Depth']),
                'depth_error': float(row['Depth Error']),
                'band': str(row['Band']),
                'data_quality': int(row['DQ']),
                'observer': str(row['Observer']),
                'reference': str(row['Reference']),
                'insert_date': datetime.strptime(row['Inserted'], '%Y-%m-%d')
            })
        time.sleep(0.5)

    current_row += 1

client.close()
