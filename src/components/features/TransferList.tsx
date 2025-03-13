import '../../App.css'
import Card from '.././Card'
import Transfer from '.././Transfer'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '../ui/carousel'

const users = [
  { title: 'Director', name: 'Yasir', img: 'https://avatar.iran.liara.run/public?' },
  { title: 'Designer', name: 'Lubaba', img: 'https://avatar.iran.liara.run/public?1' },
  { title: 'CEO', name: 'Firdause', img: 'https://avatar.iran.liara.run/public?2' },
  { title: 'Director', name: 'Thazeem', img: 'https://avatar.iran.liara.run/public?3' },
  { title: 'Designer', name: 'Rahman', img: 'https://avatar.iran.liara.run/public?4' },
  { title: 'CEO', name: 'Arafath', img: 'https://avatar.iran.liara.run/public?5' },
  { title: 'Director', name: 'Yasir', img: 'https://avatar.iran.liara.run/public?6' },
]

function TransferList() {
  return (
    <div>
      <div className=" justify-items-center">
        <div className="flex border-2 border-solid w-96 overflow-auto ">
          <Card Balance={5677} name="Eddy cumse" expiry="12/22" CardNumber="9703**** ****3322" />
          <Card Balance={9555} name="lubi" expiry="12/25" CardNumber="3456**** ****7890" variant="white" />
          <Card Balance={4567} name="yasir" expiry="25/36" CardNumber="7654**** ****8765" variant="dark" />
          <Card Balance={9555} name="tazeem" expiry="12/25" CardNumber="3456**** ****7890" variant="white" />{' '}
        </div>
      </div>
      <div className="items-center justify-items-center mt-5  ">
        <div className="flex flex-col justify-center items-center  rounded-xl  ">
          <div className="flex mt-5 ">
            <Carousel>
              <CarouselContent>
                {users.map((user, index) => (
                  <CarouselItem key={index} className="basis-1/3 hover:bg-slate-300 rounded-xl flex justify-center">
                    <Transfer name={user.name} title={user.title} img={user.img} />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-4 disabled:hidden" />
              <CarouselNext className=" right-4 disabled:hidden" />
            </Carousel>
          </div>
        </div>
        <div className="flex items-center pb-5 gap-[30px]">
          <p className="">Write Amount</p>
          <div className="flex-1 flex gap-2 bg-gray-200 rounded-full">
            <input
              type="number"
              placeholder="$435"
              className="p-2 h-[60px] rounded-full outline-none  flex-1 bg-gray-200 "
            />
            <button
              type="button"
              className=" flex justify-center items-center gap-4 h-[60px] rounded-full  bg-gray-900 text-white px-[32px] "
            >
              Send <img src="send-icon.png" alt="" className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TransferList
