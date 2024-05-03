import Filters from '@/components/filters/Filters'
import WidgetHistograms from '@/components/widgetHistograms/WidgetHistograms'
import WidgetTable from '@/components/widgetTable/WidgetTable'
import { DataProvider } from '@/context/DataContext'
import { FC } from 'react'

const Homepage: FC = () => {
  return (
    <DataProvider>
      <Filters />

      <section>
        <WidgetHistograms />
        <WidgetTable />
      </section>
    </DataProvider>
  )
}

export default Homepage
