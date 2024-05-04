import React, { FC, memo, useId } from 'react'
import { TableCell, TableRow } from '@/components/ui/table'
import { DataTable } from '@/hook/response'
import { Button } from '../ui/button'
import { useNavigate } from 'react-router-dom'
import { formatDate, formatEuro, formatPercent } from '@/lib/format'

type Props = {
  value: DataTable
}

const Row: FC<Props> = memo(({ value }) => {
  const id = useId()
  const navigate = useNavigate()

  return (
    <TableRow key={id}>
      <TableCell>{formatDate(value.aggregate_date)}</TableCell>
      <TableCell>{value.active_carrier}</TableCell>
      <TableCell>{value.active_client}</TableCell>
      <TableCell>{value.assigned_count}</TableCell>
      <TableCell>{formatEuro(value.margin_abs)}</TableCell>
      <TableCell>{formatEuro(value.margin_abs_per_order)}</TableCell>
      <TableCell>{formatPercent(value.margin_perc)}</TableCell>
      <TableCell>{value.new_carriers}</TableCell>
      <TableCell>{value.new_clients}</TableCell>
      <TableCell>{value.order_count}</TableCell>
      <TableCell>{value.order_per_period}</TableCell>
      <TableCell>{formatEuro(value.revenue)}</TableCell>
      <TableCell>{formatEuro(value.revenue_assigned)}</TableCell>
      <TableCell>{formatEuro(value.revenue_per_order)}</TableCell>
      <TableCell>
        <Button size="sm" onClick={() => navigate(`/kpis`)}>
          kpis
        </Button>
      </TableCell>
    </TableRow>
  )
})

export default Row
