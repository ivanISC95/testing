import React from 'react'
import { CompositeChart, LineChart } from '@mantine/charts';
import { datas3, transformTelemetryData } from '../../Datas';

export const MantineGraph = () => {
  const data = [
    {
      date: 'Mar 22',
      Apples: 2890,
      Oranges: 2338,
      Tomatoes: 2452,
    },
    {
      date: 'Mar 23',
      Apples: 2756,
      Oranges: 2103,
      Tomatoes: 2402,
    },
    {
      date: 'Mar 24',
      Apples: 3322,
      Oranges: 986,
      Tomatoes: 1821,
    },
    {
      date: 'Mar 25',
      Apples: 3470,
      Oranges: 2108,
      Tomatoes: 2809,
    },
    {
      date: 'Mar 26',
      Apples: 3129,
      Oranges: 1726,
      Tomatoes: 2290,
    },
  ];
  console.log(transformTelemetryData(datas3))
  return (
    <section>
      <CompositeChart
      h={300}
      data={transformTelemetryData(datas3)}
      dataKey="date"
      tooltipAnimationDuration={200}
      series={[
        { name: 'internal_temperature', color: 'indigo.6',type:'line' },
        { name: 'compressor_state', color: 'blue.6' ,type:'bar'},
        { name: 'voltage_consumption', color: 'teal.6',type:'line' },
      ]}
    />
    </section>
  )
}
