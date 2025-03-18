import Balance from './components/ui/Balance-History'
import Graph from './components/ui/Graph'
import PieChart from './components/ui/PieChart'

function App() {
  return (
    <div className="bg-white">
      <p className="font-bold">Weekly Activity</p>
      <Graph />
      <PieChart />
      <Balance />

      {/* <Sidebar />
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
      <Card Balance={1233} CardNumber="2144 2345 2345 2344" expiry="12/12" name="lubaba" variant="dark" /> */}
    </div>
  )
}

export default App
