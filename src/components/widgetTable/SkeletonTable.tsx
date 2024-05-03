import React, { FC, memo } from 'react'
import { Skeleton } from '../ui/skeleton'

const SkeletonTable: FC = memo(() => {
  return (
    <div className="space-y-4">
      <Skeleton className="w-full h-[1.5rem] rounded-full" />
      <Skeleton className="w-full h-[1.5rem] rounded-full" />
      <Skeleton className="w-full h-[1.5rem] rounded-full" />
      <Skeleton className="w-full h-[1.5rem] rounded-full" />
      <Skeleton className="w-full h-[1.5rem] rounded-full" />
    </div>
  )
})

export default SkeletonTable
