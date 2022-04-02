import React from 'react';
import { Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';

const MyLineChart = () => {
    const data = [
        {
          name: 'Page A',
          Price: 4000,
          pv: 2400,
          amt: 2400,
        },
        {
          name: 'Page B',
          Price: 3000,
          pv: 1398,
          amt: 2210,
        },
        {
          name: 'Page C',
          Price: 2000,
          pv: 9800,
          amt: 2290,
        },
        {
          name: 'Page D',
          Price: 2780,
          pv: 3908,
          amt: 2000,
        },
        {
          name: 'Page E',
          Price: 1890,
          pv: 4800,
          amt: 2181,
        },
        {
          name: 'Page F',
          Price: 2390,
          pv: 3800,
          amt: 2500,
        },
        {
          name: 'Page G',
          Price: 3490,
          pv: 4300,
          amt: 2100,
        },
      ];
      
    return (
        <LineChart width={800} height={500} data={data}> 
            <Line type="monotone"  dataKey="Price" stroke='red'></Line>
            <Line type="monotone" dataKey="pv" stroke='red'></Line>
            <XAxis dataKey={"name"}></XAxis>
            <YAxis></YAxis>
            <Tooltip></Tooltip>
        </LineChart>
    );
};

export default MyLineChart;