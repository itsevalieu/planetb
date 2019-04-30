import React, { Component } from 'react';
import Header from '../components/Header';
import CommunityTransitObservationsList from './CommunityTransitObservationsList';
import UserTransitObservationsList from './UserTransitObservationsList';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
`;
const ListWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
`;

class TransitObservations extends Component {
  render() {
    return (
      <Wrapper>
        <Header>Transit Observations</Header>
        <ListWrapper>
          <UserTransitObservationsList/>
          <CommunityTransitObservationsList/>
        </ListWrapper>
      </Wrapper>
    );
  }
}

export default TransitObservations;