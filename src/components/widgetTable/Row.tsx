import React, { FC, memo, useId } from 'react'
import { TableCell, TableRow } from '@/components/ui/table'
import { format } from 'date-fns'
import { DataTable } from '@/hook/response'

type Props = {
  value: DataTable
}

const Row: FC<Props> = memo(({ value }) => {
  const id = useId()
  /** TODO precision setting? */
  return (
    <TableRow key={id}>
      <TableCell>{format(new Date(value.aggregate_date), 'dd-MM-yyyy')}</TableCell>
      <TableCell>{value.active_carrier}</TableCell>
      <TableCell>{value.active_client}</TableCell>
      <TableCell>{value.assigned_count}</TableCell>
      <TableCell>{value.margin_abs.toFixed(2)}</TableCell>
      <TableCell>{value.margin_abs_per_order.toFixed(2)}</TableCell>
      <TableCell>{value.margin_perc.toFixed(2)}</TableCell>
      <TableCell>{value.new_carriers}</TableCell>
      <TableCell>{value.new_clients}</TableCell>
      <TableCell>{value.order_count}</TableCell>
      <TableCell>{value.order_per_period}</TableCell>
      <TableCell>{value.revenue}</TableCell>
      <TableCell>{value.revenue_assigned}</TableCell>
      <TableCell>{value.revenue_per_order.toFixed(2)}</TableCell>
    </TableRow>
  )
})

export default Row
