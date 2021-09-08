import React from 'react';
import Card from '../UI/Card';
import ExpenseChart from './ExpenseChart';
import ExpenseList from './ExpenseList';
import { expenses } from '../../data/seedExpenses';

const ExpenseDisplay = (): JSX.Element => {
    return (
        <Card>
            <ExpenseChart />
            <ExpenseList expenses={expenses}/>
        </Card>
    );
};

export default ExpenseDisplay;
