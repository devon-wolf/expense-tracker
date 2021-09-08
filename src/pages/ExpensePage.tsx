import React from 'react';
import ExpenseDisplay from '../components/expenses/ExpenseDisplay';
import ExpenseForm from '../components/expenses/ExpenseForm';

const ExpensePage = (): JSX.Element => {
    return (
        <div>
            <ExpenseForm />
            <ExpenseDisplay />
        </div>
    );
};

export default ExpensePage;
