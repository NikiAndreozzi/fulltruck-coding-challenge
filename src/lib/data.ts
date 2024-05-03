import { Histograms, TimeUnion } from '@/hook/response'

const aggregateData = (histograms: Histograms | undefined | null) => {
  const dates = Object.values(histograms ?? {}).map((value) => value?.data)
  const aggregate = dates.reduce(
    (
      acc: {
        [key: string]: {
          date: string
          margin_perc: number
          order_count: number
          margin_abs: number
          revenue: number
        }
      },
      histogram
    ) => {
      histogram.forEach((item: TimeUnion) => {
        const date = item.date

        if (date && !acc[date]) {
          acc[date] = {
            date,
            margin_perc: 0,
            order_count: 0,
            margin_abs: 0,
            revenue: 0,
          }
        }

        if (date) {
          acc = {
            ...acc,
            [date]: {
              date,
              margin_perc: item.margin_perc ?? 0,
              order_count: item.order_count ?? 0,
              margin_abs: item.margin_abs ?? 0,
              revenue: item.revenue ?? 0,
            },
          }
        }
      })

      return acc
    },
    {}
  )

  return aggregate
}

export { aggregateData }
