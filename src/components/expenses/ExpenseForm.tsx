import React from 'react';

const ExpenseForm = (): JSX.Element => {
    return (
        <form className="expenseForm">
            <label>
                Date
                <input type="date" />
            </label>

            <label>
                Description
                <input type="text"/>
            </label>

            <label>
                Amount
                <input type="number"/>
            </label>
            
            <button>Add Expense</button>
        </form>
    );
};

export default ExpenseForm;
