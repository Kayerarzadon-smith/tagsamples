import React from 'react';
import css from './Footer.css';
import FooterLogo from './FooterLogo/FooterLogo';
import FooterContentContainer from './FooterContentContainer/FooterContentContainer';

const footer = (props) => (
    <div className={css.footer}>
        <FooterContentContainer />
    </div>
);

export default footer;