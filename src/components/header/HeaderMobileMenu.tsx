import {
  DevicePhoneMobileIcon,
  LockClosedIcon
} from '@heroicons/react/24/outline'

const HeaderMobileMenu = () => {
  return (
    <div className="border-b border-gray-900 bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col space-y-2 py-4">
          <div className="relative">
            <input
              placeholder="Telefon Numarası"
              type="text"
              id="hero-field"
              name="hero-field"
              className="h-9 w-full rounded bg-gray-900 bg-opacity-30 pl-8 text-sm text-gray-100 outline-none placeholder:text-gray-400"
            />
            <DevicePhoneMobileIcon className="absolute left-2 top-2 size-5 text-gray-400" />
          </div>
          <div className="relative">
            <input
              placeholder="Şifre"
              type="text"
              id="hero-field"
              name="hero-field"
              className="h-9 w-full rounded bg-gray-900 bg-opacity-30 pl-8 text-sm text-gray-100 outline-none placeholder:text-gray-400"
            />
            <LockClosedIcon className="absolute left-2 top-2 size-5 text-gray-400" />
          </div>
          <button className="h-9 rounded bg-yellow-400 px-4 text-sm font-semibold text-gray-800">
            GİRİŞ
          </button>
          <button className="h-9 rounded bg-white px-4 text-sm font-semibold text-gray-800">
            ÜYE OL
          </button>
        </div>
      </div>
    </div>
  )
}

export default HeaderMobileMenu
