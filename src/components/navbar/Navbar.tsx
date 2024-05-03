import React, { FC } from 'react'
import FullTruckLogo from '../logo/FullTruckLogo'
import { Link } from 'react-router-dom'

type Props = {}
const Navbar: FC<Props> = () => {
  return (
    <nav className="flex items-center justify-between shadow-lg p-4 gap-8">
      <FullTruckLogo />
      <div className="flex-1 space-x-12">
        <Link to="homepage" className="uppercase">
          Homepage
        </Link>
        <Link to="kpis" className="uppercase">
          Kpis
        </Link>
        <Link to="scalars" className="uppercase">
          Scalars
        </Link>
      </div>
    </nav>
  )
}

export default Navbar
