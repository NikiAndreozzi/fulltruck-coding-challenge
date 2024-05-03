import React, { FC, memo } from 'react'
import { Table, TableBody, TableHeader } from '@/components/ui/table'
import Header from './Header'
import Row from './Row'
import { useDataContext } from '@/context/DataContext'
import SkeletonTable from './SkeletonTable'
import { Switch } from '../ui/switch'
import { Label } from '../ui/label'

type Props = {}
const WidgetTable: FC<Props> = memo(() => {
  const { loading, data } = useDataContext()

  return (
    <section className="mt-4">
      <section className="flex justify-between items-center">
        <h2 className="text-lg font-medium flex-1">Summary ({data.data_table?.length ?? 0})</h2>

        <div className="flex items-center gap-4">
          <Label htmlFor="data-mode">Table Mode</Label>
          <Switch id="data-mode" />
          <Label htmlFor="data-mode">Card Mode</Label>
        </div>
      </section>

      {!loading && (
        <Table className="mt-4">
          <TableHeader>
            <Header />
          </TableHeader>
          <TableBody>{data?.data_table?.map((value, index) => <Row value={value} key={index} />)}</TableBody>
        </Table>
      )}

      {loading && (
        <div className="mt-4">
          <SkeletonTable />
        </div>
      )}
    </section>
  )
})

export default WidgetTable
