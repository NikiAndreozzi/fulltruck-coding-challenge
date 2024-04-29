import { FC } from 'react'
import Navbar from './components/navbar/Navbar'
import Filters from './components/filters/Filters'
import WidgetTable from './components/widgetTable/WidgetTable'
import { DataProvider } from './context/DataContext'

const App: FC = () => {
  return (
    <section className="h-full w-full">
      <Navbar />

      <section className="container mx-auto max-h-base h-full overflow-y-auto p-0">
        <DataProvider>
          <Filters />

          <section>
            <WidgetTable />
          </section>
        </DataProvider>
      </section>
    </section>
  )
}

export default App
