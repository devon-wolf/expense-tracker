import React, { useState } from 'react';
import ExpenseChart from './ExpenseChart';
import ExpenseList, { ExpenseListProps } from './ExpenseList';
import './styles/ExpenseDisplay.css';
import Layout from '../UI/Layout';

const ExpenseDisplay = ({ expenses }: ExpenseListProps): JSX.Element => {
    const [year, setYear] = useState('2021');

    console.log(year);

    return (
        <>
            <div>
                <label>Filter by year</label>
                <select
                    value={year}
                    onChange={e => setYear(e.target.value)}
                >
                    <option value="2020">2020</option>
                    <option value="2021">2021</option>
                </select>
            </div>
            <Layout className="expenseDisplay">
                <ExpenseChart />
                <ExpenseList expenses={expenses}/>
            </Layout>
        </>
    );
};

export default ExpenseDisplay;
