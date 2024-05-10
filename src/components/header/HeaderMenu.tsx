import { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import {
  fetchActiveSport,
  activeSportSelector
} from '../../state/slices/activeSportSlice'
import {
  FaceSmileIcon,
  GlobeAltIcon,
  QuestionMarkCircleIcon,
  VideoCameraIcon
} from '@heroicons/react/24/outline'
import { AppDispatch } from 'store'

const HeaderMenu = ({ toggleDark }: { toggleDark: any }) => {
  const dispatch = useDispatch<AppDispatch>()
  const { data } = useSelector(activeSportSelector)

  useEffect(() => {
    dispatch(fetchActiveSport())
  }, [dispatch])

  // Helper function to determine active link styles
  const getNavLinkClass = (isActive: boolean) =>
    `flex w-full px-4 py-3.5 text-sm capitalize text-white hover:bg-gradient-to-b from-gray-900 lg:px-8 whitespace-nowrap ${
      isActive ? 'bg-gradient-to-b from-gray-900 text-yellow-400' : ''
    }`

  return (
    <div className="bg-gray-800 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex h-auto items-center justify-start md:h-12 md:justify-between">
          <div className="flex h-auto w-full flex-col divide-y divide-gray-900 border-gray-900 text-center font-bold md:h-12 md:w-auto md:flex-row md:divide-x md:border-x">
            <NavLink
              to="/canli-maclar"
              className={({ isActive }) => getNavLinkClass(isActive)}
            >
              <VideoCameraIcon className="mr-2 size-5 text-gray-400" />
              Canlı Maçlar
            </NavLink>
            <NavLink
              to="/bülten"
              className={({ isActive }) => getNavLinkClass(isActive)}
            >
              <GlobeAltIcon className="mr-2 size-5 text-gray-400" />
              Bülten
              <span className="ml-2 text-gray-400">
                {data[1]?.stype[0].total}
              </span>
            </NavLink>
            <NavLink
              to="/ozel-etkinlikler"
              className={({ isActive }) => getNavLinkClass(isActive)}
            >
              <FaceSmileIcon className="mr-2 size-5 text-gray-400" />
              Özel Etkinlikler
            </NavLink>
            <NavLink
              to="/yardim"
              className={({ isActive }) => getNavLinkClass(isActive)}
            >
              <QuestionMarkCircleIcon className="mr-2 size-5 text-gray-400" />
              Yardım
            </NavLink>
          </div>
          <button
            className="mode hidden lg:block"
            onClick={() => toggleDark()}
          ></button>
        </div>
      </div>
    </div>
  )
}

export default HeaderMenu
