import React from 'react';
import Card from '../UI/Card';
import ExpenseItem, { ExpenseItemProps } from './ExpenseItem';

export type ExpenseListProps = {
    selectedYear: string;
    expenses: ExpenseItemProps[]
};

const ExpenseList = ({ selectedYear, expenses }: ExpenseListProps): JSX.Element => {
    const filteredExpenses = expenses.filter(({ date }) => date.getFullYear().toString() === selectedYear);

    return (
        <Card>
            {filteredExpenses.length
                ?   filteredExpenses.map(({ date, title, amount }) =>
                    <ExpenseItem
                        date={date}
                        title={title}
                        amount={amount}
                        key={title + date}
                    />)
                : <Card><p>Nothing to show.</p></Card>
            }
        </Card>
    );
};

export default ExpenseList;
