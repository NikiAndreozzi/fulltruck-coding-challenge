import Summary from '@/components/widgetScalars/Summary'
import { DataProvider } from '@/context/DataContext'
import { FC } from 'react'

const Scalars: FC = () => {
  return (
    <DataProvider>
      <Summary />
    </DataProvider>
  )
}

export default Scalars
