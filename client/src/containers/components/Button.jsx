import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  height: 50px;
  width: 150px;
  font-size: 1.6em;
  background: #253453;
  border-radius: 5px;
  border: none;
  color: #fff;
`;
const Button = (props) => {
  return <StyledButton>{props.children}</StyledButton>;
}

export default Button;