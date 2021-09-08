import React from 'react';
import Card from '../UI/Card';

const ExpenseDate = ({ date }: { date: Date }): JSX.Element => {
    const month = date.toLocaleString('en-US', { month: 'long' });
    const day = date.toLocaleString('en-US', { day: '2-digit' });
    const year = date.getFullYear();
  
    return (
        <Card className="expenseDate">
            <div className="expenseMonth">{month}</div>
            <div className="expenseYear">{year}</div>
            <div className="expenseDay">{day}</div>
        </Card>
    );
};

export default ExpenseDate;
