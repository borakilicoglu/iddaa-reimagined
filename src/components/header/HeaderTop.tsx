import { useDispatch } from 'react-redux'
import { toggleMobileMenu } from '../../state/slices/themeSlice'
import { Bars3Icon, DevicePhoneMobileIcon } from '@heroicons/react/24/outline'
import { LockClosedIcon } from '@heroicons/react/24/outline'
import { AppDispatch } from 'store'

const HeaderTop = ({ toggleDark }: { toggleDark: () => void }) => {
  const dispatch = useDispatch<AppDispatch>()

  return (
    <div className="container mx-auto px-4">
      <div className="flex h-16 items-center justify-between">
        <div className="flex items-center">
          <a href="/" className="text-4xl font-semibold text-yellow-400">
            iddaa
          </a>
        </div>
        <div className="flex items-center space-x-2">
          <div className="hidden space-x-2 lg:flex">
            <div className="relative">
              <input
                placeholder="Telefon Numarası"
                type="text"
                id="hero-field"
                name="hero-field"
                className="h-9 rounded bg-gray-800 bg-opacity-30 pl-8 text-sm text-gray-900 outline-none placeholder:text-gray-900"
              />
              <DevicePhoneMobileIcon className="absolute left-2 top-2 size-5 text-gray-800" />
            </div>
            <div className="relative">
              <input
                placeholder="Şifre"
                type="text"
                id="hero-field"
                name="hero-field"
                className="h-9 rounded bg-gray-800 bg-opacity-30 pl-8 text-sm text-gray-900 outline-none placeholder:text-gray-900"
              />
              <LockClosedIcon className="absolute left-2 top-2 size-5 text-gray-800" />
            </div>
          </div>
          <button className="hidden h-9 rounded bg-yellow-400 px-4 text-sm font-semibold text-gray-800 lg:block">
            GİRİŞ
          </button>
          <button className="hidden h-9 rounded bg-white px-4 text-sm font-semibold text-gray-800 lg:block">
            ÜYE OL
          </button>
          <div className="flex items-center space-x-2 lg:hidden">
            <button className="mode" onClick={() => toggleDark()}></button>
            <button
              className="flex size-9 items-center justify-center rounded bg-white text-base opacity-50 hover:underline"
              onClick={() => dispatch(toggleMobileMenu())}
            >
              <Bars3Icon className="w-6" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeaderTop
