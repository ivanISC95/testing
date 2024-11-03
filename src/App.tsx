import './App.css'
import '@mantine/charts/styles.css';
import { MantineGraph } from './Librerias/Mantine/MantineGraph'
import { Apex } from './Librerias/Apexcharts/Apex';
import CombinedChart from './Librerias/Recharts/CombinedChart';
function App() {
  
  return (
    <>
      <div style={{ width: '1000px', height: '5rem', background: 'blue' }}>

      </div>
      <section style={{ width: '100%', height: '500px', background: 'blue' }}>
        {/* <Recharts /> */}
        {/* <RechartsZoom /> */}
        {/* <RechartBrush /> */}
        {/* <Plotly /> */}
        {/* <PruebaCharts /> */}        
        {/* <MantineGraph /> */}
        {/* <Apex /> */}
        <CombinedChart />
      </section>
    </>
  )
}

export default App
