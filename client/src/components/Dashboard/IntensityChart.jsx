import React from 'react';
import { Bar } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { Heading, useColorMode } from '@chakra-ui/react';

const IntensityChart = ({ data }) => {
  const { colorMode } = useColorMode();
  const intensityData = data.map(item => item.intensity);
  const years = data.map(item => item.start_year);

  const getColor = (value) => {
    const colors = [
      '#A9A9A9', 
      '#F2B93B', 
      '#FF8000', 
      '#FF453A', 
    ];
    const threshold = Math.max(...intensityData) / 4;
    if (value < threshold) {
      return colors[0];
    } else if (value < threshold * 2) {
      return colors[1];
    } else if (value < threshold * 3) {
      return colors[2];
    } else {
      return colors[3];
    }
  };

  const chartData = {
    labels: years,
    datasets: [
      {
        label: 'Intensity',
        backgroundColor: intensityData.map((value) => getColor(value)),
        borderColor: colorMode === 'light' ? 'rgba(0,0,0,1)' : 'rgba(255,255,255,1)', 
        borderWidth: 1,
        data: intensityData,
      },
    ],
  };

  const chartOptions = {
    layout: {
      padding: {
        top: 20,
        bottom: 20,
        left: 20,
        right: 20,
      },
    },
    plugins: {
      tooltip: {
        enabled: true,
        backgroundColor: colorMode === 'light' ? 'rgba(0,0,0,0.8)' : 'rgba(255,255,255,0.8)', 
        titleColor: colorMode === 'light' ? 'white' : 'black', 
        bodyColor: colorMode === 'light' ? 'white' : 'black', 
        borderColor: colorMode === 'light' ? 'white' : 'black',
        borderWidth: 1,
        cornerRadius: 5,
        displayColors: false,
      },
      legend: {
        display: false,
      },
      datalabels: {
        anchor: 'end',
        align: 'start',
        offset: -20,
        font: {
          size: 14,
          weight: 'bold',
        },
        formatter: (value) => value + '%',
        shadowBlur: 10,
        shadowColor: colorMode === 'light' ? 'black' : 'white',
        color: colorMode === 'light' ? 'black' : 'white',
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          font: {
            family: 'Roboto',
            size: 14,
            weight: 'bold',
            color: colorMode === 'light' ? 'black' : 'white', 
          },
        },
      },
      y: {
        grid: {
          display: false,
        },
        ticks: {
          font: {
            family: 'Roboto',
            size: 14,
            weight: 'bold',
            color: colorMode === 'light' ? 'black' : 'white', 
          },
          callback: (value) => value + '%',
        },
      },
    },
    animation: {
      duration: 4000,
      easing: 'easeInOutQuart',
      mode: 'progressive',
    },
  };

  return (
    <div style={{ margin: '50px', padding: '10px', fontFamily: 'Arial, sans-serif', borderRadius: '8px', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)', background: colorMode === 'light' ? '#F5F5F5' : '#2D3748' }}> 
      <Heading as="h2" mb={4} color={colorMode === 'light' ? 'black' : 'white'}>Intensity Chart</Heading> 
      <Bar data={chartData} options={chartOptions} plugins={[ChartDataLabels]} />
    </div>
  );
};

export default IntensityChart;
