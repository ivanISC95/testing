import React from 'react';
import Chart from 'react-apexcharts';
import { datas } from '../../Datas';

const generateVoltageData = (length) => {
  return Array.from({ length }, () => Math.floor(Math.random() * (150 - 120 + 1)) + 120);
};

const voltageData = generateVoltageData(datas.value.length);

const orderServiceData = [{
  x: new Date("2024-10-08").getTime(), // Convertir la fecha a timestamp
  y: 1,
  description: 'Orden de Servicio: 1' 
}];

export const Apex = () => {
  const series = [
    {
      name: 'Temperatura',
      type: 'line',
      data: datas.value
    },
    {
      name: 'Voltaje',
      type: 'line',
      data: voltageData
    },
    {
      name: 'Orden de Servicio',
      type: 'scatter',
      data: orderServiceData,
      markers: {
        size: 10, // Aumenta el tamaño del ícono del scatter
        colors: ['#FF4560'], // Puedes cambiar el color si lo deseas
        shape: 'circle' // Forma del marcador
      }
    }
  ];

  const options = {
    chart: {
      type: 'line' as const,
      zoom: {
        enabled: true,
        type: 'x' as const,
        autoScaleYaxis: true
      },
      toolbar: {
        show: true,
        tools: {
          reset: true
        }
      }
    },
    title: {
      text: 'Gráfico de Temperatura, Voltaje y Orden de Servicio'
    },
    xaxis: {
      type: 'datetime' as const,
      categories: datas.timestamp,
      labels: {
        rotate: -45
      },
    },
    dataLabels: {
      enabled: false // Desactiva las etiquetas de datos en las líneas
    },
    stroke: {
      curve: 'smooth' as const
    },
    tooltip: {
      shared: true,
      intersect: false,
      x: {
        formatter: (value) => {
          const date = new Date(value);
          return date.toLocaleString(); // Muestra la fecha en formato local
        }
      },
      y: {
        formatter: (value, { seriesIndex, dataPointIndex }) => {
          if (seriesIndex === 2) { // Si es la serie de Orden de Servicio
            return orderServiceData[dataPointIndex].description; // Muestra la descripción
          }
          return `Valor: ${value}`; // Formato para los valores de temperatura y voltaje
        }
      }
    }
  };

  return (
    <div>
      <Chart options={options} series={series} type="line" height={350} />
    </div>
  );
}
