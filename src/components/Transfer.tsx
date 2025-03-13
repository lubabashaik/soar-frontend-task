interface TransferProps {
  name: string
  title: string
  img: string
}
function Transfer(props: TransferProps) {
  const { img = '' } = props
  return (
    <div id="Transfer=parent" className="flex font-light w-20">
      <div
        id="Transfer-avatar"
        className="w-40 justify-items-center py-4  rounded-xl hover:text-white hover:font-semibold"
      >
        <img src={img} alt="" className="w-20 h-20 mb-3" />
        <h5 id="name" className="text-lg tracking-wider text-black">
          {props.name}
        </h5>
        <p id="title" className="text-sm font-normal leading-3 text-blue-400">
          {props.title}
        </p>
      </div>
    </div>
  )
}
export default Transfer
