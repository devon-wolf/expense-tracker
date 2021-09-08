import React from 'react';
import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';

export type ExpenseItemProps = {
    date: Date;
    title: string;
    amount: number;
}

const ExpenseItem = ({ date, title, amount }: ExpenseItemProps): JSX.Element => {
    return (
        <Card>
            <ExpenseDate date={date}/>
            <h3>{title}</h3>
            <p>${amount.toFixed(2)}</p>
        </Card>
    );
};

export default ExpenseItem;
