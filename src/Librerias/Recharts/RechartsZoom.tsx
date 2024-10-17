import { useState } from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ReferenceArea, ResponsiveContainer } from 'recharts';
import { datas } from '../../Datas';


const initialData = datas.value.map((val, index) => ({
    name: datas.timestamp[index],
    cost: val,
    impression: Math.round(val * 100)
}));

const getAxisYDomain = (from: any, to: any, ref: any, offset: any) => {
    const refData: any = initialData.slice(from, to);
    let [bottom, top] = [refData[0][ref], refData[0][ref]];
    refData.forEach((d: any) => {
        if (d[ref] > top) top = d[ref];
        if (d[ref] < bottom) bottom = d[ref];
    });

    return [(bottom | 0) - offset, (top | 0) + offset];
};

const ZoomableChart = () => {
    const [data] = useState(initialData);
    const [left, setLeft] = useState('dataMin');
    const [right, setRight] = useState('dataMax');
    const [refAreaLeft, setRefAreaLeft] = useState('');
    const [refAreaRight, setRefAreaRight] = useState('');
    const [top, setTop] = useState('dataMax+1');
    const [bottom, setBottom] = useState('dataMin');
    const [top2, setTop2] = useState('dataMax+20');
    const [bottom2, setBottom2] = useState('dataMin-20');

    const zoom = () => {
        if (refAreaLeft === refAreaRight || refAreaRight === '') {
            setRefAreaLeft('');
            setRefAreaRight('');
            return;
        }

        const leftIndex: any = initialData.findIndex(d => d.name === refAreaLeft);
        const rightIndex: any = initialData.findIndex(d => d.name === refAreaRight);

        if (leftIndex < 0 || rightIndex < 0) return;

        const [newBottom, newTop] = getAxisYDomain(leftIndex, rightIndex, 'cost', 1);
        const [newBottom2, newTop2] = getAxisYDomain(leftIndex, rightIndex, 'impression', 50);

        setRefAreaLeft('');
        setRefAreaRight('');
        setLeft(leftIndex);
        setRight(rightIndex);
        setBottom(newBottom);
        setTop(newTop);
        setBottom2(newBottom2);
        setTop2(newTop2);
    };

    const zoomOut = () => {
        setRefAreaLeft('');
        setRefAreaRight('');
        setLeft('dataMin');
        setRight('dataMax');
        setTop('dataMax+1');
        setBottom('dataMin');
        setTop2('dataMax+50');
        setBottom2('dataMin+50');
    };

    return (
        <div className="highlight-bar-charts" style={{ userSelect: 'none', width: '100%' }}>
            <button type="button" className="btn update" onClick={zoomOut}>
                Zoom Out
            </button>
            <ResponsiveContainer width="100%" height={400}>
                <LineChart
                    data={data}
                    onMouseDown={(e: any) => setRefAreaLeft(e.activeLabel)}
                    onMouseMove={(e: any) => refAreaLeft && setRefAreaRight(e.activeLabel)}
                    onMouseUp={zoom}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis allowDataOverflow dataKey="name" domain={[left, right]} />
                    <YAxis allowDataOverflow domain={[bottom, top]} yAxisId="1" />
                    <YAxis orientation="right" allowDataOverflow domain={[bottom2, top2]} yAxisId="2" />
                    <Tooltip />
                    <Line yAxisId="1" type="monotone" dataKey="cost" stroke="#8884d8" dot={false} />
                    {refAreaLeft && refAreaRight ? (
                        <ReferenceArea yAxisId="1" x1={refAreaLeft} x2={refAreaRight} strokeOpacity={0.3} />
                    ) : null}
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};

export const RechartsZoom = () => {
    return (
        <div>
            <h1>Recharts Zoom Example</h1>
            <ZoomableChart />
        </div>
    );
};
