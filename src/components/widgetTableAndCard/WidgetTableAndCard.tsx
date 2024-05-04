import React, { FC, memo } from 'react'
import { Table, TableBody, TableHeader } from '@/components/ui/table'
import Header from './Header'
import Row from './Row'
import { useDataContext } from '@/context/DataContext'
import SkeletonTable from './SkeletonTable'
import { Switch } from '../ui/switch'
import { Label } from '../ui/label'
import WidgetCard from './Card'

/** TODO point out the issues
 *  precision in the number
 *  visualization client and carrier through id
 */
type Props = {}
const WidgetTableAndCard: FC<Props> = memo(() => {
  const [isChecked, setIsChecked] = React.useState(false)
  const [isPending, startTransition] = React.useTransition()

  const { loading, data } = useDataContext()

  const handleSwitchChange = () => {
    startTransition(() => {
      setIsChecked((prev) => !prev)
    })
  }

  return (
    <section className="mt-4">
      <section className="flex justify-between items-center">
        <h2 className="text-lg font-medium flex-1">Summary ({data.data_table?.length ?? 0})</h2>

        <div className="flex items-center gap-4">
          <Label htmlFor="data-mode">Table Mode</Label>
          <Switch id="data-mode" checked={isChecked} onClick={handleSwitchChange} />
          <Label htmlFor="data-mode">Card Mode</Label>
        </div>
      </section>

      {!loading && !isPending && !isChecked && (
        <Table className="mt-4">
          <TableHeader>
            <Header />
          </TableHeader>
          <TableBody>{data?.data_table?.map((value, index) => <Row value={value} key={index} />)}</TableBody>
        </Table>
      )}

      {!loading && !isPending && isChecked && (
        <section className="grid grid-cols-3 gap-4 mt-4">
          {data?.data_table?.map((value, index) => <WidgetCard value={value} key={index} />)}
        </section>
      )}

      {(loading || isPending) && (
        <div className="mt-4">
          <SkeletonTable />
        </div>
      )}
    </section>
  )
})

export default WidgetTableAndCard
