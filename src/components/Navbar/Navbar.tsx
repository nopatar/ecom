import { ModeToggle } from './ModeToggle'
import Search from './Search'
import Logo from './Logo'
import DropDownMenu from './DropDownMenu'

const Navbar = () => {
  return (
    <nav>
      <div className="container flex justify-between py-4">
        {/* Search */}
        <Search />
        {/* Logo */}
        <Logo />
        {/* Menu */}
        <div className="flex">
          <ModeToggle />
          <DropDownMenu />
        </div>
      </div>
    </nav>
  )
}
export default Navbar
