import React, { FC, memo, useId } from 'react'
import { TableCell, TableRow } from '@/components/ui/table'
import { useDataContext } from '@/context/DataContext'
import { format } from 'date-fns'

const Row: FC = memo(() => {
  const { dataTable } = useDataContext()
  const id = useId()

  return (
    <>
      {dataTable.map((row) => (
        <TableRow key={id}>
          <TableCell>{format(new Date(row.aggregate_date), 'dd-MM-yyyy')}</TableCell>
          <TableCell>{row.order_count}</TableCell>
          <TableCell>{row.order_per_period}</TableCell>
          <TableCell>{row.revenue}</TableCell>
          <TableCell>{row.revenue_assigned}</TableCell>
          <TableCell>{row.revenue_per_order}</TableCell>
          <TableCell>{row.assigned_count}</TableCell>
          <TableCell>{row.margin_perc}</TableCell>
          <TableCell>{row.margin_abs}</TableCell>
          <TableCell>{row.margin_abs_per_order}</TableCell>
          <TableCell>{row.new_clients}</TableCell>
          <TableCell>{row.new_carriers}</TableCell>
          <TableCell>{row.active_carrier}</TableCell>
          <TableCell>{row.active_client}</TableCell>
        </TableRow>
      ))}
    </>
  )
})

export default Row
