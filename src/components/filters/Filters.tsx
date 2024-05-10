import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { fetchFilters, filtersSelector } from '../../state/slices/filtersSlice'
import {
  toggleActive,
  favoritesSelector
} from '../../state/slices/favoritesSlice'

import {
  fetchEvents,
  fetchEventsByLeague,
  eventsSelector
} from '../../state/slices/eventsSlice'

import { deleteAllEvents } from '../../state/slices/couponSlice'

import { StarIcon, FireIcon } from '@heroicons/react/24/solid'
import {
  TrashIcon,
  MagnifyingGlassIcon,
  SparklesIcon
} from '@heroicons/react/24/outline'

import Filter from './Filter'
import MockFilter from './MockFilter'
import { AppDispatch } from 'store'

const Top = ({ data }: { [key: string]: any }) =>
  Object.entries(data).map(([name, data], key) => (
    <Filter name={name} data={data} key={key} />
  ))

const Bottom = ({
  isActive,
  dispatch,
  favorites
}: {
  isActive: boolean
  dispatch: any // Use a more specific action type if possible
  favorites: any[]
}) => {
  const { byDate } = useSelector(eventsSelector)
  const { pathname } = useLocation()
  return (
    <div className="flex w-full items-center justify-between space-x-2 px-3 text-xs text-gray-100">
      <div className="flex items-center space-x-2">
        {favorites.length && pathname === '/bülten' ? (
          <StarIcon
            className={`size-5 cursor-pointer ${
              isActive ? 'text-yellow-500' : 'text-gray-600'
            }`}
            onClick={() => dispatch(toggleActive(!isActive))}
          />
        ) : (
          <StarIcon className="size-5 text-gray-600" />
        )}
        {pathname === '/bülten' && (
          <div className="flex h-9 overflow-hidden rounded border border-gray-900 text-sm">
            <button
              className={`rounded px-3 focus:outline-none ${
                byDate
                  ? 'bg-yellow-400 text-gray-900'
                  : 'bg-gray-900 text-gray-100'
              }`}
              onClick={() => dispatch(fetchEvents())}
            >
              Tarihe Göre
            </button>
            <button
              className={`rounded px-3 focus:outline-none ${
                !byDate
                  ? 'bg-yellow-400 text-gray-900'
                  : 'bg-gray-900 text-gray-100'
              }`}
              onClick={() => dispatch(fetchEventsByLeague())}
            >
              Lige Göre
            </button>
          </div>
        )}
      </div>
      <div className="relative flex flex-1 items-center">
        <input
          type="text"
          placeholder={
            pathname === '/bülten' ? 'Bültende ara...' : 'Canlıda ara...'
          }
          className="h-9 w-full rounded bg-gray-900 pl-3 pr-6 text-sm focus:outline-none"
        />
        <MagnifyingGlassIcon className="absolute right-2 top-2.5 size-4 text-gray-300" />
      </div>
      <div className="flex space-x-2">
        <button className="size-9 rounded bg-gray-900 font-bold text-gray-100">
          <SparklesIcon className="mx-auto size-4 text-yellow-400" />
        </button>
        <button className="size-9 rounded bg-gray-900 text-black">
          <FireIcon className="mx-auto size-4 text-yellow-400" />
        </button>
        <button
          className="size-9 rounded bg-gray-900 text-black"
          onClick={() => dispatch(deleteAllEvents())}
        >
          <TrashIcon className="mx-auto size-4 text-yellow-400" />
        </button>
      </div>
    </div>
  )
}

const Filters = () => {
  const dispatch = useDispatch<AppDispatch>()
  const { data, loading, hasErrors } = useSelector(filtersSelector)
  const { favorites, isActive } = useSelector(favoritesSelector)

  useEffect(() => {
    dispatch(fetchFilters())
  }, [dispatch])

  useEffect(() => {
    !favorites.length && dispatch(toggleActive(false))
  }, [favorites, dispatch])

  if (hasErrors)
    return (
      <div className="sticky top-0">
        <div className="flex justify-between rounded-t bg-gray-800 p-3">
          <p className="text-red-500">Cannot display filters...</p>
        </div>
      </div>
    )

  return (
    <div className="sticky top-0 z-40">
      <div
        className={`flex h-72 flex-col items-center rounded-t-lg bg-gray-800 py-3 md:h-28`}
      >
        <div className="flex w-full flex-col space-y-2 px-3 pb-3 md:flex-row md:space-x-2 md:space-y-0">
          {loading ? (
            <>
              <MockFilter name="Oyun Türü" />
              <MockFilter name="Tarih" />
              <MockFilter name="MBS" />
              <MockFilter name="Ülkeler" />
              <MockFilter name="Kral Fırsatlar" />
            </>
          ) : (
            <Top data={data} />
          )}
        </div>
        <Bottom isActive={isActive} dispatch={dispatch} favorites={favorites} />
      </div>
    </div>
  )
}

export default Filters
