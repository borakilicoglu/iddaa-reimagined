import React from 'react'
import ReactCountryFlag from 'react-country-flag'
import { ClockIcon } from '@heroicons/react/24/outline'

interface PopularEventsProps {
  data: Event[]
  title: string
}

export const PopularEvents: React.FC<PopularEventsProps> = ({
  data,
  title
}) => {
  return (
    <div className="w-full rounded-lg shadow-lg lg:w-1/2">
      <div className="flex h-10 items-center space-x-1 rounded-t-lg bg-gray-800 px-2 text-sm font-semibold text-gray-200 dark:text-gray-300">
        <ClockIcon className="size-5 text-yellow-400" />
        <span>{title}</span>
      </div>
      <div className="divide-y divide-gray-200">
        {data?.map((event: any, index, array) => (
          <div className="w-full" key={index}>
            <div
              className={`space-y-2 bg-white p-2 dark:bg-gray-900 ${
                index + 1 === array.length && 'rounded-b-lg'
              }`}
            >
              <div className="flex flex-col space-y-2">
                <div className="flex items-center space-x-2">
                  <ReactCountryFlag
                    countryCode={event.cnid}
                    svg
                    style={{
                      fontSize: '1.5em',
                      lineHeight: '2em'
                    }}
                    aria-label={event.en}
                  />
                  <p className="truncate text-base font-bold text-gray-700 dark:text-gray-100">
                    {event.en}
                  </p>
                </div>
                <div className="flex text-xs">
                  <div className="flex grow space-x-3.5">
                    <span className="ml-1.5 dark:text-gray-200">
                      {event.cnid}
                    </span>
                    <p className="dark:text-gray-300">{event.ede}</p>
                  </div>
                  <span className="text-gray-600 dark:text-gray-300">
                    {event.edh}
                  </span>
                </div>
              </div>
              <div className="mt-6 flex space-x-2">
                {event.m[0].o.map((match: any, id: number) => (
                  <button
                    key={id}
                    className="flex flex-1 justify-between rounded border bg-gray-100 px-1.5 py-1 text-sm hover:bg-yellow-300 focus:outline-none dark:border-gray-800 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-800"
                  >
                    <span>{match.ona}</span>
                    <span className="flex items-center">
                      <span className="flex flex-1 items-center">
                        {match.odd > parseFloat(match.oodd) ? (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            className="size-5 text-green-500"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M7 11l5-5m0 0l5 5m-5-5v12"
                            ></path>
                          </svg>
                        ) : (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            className="size-5 text-red-500"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M17 13l-5 5m0 0l-5-5m5 5V6"
                            ></path>
                          </svg>
                        )}
                      </span>
                      <span className="font-bold">{match.odd}</span>
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
