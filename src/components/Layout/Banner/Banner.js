import React from 'react';
import css from './Banner.css';
import TagLogo from './TagLogo/TagLogo';
import NavBar from './NavBar/NavBar';

const banner = (props) => (
    <div className={css.banner}>
        <NavBar />
        <TagLogo />
    </div>
);

export default banner;