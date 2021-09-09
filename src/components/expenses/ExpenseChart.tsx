import React from 'react';
import Chart from '../chart/Chart';
import { ChartBarProps } from '../chart/ChartBar';
import Card from '../UI/Card';

type ExpenseChartProps = {
    chartData: ChartBarProps[];
}

const ExpenseChart = ({ chartData }: ExpenseChartProps): JSX.Element => {

    return (
        <Card>
            <Chart dataPoints={chartData} />
        </Card>
    );
};

export default ExpenseChart;
