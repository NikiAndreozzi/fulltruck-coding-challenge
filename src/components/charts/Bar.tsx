import { BarDatum, ResponsiveBar } from '@nivo/bar'

type ChartBar = {
  data: BarDatum[]
  keys: string[]
  axisBottomLegend?: string
  axisLeftLegend?: string
  scheme?: 'nivo' | 'accent' | 'pastel1' | 'pastel2' | 'paired'
}

const formatLabel = (value: number, keys: string[]) => {
  if (keys[0] === 'margin_abs') return value.toLocaleString('it-IT', { style: 'currency', currency: 'EUR' })
  if (keys[0] === 'margin_perc') return `${value.toString().slice(0, 5)}%`
  return value.toString()
}
const ChartBar = ({ data, keys, axisBottomLegend, axisLeftLegend, scheme = 'nivo' }: ChartBar) => (
  <ResponsiveBar
    data={data}
    keys={keys}
    indexBy="date"
    margin={{ top: 30, right: 0, bottom: 50, left: keys[0] === 'margin_abs' ? 100 : 60 }}
    padding={0.3}
    valueScale={{ type: 'linear' }}
    indexScale={{ type: 'band', round: true }}
    colors={{ scheme }}
    defs={[
      {
        id: 'dots',
        type: 'patternDots',
        background: 'inherit',
        color: '#38bcb2',
        size: 4,
        padding: 1,
        stagger: true,
      },
      {
        id: 'lines',
        type: 'patternLines',
        background: 'inherit',
        color: '#eed312',
        rotation: -45,
        lineWidth: 6,
        spacing: 10,
      },
    ]}
    minValue={0}
    maxValue="auto"
    fill={[
      {
        match: {
          id: 'fries',
        },
        id: 'dots',
      },
      {
        match: {
          id: 'sandwich',
        },
        id: 'lines',
      },
    ]}
    borderColor={{
      from: 'color',
      modifiers: [['darker', 1.6]],
    }}
    axisTop={null}
    axisRight={null}
    axisBottom={{
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: axisBottomLegend,
      legendPosition: 'middle',
      legendOffset: 40,
      truncateTickAt: 0,
    }}
    axisLeft={{
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: axisLeftLegend,
      legendPosition: 'middle',
      legendOffset: keys[0] === 'margin_abs' ? -90 : -50,
      truncateTickAt: 0,
      format: (value) => formatLabel(value, keys),
    }}
    labelSkipWidth={12}
    labelSkipHeight={12}
    labelTextColor={{
      from: 'color',
      modifiers: [['darker', 1.6]],
    }}
    valueFormat={(value) => formatLabel(value, keys)}
    role="application"
    ariaLabel="bar chart"
  />
)

export default ChartBar
