import React, { FormEvent, useState } from 'react';
import Card from '../UI/Card';
import { ExpenseItemProps } from './ExpenseItem';
import './styles/ExpenseForm.css';

type ExpenseFormProps = {
    onExpenseSubmit: (expenseData: ExpenseItemProps) => void;
}

const ExpenseForm = ({ onExpenseSubmit }: ExpenseFormProps): JSX.Element => {
    const [dateString, setDateString] = useState<string>('');
    const [title, setTitle] = useState<string>('');
    const [amountString, setAmountString] = useState<string>('');

    const handleExpenseForm = (e: FormEvent): void => {
        e.preventDefault();

        const expenseData = {
            date: new Date(dateString),
            title,
            amount: Number(amountString)
        };

        onExpenseSubmit(expenseData);

        setDateString('');
        setTitle('');
        setAmountString('');
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
                        value={dateString}
                        onChange={e => setDateString(e.target.value)} 
                    />
                </label>

                <label>
                    <span>Description</span>
                    <input
                        type="text"
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                    />
                </label>

                <label>
                    <span>Amount</span>
                    <input
                        type="number"
                        min="0.01"
                        step="0.01"
                        value={amountString}
                        onChange={e => setAmountString(e.target.value)}
                    />
                </label>
            
                <button>Add Expense</button>
            </form>
        </Card>
        
    );
};

export default ExpenseForm;
