import React, { FC, memo, useId } from 'react'
import { TableCell, TableRow } from '@/components/ui/table'
import { useDataContext } from '@/context/DataContext'
import { format } from 'date-fns'

const Row: FC = memo(() => {
  const { dataTable } = useDataContext()
  const id = useId()

  /** TODO precision setting? */
  return (
    <>
      {dataTable.map((row) => (
        <TableRow key={id}>
          <TableCell>{format(new Date(row.aggregate_date), 'dd-MM-yyyy')}</TableCell>
          <TableCell>{row.active_carrier}</TableCell>
          <TableCell>{row.active_client}</TableCell>
          <TableCell>{row.assigned_count}</TableCell>
          <TableCell>{row.margin_abs.toFixed(2)}</TableCell>
          <TableCell>{row.margin_abs_per_order.toFixed(2)}</TableCell>
          <TableCell>{row.margin_perc.toFixed(2)}</TableCell>
          <TableCell>{row.new_carriers}</TableCell>
          <TableCell>{row.new_clients}</TableCell>
          <TableCell>{row.order_count}</TableCell>
          <TableCell>{row.order_per_period}</TableCell>
          <TableCell>{row.revenue}</TableCell>
          <TableCell>{row.revenue_assigned}</TableCell>
          <TableCell>{row.revenue_per_order.toFixed(2)}</TableCell>
        </TableRow>
      ))}
    </>
  )
})

export default Row
