import React from 'react';
import css from './DrawerToggleButton.css';

const drawerToggleButton = (props) => (
    <button className={css.toggle_button}  onClick={props.click}>
        <div className={css.toggle_button_line} />
        <div className={css.toggle_button_line} />
        <div className={css.toggle_button_line} />
    </button>
);

export default drawerToggleButton;