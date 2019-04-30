import React from 'react';
import styled from 'styled-components';

const Row = styled.tr`
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

const TransitObservationItem = ({index, data}) => {
  return (
    <Row>
      <Cell>{index + 1}</Cell>
      <Cell>{data.HJD_mid}</Cell>
      <Cell>{data.epoch}</Cell>
      <Cell>{data.OC}</Cell>
      <Cell>{data.duration}</Cell>
      <Cell>{data.depth}</Cell>
      <Cell>{data.band}</Cell>
      <Cell>{data.data_quality}</Cell>
      <Cell></Cell>
      <Cell>{data.observer + ' ' + data.reference}</Cell>
      <Cell>*</Cell>
      <Cell>{(data.insert_date).toDateString()}</Cell>
    </Row>
  );
}

export default TransitObservationItem;