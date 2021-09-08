import React from 'react';
import ExpenseDisplay from '../components/expenses/ExpenseDisplay';
import ExpenseForm from '../components/expenses/ExpenseForm';
import { ExpenseItemProps } from '../components/expenses/ExpenseItem';
import Layout from '../components/UI/Layout';
import './styles/ExpensePage.css';

const ExpensePage = (): JSX.Element => {
    const handleExpenseSubmit = (expenseData: ExpenseItemProps) => {
        console.log(expenseData);
    };

    return (
        <Layout className="expensePage">
            <ExpenseForm onExpenseSubmit={handleExpenseSubmit}/>
            <ExpenseDisplay />
        </Layout>
    );
};

export default ExpensePage;
