import React, { useState } from 'react';
import ExpenseDisplay from '../components/expenses/ExpenseDisplay';
import ExpenseForm from '../components/expenses/ExpenseForm';
import { ExpenseItemProps } from '../components/expenses/ExpenseItem';
import Layout from '../components/UI/Layout';
import { expenses } from '../data/seedExpenses';
import './styles/ExpensePage.css';

const ExpensePage = (): JSX.Element => {
    const [expenseList, setExpenseList] = useState(expenses);

    const handleExpenseSubmit = (expenseData: ExpenseItemProps) => {
        setExpenseList(() => [...expenseList, expenseData]);
    };

    return (
        <Layout className="expensePage">
            <ExpenseForm onExpenseSubmit={handleExpenseSubmit}/>
            <ExpenseDisplay expenses={expenseList}/>
        </Layout>
    );
};

export default ExpensePage;
