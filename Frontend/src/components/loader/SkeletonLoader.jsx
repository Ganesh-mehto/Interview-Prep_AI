import React from 'react'

const SkeletonLoader = () => {
  return (
    <div className="space-y-4 animate-pulse">
      <div className="h-6 bg-gray-300 rounded w-2/3"></div>
      <div className="h-4 bg-gray-200 rounded w-1/2"></div>
      <div className="h-4 bg-gray-200 rounded w-full"></div>
      <div className="h-4 bg-gray-200 rounded w-5/6"></div>
      <div className="h-8 bg-gray-300 rounded w-full mt-4"></div>
    </div>
  )
}

export default SkeletonLoader