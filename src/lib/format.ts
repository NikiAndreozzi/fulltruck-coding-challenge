import { format } from 'date-fns'

const formatEuro = (value: number) => {
  return value ? value.toLocaleString('it-IT', { style: 'currency', currency: 'EUR' }) : 0
}

const formatDate = (value: string) => {
  return value ? format(new Date(value), 'dd-MM-yyyy') : ''
}

const formatPercent = (value: number) => {
  return value ? `${value.toString().slice(0, 5)}%` : 0
}

export { formatEuro, formatPercent, formatDate }
