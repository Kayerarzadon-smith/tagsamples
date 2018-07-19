import React from 'react';
import css from './TagLogo.css'
import logo from './logo.png';

const taglogo = (props) => (
    <div className={css.taglogo}>
        <img src={logo}/>
    </div>
);

export default taglogo;