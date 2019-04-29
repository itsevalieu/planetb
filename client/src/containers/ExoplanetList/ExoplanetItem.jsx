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

const ExoplanetItem = ({index, data}) => {
  return <Row><Cell>{index + 1}</Cell><Cell>{data.object_name}</Cell><Cell>{data.constellation}</Cell><Cell>{data.number_of_data}</Cell><Cell>{(data.first_insert_date).toDateString()}</Cell><Cell>{(data.last_insert_date).toDateString()}</Cell><Cell>{Math.floor((data.last_insert_date - data.first_insert_date)/(1000*60*60*24))}</Cell></Row>;
}

export default ExoplanetItem;
