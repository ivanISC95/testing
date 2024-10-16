import './App.css'

import { Plotly } from './Librerias/Plotly/Plotly'
import { Recharts } from './Librerias/Recharts/Recharts'
import { chartJS } from './Librerias/ChartJS/chartJS'
import { PruebaCharts } from './Librerias/ChartJS/PruebaCharts'
import { Apex } from './Librerias/Apexcharts/Apex'
function App() {
  
  return (
    <>
      <div style={{ width: '1000px', height: '5rem', background: 'blue' }}>

      </div>
      <section style={{ width: '1200px', height: '500px', background: 'white' }}>
        <Recharts />
        {/* <Plotly /> */}
        {/* <PruebaCharts /> */}
        {/* <Apex /> */}
      </section>
    </>
  )
}

export default App
