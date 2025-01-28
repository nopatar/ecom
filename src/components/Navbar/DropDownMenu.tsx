import Link from 'next/link'
import { AlignJustify } from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Button } from '@/components/ui/button'
import UserIcon from './UserIcon'

const menuItems = [
  { href:'/', label:'Home' },
  { href:'/wish', label:'Wish List' },
  { href:'/cart', laber:'Cart'}
]

const DropDownMenu = () => {
  return (

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant='outline'>
            <AlignJustify />
            <UserIcon />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />

            {
              menuItems.map((item, index) => {
                return <DropdownMenuItem key={index}>
                  <Link href={item.href}>
                    {item.label}
                  </Link>
                </DropdownMenuItem>
              })
            }
          
        </DropdownMenuContent>
      </DropdownMenu>

  )
}
export default DropDownMenu
