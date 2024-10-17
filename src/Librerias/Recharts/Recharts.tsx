import { datas, datas2 } from '../../Datas';
import {
    ComposedChart,
    Line,
    Scatter,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    Legend
} from 'recharts';

export const Recharts = () => {
    // Crear data para la línea usando datas
    const data = datas.value.map((y, index) => ({
        name: new Date(datas.timestamp[index]).toISOString().split('T')[0], // Formato YYYY-MM-DD
        y,
    }));

    // Procesar los datos de alertas para el scatter
    const scatterData = datas2.Alerts.map(alert => ({
        name: new Date(alert.Date).toISOString().split('T')[0], // Solo la fecha
        cnt: 1, // Valor constante para el scatter
    }));

    // Obtener fechas únicas para el scatter
    const uniqueScatterDates = Array.from(new Set(scatterData.map(item => item.name)));

    return (
        <ResponsiveContainer width="100%" height="100%">
            <ComposedChart
                data={data}
                margin={{
                    top: 20,
                    right: 20,
                    bottom: 20,
                    left: 20,
                }}
            >
                <CartesianGrid stroke="#f5f5f5" />
                <XAxis dataKey="name" />
                <YAxis domain={[Math.min(...datas.value) - 1, Math.max(...datas.value) + 1]} />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="y" stroke="#3E83FF" dot={false} />
                <Scatter data={scatterData} dataKey="cnt" fill="red" />
            </ComposedChart>
        </ResponsiveContainer>
    );
}
