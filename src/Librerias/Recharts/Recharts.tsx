import React, { useState } from 'react';
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    CartesianGrid,
    ReferenceArea,
    ResponsiveContainer,
} from 'recharts';

// Datos de ejemplo
const series = [
    {
        name: 'Temperatura',
        data: [
            { date: '2024/10/09', value: Math.random() * 10 + 20 },
            { date: '2024/10/10', value: Math.random() * 10 + 20 },
            { date: '2024/10/11', value: Math.random() * 10 + 20 },
            { date: '2024/10/12', value: Math.random() * 10 + 20 },
            { date: '2024/10/13', value: Math.random() * 10 + 20 },
            { date: '2024/10/14', value: Math.random() * 10 + 20 },
            { date: '2024/10/15', value: Math.random() * 10 + 20 },
            { date: '2024/10/16', value: Math.random() * 10 + 20 },
            { date: '2024/10/17', value: Math.random() * 10 + 20 },
            { date: '2024/10/18', value: Math.random() * 10 + 20 },
            { date: '2024/10/19', value: Math.random() * 10 + 20 },
            { date: '2024/10/20', value: Math.random() * 10 + 20 },
        ],
    },
    {
        name: 'Voltaje',
        data: [
            { date: '2024/10/10', value: Math.random() * 5 + 10 },
            { date: '2024/10/11', value: Math.random() * 5 + 10 },
            { date: '2024/10/12', value: Math.random() * 5 + 10 },
            { date: '2024/10/13', value: Math.random() * 5 + 10 },
            { date: '2024/10/14', value: Math.random() * 5 + 10 },
            { date: '2024/10/20', value: Math.random() * 5 + 10 },
            { date: '2024/10/18', value: Math.random() * 5 + 10 },
            { date: '2024/10/19', value: Math.random() * 5 + 10 },
            { date: '2024/10/20', value: Math.random() * 5 + 10 },
        ],
    },
    {
        name: 'Compresor',
        data: [
            { date: '2024/10/18', value: Math.random() * 15 + 30 },
            { date: '2024/10/19', value: Math.random() * 15 + 30 },
            { date: '2024/10/20', value: Math.random() * 15 + 30 },
            { date: '2024/10/21', value: Math.random() * 15 + 30 },
            { date: '2024/10/23', value: Math.random() * 15 + 30 },
            { date: '2024/10/25', value: Math.random() * 15 + 30 },
        ],
    },
];

// Función para transformar los datos
const transformData = (series) => {
    const dataMap = {};

    series.forEach((serie) => {
        serie.data.forEach((point) => {
            const { date, value } = point;

            if (!dataMap[date]) {
                dataMap[date] = { date }; // Inicializa el objeto con la fecha
            }

            dataMap[date][serie.name] = value; // Agrega el valor de la serie
        });
    });

    return Object.values(dataMap); // Convierte el mapa en un array
};

const chartData = transformData(series);

export const Recharts = () => {
    const [state, setState] = useState({
        left: 'dataMin',
        right: 'dataMax',
        refAreaLeft: '',
        refAreaRight: '',
        bottom: 'dataMin',
        top: 'dataMax',
    });

    const zoom = () => {
        const { refAreaLeft, refAreaRight } = state;

        if (refAreaLeft === refAreaRight || refAreaRight === '') {
            setState({ ...state, refAreaLeft: '', refAreaRight: '' });
            return;
        }

        const newLeft = refAreaLeft;
        const newRight = refAreaRight;

        const newBottom = Math.min(
            ...chartData
                .filter(item => item.date >= newLeft && item.date <= newRight)
                .map(item => Math.min(item.Temperatura || Infinity, item.Voltaje || Infinity, item.Compresor || Infinity))
        );

        const newTop = Math.max(
            ...chartData
                .filter(item => item.date >= newLeft && item.date <= newRight)
                .map(item => Math.max(item.Temperatura || -Infinity, item.Voltaje || -Infinity, item.Compresor || -Infinity))
        );

        setState({
            left: newLeft,
            right: newRight,
            bottom: newBottom,
            top: newTop,
            refAreaLeft: '',
            refAreaRight: '',
        });
    };

    const zoomOut = () => {
        setState({
            left: 'dataMin',
            right: 'dataMax',
            bottom: 'dataMin',
            top: 'dataMax',
            refAreaLeft: '',
            refAreaRight: '',
        });
    };

    const { left, right, refAreaLeft, refAreaRight, bottom, top } = state;

    return (
        <div className="highlight-bar-charts" style={{ userSelect: 'none', width: '100%' }}>
            <button type="button" className="btn update" onClick={zoomOut}>
                Zoom Out
            </button>

            <ResponsiveContainer width="100%" height={400}>
                <LineChart
                    data={chartData}
                    onMouseDown={(e) => setState({ ...state, refAreaLeft: e.activeLabel })}
                    onMouseMove={(e) => state.refAreaLeft && setState({ ...state, refAreaRight: e.activeLabel })}
                    onMouseUp={zoom}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" domain={[left, right]} />
                    <YAxis domain={[bottom, top]} />
                    <Tooltip />
                    {series.map((serie) => (
                        <Line key={serie.name} type="monotone" dataKey={serie.name} stroke={serie.name === 'Temperatura' ? '#8884d8' : serie.name === 'Voltaje' ? '#82ca9d' : '#ff7300'} />
                    ))}
                    {refAreaLeft && refAreaRight ? (
                        <ReferenceArea x1={refAreaLeft} x2={refAreaRight} strokeOpacity={0.3} />
                    ) : null}
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};

export default Recharts;
