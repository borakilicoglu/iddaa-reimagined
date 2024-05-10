import { useDispatch, useSelector } from 'react-redux'

import {
  addEvent,
  updateEvent,
  couponSelector,
  removeEvent
} from '../../state/slices/couponSlice'

import LiveEventOdds from './LiveEventOdds'
import { ClockIcon } from '@heroicons/react/24/solid'
import { AppDispatch } from 'store'

const Events = ({
  eventResponse,
  last
}: {
  eventResponse: any
  last: boolean
}) => {
  const dispatch = useDispatch<AppDispatch>()
  const { data } = useSelector(couponSelector)

  const dispatchEvent = (event: any) => {
    const found = data.find((value: any) => value.bid === event.bid)
    return !found
      ? dispatch(addEvent(event))
      : found.ov !== event.ov
        ? dispatch(updateEvent(event))
        : dispatch(removeEvent(event.bid))
  }

  return eventResponse.map(
    (event: any, index: any, { length }: { length: number }) => (
      <div
        className={`z-10 flex divide-x divide-gray-200 overflow-auto border-b bg-white dark:divide-gray-800 dark:border-gray-800 dark:bg-gray-900
        ${length === index + 1 && last && 'rounded-b-lg'}`}
        key={index}
      >
        <div className="flex w-2/6 items-center pl-3 pr-2.5">
          {event.mb && (
            <div className="mr-2">
              <div
                className={`flex size-5 items-center justify-center rounded-sm text-center text-white ${
                  event.mb === 3
                    ? 'bg-gray-600'
                    : event.mb === 1
                      ? 'bg-red-500'
                      : 'bg-gray-500'
                }`}
              >
                {event.mb}
              </div>
            </div>
          )}
          <div className="flex w-full items-center justify-between truncate dark:text-gray-300">
            <div className="flex items-center space-x-1">
              <div className="flex flex-col">
                <span>{event.eprt[0].acr}</span>
                <span>{event.eprt[1].acr}</span>
              </div>
              <span className="font-semibold text-green-500">
                {event.spc && event.spc?.sc}
              </span>
            </div>
            <span className={` ${event.spc && 'font-semibold text-red-500'}`}>
              {event.spc ? event.spc?.min : event.edh}
            </span>
          </div>
        </div>

        <div className="w-4/6 overflow-y-hidden overflow-x-scroll">
          <div className="inline-flex h-9 divide-x divide-gray-200 dark:divide-gray-800 md:flex">
            <LiveEventOdds
              event={event}
              a={data.find((item: any) => item.bid === event.bid)}
              dispatchEvent={dispatchEvent}
            />
          </div>
        </div>
      </div>
    )
  )
}

const LiveEventsGroup = ({ data, name }: { data: any; name?: string }) => {
  return data.map((value: any, index: any, { length }: { length: number }) => (
    <div className="flex flex-col text-xs" key={index}>
      <div className="sticky top-28 z-30 flex h-9 divide-x divide-gray-900 bg-gray-700 font-semibold text-gray-100">
        <div className="flex w-2/6 items-center justify-between truncate px-3">
          <span>{name === 'stm' ? 'Canlı Maçlar' : value.groupName}</span>
          <span>
            <ClockIcon className="size-5 text-gray-500" />
          </span>
        </div>
        <div className="w-4/6 overflow-y-hidden overflow-x-scroll">
          <div className="inline-flex h-9 divide-x divide-gray-900 md:flex">
            {value.marketHeader.map((parent: any) =>
              parent.ona.map((child: any, index: any) => (
                <div
                  key={index}
                  className="flex w-12 items-center justify-center overflow-hidden text-xs md:flex-1"
                >
                  {parent.mn.split(' ').map((value: any, index: any) => (
                    <small key={index}>{value.charAt(0)}</small>
                  ))}
                  <small>.{child}</small>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
      {
        <Events
          eventResponse={value.eventGroup[0].eventResponse}
          last={name !== 'stm' && length === index + 1}
        />
      }
    </div>
  ))
}

export default LiveEventsGroup
