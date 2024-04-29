import { DataTable } from '@/hook/response'
import useStatistics from '@/hook/useStatistics'
import React, { FC, createContext, useMemo, useEffect } from 'react'

type DataContextProps = {
  dataTable: DataTable[]
}
const DataContext = createContext<DataContextProps>({ dataTable: [] })

interface DataProviderProps {
  children?: React.ReactNode
}

const DataProvider: FC<DataProviderProps> = ({ children }) => {
  const [dataTable, setDataTable] = React.useState<DataTable[]>([])
  const resp = useStatistics()

  useEffect(() => {
    resp.then((resp) => {
      setDataTable(resp?.data_table ?? [])
    })
  }, [])
  //fetchStatistics({ aggregateBy: 'day', timeTarget: 'pickup_date', startDate: null, endDate: null }).then((resp) => console.log(resp))

  const contextValue: DataContextProps = useMemo(
    () => ({
      dataTable,
    }),
    [dataTable]
  )

  return <DataContext.Provider value={contextValue}>{children}</DataContext.Provider>
}

function useDataContext() {
  const context = React.useContext(DataContext)
  if (context === undefined) {
    throw new Error('useData must be used within a DataProvider')
  }
  return context
}

export { DataProvider, useDataContext }
