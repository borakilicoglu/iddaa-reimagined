import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchEvents, eventsSelector } from '../state/slices/eventsSlice'
import { fetchLiveEvents } from '../state/slices/liveEventsSlice'

import EventsSplash from '../components/events/EventsSplash'
import Coupon from '../components/coupon/Coupon'
import { PopularEvents } from 'components/common/PopularEvents'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules'
import { ArrowDownIcon, ArrowUpIcon } from '@heroicons/react/24/outline'
import { AppDispatch } from 'store'

const Home = () => {
  const dispatch = useDispatch<AppDispatch>()
  const { data, loading, hasErrors } = useSelector(eventsSelector)

  useEffect(() => {
    dispatch(fetchEvents())
    dispatch(fetchLiveEvents())
  }, [dispatch])

  if (loading) return <EventsSplash />

  if (hasErrors)
    return (
      <div className="min-h-screen px-4 py-10 sm:px-6 lg:px-16">
        <p className="text-red-500">Cannot display events...</p>
      </div>
    )

  return (
    <div className="flex w-full pb-10 lg:space-x-2">
      <div className="mt-8 w-full lg:w-3/4">
        <div className="mb-8">
          <Swiper
            modules={[Navigation, Pagination, Mousewheel, Keyboard]}
            cssMode={true}
            navigation={true}
            pagination={true}
            mousewheel={true}
            keyboard={true}
            className="h-80 w-full rounded-lg shadow-lg"
          >
            {data[0].eventGroup[0].eventResponse
              .slice(0, 5)
              .map((value: any, index: number) => (
                <SwiperSlide key={index}>
                  <div className="flex h-80 w-full items-center text-center">
                    <div className="flex w-full flex-col items-center">
                      <p className="mb-8 skew-y-6 bg-yellow-300 px-2 py-1 text-2xl font-semibold text-gray-800">
                        CANLI İZLE CANLI OYNA
                      </p>
                      <p className="mb-2 text-4xl font-bold leading-none text-gray-800">
                        {value.edh}
                      </p>
                      <p className="mb-4 text-4xl font-bold leading-none text-gray-100">
                        {value.en}
                      </p>
                      <div className="flex w-5/6 space-x-2 md:w-1/3">
                        {value.m[0].o.map((value: any, index: number) => (
                          <button
                            className="flex flex-1 items-center justify-between rounded border bg-gray-100 px-1.5 py-1 text-sm hover:bg-yellow-300 focus:outline-none dark:border-gray-800 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-800"
                            key={index}
                          >
                            <span>{value.sona}</span>
                            <span className="flex items-center">
                              <span className="flex flex-1 items-center">
                                {value.odd > parseFloat(value.oodd) ? (
                                  <ArrowUpIcon className="size-5 text-green-500" />
                                ) : (
                                  <ArrowDownIcon className="size-5 text-red-500" />
                                )}
                              </span>
                              <span className="font-bold">{value.odd}</span>
                            </span>
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
        {data.length && (
          <div className="flex flex-col space-y-2 lg:flex-row lg:space-x-2 lg:space-y-0">
            <PopularEvents
              data={data[0]?.eventGroup[0].eventResponse.slice(0, 10)}
              title={'YAKIN ZAMANDA BAŞLAYACAKLAR'}
            />
            <PopularEvents
              data={data[0]?.eventGroup[0].eventResponse.slice(0, 10)}
              title={'POPÜLER MAÇLAR'}
            />
          </div>
        )}
      </div>
      <Coupon />
    </div>
  )
}

export default Home
