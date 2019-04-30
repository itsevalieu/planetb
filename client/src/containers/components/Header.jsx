import React from 'react';
import Button from './Button';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import logo from './planetb.png';

const StyledHeader = styled.header`
    width: 100%;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
    .wrap {
        padding: 1em 50px;
    }
`;
const Title = styled.h1`
    text-shadow: 2px 2px 2px #333
    font-size: 3em;
    color: #fff;
    text-align: center;
`;
const StyledLink = styled(Link)`
    color: #fff;
`;

const Header = (props) => {
    let style = {
        width: '80px',
        height: '70px',
        marginRight: '70px'
    }
    if (props.children === 'Exoplanet List') {
        return <StyledHeader>
            <div className='wrap'><StyledLink to='/'><img src={logo} alt='logo' style={style}/></StyledLink></div>
            <div className='wrap'><Title>{props.children}</Title></div>
            <div className='wrap'><StyledLink to='/'><Button>Login</Button></StyledLink></div>
        </StyledHeader>;
    } else if (props.children === 'Exoplanet Transit Graphs') {
        return <StyledHeader>
            <div className='wrap'><StyledLink to='/'><img src={logo} alt='logo' style={style}/></StyledLink></div>
            <div className='wrap'><Title>{props.children}</Title></div>
            <div className='wrap'><StyledLink to='/observations/5cc50b981a320ef75edeb18f'><Button>Observations</Button></StyledLink></div>
        </StyledHeader>;   
    } else if (props.children === 'Transit Observations') {
        return <StyledHeader>
            <div className='wrap'><StyledLink to='/'><img src={logo} alt='logo' style={style}/></StyledLink></div>
            <div className='wrap'><Title>{props.children}</Title></div>
            <div className='wrap'><StyledLink to='/transits/5cc50b981a320ef75edeb18f'><Button>Graphs</Button></StyledLink></div>
        </StyledHeader>;  
    } else {
        return null;
    }
}

export default Header;