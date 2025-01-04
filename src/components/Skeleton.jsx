import React from 'react'

const Skeleton = () => {
  return (
        <div className="animate-pulse my-10">
  {/* <div className="h-6 bg-gray-200 rounded w-3/4 mx-auto mb-10"></div> */}
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 px-20">
    <div className="h-64 bg-gray-200 rounded"></div>
    <div className="h-64 bg-gray-200 rounded"></div>
    <div className="h-64 bg-gray-200 rounded"></div>
    <div className="h-64 bg-gray-200 rounded"></div>
    <div className="h-64 bg-gray-200 rounded"></div>
    <div className="h-64 bg-gray-200 rounded"></div>
    <div className="h-64 bg-gray-200 rounded"></div>
    <div className="h-64 bg-gray-200 rounded"></div>
    <div className="h-64 bg-gray-200 rounded"></div>
    <div className="h-64 bg-gray-200 rounded"></div>
    <div className="h-64 bg-gray-200 rounded"></div>
    <div className="h-64 bg-gray-200 rounded"></div>
  </div>
  <div className="flex justify-center mt-4">
    <div className="bg-gray-200 text-white rounded px-4 py-2 w-24"></div>
  </div>
</div>
  )
}

export default Skeleton