import React from 'react';
import Chart from 'react-apexcharts';
import { dataApex } from '../../Datas';
import { iconoEjemplo } from '../../Icons/Icons';
import vector from '../../Icons/Vector.svg'
export const Apex = () => {  
  const options = {
    chart: {
      zoom: {
        enabled: true,
        type: 'x',
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
      type: 'datetime',
      labels: {
        rotate: -45
      },
    },
    dataLabels: {
      enabled: false // Desactiva las etiquetas de datos en las líneas
    },
    markers: {
      size: 0, // Sin marcadores para el gráfico lineal
    },
    stroke: {
      curve: 'straight',
    },
    tooltip: {
      enabled: true,
      shared: true,
      intersect: false,
      y: {
        formatter: function (val) {
          return val;
        },
      },
      x: {
        show: true,
      },
      marker: {
        show: true
      },
    }
  };

  // Verifica si quieres usar marcadores de imagen en un gráfico de dispersión
  const isScatter = dataApex.some(series => series.type === 'scatter'); // Ajusta según tu lógica

  if (isScatter) {
    options.markers = {
      fill: {
        type: 'image',
        opacity: 1,
        image: {
          src: [vector],
          width: 40,
          height: 40
        }
      },
      size: 6, // Tamaño de los marcadores de imagen
    };
  }

  return (
    <div>
      <Chart options={options} series={dataApex} type="line" height={350} />
    </div>
  );
}
