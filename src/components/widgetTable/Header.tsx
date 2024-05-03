import React, { FC, memo } from 'react'
import { TableHead, TableRow } from '@/components/ui/table'

const Header: FC = memo(() => {
  return (
    <TableRow>
      <TableHead>Aggregate date</TableHead>
      <TableHead>Active carrier</TableHead>
      <TableHead>Active client</TableHead>
      <TableHead>Assigned count</TableHead>

      <TableHead>Margin abs</TableHead>
      <TableHead>Margin abs per order</TableHead>
      <TableHead>Margin perc</TableHead>
      <TableHead>New carriers</TableHead>

      <TableHead>New clients</TableHead>
      <TableHead>Order count</TableHead>
      <TableHead>Order per period</TableHead>
      <TableHead>Revenue</TableHead>

      <TableHead>Revenue assigned</TableHead>
      <TableHead>Revenue per order</TableHead>
    </TableRow>
  )
})

export default Header
