import React from 'react';
import css from './Toolbar.css';
import Logo from '../Layout/Banner/TagLogo/TagLogo';
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';

const toolbar = props => (
    <header className={css.toolbar} >
        <nav className={css.toolbar_nav}>
            <div className={css.toolbar_logo}><a href="/"><Logo/></a></div>
            <div className={css.spacer} />
            <div className={css.toolbar_toggle_button}>
                <DrawerToggleButton click={props.drawerClickHandler} />
            </div>
            <div className={css.toolbar_nav_items}>
                <ul>
                    <li><a href="/">Products</a></li>
                    <li><a href="/">Users</a></li>
                </ul>    
            </div>
        </nav>
    </header>        
);

export default toolbar;