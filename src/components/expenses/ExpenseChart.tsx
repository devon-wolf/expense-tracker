import React from 'react';
import Chart from '../chart/Chart';
import Card from '../UI/Card';

const ExpenseChart = (): JSX.Element => {
    const dataPoints = [
        {
            value: 1,
            maxValue: 30,
            label: 'one'
        },
        {
            value: 2,
            maxValue: 4,
            label: 'two'
        },
        {
            value: 3,
            maxValue: 4,
            label: 'three'
        },
        {
            value: 4,
            maxValue: 32,
            label: 'four'
        },
        {
            value: 5,
            maxValue: 10,
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
