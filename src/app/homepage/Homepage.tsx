import Filters from '@/components/filters/Filters'
import WidgetHistograms from '@/components/widgetHistograms/WidgetHistograms'
import WidgetTableAndCard from '@/components/widgetTableAndCard/WidgetTableAndCard'
import { DataProvider } from '@/context/DataContext'
import { FC } from 'react'

const Homepage: FC = () => {
  return (
    <DataProvider>
      <Filters />

      <section>
        <WidgetHistograms />
        <WidgetTableAndCard />
      </section>
    </DataProvider>
  )
}

export default Homepage
