import Link from 'next/link'
import { Button } from '../ui/button'

const Logo = () => {
  return (
    <Button variant='outline'>
      <Link href='/' className='text-2xl uppercase'>ecom</Link>
    </Button>
  )
}
export default Logo
