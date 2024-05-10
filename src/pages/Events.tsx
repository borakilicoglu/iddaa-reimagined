import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchEvents, eventsSelector } from '../state/slices/eventsSlice'
import type { AppDispatch } from '../store'

import Filters from '../components/filters/Filters'
import EventsGroup from '../components/events/EventsGroup'
import Coupon from '../components/coupon/Coupon'

const Events = () => {
  const dispatch = useDispatch<AppDispatch>()
  const { data, hasErrors } = useSelector(eventsSelector)

  useEffect(() => {
    dispatch(fetchEvents())
  }, [dispatch])

  if (hasErrors)
    return (
      <div className="min-h-screen px-4 py-10 sm:px-6 lg:px-16">
        <p className="text-red-500">Cannot display events...</p>
      </div>
    )

  return (
    <div className="flex w-full pb-10 lg:space-x-2">
      <div className="mt-8 flex w-full flex-col rounded-lg bg-white shadow-lg dark:bg-gray-900 lg:w-3/4">
        <Filters />
        {data?.length ? (
          <EventsGroup data={data} />
        ) : (
          <div className="flex h-full items-center justify-center">
            <p className="p-16 text-gray-900 dark:text-gray-100">
              Seçtiğiniz filtrelere göre sonuç bulunamadı.
            </p>
          </div>
        )}
      </div>
      <Coupon />
    </div>
  )
}

export default Events
