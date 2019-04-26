import React, { Component } from 'react';
import Async from 'react-promise';

const {
  Stitch,
  RemoteMongoClient,
  AnonymousCredential
} = require('mongodb-stitch-browser-sdk');
const client = Stitch.initializeDefaultAppClient('planetb-kopdp');
const db = client.getServiceClient(RemoteMongoClient.factory, 'mongodb-atlas').db('planetb');

class ExoplanetList extends Component {
  getExoplanets(){
    return new Promise(function(resolve, reject){
        client.auth.loginWithCredential(new AnonymousCredential()).then(() =>
        db.collection('exoplanets').find({}, { limit: 10}).asArray()
      ).then(docs => {
        console.log(docs);
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
      <div>
        ExoplanetList
        <Async promise={this.getExoplanets()} then={val => val.map(function(d, idx){
          return (<li key={idx}>{d.object_name}</li>)
        })}/>
      </div>
    );
  }
}

export default ExoplanetList;
