import { ExclamationCircleIcon } from '@heroicons/react/24/outline'

const CouponMbsWarning = ({ isValid }: { isValid: any }) => {
  return (
    <div
      className={`mb-2 flex space-x-1 rounded bg-red-500 p-2 text-sm text-white ${
        isValid && 'hidden'
      }`}
    >
      <span>
        <ExclamationCircleIcon className="size-6 text-gray-100" />
      </span>
      <p>MBS kuralı nedeniyle en az 1 maç daha eklemelisiniz.</p>
    </div>
  )
}

export default CouponMbsWarning
