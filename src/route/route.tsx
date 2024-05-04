import ErrorPage from '@/app/errorPage'
import React from 'react'
import { Suspense } from 'react'
import { Navigate, createBrowserRouter } from 'react-router-dom'

const LazyApp = React.lazy(() => import('@/App'))
const LazyHomepage = React.lazy(() => import('@/app/homepage/Homepage'))
const LazyKpis = React.lazy(() => import('@/app/kpis/Kpis'))

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Suspense
        fallback={
          <div className="w-full h-full flex justify-center items-center text-lg font-medium">Loading...</div>
        }
      >
        <LazyApp />
      </Suspense>
    ),
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Navigate replace to="/homepage" />,
      },
      {
        path: '/homepage',
        element: (
          <Suspense
            fallback={
              <div className="w-full h-full flex justify-center items-center text-lg font-medium">
                Loading...
              </div>
            }
          >
            <LazyHomepage />
          </Suspense>
        ),
      },
      {
        path: '/kpis',
        element: (
          <Suspense
            fallback={
              <div className="w-full h-full flex justify-center items-center text-lg font-medium">
                Loading...
              </div>
            }
          >
            <LazyKpis />
          </Suspense>
        ),
      },
      {
        path: '/scalars',
        element: <div>scalars</div>,
      },
    ],
  },
])

export default router
