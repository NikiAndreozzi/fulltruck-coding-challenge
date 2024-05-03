import React, { FC, memo } from 'react'
import { Table, TableBody, TableHeader } from '@/components/ui/table'
import Header from './Header'
import Row from './Row'

type Props = {}
/* {
  "active_carrier": 8, il numero di operatori attivi su la rispettiva data.
  "active_client": 8, il numero di clienti attivi su la rispettiva data.
  "aggregate_date": "2024-03-07T00:00:00", la data per la quale i dati vengono aggregati.
  "assigned_count": 10, il numero di ordini assegnati
  "margin_abs": 870, margine assoluto
  "margin_abs_per_order": 87,  margine assoluto per ordine
  "margin_perc": 0.08223062381852551, percentuale di margine
  "new_carriers": 0,
  "new_clients": 0,
  "order_count": 13, il numero di ordini totale
  "order_per_period": 13,
  "revenue": 13170, entrate totali
  "revenue_assigned": 10580, entrate ordini assegnati (ordine per il quale è stato trovato un corriere)
  "revenue_per_order": 1013.0769230769231 entrata per ordine
} */
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
