import React from 'react';
import Plot from 'react-plotly.js';

export const PlotlyCharts = () => {
    const datas = {
        "Telemetry": {
            "internal_temperature": {
                "value": [
                    10.175000190734863,
                    10.614285605294365,
                    9.866666793823242,
                    9.819999885559081,
                    10.433333396911621
                ],
                "timestamp": [
                    "2024-09-16 00:00:00",
                    "2024-09-17 00:30:00",
                    "2024-09-18 01:00:00",
                    "2024-09-19 01:30:00",
                    "2024-09-22 02:00:00"
                ]
            },
            "Alertas": [
                {
                    "Alert": "COMPRESSOR_FAIL",
                    "Date": "2024-09-28T02:19:01.968000"
                },
                {
                    "Alert": "TEMPERATURE_FAIL",
                    "Date": "2024-09-28T01:50:56.116000"
                },
            ]
        }
    };

    const xTemps = datas.Telemetry.internal_temperature.timestamp;
    const yTemps = datas.Telemetry.internal_temperature.value;

    const xAlertas = datas.Telemetry.Alertas.map(alert => new Date(alert.Date));
    const yAlertas = xAlertas.map((_, index) => index + 1); // Asignar valores para el eje Y

    const trace1 = {
        x: xTemps,
        y: yTemps,
        mode: 'lines+markers',
        type: 'scatter',
        name: 'Temperatura Interna',
        line: { color: 'blue' },
        marker: { size: 8 }
    };

    const trace2 = {
        x: xAlertas,
        y: yAlertas,
        mode: 'markers',
        type: 'scatter',
        name: 'Alertas',
        marker: { color: 'red', size: 10 },
        yaxis: 'y2' // Usar el segundo eje Y
    };

    const data = [trace1, trace2];

    const layout = {
        title: 'Gráfico de Temperatura y Alertas',
        xaxis: {
            title: 'Tiempo',
            type: 'date'
        },
        yaxis: {
            title: 'Temperatura (°C)',
            side: 'left'
        },
        yaxis2: {
            title: 'Alertas',
            overlaying: 'y',
            side: 'right',
            showgrid: false,
            tickvals: yAlertas,
            ticktext: datas.Telemetry.Alertas.map(alert => alert.Alert)
        }
    };

    return (
        <div>
            <Plot
                data={data}
                layout={layout}
                style={{ width: "100%", height: "100%" }}
            />
        </div>
    );
};
