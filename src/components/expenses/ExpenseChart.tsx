import React from 'react';
import Chart from '../chart/Chart';
import Card from '../UI/Card';

const ExpenseChart = (): JSX.Element => {
    const dataPoints = [
        {
            value: 1,
            maxValue: 5,
            label: 'one'
        },
        {
            value: 2,
            maxValue: 5,
            label: 'two'
        },
        {
            value: 3,
            maxValue: 5,
            label: 'three'
        },
        {
            value: 4,
            maxValue: 5,
            label: 'four'
        },
        {
            value: 5,
            maxValue: 5,
            label: 'five'
        }
    ];

    return (
        <Card>
            <Chart dataPoints={dataPoints} />
        </Card>
    );
};

export default ExpenseChart;
