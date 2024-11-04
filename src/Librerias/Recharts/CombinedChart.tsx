import Plot from 'react-plotly.js';
import vectorPNG from '../../Icons/Vector2.png';
import { datas2, datas3 } from '../../Datas';

const dataApex = [
  {
    name: "Temperatura",
    type: "line",
    mode: "lines",   
    line: {
      color: 'rgba(255, 0, 0, 1)', 
      width: 1,
    }, 
    x: [
      "2024-10-30 16:20:48", "2024-10-30 17:17:32", "2024-10-30 22:05:40",
      "2024-10-30 23:05:42", "2024-10-31 00:06:40", "2024-10-31 01:06:42",
      "2024-10-31 01:20:27", "2024-10-31 02:20:12", "2024-10-31 03:20:13",
      "2024-10-31 04:20:17", "2024-10-31 05:20:19", "2024-10-31 05:36:51",
      "2024-10-31 06:20:22", "2024-10-31 07:20:25", "2024-10-31 08:20:28",
      "2024-10-31 09:20:31", "2024-10-31 10:20:34", "2024-10-31 11:20:36",
      "2024-10-31 12:06:26", "2024-10-31 12:20:37", "2024-10-31 13:20:39",
      "2024-10-31 14:20:42", "2024-10-31 15:20:44", "2024-10-31 16:20:48",
      "2024-10-31 17:20:50", "2024-10-31 18:20:53", "2024-10-31 18:36:04",
      "2024-10-31 19:20:56", "2024-10-31 20:20:58", "2024-10-31 21:21:01",
      "2024-10-31 22:21:04",
    ],
    y: [
      6.3, 3.7, 4, 3.3, 4.7, -3, 3.7, 3.3, 8, 9,
      11.7, 13, 8.3, 8, 9, 8.3, 8.7, 8.7, 12.3, 9,
      5, 3.3, 4, 4.7, 7.7, 13, 12, 9.3, 9.3, 9, 8,
    ],    
  },
  {
    name: "Alerta Alta Demanda Compresor",
    type: "scatter",
    mode: "markers",
    x: ["2024-10-31 16:20:48"],
    y: [-4],
    marker: {
      size: 20,
      symbol : 'circle',
      color: 'rgba(0,0,0,0)', // Hacer el marcador invisible
    },
  },
];

const layout = {  
  yaxis: { title: 'Temperatura (°C)' },
  xaxis : { tickformat : ''},
  showlegend: true,
 legend : { orientation:'h'},
  images: [
    {
      source: vectorPNG, // Usa la variable importada
      x: "2024-09-19 07:30:00",
      y: 20,
      xref: 'x',
      yref: 'y',
      sizex: 3*24*60*60*1000, 
      sizey: 1.2,
      opacity: 1,
      layer: '',
    },
  ],
};
const telemetria :any = []

if(datas2.Telemetry.internal_temperature.avg.value){
  telemetria.push({
    name: "Temperatura",
    type: "line",
    mode: "lines",   
    line: {
      color: 'rgba(255, 0, 0, 1)', 
      width: 1,
    }, 
    x: datas2.Telemetry.internal_temperature.avg.timestamp,
    y: datas2.Telemetry.internal_temperature.avg.value,    
  })
}
if(datas2.Telemetry.voltage_consumption.avg.value){
  telemetria.push({
    name: "Voltaje",
    type: "line",
    mode: "lines",   
    line: {
      color: 'yellow', 
      width: 1,
    }, 
    x: datas2.Telemetry.voltage_consumption.avg.timestamp,
    y: datas2.Telemetry.voltage_consumption.avg.value,    
  })
}
console.log(telemetria)
const CombinedChart = () => {
  return (
    <Plot
      data={telemetria}
      layout={layout}
      config={{ responsive: true }}
      style={{width:'100%',height:'100%'}}
    />
  );
};

export default CombinedChart;
