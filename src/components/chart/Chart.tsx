import React from'react';
import ChartBar, { ChartBarProps } from './ChartBar';
import './styles/Chart.css';

type ChartProps = {
    dataPoints: ChartBarProps[];
}
const Chart = ({ dataPoints }: ChartProps): JSX.Element => {
    return (
        <div className="chart">
            {dataPoints.map(({ value, maxValue, label }) => 
                <ChartBar key={label + value} value={value} maxValue={maxValue} label={label} />
            )}
        </div>
    );
};

export default Chart;
