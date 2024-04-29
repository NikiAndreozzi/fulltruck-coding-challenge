import { FC } from 'react'

type Props = {}

const FullTruckLogo: FC<Props> = () => {
  return (
    <div className="w-[10rem] h-full">
      <img src={'./logo.png'} alt="The FullTruck logo" />
    </div>
  )
}

export default FullTruckLogo
