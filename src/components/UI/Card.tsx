import React from 'react';
import './styles/Card.css';

type CardProps = {
    children: JSX.Element | JSX.Element[];
    className?: string;
}

const Card = ({ className, children }: CardProps): JSX.Element => {
    const classes = 'card ' + className;
    return (
        <div className={classes}>
            {children}
        </div>
    );
};

export default Card;
