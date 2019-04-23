const config = require('./mongo-config.json')
const mongo = require('mongodb');
const MongoClient = require('mongodb').MongoClient;

const uri = config.mongo.uri;
MongoClient.connect(uri, { useNewUrlParser: true }, function(err, client) {
   if(err) {
        console.log('Error occurred while connecting to MongoDB Atlas...\n',err);
   }
   console.log('Connected...');
   const collection = client.db('planetb').collection('transits');

   var stream = collection.find({exoplanet_id: mongo.ObjectID('5cbe564a1c9d440000b0aba6')}).stream();
   stream.on('data', function(item) {
       console.log(item);
   });
   stream.on('end', function() {
       client.close();
   });
});