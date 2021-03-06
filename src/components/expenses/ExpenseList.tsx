import React from 'react';
import Card from '../UI/Card';
import ExpenseItem, { ExpenseItemProps } from './ExpenseItem';

export type ExpenseListProps = {
    expenses: ExpenseItemProps[]
};

const ExpenseList = ({ expenses }: ExpenseListProps): JSX.Element => {

    return (
        <Card>
            {expenses.length
                ?   expenses.map(({ date, title, amount }) =>
                    <ExpenseItem
                        date={date}
                        title={title}
                        amount={amount}
                        key={title + date}
                    />)
                : <Card className="expenseItem"><p>Nothing to show.</p></Card>
            }
        </Card>
    );
};

export default ExpenseList;
