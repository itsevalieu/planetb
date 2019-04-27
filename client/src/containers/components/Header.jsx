import React from 'react';
import Button from './Button';
import styled from 'styled-components';
import logo from './planetb.png';

const StyledHeader = styled.header`
    width: 100%;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-around;
    padding: 1em;
`;
const Title = styled.h1`
    text-shadow: 2px 2px 2px #333
    font-size: 3em;
    color: #fff;
`;
const Link = styled.a`
    color: #fff;
`;

const Header = (props) => {
    let style = {
        width: '80px',
        height: '70px'
    }
    if (props.children === 'Exoplanet List') {
        return <StyledHeader><Link href='/'><img src={logo} alt='logo' style={style}/></Link><Title>{props.children}</Title><Link href='/'><Button>Login</Button></Link></StyledHeader>;
    } else if (props.children === 'Exoplanet Transit Graphs') {
        return <StyledHeader><Link href='/'><img src={logo} alt='logo' style={style}/></Link><Title>{props.children}</Title><Link href='/exoplanet/transit'><Button>Transit Observations</Button></Link></StyledHeader>;    
    } else if (props.children === 'Transit Observations') {
        return <StyledHeader><Link href='/'><img src={logo} alt='logo' style={style}/></Link><Title>{props.children}</Title><Link href='/exoplanet'><Button>Exoplanet Graphs</Button></Link></StyledHeader>;
    } else {
        return null;
    }
}

export default Header;