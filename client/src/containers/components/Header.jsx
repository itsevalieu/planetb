import React from 'react';
import Button from './Button';
import styled from 'styled-components';

const Nav = styled.nav`
      font-size: 3em,
      width: 100%,
      text-align: center,
      padding: 1em,
      color: #fff,
      text-shadow: 2px 2px 2px #333
`;

const Header = (props) => {
    if (props.children === 'Exoplanet List') {
        return <Nav><a href='/'>Planet B</a><h1>{props.children}</h1></Nav>;
    } else if (props.children === 'Exoplanet Transit Graphs') {
        return <Nav><a href='/'>Planet B</a><h1>{props.children}</h1><Button>Transit Observations</Button></Nav>;    
    } else if (props.children === 'Transit Observations') {
        return <Nav><a href='/'>Planet B</a><h1>{props.children}</h1><Button>Exoplanet Graphs</Button></Nav>;
    } else {
        return null;
    }
}

export default Header;