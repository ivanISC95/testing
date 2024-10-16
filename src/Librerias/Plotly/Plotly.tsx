import Plot from 'react-plotly.js'
import { datas } from '../../Datas';
export const Plotly = () => {
    const data = datas.value.map((y, index) => ({
        x: datas.timestamp[index],
        y,
    }));
    return (
        <Plot
            data={[
                {
                    x: data.map(point => point.x),
                    y: data.map(point => point.y),
                    mode: 'lines+markers',
                    type: 'scatter',
                    marker: { color: '#2393F4' },
                    line: { shape: 'spline' },
                    name: 'Temperatura',
                },
            ]}
            layout={{
                title: 'Gráfico de Temperatura',
                xaxis: { title: 'Tiempo' },
                yaxis: { title: 'Temperatura' },
                margin: { t: 30, r: 30, b: 30, l: 30 },
                showlegend: true,
            }}
            style={{ width: '100%', height: '100%' }}
        />
    )
}
