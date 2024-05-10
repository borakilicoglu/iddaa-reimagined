import React from 'react'
import { useDispatch } from 'react-redux'
import { fetchEventsByFilter } from 'state/slices/eventsSlice'

import { Popover } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/24/solid'
import { AppDispatch } from 'store'

const dispatchFilter = (name: any, value: any) => {
  const baseUrl =
    'https://sportprogram.iddaa.com/SportProgram?ProgramType=1&SportId=1&MukList=1_1,2_88,2_100,2_101_2.5,2_89'
  let filter
  switch (name) {
    case 'df':
      filter = `&DateFilter=${value.date}`
      break
    case 'mf':
      filter = '&MukList='
      break
    case 'mbsf':
      filter = `&MbsFilter=${value.mbs}`
      break
    case 'cf':
      filter = `&LeagueFilter=${value.lf[0].lid}`
      break
    case 'kbf':
      filter = `&KingBetType=${value.kbid}`
      break

    default:
      break
  }

  return `${baseUrl}${filter}`
}

interface FilterProps {
  name: any
  data: any
}

const Filter: React.FC<FilterProps> = ({ name, data }) => {
  const dispatch = useDispatch<AppDispatch>()

  return (
    <Popover className="relative w-full">
      {({ open }) => (
        <>
          <Popover.Button
            className={`
                ${open ? '' : 'text-opacity-90'}
                group mr-2 inline-flex h-9 w-full items-center justify-between truncate rounded bg-gray-900 px-3 text-sm font-medium text-gray-100 hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}
          >
            <span>
              {name === 'df'
                ? 'Tarih'
                : name === 'mf'
                  ? 'Oyun Türü'
                  : name === 'mbsf'
                    ? 'MBS'
                    : name === 'kbf'
                      ? 'Kral Fırsatlar'
                      : name === 'cf' && 'Ülkeler'}
            </span>
            <ChevronDownIcon
              className={`${open ? '' : 'text-opacity-70'}
                  ml-2 size-5 text-gray-200 transition duration-150 ease-in-out group-hover:text-opacity-80`}
              aria-hidden="true"
            />
          </Popover.Button>

          <Popover.Panel className="absolute z-10 mt-3 w-full px-4 sm:px-0">
            <div className="overflow-hidden rounded shadow-lg ring-1 ring-black ring-opacity-5">
              <div className="relative flex flex-col bg-white">
                {data.map((value: any, index: number) => (
                  <button
                    key={index}
                    onClick={() =>
                      dispatch(fetchEventsByFilter(dispatchFilter(name, value)))
                    }
                    className="flex items-center p-2 text-sm transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                  >
                    {name === 'mf'
                      ? value.mgn
                      : name === 'df'
                        ? value.ede
                        : name === 'mbsf'
                          ? `MBS ${value.mbs}`
                          : name === 'cf'
                            ? value.cgn
                            : name === 'kbf'
                              ? value.kbn
                              : 'yok'}
                  </button>
                ))}
              </div>
            </div>
          </Popover.Panel>
        </>
      )}
    </Popover>
  )
}

export default Filter
