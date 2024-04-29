import React, { FC } from 'react'
import { Button } from '@/components/ui/button'
import FullTruckLogo from '../logo/FullTruckLogo'

type Props = {}
const Navbar: FC<Props> = () => {
  return (
    <nav className="flex items-center justify-between shadow-lg p-4 gap-8">
      <FullTruckLogo />
      {/* <div className="block lg:hidden">
        <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
          <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div> */}
      <div className="flex-1">
        <Button>Click me</Button>
      </div>
    </nav>
  )
}

export default Navbar
