import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { FC } from 'react'
import DatePickerWithRange from '../DateRangePicker/DateRangePicker'

type Props = {}
const Filters: FC<Props> = () => {
  return (
    <section className="w-full flex justify-between p-4 gap-8">
      <div className='flex gap-8'>
        <Select>
          <SelectTrigger className="w-[11.25rem]">
            <SelectValue placeholder="Time target" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="pickup_date">Pickup date</SelectItem>
            <SelectItem value="created_at">Created at</SelectItem>
          </SelectContent>
        </Select>

        <Select>
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

      <DatePickerWithRange />
    </section>
  )
}

export default Filters
