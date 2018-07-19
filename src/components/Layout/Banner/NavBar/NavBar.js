import React from 'react';
import css from './NavBar.css';
import Menu from './Menu/Menu';

const navbar = (props) => (
    <div className={css.navbar}>
        <Menu />
    </div>    
);

export default navbar;