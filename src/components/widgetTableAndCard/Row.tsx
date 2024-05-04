import React, { FC, memo, useId } from 'react'
import { TableCell, TableRow } from '@/components/ui/table'
import { format } from 'date-fns'
import { DataTable } from '@/hook/response'
import { Button } from '../ui/button'
import { useNavigate } from 'react-router-dom'

type Props = {
  value: DataTable
}

const Row: FC<Props> = memo(({ value }) => {
  const id = useId()
  const navigate = useNavigate()

  return (
    <TableRow key={id}>
      <TableCell>{format(new Date(value.aggregate_date), 'dd-MM-yyyy')}</TableCell>
      <TableCell>{value.active_carrier}</TableCell>
      <TableCell>{value.active_client}</TableCell>
      <TableCell>{value.assigned_count}</TableCell>
      <TableCell>
        {value.margin_abs.toLocaleString('it-IT', { style: 'currency', currency: 'EUR' })}
      </TableCell>
      <TableCell>
        {value.margin_abs_per_order.toLocaleString('it-IT', { style: 'currency', currency: 'EUR' })}
      </TableCell>
      <TableCell>{`${value.margin_perc.toString().slice(0, 5)}%`}</TableCell>
      <TableCell>{value.new_carriers}</TableCell>
      <TableCell>{value.new_clients}</TableCell>
      <TableCell>{value.order_count}</TableCell>
      <TableCell>{value.order_per_period}</TableCell>
      <TableCell>{value.revenue.toLocaleString('it-IT', { style: 'currency', currency: 'EUR' })}</TableCell>
      <TableCell>
        {value.revenue_assigned.toLocaleString('it-IT', { style: 'currency', currency: 'EUR' })}
      </TableCell>
      <TableCell>
        {value.revenue_per_order.toLocaleString('it-IT', { style: 'currency', currency: 'EUR' })}
      </TableCell>
      <TableCell>
        <Button size="sm" onClick={() => navigate(`/kpis`)}>
          kpis
        </Button>
      </TableCell>
    </TableRow>
  )
})

export default Row
