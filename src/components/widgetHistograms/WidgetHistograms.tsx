import React, { FC, memo } from 'react'
import { useDataContext } from '@/context/DataContext'
import SkeletonTable from '../widgetTableAndCard/SkeletonTable'
import ChartBar from '../charts/Bar'
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '../ui/carousel'

type Props = {}
const WidgetHistograms: FC<Props> = memo(() => {
  const [api, setApi] = React.useState<CarouselApi>()
  const [current, setCurrent] = React.useState(0)
  const [count, setCount] = React.useState(0)

  const { data, filters } = useDataContext()
  const aggregateArray = Object.keys(data.histograms ?? {})

  React.useEffect(() => {
    if (!api) {
      return
    }

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])

  return (
    <section className="mt-4">
      {current !== 0 && (
        <h2 className="text-lg font-medium flex-1">
          {aggregateArray[current - 1]?.replaceAll('_', ' ')} (
          <span className="text-destructive">{current}</span> of {count})
        </h2>
      )}

      {!data.loading && data.histograms && (
        <section className="w-full h-[30rem] flex justify-center px-20">
          <Carousel className="w-full h-full" setApi={setApi}>
            <CarouselContent className="h-full">
              <CarouselItem>
                <ChartBar
                  data={data.histograms?.time_margin_perc?.data ?? []}
                  keys={['margin_perc']}
                  axisLeftLegend="Margin %"
                  axisBottomLegend={`Aggregation type: ${filters.aggregateBy} - target: ${filters.timeTarget}`}
                  scheme="pastel2"
                />
              </CarouselItem>
              <CarouselItem>
                <ChartBar
                  data={data.histograms?.time_order_count?.data ?? []}
                  keys={['order_count']}
                  axisLeftLegend="Order count"
                  axisBottomLegend={`Aggregation type: ${filters.aggregateBy} - target: ${filters.timeTarget}`}
                  scheme="accent"
                />
              </CarouselItem>
              <CarouselItem>
                <ChartBar
                  data={data.histograms?.time_revenue?.data ?? []}
                  keys={['margin_abs', 'revenue']}
                  axisLeftLegend="Revenue"
                  axisBottomLegend={`Aggregation type: ${filters.aggregateBy} - target: ${filters.timeTarget}`}
                />
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </section>
      )}

      {data.loading && (
        <div className="mt-4">
          <SkeletonTable />
        </div>
      )}
    </section>
  )
})

export default WidgetHistograms
