import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import WidgetKpisCard from '@/components/widgetKpisCard/WidgetKpisCard'
import { DataProvider } from '@/context/DataContext'
import { FC } from 'react'

const Kpis: FC = () => {
  return (
    <DataProvider>
      <Tabs defaultValue="carrier" className="w-full">
        <TabsList className="w-full">
          <TabsTrigger value="carrier" className="flex-1">
            Carrier
          </TabsTrigger>
          <TabsTrigger value="client" className="flex-1">
            Client
          </TabsTrigger>
        </TabsList>
        <TabsContent value="carrier">
          <WidgetKpisCard kpiId="carrier" />
        </TabsContent>
        <TabsContent value="client">
          <WidgetKpisCard kpiId="client" />
        </TabsContent>
      </Tabs>
    </DataProvider>
  )
}

export default Kpis
