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

type Carrier_Client_Data = {
  label: string
  margin_abs: number
  margin_abs_per_order: number
  margin_abs_perc_on_tot: number
  margin_perc: number
  order_count: number
  order_count_perc_on_tot: number
  revenue: number
  revenue_per_order: number
  revenue_perc_on_tot: number
}

type Carrier_Client = {
  [key: string]: Carrier_Client_Data
}

type Kpis = {
  carrier: Carrier_Client
  client: Carrier_Client
}

type Scalars = {
  active_carriers: number
  active_clients: number
  average_margin_perc: number
  avg_order_margin_abs: number
  avg_order_revenue: number
  new_carriers: number
  new_clients: number
  total_assigned_count: number
  total_margin_abs: number
  total_order_count: number
  total_revenue: number
}

type IndexBy = 'date'

type StatisticsResponse = {
  data_table: DataTable[]
  histograms: Histograms | null
  kpis: Kpis | null
  scalars: Scalars | null
}

type UIState = {
  error: any
  loading: boolean
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
  Kpis,
  Carrier_Client,
  Carrier_Client_Data,
  Scalars,
  UIState,
}
