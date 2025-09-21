import { Doughnut } from 'react-chartjs-2';
import {
  Chart,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';

Chart.register(ArcElement, Tooltip, Legend)

const DevFocusChart = () => {

  const data = {
    labels: ['Frontend (React, JS, HTML, CSS)', 'Backend (Node, C#, PHP, Java)', 'Databases (MySQL, MSSQL, PGSQL)'],
    datasets: [
      {
        label: 'Development Focus',
        data: [45, 30, 25],
        backgroundColor: ['#0AF', '#0FA', '#FA0'],
        borderColor: '#0D1117',
        borderWidth: 4,
        hoverOffset: 4,
      },
    ],
  };

  const options:any = {
    responsive: true,
    maintainAspectRatio: false,
    indexAxis: 'y',
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          color: '#E6F7FF',
          font: {
            size: 14,
            weight: '500',
          },
          padding: 20,
        },
      },
      tooltip: {
        callbacks: {
          title: (tooltipItems:any) => {
            const item = tooltipItems[0];
            return item.label;
          },
        },
      },
    },
  };

  return (
    <div className="chart-container h-[400px] md:h-[450px]">
      <Doughnut data={data} options={options} />
    </div>
  );
};

export default DevFocusChart;