import React, { FC, memo } from 'react'
import { Table, TableBody, TableHeader } from '@/components/ui/table'
import Header from './Header'
import Row from './Row'

type Props = {}
const WidgetTable: FC<Props> = memo(() => {
  return (
    <section>
      <Table>
        {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
        <TableHeader>
          <Header />
        </TableHeader>
        <TableBody>
          <Row />
        </TableBody>
      </Table>
    </section>
  )
})

export default WidgetTable
