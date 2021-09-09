import React from 'react';

export type ChartBarProps = {
    value: number;
    maxValue: number;
    label: string;
};

const ChartBar = ({ value, maxValue, label }: ChartBarProps): JSX.Element => {
    let barFillHeight = '0%';
    if (maxValue > 0) barFillHeight = Math.round((value / maxValue) * 100) + '%';
    return (
        <div className="chartBar">
            <div className="chartBarInner">
                <div className="chartBarFill" style={{ height: barFillHeight }}></div>
            </div>
            <label className="chartBarLabel">{label}</label>
        </div>
    );
};

export default ChartBar;
