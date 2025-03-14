import { NavLink } from 'react-router'

interface MenuItemsProps {
  title: string
  path: string
  img: string
}
const menu: MenuItemsProps[] = [
  { title: ' Dashboard', path: '/dashboard', img: 'Dashboard.svg' },
  { title: ' Transactions', path: '/transactions', img: 'Transactions.svg' },
  { title: ' Accounts', path: '/accounts', img: 'Accounts.svg' },
  { title: ' Investments', path: '/investments', img: 'Investments.svg' },
  { title: ' Credit Cards', path: '/cards', img: 'Credit-Cards.svg' },
  { title: ' Loans', path: '/loans', img: 'Loans.svg' },
  { title: ' Services', path: '/services', img: 'Services.svg' },
  { title: ' My Privileges', path: '/privileges', img: 'My-Privileges.svg' },
  { title: ' Setting', path: '/settings', img: 'Setting.svg' },
]

function MenuItem({ title, path, img }: MenuItemsProps) {
  return (
    <NavLink
      to={path}
      className={({ isActive }) =>
        `px-4 py-2  gap-3 flex items-center  ${isActive ? 'text-black border-black border-l-4 opacity-100  ' : 'opacity-50'}`
      }
    >
      <img className="w-4 h-4" src={img} alt="" />
      {title}
    </NavLink>
  )
}

function Sidebar() {
  return (
    <div className="bg-white w-56 h-screen flex flex-col gap-2">
      <a href="/" className="flex px-3 gap-3 font-bold ">
        <img src="Soar-Task.svg" alt="" />
        Soar Task
      </a>
      {menu.map((item) => (
        <MenuItem key={item.title} path={item.path} title={item.title} img={item.img} />
      ))}
    </div>
  )
}
export default Sidebar
