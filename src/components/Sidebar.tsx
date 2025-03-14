interface MenuItemsProps {
  title: string
  path: string
}
const menu: MenuItemsProps[] = [
  { title: ' Dashboard', path: '' },
  { title: ' Transactions', path: '' },
  { title: ' Accounts', path: '' },
  { title: ' Investments', path: '' },
  { title: ' Credit Cards', path: '' },
  { title: ' Loans', path: '' },
  { title: ' Services', path: '' },
  { title: ' My Privileges', path: '' },
  { title: ' Setting', path: '' },
]

function MenuItem({ title, path }: MenuItemsProps) {
  return (
    <a className="px-4 py-2 flex flex-coloum text-gray-400 hover:text-black" href={path}>
      {title}
    </a>
  )
}

function Sidebar() {
  return (
    <div className="bg-white w-56 h-screen flex flex-col gap-2">
      {menu.map((item) => (
        <MenuItem key={item.title} path={item.path} title={item.title} />
      ))}
    </div>
  )
}
export default Sidebar
