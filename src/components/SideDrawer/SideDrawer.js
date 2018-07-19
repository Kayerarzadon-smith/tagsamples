import React from 'react';
import css from './SideDrawer.css';

const sideDrawer = (props) => {
    return (
    <nav className={css.sideDrawer} >
        <ul>
            <li><a href='/'>Services</a></li>
            <li><a href='/'>About Us</a></li>
        </ul>
    </nav>
    );
};

export default sideDrawer;