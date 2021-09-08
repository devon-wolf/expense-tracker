import React, { FormEvent, useState } from 'react';
import Card from '../UI/Card';
import './styles/ExpenseForm.css';


const ExpenseForm = (): JSX.Element => {
    const [dateString, setDateString] = useState<string | null>(null);
    const [title, setTitle] = useState<string | null>(null);
    const [amountString, setAmountString] = useState<string | null>(null);

    const handleExpenseForm = (e: FormEvent): void => {
        e.preventDefault();
        // create a new expense item for the new expense
        console.log(dateString, title, amountString);
        setDateString(null);
        setTitle(null);
        setAmountString(null);
    };

    return (
        <Card>
            <form 
                className="expenseForm"
                onSubmit={handleExpenseForm}
            >
                <label>
                    <span>Date</span>
                    <input
                        type="date"
                        value={dateString || ''}
                        onChange={e => setDateString(e.target.value)} 
                    />
                </label>

                <label>
                    <span>Description</span>
                    <input
                        type="text"
                        value={title || ''}
                        onChange={e => setTitle(e.target.value)}
                    />
                </label>

                <label>
                    <span>Amount</span>
                    <input
                        type="number"
                        value={amountString || ''}
                        onChange={e => setAmountString(e.target.value)}
                    />
                </label>
            
                <button>Add Expense</button>
            </form>
        </Card>
        
    );
};

export default ExpenseForm;
