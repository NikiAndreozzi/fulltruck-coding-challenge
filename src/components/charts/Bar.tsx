import { BarDatum, ResponsiveBar } from '@nivo/bar'
const data1 = [
  {
    country: 'AD',
    'hot dog': 76,
    'hot dogColor': 'hsl(217, 70%, 50%)',
    burger: 127,
    burgerColor: 'hsl(109, 70%, 50%)',
    sandwich: 138,
    sandwichColor: 'hsl(195, 70%, 50%)',
    kebab: 97,
    kebabColor: 'hsl(120, 70%, 50%)',
    fries: 170,
    friesColor: 'hsl(35, 70%, 50%)',
    donut: 159,
    donutColor: 'hsl(360, 70%, 50%)',
  },
  {
    country: 'AE',
    'hot dog': 106,
    'hot dogColor': 'hsl(215, 70%, 50%)',
    burger: 81,
    burgerColor: 'hsl(111, 70%, 50%)',
    sandwich: 156,
    sandwichColor: 'hsl(25, 70%, 50%)',
    kebab: 143,
    kebabColor: 'hsl(243, 70%, 50%)',
    fries: 160,
    friesColor: 'hsl(24, 70%, 50%)',
    donut: 106,
    donutColor: 'hsl(66, 70%, 50%)',
  },
  {
    country: 'AF',
    'hot dog': 110,
    'hot dogColor': 'hsl(195, 70%, 50%)',
    burger: 126,
    burgerColor: 'hsl(115, 70%, 50%)',
    sandwich: 73,
    sandwichColor: 'hsl(196, 70%, 50%)',
    kebab: 116,
    kebabColor: 'hsl(307, 70%, 50%)',
    fries: 135,
    friesColor: 'hsl(313, 70%, 50%)',
    donut: 199,
    donutColor: 'hsl(34, 70%, 50%)',
  },
  {
    country: 'AG',
    'hot dog': 97,
    'hot dogColor': 'hsl(14, 70%, 50%)',
    burger: 117,
    burgerColor: 'hsl(230, 70%, 50%)',
    sandwich: 189,
    sandwichColor: 'hsl(56, 70%, 50%)',
    kebab: 164,
    kebabColor: 'hsl(164, 70%, 50%)',
    fries: 60,
    friesColor: 'hsl(302, 70%, 50%)',
    donut: 163,
    donutColor: 'hsl(159, 70%, 50%)',
  },
  {
    country: 'AI',
    'hot dog': 175,
    'hot dogColor': 'hsl(306, 70%, 50%)',
    burger: 6,
    burgerColor: 'hsl(114, 70%, 50%)',
    sandwich: 53,
    sandwichColor: 'hsl(220, 70%, 50%)',
    kebab: 134,
    kebabColor: 'hsl(242, 70%, 50%)',
    fries: 107,
    friesColor: 'hsl(108, 70%, 50%)',
    donut: 56,
    donutColor: 'hsl(140, 70%, 50%)',
  },
  {
    country: 'AL',
    'hot dog': 56,
    'hot dogColor': 'hsl(48, 70%, 50%)',
    burger: 172,
    burgerColor: 'hsl(46, 70%, 50%)',
    sandwich: 195,
    sandwichColor: 'hsl(150, 70%, 50%)',
    kebab: 21,
    kebabColor: 'hsl(337, 70%, 50%)',
    fries: 102,
    friesColor: 'hsl(33, 70%, 50%)',
    donut: 138,
    donutColor: 'hsl(172, 70%, 50%)',
  },
  {
    country: 'AM',
    'hot dog': 74,
    'hot dogColor': 'hsl(196, 70%, 50%)',
    burger: 151,
    burgerColor: 'hsl(160, 70%, 50%)',
    sandwich: 158,
    sandwichColor: 'hsl(183, 70%, 50%)',
    kebab: 114,
    kebabColor: 'hsl(60, 70%, 50%)',
    fries: 124,
    friesColor: 'hsl(212, 70%, 50%)',
    donut: 181,
    donutColor: 'hsl(36, 70%, 50%)',
  },
]
const ChartBar = ({ data, keys }: { data: BarDatum[]; keys: string[] }) => (
  <ResponsiveBar
    data={data}
    keys={keys}
    indexBy="date"
    margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
    padding={0.3}
    valueScale={{ type: 'linear' }}
    indexScale={{ type: 'band', round: true }}
    colors={{ scheme: 'nivo' }}
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
      legend: 'country',
      legendPosition: 'middle',
      legendOffset: 32,
      truncateTickAt: 0,
    }}
    axisLeft={{
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: 'food',
      legendPosition: 'middle',
      legendOffset: -40,
      truncateTickAt: 0,
    }}
    labelSkipWidth={12}
    labelSkipHeight={12}
    labelTextColor={{
      from: 'color',
      modifiers: [['darker', 1.6]],
    }}
    legends={[
      {
        dataFrom: 'keys',
        anchor: 'bottom-right',
        direction: 'column',
        justify: false,
        translateX: 120,
        translateY: 0,
        itemsSpacing: 2,
        itemWidth: 100,
        itemHeight: 20,
        itemDirection: 'left-to-right',
        itemOpacity: 0.85,
        symbolSize: 20,
        effects: [
          {
            on: 'hover',
            style: {
              itemOpacity: 1,
            },
          },
        ],
      },
    ]}
    role="application"
    ariaLabel="Nivo bar chart demo"
    barAriaLabel={(e) => e.id + ': ' + e.formattedValue + ' in country: ' + e.indexValue}
  />
)

export default ChartBar
