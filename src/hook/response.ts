type DataTable = {
  active_carrier: number
  active_client: number
  aggregate_date: string
  assigned_count: number
  margin_abs: number
  margin_abs_per_order: number
  margin_perc: number
  new_carriers: number
  new_clients: number
  order_count: number
  order_per_period: number
  revenue: number
  revenue_assigned: number
  revenue_per_order: number
}

type TimeMarginPerc = {
  margin_perc: number
}

type TimeOrderCount = {
  order_count: number
}

type TimeRevenue = {
  margin_abs: number
  revenue: number
}

type TimeUnion = {
  date: string
} & TimeMarginPerc &
  TimeOrderCount &
  TimeRevenue

type Time = {
  data: TimeUnion[]
  index_by: IndexBy
}

type Histograms = {
  time_margin_perc: Time
  time_order_count: Time
  time_revenue: Time
}

type IndexBy = 'date'

type StatisticsResponse = {
  data_table: DataTable[]
  histograms: Histograms | null
}

export type {
  StatisticsResponse,
  DataTable,
  TimeMarginPerc,
  TimeOrderCount,
  TimeRevenue,
  TimeUnion,
  IndexBy,
  Histograms,
}
