import { useDataContext } from '@/context/DataContext'
import React, { FC, memo } from 'react'
import SkeletonTable from '../widgetTableAndCard/SkeletonTable'
import WidgetCard from './Card'

type Props = {
  kpiId: 'client' | 'carrier'
}
const WidgetKpisCard: FC<Props> = memo(({ kpiId }) => {
  const { loading, data } = useDataContext()
  const aggregateArray = Object.values(data.kpis?.[kpiId] ?? {})

  return (
    <section className="mt-4">
      <h2 className="text-lg font-medium flex-1">
        {kpiId} ({aggregateArray?.length ?? 0})
      </h2>

      {!loading && (
        <section className="grid grid-cols-3 gap-4 mt-4">
          {aggregateArray?.map((value) => <WidgetCard value={value} key={value.label} />)}
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

export default WidgetKpisCard
