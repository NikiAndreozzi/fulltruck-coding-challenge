import { DataTable, Histograms, Kpis, Scalars, StatisticsResponse, UIState } from '@/hook/response'
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
  | { type: 'SET_KPIS'; payload: Kpis | null }
  | { type: 'SET_SCALARS'; payload: Scalars | null }
  | { type: 'SET_ERROR'; payload: any }
  | { type: 'SET_LOADING'; payload: boolean }

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

const reducerData = (
  state: StatisticsResponse & UIState,
  action: ActionData
): StatisticsResponse & UIState => {
  switch (action.type) {
    case 'SET_DATA_TABLE':
      return { ...state, data_table: action.payload }
    case 'SET_HISTOGRAMS':
      return { ...state, histograms: action.payload }
    case 'SET_KPIS':
      return { ...state, kpis: action.payload }
    case 'SET_SCALARS':
      return { ...state, scalars: action.payload }
    case 'SET_ERROR':
      return { ...state, error: action.payload }
    case 'SET_LOADING':
      return { ...state, loading: action.payload }
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

const initialStateData: StatisticsResponse & UIState = {
  data_table: [],
  histograms: null,
  kpis: null,
  scalars: null,
  error: null,
  loading: false,
}

type DataContextProps = {
  data: StatisticsResponse & UIState
  dispatchFilters: React.Dispatch<ActionFilters>
  dispatchData: React.Dispatch<ActionData>
  filters: Filters
}

const DataContext = createContext<DataContextProps>({
  data: initialStateData,
  dispatchFilters: () => {},
  dispatchData: () => {},
  filters: initialStateFilters,
})

interface DataProviderProps {
  children?: React.ReactNode
}

const DataProvider: FC<DataProviderProps> = ({ children }) => {
  const [filters, dispatchFilters] = React.useReducer(reducerFilters, initialStateFilters)
  const [data, dispatchData] = React.useReducer(reducerData, initialStateData)

  const resp = useStatistics()

  useEffect(() => {
    dispatchData({ type: 'SET_LOADING', payload: true })
    /* TODO filters BE */
    resp
      .fetchStatistics({
        aggregateBy: filters.aggregateBy,
        timeTarget: filters.timeTarget,
        startDate: filters.startDate,
        endDate: filters.endDate,
      })
      .then((resp) => {
        dispatchData({ type: 'SET_DATA_TABLE', payload: resp?.data_table ?? [] })
        dispatchData({ type: 'SET_HISTOGRAMS', payload: resp?.histograms ?? null })
        dispatchData({ type: 'SET_KPIS', payload: resp?.kpis ?? null })
        dispatchData({ type: 'SET_SCALARS', payload: resp?.scalars ?? null })
      })
      .catch((err) => dispatchData({ type: 'SET_ERROR', payload: err }))
      .finally(() => dispatchData({ type: 'SET_LOADING', payload: false }))
  }, [filters])

  const contextValue: DataContextProps = useMemo(
    () => ({
      data,
      dispatchFilters,
      dispatchData,
      filters,
    }),
    [data, filters]
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
