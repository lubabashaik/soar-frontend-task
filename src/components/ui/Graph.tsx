import { Bar, BarChart, CartesianGrid, Legend, Rectangle, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'

const data = [
  {
    name: 'Sat',
    Withdraw: 450,
    Deposit: 200,
  },
  {
    name: 'Sun',
    Withdraw: 350,
    Deposit: 120,
  },
  {
    name: 'Mon',
    Withdraw: 320,
    Deposit: 260,
  },
  {
    name: 'Tue',
    Withdraw: 450,
    Deposit: 350,
  },
  {
    name: 'Wed',
    Withdraw: 150,
    Deposit: 240,
  },
  {
    name: 'Thu',
    Withdraw: 380,
    Deposit: 230,
  },
  {
    name: 'Fri',
    Withdraw: 380,
    Deposit: 340,
  },
]

function Graph() {
  return (
    <ResponsiveContainer width={400} height={300}>
      <BarChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
        barCategoryGap="30%"
        // barGap={4}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis ticks={[0, 100, 200, 300, 400, 500]} />
        <Tooltip />
        <Legend iconType="circle" verticalAlign="top" align="right" />
        <Bar
          radius={20}
          barSize={10}
          dataKey="Withdraw"
          fill="#343C6A"
          activeBar={<Rectangle fill="pink" stroke="gray" />}
        />
        <Bar
          radius={20}
          barSize={10}
          dataKey="Deposit"
          fill="#396AFF"
          activeBar={<Rectangle fill="gold" stroke="blue" />}
        />
      </BarChart>
    </ResponsiveContainer>
  )
}

export default Graph
