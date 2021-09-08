import React from 'react';
import Card from '../UI/Card';
import './styles/ExpenseForm.css';

const ExpenseForm = (): JSX.Element => {
    return (
        <Card>
            <form className="expenseForm">
                <label>
                    <span>Date</span>
                    <input type="date" />
                </label>

                <label>
                    <span>Description</span>
                    <input type="text"/>
                </label>

                <label>
                    <span>Amount</span>
                    <input type="number"/>
                </label>
            
                <button>Add Expense</button>
            </form>
        </Card>
        
    );
};

export default ExpenseForm;
