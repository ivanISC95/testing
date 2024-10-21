import React, { PureComponent } from 'react';
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

// Datos iniciales con fechas
const initialData = [
  { date: '2024-10-01', cost: 4.11, impression: 100 },
  { date: '2024-10-02', cost: 2.39, impression: 120 },
  { date: '2024-10-03', cost: 1.37, impression: 150 },
  { date: '2024-10-04', cost: 1.16, impression: 180 },
  { date: '2024-10-05', cost: 2.29, impression: 200 },
  { date: '2024-10-06', cost: 3, impression: 499 },
  { date: '2024-10-07', cost: 0.53, impression: 50 },
  { date: '2024-10-08', cost: 2.52, impression: 100 },
  { date: '2024-10-09', cost: 1.79, impression: 200 },
  { date: '2024-10-10', cost: 2.94, impression: 222 },
  { date: '2024-10-11', cost: 4.3, impression: 210 },
  { date: '2024-10-12', cost: 4.41, impression: 300 },
  { date: '2024-10-13', cost: 2.1, impression: 50 },
  { date: '2024-10-14', cost: 8, impression: 190 },
  { date: '2024-10-15', cost: 0, impression: 300 },
  { date: '2024-10-16', cost: 9, impression: 400 },
  { date: '2024-10-17', cost: 3, impression: 200 },
  { date: '2024-10-18', cost: 2, impression: 50 },
  { date: '2024-10-19', cost: 3, impression: 100 },
  { date: '2024-10-20', cost: 7, impression: 100 },
];

const getAxisYDomain = (from, to, ref, offset) => {
  const refData = initialData.slice(from, to + 1);
  let [bottom, top] = [refData[0][ref], refData[0][ref]];
  refData.forEach((d) => {
    if (d[ref] > top) top = d[ref];
    if (d[ref] < bottom) bottom = d[ref];
  });
  return [(bottom | 0) - offset, (top | 0) + offset];
};

const initialState = {
  data: initialData,
  left: 0,
  right: initialData.length - 1,
  refAreaLeft: '',
  refAreaRight: '',
  top: 'dataMax+1',
  bottom: 'dataMin-1',
  top2: 'dataMax+20',
  bottom2: 'dataMin-20',
};

export default class RechartBrush extends PureComponent {
  constructor(props) {
    super(props);
    this.state = initialState;
  }

  zoom() {
    let { refAreaLeft, refAreaRight } = this.state;

    if (refAreaLeft === refAreaRight || refAreaRight === '') {
      this.setState(() => ({
        refAreaLeft: '',
        refAreaRight: '',
      }));
      return;
    }

    if (refAreaLeft > refAreaRight) [refAreaLeft, refAreaRight] = [refAreaRight, refAreaLeft];

    // Obtener los límites del zoom
    const from = Math.max(refAreaLeft, 0);
    const to = Math.min(refAreaRight, initialData.length - 1);

    // Obtener límites para los ejes Y
    const [bottom, top] = getAxisYDomain(from, to, 'cost', 1);
    const [bottom2, top2] = getAxisYDomain(from, to, 'impression', 50);

    this.setState(() => ({
      refAreaLeft: '',
      refAreaRight: '',
      left: from,
      right: to,
      bottom,
      top,
      bottom2,
      top2,
    }));
  }

  zoomOut() {
    this.setState(() => ({
      refAreaLeft: '',
      refAreaRight: '',
      left: 0,
      right: initialData.length - 1,
      top: 'dataMax+1',
      bottom: 'dataMin',
      top2: 'dataMax+50',
      bottom2: 'dataMin+50',
    }));
  }

  render() {
    const { data, left, right, refAreaLeft, refAreaRight, top, bottom, top2, bottom2 } = this.state;

    return (
      <div className="highlight-bar-charts" style={{ userSelect: 'none', width: '100%' }}>
        <button type="button" className="btn update" onClick={this.zoomOut.bind(this)}>
          Zoom Out
        </button>

        <ResponsiveContainer width="100%" height={400}>
          <LineChart
            data={data}
            onMouseDown={(e) => {
              const index = e.activeLabel ? Number(e.activeLabel) - 1 : 0;
              this.setState({ refAreaLeft: index });
            }}
            onMouseMove={(e) => {
              if (this.state.refAreaLeft && e.activeLabel) {
                const index = Number(e.activeLabel) - 1;
                this.setState({ refAreaRight: index });
              }
            }}
            onMouseUp={this.zoom.bind(this)}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" domain={['dataMin', 'dataMax']} />
            <YAxis domain={[bottom, top]} type="number" />
            <YAxis orientation="right" domain={[bottom2, top2]} type="number" />
            <Tooltip />
            <Line type="monotone" dataKey="cost" stroke="#8884d8" />
            <Line type="monotone" dataKey="impression" stroke="#82ca9d" />

            {refAreaLeft !== '' && refAreaRight !== '' ? (
              <ReferenceArea x1={refAreaLeft} x2={refAreaRight} strokeOpacity={0.3} />
            ) : null}
          </LineChart>
        </ResponsiveContainer>
      </div>
    );
  }
}
