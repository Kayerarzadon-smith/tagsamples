import React from 'react';
import css from './SideDrawerBackdrop.css';

const sidedrawerBackdrop = (props) => (
    <div className={css.sidedrawerBackdrop} onClick={props.click}/>
);

export default sidedrawerBackdrop;