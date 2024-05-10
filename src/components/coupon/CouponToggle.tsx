import { useSelector, useDispatch } from 'react-redux'
import { toggleCoupon, themeSelector } from '../../state/slices/themeSlice'
import { AppDispatch } from 'store'

const CouponToggle = () => {
  const dispatch = useDispatch<AppDispatch>()
  const { isCouponOpen } = useSelector(themeSelector)
  return (
    <button
      className="fixed bottom-4 right-4 z-50 flex size-14 items-center justify-center rounded-full border-0 bg-gray-900 p-0 text-gray-500 shadow-lg lg:hidden"
      onClick={() => dispatch(toggleCoupon())}
    >
      {!isCouponOpen ? (
        <svg
          className="size-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          ></path>
        </svg>
      ) : (
        <svg
          className="size-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M6 18L18 6M6 6l12 12"
          ></path>
        </svg>
      )}
    </button>
  )
}

export default CouponToggle
