import React from 'react'
import { Cell, LabelProps, Pie, PieChart as RechartsPieChart, ResponsiveContainer } from 'recharts'

// Define the type for each data entry
interface DataEntry {
  name: string
  value: number
}

const data: DataEntry[] = [
  { name: 'Entertainment', value: 300 },
  { name: 'Investment', value: 200 },
  { name: 'Other', value: 350 },
  { name: 'Bill Expense', value: 150 },
]

const COLORS = ['#343C6A', '#396AFF', '#232323', '#FC7900']

const RADIAN = Math.PI / 180

// Define the type for the props used in the customized label rendering
interface CustomizedLabelProps extends LabelProps {
  cx: number
  cy: number
  midAngle: number
  innerRadius: number
  outerRadius: number
  percent: number
  index: number
  name: string
}

// Function to render the customized label
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, name }: CustomizedLabelProps) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.7
  const x = cx + radius * Math.cos(-midAngle * RADIAN)
  const y = cy + radius * Math.sin(-midAngle * RADIAN)

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor="middle" // Center the text horizontally
      dominantBaseline="central" // Center the text vertically
    >
      <tspan x={x} dy={-6} fontWeight="bold">{`${(percent * 100).toFixed(0)}%`}</tspan>
      <tspan x={x} dy={14} fontSize="10" fontWeight="bold">
        {name}
      </tspan>
    </text>
  )
}

// PieChart component using function component syntax
const PieChart: React.FC = () => {
  return (
    <ResponsiveContainer width={500} height={500}>
      <RechartsPieChart width={400} height={400}>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius={120}
          fill="#8884d8"
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </RechartsPieChart>
    </ResponsiveContainer>
  )
}

export default PieChart
