import React, { Component } from 'react';
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

class ExoplanetItem extends Component {
  render() {
    return (
      <Row onClick={this.props.handleClick} data-uuid={this.props.data._id}><Cell>{this.props.index + 1}</Cell><Cell>{this.props.data.object_name}</Cell><Cell>{this.props.data.constellation}</Cell><Cell>{this.props.data.number_of_data}</Cell><Cell>{(this.props.data.first_insert_date).toDateString()}</Cell><Cell>{(this.props.data.last_insert_date).toDateString()}</Cell><Cell>{Math.floor((this.props.data.last_insert_date - this.props.data.first_insert_date)/(1000*60*60*24))}</Cell></Row>
    );
  }
}

export default ExoplanetItem;