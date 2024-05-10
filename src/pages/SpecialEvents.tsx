import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Disclosure } from '@headlessui/react'
import type { AppDispatch } from '../store'

import {
  fetchSpecialEvents,
  specialEventsSelector
} from '../state/slices/specialEventsSlice'

import EventsSplash from '../components/events/EventsSplash'
import Coupon from '../components/coupon/Coupon'
import { ChevronDownIcon } from '@heroicons/react/24/outline'

const SpecialEvents = () => {
  const dispatch = useDispatch<AppDispatch>()
  const { data, loading, hasErrors } = useSelector(specialEventsSelector)

  useEffect(() => {
    dispatch(fetchSpecialEvents())
  }, [dispatch])

  if (loading) return <EventsSplash />

  if (hasErrors)
    return (
      <div className="min-h-screen py-10 sm:px-6 lg:px-16">
        <p className="text-red-500">Cannot display special events...</p>
      </div>
    )

  return (
    <div className="flex w-full pb-10 lg:space-x-2">
      <div className="mx-auto mt-8 flex w-full flex-col rounded-lg bg-white p-3 shadow-lg dark:bg-gray-900 lg:w-3/4">
        {data?.map((value: any, index: number) => (
          <Disclosure key={index}>
            {({ open }) => (
              <>
                <h3
                  className={`flex h-9 items-center bg-gray-800 px-3 text-sm font-semibold text-gray-100 ${
                    index === 0 && 'rounded-t'
                  }`}
                >
                  {value.groupName}
                </h3>
                <Disclosure.Button className="flex w-full justify-between bg-gray-300 px-4 py-2 text-left text-sm font-medium text-gray-900 hover:bg-gray-400 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                  <div className="flex space-x-2">
                    <div className="inline-flex">
                      <span className="size-5 rounded bg-red-500 text-center text-gray-100">
                        {value.eventGroup[0].eventResponse[0].mb}
                      </span>
                    </div>
                    <div className="flex flex-col space-y-2">
                      <h4 className="font-semibold">
                        {value.eventGroup[0].eventResponse[0].en}
                      </h4>
                      <h4 className="">{value.eventGroup[0].groupName}</h4>
                    </div>
                  </div>
                  <div className="inline-flex">
                    <ChevronDownIcon
                      className={`${
                        open ? 'rotate-180' : ''
                      } size-5 text-gray-500`}
                    />
                  </div>
                </Disclosure.Button>
                <Disclosure.Panel className="bg-gray-200 p-3 text-sm text-gray-500">
                  <div className="grid grid-cols-3 gap-4">
                    {value.eventGroup[0].eventResponse[0].m[0].o.map(
                      (value: any, index: number) => (
                        <button
                          key={index}
                          className="flex h-9 w-full items-center justify-between rounded bg-gray-100 py-1 pl-2 pr-1 text-gray-900 dark:bg-gray-900 dark:text-gray-100"
                        >
                          <span>{value.ona}</span>
                          <span className="rounded bg-gray-300 px-2 py-1 text-gray-900 dark:bg-gray-700 dark:text-gray-100">
                            {value.odd}
                          </span>
                        </button>
                      )
                    )}
                  </div>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        ))}
      </div>
      <Coupon />
    </div>
  )
}

export default SpecialEvents
