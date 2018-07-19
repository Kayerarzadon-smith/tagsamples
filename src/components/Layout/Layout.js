import React from 'react';
import css from './Layout.css';
import Footer from './Footer/Footer';
import Backdrop from './Backdrop/Backdrop';

const layout = (props) => (
    <div className={css.layout}> 
        <Backdrop />
        <Footer />
    </div>  
);

export default layout;