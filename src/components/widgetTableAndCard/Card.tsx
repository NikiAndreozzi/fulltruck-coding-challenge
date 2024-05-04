import React, { FC, memo } from 'react'
import { Button } from '../ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../ui/card'
import { DataTable } from '@/hook/response'
import { format } from 'date-fns'
import classNames from 'classnames'
import { useNavigate } from 'react-router-dom'
type Props = {
  value: DataTable
}
const WidgetCard: FC<Props> = memo(({ value }) => {
  const navigate = useNavigate()

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>
          <section className="flex text-lg gap-4 w-full justify-between">
            <div>{format(new Date(value.aggregate_date), 'dd-MM-yyyy')}</div>
            <div
              className={classNames('w-ful', {
                'text-green-500': value.assigned_count === value.order_count,
                'text-orange-500':
                  value.assigned_count < value.order_count && value.assigned_count > value.order_count / 2,
              })}
            >
              <span className="text-danger">{value.assigned_count}</span> of {value.order_count} order
            </div>
          </section>
        </CardTitle>
        <CardDescription>
          <section className="flex text-lg gap-4">
            <div>
              Carrier:{' '}
              <b>
                {value.active_carrier} (new {value.new_carriers})
              </b>
            </div>
            <div>
              Client:{' '}
              <b>
                {value.active_client} (new {value.new_clients})
              </b>
            </div>
          </section>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex gap-2 items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941"
            />
          </svg>
          <span>Margin & revenue</span>
        </div>
        <section className="grid grid-cols-2 mt-4 gap-4">
          <div>
            <p>Margin abs</p>
            <p className="font-bold">
              {value.margin_abs.toLocaleString('it-IT', { style: 'currency', currency: 'EUR' })}
            </p>
          </div>
          <div>
            <p>Revenue</p>
            <p className="font-bold">
              {value.revenue.toLocaleString('it-IT', { style: 'currency', currency: 'EUR' })}
            </p>
          </div>
          <div>
            <p>Margin abs (order)</p>
            <p className="font-bold">
              {value.margin_abs_per_order.toLocaleString('it-IT', { style: 'currency', currency: 'EUR' })}
            </p>
          </div>
          <div>
            <p>Revenue (order)</p>
            <p className="font-bold">
              {value.revenue_per_order.toLocaleString('it-IT', { style: 'currency', currency: 'EUR' })}
            </p>
          </div>
          <div>
            <p>Margin %</p>
            <p className="font-bold">{`${value.margin_perc.toString().slice(0, 5)}%`}</p>
          </div>
          <div>
            <p>Revenue assigned</p>
            <p className="font-bold">
              {value.revenue_assigned.toLocaleString('it-IT', { style: 'currency', currency: 'EUR' })}
            </p>
          </div>
        </section>
      </CardContent>
      <CardFooter className="flex justify-end">
        <Button onClick={() => navigate(`/kpis`)}>kpis</Button>
      </CardFooter>
    </Card>
  )
})

export default WidgetCard
