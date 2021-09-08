import React from 'react';
import ExpenseDisplay from '../components/expenses/ExpenseDisplay';
import ExpenseForm from '../components/expenses/ExpenseForm';
import Layout from '../components/UI/Layout';
import './styles/ExpensePage.css';

const ExpensePage = (): JSX.Element => {
    return (
        <Layout className="expensePage">
            <ExpenseForm />
            <ExpenseDisplay />
        </Layout>
    );
};

export default ExpensePage;
