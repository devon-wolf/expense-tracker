import React from 'react';
import './styles/Card.css';

export type WrapperProps = {
    children: JSX.Element | JSX.Element[];
    className?: string;
}

const Card = ({ className, children }: WrapperProps): JSX.Element => {
    const classes = 'card ' + className;
    return (
        <div className={classes}>
            {children}
        </div>
    );
};

export default Card;
