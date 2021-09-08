import React from 'react';
import Card from '../UI/Card';
import ExpenseItem, { ExpenseItemProps } from './ExpenseItem';

export type ExpenseListProps = {
    selectedYear: string;
    expenses: ExpenseItemProps[]
};

const ExpenseList = ({ selectedYear, expenses }: ExpenseListProps): JSX.Element => {
    return (
        <Card>
            {expenses.map(({ date, title, amount }) => {
                if (date.getFullYear().toString() === selectedYear)
                    return (
                        <ExpenseItem
                            date={date}
                            title={title}
                            amount={amount}
                            key={title + date}
                        />
                    );
            }
                
            )}
        </Card>
    );
};

export default ExpenseList;
