import React, { FC, memo } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card'
import { Carrier_Client_Data } from '@/hook/response'
import { formatEuro, formatPercent } from '@/lib/format'
type Props = {
  value: Carrier_Client_Data
}
const WidgetCard: FC<Props> = memo(({ value }) => {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>
          <p>Cod. {value.label}</p>
        </CardTitle>
        <CardDescription>
          <section className="flex text-lg gap-4">
            <div>
              Order
              <p className="font-bold">{value.order_count}</p>
            </div>
            <div>
              Order % on tot
              <p className="font-bold">{formatPercent(value.order_count_perc_on_tot)}</p>
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
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941"
            />
          </svg>
          <span>Margin & revenue</span>
        </div>
        <section className="grid grid-cols-2 mt-4 gap-4">
          <div>
            <p>Margin abs</p>
            <p className="font-bold">{formatEuro(value.margin_abs)}</p>
          </div>
          <div>
            <p>Revenue</p>
            <p className="font-bold">{formatEuro(value.revenue)}</p>
          </div>
          <div>
            <p>Margin abs (order)</p>
            <p className="font-bold">{formatEuro(value.margin_abs_per_order)}</p>
          </div>
          <div>
            <p>Revenue (order)</p>
            <p className="font-bold">{formatEuro(value.revenue_per_order)}</p>
          </div>
          <div>
            <p>Margin % on tot</p>
            <p className="font-bold">{formatPercent(value.margin_abs_perc_on_tot)}</p>
          </div>
          <div>
            <p>Revenue % on tot</p>
            <p className="font-bold">{formatPercent(value.revenue_perc_on_tot)}</p>
          </div>
          <div>
            <p>Margin abs per order</p>
            <p className="font-bold">{formatEuro(value.margin_abs_per_order)}</p>
          </div>
        </section>
      </CardContent>
    </Card>
  )
})

export default WidgetCard
