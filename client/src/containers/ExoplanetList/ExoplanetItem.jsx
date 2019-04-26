import React from 'react';
import styled from 'styled-components';

const Row = styled.tr`
  font-size: 16px;
`;
const Cell = styled.td`
  padding: 10px;
  text-align: center;
`;

const ExoplanetItem = ({index, data}) => {
  return <Row><Cell>{index + 1}</Cell><Cell>{data.object_name}</Cell><Cell>{data.constellation}</Cell><Cell></Cell><Cell></Cell><Cell></Cell><Cell></Cell></Row>;
}

export default ExoplanetItem;
