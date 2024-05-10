import { InformationCircleIcon } from '@heroicons/react/24/outline'
import CouponEmptySvg from './CouponEmptySvg'

const CouponEmpty = () => {
  return (
    <div className="mt-10 flex flex-1 flex-col items-center justify-center">
      <CouponEmptySvg />
      <div className="my-6 flex flex-col space-x-2 text-center text-xl">
        <p className="font-semibold text-gray-400">
          Kuponunuzda bahis <br /> bulunmuyor.
        </p>
      </div>
      <ul className="mb-6 flex list-none flex-col space-y-2 p-3 text-sm">
        <li className="flex space-x-2 rounded-lg bg-gray-500 p-2 font-semibold text-gray-100 dark:bg-gray-800">
          <span>
            <InformationCircleIcon className="size-6 text-white" />
          </span>
          <p>
            1 Ocak 2021 tarihi itibarıyla oynanan iddaa kuponları iptal
            edilememektedir.
          </p>
        </li>
        <li className="text-center text-gray-600">
          Canlı iddaa içeren kuponlar iptal edilemez.
        </li>
        <li className="text-center text-gray-600">
          Tercih ekleyip “Hemen Oyna” butonuna tıkladığınız anda kuponunuz
          oynanacaktır.
        </li>
      </ul>
      <p className="mb-3 px-2 text-center text-xs text-gray-500">
        Tüm yenilikler hakkında detaylı bilgi için
        <span className="ml-1 cursor-pointer text-green-500">tıklayınız.</span>
      </p>
    </div>
  )
}

export default CouponEmpty
