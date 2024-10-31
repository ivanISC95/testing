import React from 'react';
import Chart from 'react-apexcharts';
import { dataApex } from '../../Datas';


export const Apex = () => {  
  const options = {
    chart: {
      // type: 'line' as const,
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
      // shared: true,
      // intersect: false,
      // x: {
      //   formatter: (value:any) => {
      //     const date = new Date(value);
      //     return date.toLocaleString(); // Muestra la fecha en formato local
      //   }
      // },
      // y: {
        
      // }
      enabled: true,
        shared: true,
        intersect: false,
        y: {
          formatter: function (val:any) {
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

  return (
    <div>
      <Chart options={options} series={dataApex} type="line" height={350} />
    </div>
  );
}
