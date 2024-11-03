import React from 'react';
import Plot from 'react-plotly.js';
import vectorPNG from '../../Icons/Vector.svg';

const dataApex = [
  {
    name: "Temperatura",
    type: "scatter",
    mode: "lines+markers",
    x: [
      "2024-10-30 16:20:48 GMT", "2024-10-30 17:17:32 GMT", "2024-10-30 22:05:40 GMT",
      "2024-10-30 23:05:42 GMT", "2024-10-31 00:06:40 GMT", "2024-10-31 01:06:42 GMT",
      "2024-10-31 01:20:27 GMT", "2024-10-31 02:20:12 GMT", "2024-10-31 03:20:13 GMT",
      "2024-10-31 04:20:17 GMT", "2024-10-31 05:20:19 GMT", "2024-10-31 05:36:51 GMT",
      "2024-10-31 06:20:22 GMT", "2024-10-31 07:20:25 GMT", "2024-10-31 08:20:28 GMT",
      "2024-10-31 09:20:31 GMT", "2024-10-31 10:20:34 GMT", "2024-10-31 11:20:36 GMT",
      "2024-10-31 12:06:26 GMT", "2024-10-31 12:20:37 GMT", "2024-10-31 13:20:39 GMT",
      "2024-10-31 14:20:42 GMT", "2024-10-31 15:20:44 GMT", "2024-10-31 16:20:48 GMT",
      "2024-10-31 17:20:50 GMT", "2024-10-31 18:20:53 GMT", "2024-10-31 18:36:04 GMT",
      "2024-10-31 19:20:56 GMT", "2024-10-31 20:20:58 GMT", "2024-10-31 21:21:01 GMT",
      "2024-10-31 22:21:04 GMT",
    ],
    y: [
      6.3, 3.7, 4, 3.3, 4.7, 3, 3.7, 3.3, 8, 9,
      11.7, 13, 8.3, 8, 9, 8.3, 8.7, 8.7, 12.3, 9,
      5, 3.3, 4, 4.7, 7.7, 13, 12, 9.3, 9.3, 9, 8,
    ],
    marker: { color: 'blue', size: 8 }, // Marcador visible
  },
  {
    name: "Alerta Alta Demanda Compresor",
    type: "scatter",
    mode: "markers",
    x: ["2024-10-31 16:20:48 GMT"],
    y: [10],
    marker: {
      size: 10,
      color: 'rgba(255, 0, 0, 0)', // Hacer el marcador invisible
    },
  },
];

const layout = {
  title: 'Gráfico Combinado de Temperatura y Alertas',
  xaxis: { title: 'Fecha y Hora' },
  yaxis: { title: 'Temperatura (°C)' },
  showlegend: true,
  images: [
    {
      source: vectorPNG, // Usa la variable importada
      x: "2024-10-31 16:20:48 GMT",
      y: 10,
      xref: 'x',
      yref: 'y',
      sizex: 1.5, // Ajusta el tamaño de la imagen según sea necesario
      sizey: 1.5,
      opacity: 10,
      layer: '',
    },
  ],
};

const CombinedChart = () => {
  return (
    <Plot
      data={dataApex}
      layout={layout}
      config={{ responsive: true }}
    />
  );
};

export default CombinedChart;
