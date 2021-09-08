import React, { useState } from 'react';
import ExpenseChart from './ExpenseChart';
import ExpenseList, { ExpenseListProps } from './ExpenseList';
import './styles/ExpenseDisplay.css';
import Layout from '../UI/Layout';
import ExpenseFilter from './ExpenseFilter';
import Card from '../UI/Card';

const ExpenseDisplay = ({ expenses }: ExpenseListProps): JSX.Element => {
    const [year, setYear] = useState('2021');

    console.log(year);

    return (
        <Card className="expenseCard">
            <Layout className="expenseDisplay">
                <ExpenseFilter year={year} handleYearChange={e => setYear(e.target.value)}/>
                <ExpenseChart />
                <ExpenseList expenses={expenses}/>
            </Layout>
        </Card>
        
    );
};

export default ExpenseDisplay;
