import React, { useState } from 'react';
import ExpenseChart from './ExpenseChart';
import ExpenseList from './ExpenseList';
import './styles/ExpenseDisplay.css';
import Layout from '../UI/Layout';
import ExpenseFilter from './ExpenseFilter';
import Card from '../UI/Card';
import { ExpenseItemProps } from './ExpenseItem';

type ExpenseDisplayProps = {
    expenses: ExpenseItemProps[];
}
const ExpenseDisplay = ({ expenses }: ExpenseDisplayProps): JSX.Element => {
    const [year, setYear] = useState('2021');

    console.log(year);

    return (
        <Card className="expenseCard">
            <Layout className="expenseDisplay">
                <ExpenseFilter year={year} handleYearChange={e => setYear(e.target.value)}/>
                <ExpenseChart />
                <ExpenseList selectedYear={year} expenses={expenses}/>
            </Layout>
        </Card>
        
    );
};

export default ExpenseDisplay;
