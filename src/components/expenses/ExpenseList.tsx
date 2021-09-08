import React from 'react';
import Card from '../UI/Card';
import ExpenseItem, { ExpenseItemProps } from './ExpenseItem';

type ExpenseListProps = {
    expenses: ExpenseItemProps[]
};

const ExpenseList = ({ expenses }: ExpenseListProps): JSX.Element => {
    return (
        <Card>
            {expenses.map(({ date, title, amount }) =>
                <ExpenseItem
                    date={date}
                    title={title}
                    amount={amount}
                    key={title + date}
                />
            )}
        </Card>
    );
};

export default ExpenseList;
