type Props = {
  aggregateBy: 'day' | 'week' | 'month'
  timeTarget: 'pickup_date' | 'created_at'
  startDate: string | null
  endDate: string | null
}

export default Props
