import React, { Component } from 'react';
import TransitObservationItem from './TransitObservationItem';
import styled from 'styled-components';
import Async from 'react-promise';

const Table = styled.table`
  margin: 0 50px 50px;
  padding: 0 50px 25px;
  box-shadow: 2px 2px 5px #333;
  background: #fff;
  border-spacing: 0;
`;
const TableHead = styled.thead`
  text-transform: uppercase;
  font-size: 1.4em;
`;
const TableBody = styled.tbody`
`;
const Row = styled.tr`
  border-bottom: 1px solid black;
`;
const Head = styled.th`
  padding: 25px 0;
  border-bottom: 1px solid black;
`;

class CommunityTransitObservationsList extends Component {
  getTransits(){

    let {
      Stitch,
      RemoteMongoClient,
      AnonymousCredential
    } = require('mongodb-stitch-browser-sdk');

    let client;
    if (Stitch.hasAppClient('planetb-kopdp')){
      client = Stitch.getAppClient('planetb-kopdp');
    }
    else {
      client = Stitch.initializeDefaultAppClient('planetb-kopdp');
    }
    let db = client.getServiceClient(RemoteMongoClient.factory, 'mongodb-atlas').db('planetb');


    return new Promise(function(resolve, reject){
        client.auth.loginWithCredential(new AnonymousCredential()).then(() =>
        db.collection('transits').find({}, { limit: 5}).asArray()
      ).then(docs => {
        console.log(docs[0]);
        console.log("[MongoDB Stitch] Connected to Stitch");
        resolve(docs);
      }).catch(err => {
        console.error(err);
        reject(Error("MongoDB Stitch Error"));
      });
    });
  }
  render() {
    return (
      <Table>
        <TableHead>
          <Row>
            <Head></Head>
            <Head>HJD mid (2400000 +)</Head>
            <Head>Epoch</Head>
            <Head>O-C (d)</Head>
            <Head>D (min)</Head>
            <Head>Depth (mmag)</Head>
            <Head>Band</Head>
            <Head>DQ</Head>
            <Head>LC</Head>
            <Head>Author and Reference</Head>
            <Head>*</Head>
            <Head>Changed*</Head>
          </Row>
        </TableHead>
        <TableBody>
          <Async promise={this.getTransits()} then={val => val.map(function(d, idx){
            return (<TransitObservationItem key={idx} index={idx} data={d}/>);
          })}/>
        </TableBody>
      </Table>
    );
  }
}

export default CommunityTransitObservationsList;
