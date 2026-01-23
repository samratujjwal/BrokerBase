import React from "react";
import { Doughnut } from "react-chartjs-2";
import {
    Chart,
    ArcElement,
    Tooltip,
    Legend,
} from 'chart.js';

Chart.register(ArcElement, Tooltip, Legend);

const DoughnutChart = ({ data }) => {


    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: "top",
            },
        },
    };

    return <Doughnut data={data} options={options} />;
};

export default DoughnutChart;