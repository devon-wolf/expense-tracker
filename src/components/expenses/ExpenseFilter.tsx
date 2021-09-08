import React, { ChangeEventHandler } from 'react';

type ExpenseFilterProps = {
    year: string;
    handleYearChange: ChangeEventHandler<HTMLSelectElement>;
};

const ExpenseFilter = ({ year, handleYearChange }: ExpenseFilterProps): JSX.Element => {
    return (
        <div className="expenseFilter">
            <label>Filter by year</label>
            <select
                value={year}
                onChange={handleYearChange}
            >
                <option value="2020">2020</option>
                <option value="2021">2021</option>
            </select>
        </div>
    );
};

export default ExpenseFilter;
