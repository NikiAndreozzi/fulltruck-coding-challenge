import { useDataContext } from '@/context/DataContext'
import React, { FC, memo } from 'react'
import SkeletonTable from '../widgetTableAndCard/SkeletonTable'
import { formatEuro, formatPercent } from '@/lib/format'

const Summary: FC = memo(() => {
  const { data } = useDataContext()

  return (
    <section>
      {!data.loading && data.scalars && (
        <>
          <section className="w-full p-8 border rounded-lg bg-card">
            <div className="text-lg font-medium flex-1 flex gap-2 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-8 h-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 21v-7.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349M3.75 21V9.349m0 0a3.001 3.001 0 0 0 3.75-.615A2.993 2.993 0 0 0 9.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 0 0 2.25 1.016c.896 0 1.7-.393 2.25-1.015a3.001 3.001 0 0 0 3.75.614m-16.5 0a3.004 3.004 0 0 1-.621-4.72l1.189-1.19A1.5 1.5 0 0 1 5.378 3h13.243a1.5 1.5 0 0 1 1.06.44l1.19 1.189a3 3 0 0 1-.621 4.72M6.75 18h3.75a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75H6.75a.75.75 0 0 0-.75.75v3.75c0 .414.336.75.75.75Z"
                />
              </svg>
              <span>Summary</span>
            </div>

            <section className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-4">
              <div className="text-lg bg-accent rounded-lg p-4">
                <div className="text-primary flex gap-2 items-center">
                  Active carriers{' '}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 17.25 12 21m0 0-3.75-3.75M12 21V3"
                    />
                  </svg>
                </div>
                <p className="font-bold text-orange-500">{data.scalars?.active_carriers ?? 0}</p>
              </div>

              <div className="text-lg bg-accent rounded-lg p-4">
                <div className="text-primary flex gap-2 items-center">
                  Active clients{' '}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.25 6.75 12 3m0 0 3.75 3.75M12 3v18"
                    />
                  </svg>
                </div>
                <p className="font-bold text-green-500">{data.scalars?.active_clients ?? 0}</p>
              </div>

              <div className="text-lg bg-accent rounded-lg p-4">
                <div className="text-primary flex gap-2 items-center">
                  New carriers{' '}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.25 6.75 12 3m0 0 3.75 3.75M12 3v18"
                    />
                  </svg>
                </div>
                <p className="font-bold text-green-500">{data.scalars?.new_carriers ?? 0}</p>
              </div>

              <div className="text-lg bg-accent rounded-lg p-4">
                <div className="text-primary flex gap-2 items-center">
                  New clients{' '}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.25 6.75 12 3m0 0 3.75 3.75M12 3v18"
                    />
                  </svg>
                </div>
                <p className="font-bold text-green-500">{data.scalars?.new_clients ?? 0}</p>
              </div>
            </section>
          </section>

          <div className="flex gap-4 mt-8 flex-wrap">
            <section className="w-full p-8 border rounded-lg bg-card">
              <div className="text-lg font-medium flex-1 flex gap-2 items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-8 h-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 15.75V18m-7.5-6.75h.008v.008H8.25v-.008Zm0 2.25h.008v.008H8.25V13.5Zm0 2.25h.008v.008H8.25v-.008Zm0 2.25h.008v.008H8.25V18Zm2.498-6.75h.007v.008h-.007v-.008Zm0 2.25h.007v.008h-.007V13.5Zm0 2.25h.007v.008h-.007v-.008Zm0 2.25h.007v.008h-.007V18Zm2.504-6.75h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V13.5Zm0 2.25h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V18Zm2.498-6.75h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V13.5ZM8.25 6h7.5v2.25h-7.5V6ZM12 2.25c-1.892 0-3.758.11-5.593.322C5.307 2.7 4.5 3.65 4.5 4.757V19.5a2.25 2.25 0 0 0 2.25 2.25h10.5a2.25 2.25 0 0 0 2.25-2.25V4.757c0-1.108-.806-2.057-1.907-2.185A48.507 48.507 0 0 0 12 2.25Z"
                  />
                </svg>

                <span>Average</span>
              </div>

              <section className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-4">
                <div className="text-lg bg-accent rounded-lg p-4">
                  <div className="text-primary flex gap-2 items-center">
                    Avg margin %{' '}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 17.25 12 21m0 0-3.75-3.75M12 21V3"
                      />
                    </svg>
                  </div>
                  <p className="font-bold text-orange-500">
                    {formatPercent(data.scalars?.average_margin_perc)}
                  </p>
                </div>

                <div className="text-lg bg-accent rounded-lg p-4">
                  <div className="text-primary flex gap-2 items-center">
                    Avg order margin abs{' '}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8.25 6.75 12 3m0 0 3.75 3.75M12 3v18"
                      />
                    </svg>
                  </div>
                  <p className="font-bold text-green-500">
                    {formatPercent(data.scalars?.avg_order_margin_abs)}
                  </p>
                </div>

                <div className="text-lg bg-accent rounded-lg p-4">
                  <div className="text-primary flex gap-2 items-center">
                    Avg order revenue{' '}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8.25 6.75 12 3m0 0 3.75 3.75M12 3v18"
                      />
                    </svg>
                  </div>
                  <p className="font-bold text-green-500">{formatEuro(data.scalars?.avg_order_revenue)}</p>
                </div>
              </section>
            </section>

            <section className="w-full p-8 border rounded-lg bg-card">
              <div className="text-lg font-medium flex-1 flex gap-2 items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-8 h-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14.25 7.756a4.5 4.5 0 1 0 0 8.488M7.5 10.5h5.25m-5.25 3h5.25M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>

                <span>Total</span>
              </div>

              <section className="grid grid-cols-1 xl:grid-cols-4 gap-4 mt-4">
                <div className="text-lg bg-accent rounded-lg p-4">
                  <div className="text-primary flex gap-2 items-center">Total assigned</div>
                  <p className="font-bold">{data.scalars?.total_assigned_count ?? 0}</p>
                </div>

                <div className="text-lg bg-accent rounded-lg p-4">
                  <div className="text-primary flex gap-2 items-center">Total margin abs</div>
                  <p className="font-bold">{formatEuro(data.scalars?.total_margin_abs)}</p>
                </div>

                <div className="text-lg bg-accent rounded-lg p-4">
                  <div className="text-primary flex gap-2 items-center">Total order</div>
                  <p className="font-bold">{data.scalars?.total_order_count ?? 0}</p>
                </div>

                <div className="text-lg bg-accent rounded-lg p-4">
                  <div className="text-primary flex gap-2 items-center">Total revenue</div>
                  <p className="font-bold">{formatEuro(data.scalars?.total_revenue)}</p>
                </div>
              </section>
            </section>
          </div>
        </>
      )}

      {data.loading && (
        <div className="mt-4">
          <SkeletonTable />
        </div>
      )}
    </section>
  )
})

export default Summary
