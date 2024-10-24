import './App.css'
import '@mantine/charts/styles.css';
import { MantineGraph } from './Librerias/Mantine/MantineGraph'
function App() {
  
  return (
    <>
      <div style={{ width: '1000px', height: '5rem', background: 'blue' }}>

      </div>
      <section style={{ width: '1200px', height: '500px', background: '' }}>
        {/* <Recharts /> */}
        {/* <RechartsZoom /> */}
        {/* <Plotly /> */}
        {/* <PruebaCharts /> */}
        {/* <Apex /> */}
        <MantineGraph />
      </section>
    </>
  )
}

export default App
