import React from 'react';
import { WrapperProps } from './Card';
import './styles/Layout.css';

const Layout = ({ className, children }: WrapperProps): JSX.Element => {
    const classes = 'layout ' + className;
    return (
        <div className={classes}>
            {children}
        </div>
    );
};

export default Layout;
