import React, { FC, memo } from 'react'
import { useDataContext } from '@/context/DataContext'
import SkeletonTable from '../widgetTable/SkeletonTable'
import { aggregateData } from '@/lib/data'
import ChartBar from '../charts/Bar'

type Props = {}
const WidgetHistograms: FC<Props> = memo(() => {
  const { loading, data } = useDataContext()
  const aggregate = aggregateData(data.histograms)
  const aggregateArray = Object.values(aggregate)
  console.log('aggregate', Object.values(aggregate))
  return (
    <section className="mt-4">
      <h2 className="text-lg font-medium flex-1">Histograms</h2>

      {!loading && aggregateArray?.length > 0 && (
        <section className="w-full h-[40rem] grid grid-cols-1 md:grid-cols-2">
          <ChartBar data={aggregateArray} keys={['revenue']} />
        </section>
      )}

      {loading && (
        <div className="mt-4">
          <SkeletonTable />
        </div>
      )}
    </section>
  )
})

export default WidgetHistograms
