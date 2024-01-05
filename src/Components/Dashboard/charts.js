import React from 'react';
import { AgChartsReact } from 'ag-charts-react';
import { generateBarChartData, generatePieChartData } from '../../utils/miscellneous';

export default function Charts({ data }) {


    const barChartData = generateBarChartData(data);
    const pieChartData = generatePieChartData(data);


    const barChartOptions = {
        title: {
            text: 'Number of Missions by Company',
        },
        data: barChartData,
        series: [
            {
                type: 'bar',
                xKey: 'company',
                yKey: 'missionCount',
            },
        ],
        legend: {
            position: 'bottom',
        },
    };

    const pieChartOptions = {
        title: {
            text: 'Success Rate by Company',
        },
        data: pieChartData,
        series: [
            {
                type: 'pie',
                data: pieChartData,
                angleKey: 'successCount',
                labelKey: 'company',
                legendItemKey: 'company'
            },
        ],
        legend: {
            position: 'right',
        },
    };


    return (
        <div className='mt-2'>
            <div>
                <h2>Bar Chart: Number of Missions by Company</h2>
                <AgChartsReact options={barChartOptions} />
            </div>
            <div>
                <h2>Pie Chart: Success Rate by Company</h2>
                <AgChartsReact options={pieChartOptions} />
            </div>

        </div>
    )
}


