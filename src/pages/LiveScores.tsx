import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  fetchLiveEvents,
  liveEventsSelector
} from '../state/slices/liveEventsSlice'
import type { AppDispatch } from '../store'

import EventsSplash from '../components/events/EventsSplash'
import Filters from '../components/filters/Filters'
import EventsGroup from '../components/events/EventsGroup'
import Coupon from '../components/coupon/Coupon'

const LiveScores = () => {
  const dispatch = useDispatch<AppDispatch>()
  const { data, loading, hasErrors } = useSelector(liveEventsSelector)

  useEffect(() => {
    dispatch(fetchLiveEvents())
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
      <div className="mt-8 flex w-full flex-col rounded-lg shadow-lg lg:w-3/4">
        {data.stm[0]?.marketHeader && <Filters />}
        <div className="relative">
          <EventsGroup data={data.stm} />
          <EventsGroup data={data.spg} />
        </div>
      </div>
      <Coupon />
    </div>
  )
}

export default LiveScores
