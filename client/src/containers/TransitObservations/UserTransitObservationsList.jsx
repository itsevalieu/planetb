import React, { Component } from 'react';
import styled from 'styled-components';

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
const Head = styled.th`
  padding: 25px 0;
  border-bottom: 1px solid black;
`;
const Row = styled.tr`  
  border-bottom: 1px solid black;
`;
const DRow = styled.tr`
  font-size: 16px;
  &:hover, &:active {
    background: #ccc;
    cursor: pointer;
  }
`;
const Cell = styled.td`
  padding: 10px;
  text-align: center;
  border-top: 1px solid #ccc;
`;
class UserTransitObservationsList extends Component {
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
            <Head></Head>
            <Head>Changed*</Head>
          </Row>
        </TableHead>
        <TableBody>
          <DRow>
            <Cell>{1}</Cell>
            <Cell>54597.679000000004</Cell>
            <Cell>0</Cell>
            <Cell>0</Cell>
            <Cell>NaN</Cell>
            <Cell>NaN</Cell>
            <Cell>Corot-exo</Cell>
            <Cell>1</Cell>
            <Cell>Gandolfi et al. 2010 Gandolfi et al. 2010</Cell>
            <Cell></Cell>
            <Cell>*</Cell>
            <Cell>Tue Jun 15 2010</Cell>
          </DRow>
        </TableBody>
      </Table>
    );
  }
}

export default UserTransitObservationsList;
