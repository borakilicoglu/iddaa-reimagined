import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  fetchLiveEvents,
  liveEventsSelector
} from '../state/slices/liveEventsSlice'
import { fetchEvents } from '../state/slices/eventsSlice'

import LiveEventsList from '../components/liveEvents/LiveEventsGroup'
import Filters from '../components/filters/Filters'
import Coupon from '../components/coupon/Coupon'
import EventsSplash from 'components/events/EventsSplash'
import { AppDispatch } from 'store'

const LiveEvents = () => {
  const dispatch = useDispatch<AppDispatch>()
  const { data, loading, hasErrors } = useSelector(liveEventsSelector)

  useEffect(() => {
    dispatch(fetchLiveEvents())
    dispatch(fetchEvents())
  }, [dispatch])

  if (loading) return <EventsSplash />

  if (hasErrors)
    return (
      <div className="min-h-screen py-10 sm:px-6 lg:px-16">
        <p className="text-red-500">Cannot display live events...</p>
      </div>
    )

  return (
    <div className="flex w-full pb-10 lg:space-x-2">
      <div className="mt-8 flex w-full flex-col rounded-lg bg-white shadow-lg dark:bg-gray-900 lg:w-3/4">
        <Filters />
        <LiveEventsList data={data.stm} name="stm" />
        <LiveEventsList data={data.spg} />
      </div>
      <Coupon />
    </div>
  )
}

export default LiveEvents
