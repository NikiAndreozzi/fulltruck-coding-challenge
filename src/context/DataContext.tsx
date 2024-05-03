import { DataTable } from '@/hook/response'
import useStatistics from '@/hook/useStatistics'
import { Filters } from '@/models/filters'
import React, { FC, createContext, useMemo, useEffect } from 'react'

type Action =
  | { type: 'SET_START_DATE'; payload: string | null }
  | { type: 'SET_END_DATE'; payload: string | null }
  | { type: 'SET_TIME_TARGET'; payload: 'pickup_date' | 'created_at' }
  | { type: 'SET_AGGREGATE_BY'; payload: 'day' | 'week' | 'month' }

const reducer = (state: Filters, action: Action): Filters => {
  switch (action.type) {
    case 'SET_START_DATE':
      return { ...state, startDate: action.payload }
    case 'SET_END_DATE':
      return { ...state, endDate: action.payload }
    case 'SET_TIME_TARGET':
      return { ...state, timeTarget: action.payload }
    case 'SET_AGGREGATE_BY':
      return { ...state, aggregateBy: action.payload }
    default:
      return state
  }
}

const initialState: Filters = {
  startDate: null,
  endDate: null,
  timeTarget: 'created_at',
  aggregateBy: 'day',
}

type DataContextProps = {
  dataTable: DataTable[]
  dispatch: React.Dispatch<Action>
  loading: boolean
}

const DataContext = createContext<DataContextProps>({ dataTable: [], dispatch: () => {}, loading: false })

interface DataProviderProps {
  children?: React.ReactNode
}

const DataProvider: FC<DataProviderProps> = ({ children }) => {
  const [filters, dispatch] = React.useReducer(reducer, initialState)
  const [loading, setLoading] = React.useState(false)
  const [dataTable, setDataTable] = React.useState<DataTable[]>([])
  const resp = useStatistics()

  useEffect(() => {
    setLoading(true)
    /* TODO filters BE */
    resp
      .fetchStatistics({
        aggregateBy: filters.aggregateBy,
        timeTarget: filters.timeTarget,
        startDate: filters.startDate,
        endDate: filters.endDate,
      })
      .then((resp) => {
        setDataTable(resp?.data_table ?? [])
      })
      .finally(() => setLoading(false))
  }, [filters])

  /*   const aggregatedData = dataTable.reduce((acc, currentValue) => {
    const date = new Date(currentValue.aggregate_date).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric' });
    //const date = new Date(currentValue.aggregate_date).toLocaleDateString(); // Get the date part only
    if (!acc[date]) {
      acc[date] = [];
    }
    acc[date].push(currentValue);
    return acc;
  }, {} as Record<string, DataTable[]>);
  
  const aggregatedArray = Object.entries(aggregatedData).map(([date, values]) => ({
    date,
    values,
  })); */

  //fetchStatistics({ aggregateBy: 'day', timeTarget: 'pickup_date', startDate: null, endDate: null }).then((resp) => console.log(resp))

  const contextValue: DataContextProps = useMemo(
    () => ({
      dataTable,
      dispatch,
      loading,
    }),
    [dataTable, loading]
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
