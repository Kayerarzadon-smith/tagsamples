import React from 'react';
import css from './FooterLogo.css'
import logo from './logo.png';

const footerlogo = (props) => (
    <div className={css.footerlogo}>
        <p>  
        <img src={logo}/>
            <br/>
            <br/>
            16652 133rd st. SE 
            Snohomish, WA 98290 
            <br/>
            (562) 650-2195
        </p>

    </div>
);

export default footerlogo;