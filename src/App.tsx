import './App.css'

import { Plotly } from './Librerias/Plotly/Plotly'
import { Recharts } from './Librerias/Recharts/Recharts'
import { chartJS } from './Librerias/ChartJS/chartJS'
import { PruebaCharts } from './Librerias/ChartJS/PruebaCharts'
import { Apex } from './Librerias/Apexcharts/Apex'
import { RechartsZoom } from './Librerias/Recharts/RechartsZoom'
import RechartBrush from './Librerias/Recharts/RechartBrush'
import { VictoryChart2 } from './Librerias/VictoryChart/VictoryChart2'
import { D3 } from './Librerias/D3/D3'
import { VixChart } from './Librerias/Vix/VixChart'
import { PlotlyCharts } from './Librerias/PlotlyCharts/PlotlyCharts'
function App() {
  
  return (
    <>
      <div style={{ width: '1000px', height: '5rem', background: 'blue' }}>

      </div>
      <section style={{ width: '1200px', height: '500px', background: 'white' }}>
        {/* <Recharts /> */}
        {/* <RechartsZoom /> */}
        {/* <RechartBrush /> */}
        {/* <Plotly /> */}
        {/* <PruebaCharts /> */}
        {/* <Apex /> */}
        {/* <VictoryChart2 /> */}
        {/* <D3 /> */}
        {/* <VixChart /> */}
        <PlotlyCharts />
      </section>
    </>
  )
}

export default App
