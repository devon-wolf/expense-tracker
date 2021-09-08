import React from 'react';
import ExpenseChart from './ExpenseChart';
import ExpenseList, { ExpenseListProps } from './ExpenseList';
import './styles/ExpenseDisplay.css';
import Layout from '../UI/Layout';

const ExpenseDisplay = ({ expenses }: ExpenseListProps): JSX.Element => {
    return (
        <Layout className="expenseDisplay">
            <ExpenseChart />
            <ExpenseList expenses={expenses}/>
        </Layout>
    );
};

export default ExpenseDisplay;
