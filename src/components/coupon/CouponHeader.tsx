import React from 'react'

const CouponHeader = ({ data }: { data: any }) => {
  return (
    <div className="mb-2 flex h-9 justify-between space-x-2 p-3 text-sm font-medium text-gray-100">
      <button className="flex h-9 flex-1 items-center justify-center space-x-1 rounded bg-[#059669] font-semibold">
        <span>Kuponum</span>
        {data.length > 0 && (
          <span className="flex size-5 items-center justify-center rounded-full bg-yellow-400 text-xs">
            {data.length}
          </span>
        )}
      </button>
      <button className="h-9 flex-1 rounded bg-gray-200 font-semibold text-gray-800 hover:bg-[#059669] hover:text-white dark:bg-gray-800 dark:text-gray-100 dark:hover:bg-[#059669]">
        Kuponlarım
      </button>
    </div>
  )
}

export default CouponHeader
