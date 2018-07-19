import React from 'react';
import css from './Menu.css';
import MenuItem from './MenuItem/MenuItem';

const menu = (props) => (
    <ul className={css.menu}>
        <MenuItem link ='/' active>Services</MenuItem>
        <MenuItem link ='/'>Company</MenuItem>
    </ul>
);

export default menu;