import React from 'react';
import Button from './Button';

const Header = (props) => {
    if (props.children === 'exoplanet list') {
        return <header><a href='/'>Planet B</a><h1>{props.children}</h1></header>;
    } else if (props.children === 'exoplanet graphs') {
        return <header><a href='/'>Planet B</a><h1>{props.children}</h1><Button>Transit Observations</Button></header>;    
    } else if (props.children === 'transit observations') {
        return <header><a href='/'>Planet B</a><h1>{props.children}</h1><Button>Exoplanet Graphs</Button></header>;
    }
}

export default Header;
