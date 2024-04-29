import { FC } from 'react'
import useStatistics from './hook/useStatistics'
import Navbar from './components/navbar/Navbar'

const WelcomePage: FC = () => {
  const resp = useStatistics()
  resp.then((resp) => console.log(resp))
  //fetchStatistics({ aggregateBy: 'day', timeTarget: 'pickup_date', startDate: null, endDate: null }).then((resp) => console.log(resp))
  return (
    <section className="h-full w-full">
      <Navbar />

      <section className="container mx-auto max-h-base h-full overflow-y-auto">asd</section>
    </section>
  )
}

export default WelcomePage
