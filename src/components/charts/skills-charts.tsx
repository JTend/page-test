import { useRef } from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

Chart.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

const SkillsChart = () => {
  const chartRef = useRef<any>(null);

  const tooltipTitleCallback = (tooltipItems:any) => {
    const item = tooltipItems[0];
    let label = item.chart.data.labels[item.dataIndex];
    if (Array.isArray(label) && label.length > 0) {
      return label.join(' ');
    }
    return label;
  };

  const wrapLabel = (label:any) => {
    const maxLength = 16;
    if (label.length <= maxLength) return label;

    const words = label.split(' ');
    const lines = [];
    let currentLine = '';

    words.forEach((word:any) => {
      if ((currentLine + word).length > maxLength) {
        lines.push(currentLine.trim());
        currentLine = '';
      }
      currentLine += word + ' ';
    });
    lines.push(currentLine.trim());
    return lines;
  };

  const data = {
    labels: [
      'JavaScript & Frameworks', 
      'Backend Languages', 
      'Databases', 
      'Core Web Tech', 
      'Tools & Methodologies'
    ].map(wrapLabel),
    datasets: [
      {
        label: 'Proficient',
        data: [4, 3, 5, 3, 2],
        backgroundColor: '#0077B3',
        borderColor: '#00AADD',
        borderWidth: 2
      },
      {
        label: 'Experienced',
        data: [5, 5, 5, 4, 0],
        backgroundColor: '#80DDFF',
        borderColor: '#0077B3',
        borderWidth: 2
      }
    ]
  };

  const options:any = {
    responsive: true,
    maintainAspectRatio: false,
    indexAxis: 'y',
    scales: {
      x: {
        stacked: true,
        ticks: { color: '#E6F7FF', font: { weight: 'bold' } },
        grid: { color: '#333333' }
      },
      y: {
        stacked: true,
        ticks: { color: '#E6F7FF', font: { weight: 'bold' } },
        grid: { display: false }
      }
    },
    plugins: {
      legend: {
        position: 'top',
        labels: { color: '#E6F7FF', font: { size: 14 } }
      },
      tooltip: {
        callbacks: {
          title: tooltipTitleCallback
        }
      }
    }
  };

  return (
    <div className="chart-container">
      <Bar ref={chartRef} data={data} options={options} />
    </div>
  );
};

export default SkillsChart;