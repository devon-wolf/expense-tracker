import React, { FormEvent, useState } from 'react';
import Card from '../UI/Card';
import { ExpenseItemProps } from './ExpenseItem';
import './styles/ExpenseForm.css';

type ExpenseFormProps = {
    onExpenseSubmit: (expenseData: ExpenseItemProps) => void;
}

const ExpenseForm = ({ onExpenseSubmit }: ExpenseFormProps): JSX.Element => {
    const [active, setActive] = useState(false);
    const [dateString, setDateString] = useState<string>('');
    const [title, setTitle] = useState<string>('');
    const [amountString, setAmountString] = useState<string>('');
    
    const toggleActive = (): void => setActive(!active); 

    const handleExpenseForm = (e: FormEvent): void => {
        e.preventDefault();

        const expenseData = {
            date: new Date(dateString),
            title,
            amount: Number(amountString)
        };

        onExpenseSubmit(expenseData);
        toggleActive();

        setDateString('');
        setTitle('');
        setAmountString('');
    };


    return (
        <Card>
            {active ?   
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
                    <button type="submit">Add Expense</button>
                    <button type="button" onClick={toggleActive}>Cancel</button>
                </form>

                :   <button onClick={toggleActive}>Add Expense</button>
            }
        </Card>
    );
};

export default ExpenseForm;
