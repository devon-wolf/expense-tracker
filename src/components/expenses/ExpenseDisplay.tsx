import React from 'react';
import ExpenseChart from './ExpenseChart';
import ExpenseList from './ExpenseList';
import { expenses } from '../../data/seedExpenses';
import './styles/ExpenseDisplay.css';
import Layout from '../UI/Layout';

const ExpenseDisplay = (): JSX.Element => {
    return (
        <Layout className="expenseDisplay">
            <ExpenseChart />
            <ExpenseList expenses={expenses}/>
        </Layout>
    );
};

export default ExpenseDisplay;
