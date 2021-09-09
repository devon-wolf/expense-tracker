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
    const filteredExpenses = expenses.filter(({ date }) => date.getFullYear().toString() === year);

    const monthLabels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const chartData = monthLabels.map(label => {
        return {
            label,
            value: 0,
            maxValue: 0
        };
    });
    
    let max = 0;

    filteredExpenses.forEach(({ date, amount }) => {
        const month = date.getMonth();
        chartData[month].value += amount;
        if (max < amount) max = amount;
    });

    chartData.forEach(item => {
        item.maxValue = max;
    });

    return (
        <Card className="expenseCard">
            <Layout className="expenseDisplay">
                <ExpenseFilter year={year} handleYearChange={e => setYear(e.target.value)}/>
                <ExpenseChart chartData={chartData} />
                <ExpenseList expenses={filteredExpenses} />
            </Layout>
        </Card>
        
    );
};

export default ExpenseDisplay;
