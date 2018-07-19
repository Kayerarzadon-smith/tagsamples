import React from 'react';
import FooterLogo from '../FooterLogo/FooterLogo';
import css from './FooterContentContainer.css';

const footercontentcontainer = (props) => (
    <div className={css.footercontentcontainer}>
        <FooterLogo />
    </div>
);

export default footercontentcontainer;