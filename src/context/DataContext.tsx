import { DataTable, Histograms, StatisticsResponse } from '@/hook/response'
import useStatistics from '@/hook/useStatistics'
import { Filters } from '@/models/filters'
import React, { FC, createContext, useMemo, useEffect } from 'react'

type ActionFilters =
  | { type: 'SET_START_DATE'; payload: string | null }
  | { type: 'SET_END_DATE'; payload: string | null }
  | { type: 'SET_TIME_TARGET'; payload: 'pickup_date' | 'created_at' }
  | { type: 'SET_AGGREGATE_BY'; payload: 'day' | 'week' | 'month' }

type ActionData =
  | { type: 'SET_DATA_TABLE'; payload: DataTable[] }
  | { type: 'SET_HISTOGRAMS'; payload: Histograms | null }

const reducerFilters = (state: Filters, action: ActionFilters): Filters => {
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

const reducerData = (state: Partial<StatisticsResponse>, action: ActionData): Partial<StatisticsResponse> => {
  switch (action.type) {
    case 'SET_DATA_TABLE':
      return { ...state, data_table: action.payload }
    case 'SET_HISTOGRAMS':
      return { ...state, histograms: action.payload }
    default:
      return state
  }
}

const initialStateFilters: Filters = {
  startDate: null,
  endDate: null,
  timeTarget: 'created_at',
  aggregateBy: 'day',
}

const initialStateData: Partial<StatisticsResponse> = {
  data_table: [],
  histograms: null,
}

type DataContextProps = {
  data: Partial<StatisticsResponse>
  dispatchFilters: React.Dispatch<ActionFilters>
  dispatchData: React.Dispatch<ActionData>
  loading: boolean
  filters: Filters
}

const DataContext = createContext<DataContextProps>({
  data: {},
  dispatchFilters: () => {},
  dispatchData: () => {},
  loading: false,
  filters: initialStateFilters,
})

interface DataProviderProps {
  children?: React.ReactNode
}

const DataProvider: FC<DataProviderProps> = ({ children }) => {
  const [loading, setLoading] = React.useState(false)

  const [filters, dispatchFilters] = React.useReducer(reducerFilters, initialStateFilters)
  const [data, dispatchData] = React.useReducer(reducerData, initialStateData)

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
        console.log(resp)
        dispatchData({ type: 'SET_DATA_TABLE', payload: resp?.data_table ?? [] })
        dispatchData({ type: 'SET_HISTOGRAMS', payload: resp?.histograms ?? null })
      })
      .finally(() => setLoading(false))
  }, [filters])

  const contextValue: DataContextProps = useMemo(
    () => ({
      data,
      dispatchFilters,
      dispatchData,
      loading,
      filters,
    }),
    [data, loading, filters]
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
