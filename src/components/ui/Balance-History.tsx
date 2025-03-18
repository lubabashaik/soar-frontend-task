// import React, { PureComponent } from 'react'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

const data = [
  {
    name: 'Jul',
    value: 100,
    // pv: 2400,
    // amt: 2400,
  },
  {
    name: 'Aug',
    value: 320,
    // pv: 1398,
    // amt: 2210,
  },
  {
    name: 'Sep',
    value: 480,
    // pv: 9800,
    // amt: 2290,
  },
  {
    name: 'Oct',
    value: 750,
    // pv: 3908,
    // amt: 2000,
  },
  {
    name: 'Nov',
    value: 280,
    // pv: 4800,
    // amt: 2181,
  },
  {
    name: 'Dec',
    value: 580,
    // pv: 3800,
    // amt: 2500,
  },
  {
    name: 'Jan',
    value: 600,
    // pv: 4300,
    // amt: 2100,
  },
]

function Balance() {
  return (
    <div style={{ width: '100%', height: 300 }}>
      <ResponsiveContainer>
        <AreaChart
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis ticks={[0, 200, 400, 600, 800]} />
          <Tooltip />
          <Area type="monotone" dataKey="value" stroke="#003366" fillOpacity={0.3} fill="#66A3FF" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Balance
