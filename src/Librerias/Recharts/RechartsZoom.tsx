import { useState } from 'react';
import {
    LineChart,
    Line,
    CartesianGrid,
    XAxis,
    YAxis,
    Tooltip,
    ReferenceArea,
    ResponsiveContainer,
} from 'recharts';

const initialData = [
    { name: 1, cost: 4.11, impression: 100 },
    { name: 2, cost: 2.39, impression: 120 },
    { name: 3, cost: 1.37, impression: 150 },
    { name: 4, cost: 1.16, impression: 180 },
    { name: 5, cost: 2.29, impression: 200 },
    { name: 6, cost: 3, impression: 499 },
    { name: 7, cost: 0.53, impression: 50 },
    { name: 8, cost: 2.52, impression: 100 },
    { name: 9, cost: 1.79, impression: 200 },
    { name: 10, cost: 2.94, impression: 222 },
    { name: 11, cost: 4.3, impression: 210 },
    { name: 12, cost: 4.41, impression: 300 },
    { name: 13, cost: 2.1, impression: 50 },
    { name: 14, cost: 8, impression: 190 },
    { name: 15, cost: 0, impression: 300 },
    { name: 16, cost: 9, impression: 400 },
    { name: 17, cost: 3, impression: 200 },
    { name: 18, cost: 2, impression: 50 },
    { name: 19, cost: 3, impression: 100 },
    { name: 20, cost: 7, impression: 100 },
];

const getAxisYDomain = (from:any, to:any, ref:any, offset:any) => {
    const refData :any = initialData.slice(from - 1, to);
    let [bottom, top] = [refData[0][ref], refData[0][ref]];
    refData.forEach((d:any) => {
        if (d[ref] > top) top = d[ref];
        if (d[ref] < bottom) bottom = d[ref];
    });

    return [(bottom | 0) - offset, (top | 0) + offset];
};

const ZoomableChart = () => {
    const [data] = useState(initialData);
    const [left, setLeft] = useState('dataMin');
    const [right, setRight] = useState('dataMax');
    const [refAreaLeft, setRefAreaLeft] = useState<any>('');
    const [refAreaRight, setRefAreaRight] = useState<any>('');
    const [top, setTop] = useState('dataMax+1');
    const [bottom, setBottom] = useState('dataMin-1');
    const [top2, setTop2] = useState('dataMax+20');
    const [bottom2, setBottom2] = useState('dataMin-20');

    const zoom = () => {
        if (refAreaLeft === refAreaRight || refAreaRight === '') {
            setRefAreaLeft('');
            setRefAreaRight('');
            return;
        }

        let leftValue = refAreaLeft;
        let rightValue = refAreaRight;

        if (leftValue > rightValue) {
            [leftValue, rightValue] = [rightValue, leftValue];
        }

        const [newBottom, newTop] = getAxisYDomain(refAreaLeft, refAreaRight, 'cost', 1);
        const [newBottom2, newTop2] = getAxisYDomain(refAreaLeft, refAreaRight, 'impression', 50);

        setRefAreaLeft('');
        setRefAreaRight('');
        setLeft(refAreaLeft);
        setRight(refAreaRight);
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
    console.log(data)
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
                    <XAxis allowDataOverflow dataKey="name" domain={[left, right]} type="number" />
                    <YAxis allowDataOverflow domain={[bottom, top]} type="number" yAxisId="1" />
                    <YAxis orientation="right" allowDataOverflow domain={[bottom2, top2]} type="number" yAxisId="2" />
                    <Tooltip />
                    <Line yAxisId="1" type="natural" dataKey="cost" stroke="#8884d8" />
                    <Line yAxisId="2" type="natural" dataKey="impression" stroke="#82ca9d" />

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
