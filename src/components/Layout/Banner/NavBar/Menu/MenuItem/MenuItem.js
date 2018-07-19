import React from 'react';
import css from './MenuItem.css';

const menuitem = (props) => (
    <li className={css.menuitem}>
        <a href={props.link}
        className={props.active ? css.active : null}>{props.children}</a>
    </li>    
);

export default menuitem;