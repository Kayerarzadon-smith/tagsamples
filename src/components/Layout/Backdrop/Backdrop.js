import React from 'react';
import css from './Backdrop.css'
import NotreDame from './NotreDame.jpg';
import FormBox from '../FormBox/FormBox';
import FormHeader from '../FormHeader/FormHeader';

const backdrop = (props) => (
    <div className={css.backdrop}>
        <FormHeader/>
        <FormBox/> 
        <main>
            {props.childrem}
        </main>   
    </div>    
);

export default backdrop;