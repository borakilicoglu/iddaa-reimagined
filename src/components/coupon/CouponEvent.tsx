import { ArrowTrendingUpIcon, XMarkIcon } from '@heroicons/react/24/outline'

const CouponEvent = ({
  value,
  removeEventPreflight
}: {
  value: any
  removeEventPreflight: any
}) => {
  return (
    <div className="flex flex-col justify-between border-b border-gray-200 p-3 dark:border-gray-800">
      <div className="mb-2 flex justify-between space-x-2">
        <button className="mt-0.5 inline-flex size-5 items-center justify-center rounded-sm border text-gray-500 dark:border-gray-600">
          B
        </button>
        <div className="flex-1 flex-col">
          <p className="font-semibold text-gray-900 dark:text-gray-100">
            {value.en}
          </p>
          <p className="text-xs text-gray-700 dark:text-gray-400">
            {value.ede} {value.edh}
          </p>
        </div>
        <button className="inline-flex">
          <XMarkIcon
            className="size-4 cursor-pointer text-gray-500 dark:text-gray-300"
            onClick={() => removeEventPreflight(value.bid)}
          />
        </button>
      </div>

      <div className="flex items-center dark:text-gray-100">
        <div>
          <span
            className={`mr-2 inline-flex size-5 items-center justify-center rounded-sm text-gray-100 ${
              value.mb === 3
                ? 'bg-gray-600'
                : value.mb === 1
                  ? 'bg-red-500'
                  : 'bg-gray-700'
            }`}
          >
            {value.mb}
          </span>
        </div>
        <div className="flex grow items-center justify-between space-x-2 text-xs">
          <div className="w-3/4">
            {value.mn}: {value.sona ? value.sona : value.ona}
          </div>
          <div className="flex text-sm font-bold">
            {value.odd.toFixed(2)}
            <ArrowTrendingUpIcon className="ml-2 size-5 text-green-500" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default CouponEvent
