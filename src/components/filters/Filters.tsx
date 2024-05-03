import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { FC } from 'react'
import DatePickerWithRange from '../dateRangePicker/DateRangePicker'
import { useDataContext } from '@/context/DataContext'
import { AggregateBy, TimeTarget } from '@/models/filters'

type Props = {}
const Filters: FC<Props> = () => {
  const { dispatch } = useDataContext()
  return (
    <section className="w-full flex justify-between py-4 gap-8">
      <div className="flex gap-8">
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium">Time target</label>
          <Select
            onValueChange={(value: TimeTarget) => dispatch({ type: 'SET_TIME_TARGET', payload: value })}
            defaultValue="created_at"
          >
            <SelectTrigger className="w-[11.25rem]">
              <SelectValue placeholder="Time target" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="pickup_date">Pickup date</SelectItem>
              <SelectItem value="created_at">Created at</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium">Aggregation type</label>
          <Select
            onValueChange={(value: AggregateBy) => dispatch({ type: 'SET_AGGREGATE_BY', payload: value })}
            defaultValue="day"
          >
            <SelectTrigger className="w-[11.25rem]">
              <SelectValue placeholder="Aggregation type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="day">Day</SelectItem>
              <SelectItem value="week">Week</SelectItem>
              <SelectItem value="month">Month</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <DatePickerWithRange />
    </section>
  )
}

export default Filters
