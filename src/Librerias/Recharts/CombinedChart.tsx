import Plot from 'react-plotly.js';
import vectorPNG from '../../Icons/Vector2.png';
import { datas2 } from '../../Datas';


const layout = {
  // yaxis: { title: 'Temperatura (°C)' },
  xaxis: { tickformat: '%d-%m' },
  showlegend: true,
  hovermode: 'x',
  legend: { orientation: 'h' },
  //  hoverlabel: { bgcolor: "#F8F9FA" }, 
  font: {
    family: 'Courier New, monospace',
    size: 12,
    color: '#868E96'
  },
  images: [
    {
      source: vectorPNG, // Usa la variable importada
      x: "2024-09-22 00:00:00",
      y: -4,
      xref: 'x',
      yref: 'y',
      sizex: 3 * 24 * 60 * 60 * 1000,
      sizey: 1.7,
      opacity: 1,
      layer: '',
    },
    {
      source: vectorPNG, // Usa la variable importada
      x: "2024-09-24 00:00:00",
      y: -4,
      xref: 'x',
      yref: 'y',
      sizex: 3 * 24 * 60 * 60 * 1000,
      sizey: 1.7,
      opacity: 1,
      layer: '',
    },
  ],
  shapes: [
    {
      type: 'rect',  // El tipo de la forma es un rectángulo
      x0: 0,  // Comienza en el inicio del eje X (ajusta según los datos)
      x1: 1,  // Termina al final del eje X (ajusta según los datos)
      y0: 20, // Comienza en el valor Y de 20
      y1: 25, // Termina en el valor Y de 25
      xref: 'paper',  // Usamos 'paper' para hacer que abarque toda la serie de datos
      yref: 'y',      // Usamos el sistema de referencia del eje Y
      fillcolor: 'rgba(134, 239, 172, 0.15)',  // Color del rectángulo (verde claro)
      line: {
        color: '#22C55E',  // Color del borde del rectángulo
        width: 1,      // Ancho del borde
      },
      text: 'Safe Zone', // Texto dentro del rectángulo
      font: {
        family: 'Arial, sans-serif', // Tipo de letra
        size: 14, // Tamaño de la fuente
        color: '#2D6A4F', // Color del texto (verde oscuro)
      },
      align: 'center',  // Alineación del texto horizontal
      valign: 'middle', // Alineación del texto vertical
      layer: 'below',  // Asegura que el rectángulo quede debajo de las series de datos
    },
    {
      type: 'rect',  // El tipo de la forma es un rectángulo
      x0: '2024-09-22',  // Fecha de inicio (22 de septiembre)
      x1: '2024-09-21',  // Fecha de fin (21 de septiembre)
      y0: 0,     // Comienza desde el valor más bajo posible del eje Y
      y1: 30,      // Termina en el valor más alto posible del eje Y
      xref: 'x',         // Referencia en el eje X (por fechas)
      yref: 'y',         // Referencia en el eje Y (por valores)
      fillcolor: 'rgba(0,0,0,0)',  // Fondo transparente
      line: {
        color: 'black',  // Color de la línea
        width: 2,        // Ancho de la línea
        dash: 'dot',     // Estilo punteado
      },
      text: 'Desconexion', // Texto dentro del rectángulo
      font: {
        family: 'Arial, sans-serif', // Tipo de letra
        size: 14, // Tamaño de la fuente
        color: 'black', // Color del texto
      },
      align: 'center',  // Alineación del texto horizontal
      valign: 'middle', // Alineación del texto vertical
      layer: 'above',  // Asegura que el rectángulo quede por encima de las series de datos      
    }
  ],
  plot_bgcolor: '#F8F9F',  // Color de fondo del área de trazado (gráfico)
  paper_bgcolor: '#F8F9F'
};
const telemetria: any = []

if (datas2.Telemetry.internal_temperature.avg.value) {
  telemetria.push({
    name: "Temperatura",
    type: "line",
    mode: "lines",
    line: {
      color: '#2393F4',
      width: 1,
    },
    x: datas2.Telemetry.internal_temperature.avg.timestamp,
    y: datas2.Telemetry.internal_temperature.avg.value,
    hovertemplate: '%{y}',
  })
  telemetria.push({
    name: "Alerta Alta Demanda Compresor",
    type: "scatter",
    mode: "markers",
    x: ["2024-09-22 00:00:00"],
    y: [-4],
    hovertemplate: 'Alerta Alta Demanda Compresor',
    marker: {
      size: 20,
      symbol: 'circle',
      color: 'rgba(0,0,0,0)', // Hacer el marcador invisible
    },
  },
    {
      name: "Alerta Alta Demanda Compresor",
      type: "scatter",
      mode: "markers",
      x: ["2024-09-24 00:00:00"],
      y: [-4],
      hovertemplate: 'Alerta Alta Demanda Compresor',
      marker: {
        size: 20,
        symbol: 'circle',
        color: 'rgba(0,0,0,0)', // Hacer el marcador invisible
      },
    }
  )
}


const CombinedChart = () => {
  return (
    <Plot
      data={telemetria}
      layout={layout}
      config={{ responsive: true }}
      style={{ width: '100%', height: '100%' }}
    />
  );
};

export default CombinedChart;
