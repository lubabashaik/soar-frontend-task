import Card from './components/Card'
// import Balance from './components/ui/Balance-History'
// import Graph from './components/ui/Graph'
// import PieChart from './components/ui/PieChart'
// import Transactions from './components/ui/Transactions'

function App() {
  return (
    <div className="bg-white">
      {/* <p className="font-bold">Weekly Activity</p>
      <Graph />
      <div>
        <a href="title" className="font-bold">
          Expense Statistics
        </a>
        <PieChart />
      </div>
      <Balance />
      <Transactions />

       <Sidebar />
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes> */}
      <Card Balance={1233} CardNumber="2144 2345 2345 2344" expiry="12/12" name="lubaba" variant="dark" />
    </div>
  )
}

export default App
