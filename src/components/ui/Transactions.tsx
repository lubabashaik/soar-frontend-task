interface Transactions {
  title: string
  date: string
  img?: string
}

function Transactions() {
  return (
    <div className="border-black border flex ">
      <div className="">
        <img src="" alt="" className="border border-black rounded-full w-8 h-8"></img>
      </div>
      <div className="flex w-full justify-between px-3">
        <div>
          <p className="font-bold">Deposite from my card</p>
          <p>28 January 2025</p>
        </div>
        <div>-$800</div>
      </div>
    </div>
  )
}
export default Transactions
