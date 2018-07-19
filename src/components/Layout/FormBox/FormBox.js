import React from 'react';
import css from './FormBox.css';
import ContactData from '../ContactData/ContactData';

const formbox = (props) => (
    <div className={css.formbox}>
        <ContactData />
    </div>
);

export default formbox;