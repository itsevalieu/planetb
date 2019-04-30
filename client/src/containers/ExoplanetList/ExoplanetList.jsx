import React, { Component } from 'react';
import styled from 'styled-components';
import Async from 'react-promise';
import ExoplanetItem from './ExoplanetItem';
import Header from '../components/Header';

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
`;
const Table = styled.table`
  margin: 0 50px;
  padding: 0 50px 25px;
  box-shadow: 2px 2px 5px #333;
  background: #fff;
  border-spacing: 0;
`;
const TableHead = styled.thead`
  text-transform: uppercase;
  font-size: 1.8em;
`;
const TableBody = styled.tbody`
`;
const Row = styled.tr`
  border-bottom: 1px solid black;
`;
const Head = styled.th`
  padding: 25px 0;
`;

class ExoplanetList extends Component {
  getExoplanets(){
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
        db.collection('exoplanets').find({}, { limit: 20 }).asArray()
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
  handleClick = (e) => {
    console.log(e.currentTarget.dataset.uuid);
    this.props.history.push(`/observations/${e.currentTarget.dataset.uuid}`);
  }
  render() {
    return (
      <Wrapper>
        <Header>Exoplanet List</Header>
        <Table>
          <TableHead>
            <Row>
              <Head></Head>
              <Head>object</Head>
              <Head>constellation</Head>
              <Head># of data</Head>
              <Head colSpan='2'>time span from - till</Head>
              <Head>last changes (days)</Head>
            </Row>
          </TableHead>
          <TableBody>
            <Async promise={this.getExoplanets()} then={val => val.map((d, idx) => {
              return <ExoplanetItem key={idx} index={idx} data={d} handleClick={this.handleClick}/>
            }, this)}/>
          </TableBody>
        </Table>
      </Wrapper>
    );
  }
}

export default ExoplanetList;