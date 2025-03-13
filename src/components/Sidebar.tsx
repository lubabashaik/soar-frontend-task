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
    <a className="px-4 py-2 flex flex-coloum " href={path}>
      {title}
    </a>
  )
}

function Sidebar() {
  return (
    <div>
      {menu.map((item) => (
        <MenuItem key={item.title} path={item.path} title={item.title} />
      ))}
    </div>
  )
}
export default Sidebar
