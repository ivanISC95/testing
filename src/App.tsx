import './App.css'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { datas } from './Datas';

function App() {

  const CustomDot = (props: any) => {
    const { cx, cy } = props;
    return (
      <svg x={cx - 10} y={cy - 10} width={20} height={20} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15 12L12 15M2.25 15.75L4.125 13.875M13.875 4.125L15.75 2.25M7.5 8.25L6 9.75M9.75 10.5L8.25 12M12 12L15 15M5.25004 9L9.00004 12.75L7.87504 13.875C7.63029 14.1278 7.33767 14.3294 7.01423 14.468C6.69079 14.6066 6.343 14.6795 5.99113 14.6824C5.63925 14.6852 5.29032 14.618 4.96467 14.4847C4.63903 14.3513 4.34317 14.1545 4.09435 13.9057C3.84553 13.6569 3.64871 13.361 3.51537 13.0354C3.38203 12.7097 3.31483 12.3608 3.31768 12.0089C3.32054 11.657 3.3934 11.3092 3.53201 10.9858C3.67062 10.6624 3.87221 10.3698 4.12504 10.125L5.25004 9ZM12.75 8.99995L9 5.24995L10.125 4.12495C10.3698 3.87212 10.6624 3.67053 10.9858 3.53192C11.3092 3.39331 11.657 3.32045 12.0089 3.31759C12.3608 3.31474 12.7097 3.38194 13.0354 3.51528C13.361 3.64862 13.6569 3.84543 13.9057 4.09426C14.1545 4.34308 14.3513 4.63894 14.4847 4.96458C14.618 5.29023 14.6852 5.63916 14.6824 5.99103C14.6795 6.34291 14.6066 6.6907 14.468 7.01414C14.3294 7.33758 14.1278 7.6302 13.875 7.87495L12.75 8.99995Z" stroke="#2393F4" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
    );
  };
  const data = datas.value.map((y, index) => ({
    name: 'temperatura',
    x : datas.timestamp[index],
    y,
  }));
  console.log(data)
  return (
    <>
      <div style={{ width: '1000px', height: '5rem', background: 'blue' }}>

      </div>
      <section style={{ width: '1200px', height: '500px', background: 'white' }}>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey='x'/>
            <YAxis dataKey='y' />
            <Tooltip />
            <Line type="monotone" dataKey="y" stroke="#8884d8" dot={<CustomDot />} />
          </LineChart>
        </ResponsiveContainer>
      </section>
    </>
  )
}

export default App
