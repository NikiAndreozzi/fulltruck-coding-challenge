import { FC } from 'react'
import Navbar from './components/navbar/Navbar'
import { Outlet } from 'react-router-dom'

const App: FC = () => {
  return (
    <section className="h-full w-full">
      <Navbar />

      <section className="container mx-auto max-h-base h-full overflow-y-auto px-8">
        <Outlet />
      </section>
    </section>
  )
}

export default App
