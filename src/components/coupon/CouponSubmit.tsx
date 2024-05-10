import React from 'react'

interface CouponSubmitProps {
  state: {
    profit: number
  }
  isValid: boolean
}

const CouponSubmit: React.FC<CouponSubmitProps> = ({ state, isValid }) => {
  return (
    <div className="rounded-b-lg bg-white p-3 dark:bg-gray-900">
      <button
        className={`flex h-12 w-full items-center justify-center rounded bg-[#059669] font-bold text-white hover:bg-[#059669] ${
          !isValid && 'cursor-not-allowed opacity-50'
        }`}
      >
        HEMEN OYNA
        <span className="font-bold text-white dark:text-gray-100">
          Maksimum Kazanç: {state.profit.toFixed(2)} TL
        </span>
      </button>
    </div>
  )
}

export default CouponSubmit
