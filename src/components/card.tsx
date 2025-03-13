interface CardProps {
  Balance: number
  name: string
  expiry: string
  CardNumber: string
  variant?: string
}
interface labelValueProps {
  label: string
  value: React.ReactNode
}

const LabelValue = (props: labelValueProps) => {
  return (
    <div>
      <p className="heading">{props.label}</p>
      <h4 className="content">{props.value}</h4>
    </div>
  )
}

function Card(Props: CardProps) {
  const { CardNumber, expiry, name, variant = 'dark' } = Props
  const isDark = variant === 'dark'
  const darkStyle = {
    container: 'bg-gradient-to-r from-gray-600 to-black text-white',
    footer: 'bg-gradient-to-r from-white/10 to-white/0',
  }

  return (
    <div className={`${isDark ? darkStyle.container : 'bg-white text-black'} card-box`}>
      <div className="header">
        <div className="Balance-details">
          <LabelValue label="Balance" value={`$${Props.Balance}`} />
        </div>
        <img className="image-icon" src={`${isDark ? 'chip-icon.png' : 'dark-chip.svg'}`} alt="icon" />
      </div>
      <div className="user-details">
        <div className="user-name">
          <LabelValue label="CARD HOLDER" value={name} />
        </div>
        <div className="expiry-date">
          <LabelValue label="VALID THRU" value={expiry} />
        </div>
      </div>
      <div className={`${isDark ? darkStyle.footer : 'bg-white text-black border-t-2 border-black'} footer`}>
        <span>{CardNumber}</span>
        <div id="cir-group" className="flex">
          <div
            className={`${isDark ? 'bg-[rgba(240,236,236,0.3)]' : 'bg-[rgba(0,0,0,0.3)]'} w-6 h-6 rounded-full`}
          ></div>
          <div
            className={`${isDark ? 'bg-[rgba(240,236,236,0.3)]' : 'bg-[rgba(0,0,0,0.3)]'} w-6 h-6 rounded-full -ml-3`}
          ></div>
        </div>
      </div>
    </div>
  )
}

export default Card
