import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  couponSelector,
  removeEvent,
  deleteAllEvents
} from '../../state/slices/couponSlice'
import { themeSelector, setAppearCoupon } from '../../state/slices/themeSlice'
import useIsMobile from '../../hooks/useIsMobile'

import CouponEmpty from './CouponEmpty'
import CouponEvent from './CouponEvent'
import CouponMbsWarning from './CouponMbsWarning'
import CouponHeader from './CouponHeader'
import CouponSubmit from './CouponSubmit'
import {
  CalculatorIcon,
  CurrencyDollarIcon,
  TrashIcon
} from '@heroicons/react/24/outline'
import { AppDispatch } from 'store'

interface CouponEvent {
  odd: number
  mb: number
}

interface State {
  ratio: number
  amount: number
  profit: number
  isValid: boolean
  mb: number
  system: number[]
  colons: number
  systemRatio: number
}

const Coupon: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>()
  const { data }: { data: CouponEvent[] } = useSelector(couponSelector)
  const { isCouponOpen }: { isCouponOpen: boolean } = useSelector(themeSelector)
  const [toggleSystemMenu, setToggleSystemMenu] = useState(false)
  const isMobile = useIsMobile()

  const [state, setState] = useState<State>({
    ratio: 0,
    amount: 3,
    profit: 0,
    isValid: true,
    mb: 1,
    system: [],
    colons: 0,
    systemRatio: 0
  })

  useEffect(() => {
    dispatch(setAppearCoupon(isMobile ? false : true))
  }, [isMobile, dispatch])

  const toggleSystem = (number: number) =>
    setState((prevState: any) => {
      const clone = prevState.system
      return {
        ...prevState,
        system: clone.includes(number)
          ? clone.length === 2 &&
            clone.includes(data.length) &&
            number !== data.length
            ? []
            : [...clone.filter((value: any) => value !== number)]
          : [...clone, number]
      }
    })

  const removeEventPreflight = (bid: any) => {
    state.system[state.system.length - 1] === data.length &&
      state.system.includes(data.length) &&
      toggleSystem(data.length)
    dispatch(removeEvent(bid))
  }

  const deleteEventsPreflight = () => {
    state.system = []
    dispatch(deleteAllEvents())
  }

  useEffect(() => {
    const calcRatio = () =>
      data.reduce(function (previousValue, currentValue) {
        return previousValue * currentValue.odd
      }, 1)

    const isMbValid = () =>
      !data.some(
        (value) =>
          (value.mb === 3 && data.length < 3) ||
          (value.mb === 2 && data.length < 2)
      )

    const mbCount = () => {
      const mbArray = data.map((value) => value.mb)
      return mbArray.includes(3) ? 3 : mbArray.includes(2) ? 2 : 1
    }

    const systemRatioCombinations = (n: number) => {
      const ratios = data
        .map((value) => value.odd)
        .reduce<number[][]>(
          (acc, item) => {
            return acc.concat(acc.map((x) => [...x, item]))
          },
          [[]] // Initial accumulator as an empty array within an array
        )
      return ratios.filter((value) => value.length === n)
    }

    const systemRatioCombinationsMultiply = (system: any) => {
      let resultParent = 0
      system?.map((value: any) => {
        let resultChild = 0
        systemRatioCombinations(value).map((parent) => {
          let childSum = 1
          parent.map((child) => (childSum *= child))
          return (resultChild += childSum)
        })
        return (resultParent += resultChild)
      })
      return resultParent
    }

    const systemColonCount = (system: any) => {
      let count = 0
      system?.map(
        (value: any) => (count += systemRatioCombinations(value).length)
      )
      return count
    }

    const systemCheck = () =>
      state.system.includes(state.mb) && state.mb === data.length
        ? []
        : state.system

    setState((prevState) => {
      return {
        ...prevState,
        ratio: calcRatio(),
        profit: calcRatio() * state.amount,
        isValid: isMbValid(),
        mb: mbCount(),
        system: systemCheck(),
        colons: systemColonCount(state.system),
        systemRatio: systemRatioCombinationsMultiply(state.system)
      }
    })
    return () => {}
  }, [data, state.amount, state.mb, state.system])

  const { isValid, ratio, systemRatio, amount, mb, system, colons } = state
  return (
    <div
      className={`bottom-0 left-0 z-40 mt-8 w-full lg:relative lg:w-1/4 ${
        isCouponOpen ? 'fixed' : 'hidden'
      }`}
    >
      <div className="sticky top-0">
        <div className="flex flex-col items-stretch rounded-lg bg-white shadow-lg dark:bg-gray-900">
          <CouponHeader data={data} />
          {data.length ? (
            <div className="flex flex-col text-sm">
              {data.map((value: any, index: any) => (
                <CouponEvent
                  key={index}
                  value={value}
                  removeEventPreflight={removeEventPreflight}
                />
              ))}

              <div className="border-b border-gray-200 p-3 dark:border-gray-800">
                <CouponMbsWarning isValid={isValid} />
                <div className="mb-2 flex items-center space-x-2">
                  <div className="flex flex-1 space-x-1 font-semibold text-gray-900 dark:text-gray-100">
                    <CalculatorIcon className="size-5 text-gray-900 dark:text-gray-100" />
                    <span>Toplam Oran:</span>
                  </div>
                  <div className="font-bold dark:text-gray-100">
                    {systemRatio > 0
                      ? systemRatio.toFixed(2)
                      : ratio.toFixed(2)}
                  </div>
                  <button
                    className="shrink"
                    onClick={() => deleteEventsPreflight()}
                  >
                    <TrashIcon className="size-5 text-gray-500 dark:text-gray-300" />
                  </button>
                </div>
                <div className="mb-2 flex items-center space-x-2 dark:text-gray-100">
                  <div className="flex flex-1 space-x-1 font-semibold text-gray-900 dark:text-gray-100">
                    <CurrencyDollarIcon className="size-5 text-gray-900 dark:text-gray-100" />
                    <span>Toplam Tutar:</span>
                  </div>
                  <div className="font-bold dark:text-gray-100">{amount}TL</div>
                  <button
                    className="shrink"
                    onClick={() => deleteEventsPreflight()}
                  >
                    {/* <SaveIcon className="size-5 text-gray-500 dark:text-gray-300" /> */}
                  </button>
                </div>

                <div className="flex flex-col">
                  {toggleSystemMenu && (
                    <div className="mb-2 flex flex-col space-y-1 rounded border p-2 dark:border-gray-800">
                      <div className="flex flex-row space-x-2">
                        {[...Array(data.length).keys()]
                          .map((value) => value + 1)
                          .slice(mb - 1, data.length)
                          .map((value, index, { length }) =>
                            mb === data.length ||
                            (index + 1 === length && !system.length) ? (
                              <button
                                key={index}
                                className="inline-flex size-5 cursor-not-allowed items-center justify-center rounded-sm border-0 bg-gray-400 p-0 text-gray-500"
                              >
                                {value}
                              </button>
                            ) : (
                              <button
                                key={index}
                                onClick={() => toggleSystem(value)}
                                className={`inline-flex size-5 items-center justify-center rounded-sm border-0 bg-gray-300 p-0 text-gray-500 ${
                                  system.includes(value) &&
                                  'bg-yellow-300 text-gray-900'
                                }
                        `}
                              >
                                {value}
                              </button>
                            )
                          )}
                      </div>
                    </div>
                  )}

                  <div className="flex flex-row space-x-2">
                    <div className="relative flex-1">
                      <label
                        htmlFor="system"
                        className="absolute left-2 top-1 text-xs text-gray-800 dark:text-gray-100"
                      >
                        Sistem
                        {colons > 0 && (
                          <span className="ml-2">K.Sayısı: {colons}</span>
                        )}
                      </label>
                      <input
                        type="text"
                        name="system"
                        readOnly
                        onClick={() => setToggleSystemMenu(!toggleSystemMenu)}
                        className="h-12 w-full rounded border bg-gray-100 px-2 pb-1 pt-4 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-green-500 focus:ring-2 focus:ring-green-200 dark:border-gray-900 dark:bg-gray-700 dark:text-gray-100"
                        value={system.length ? system.sort().toString() : '-'}
                      />
                    </div>
                    <div className="relative flex-1">
                      <label
                        htmlFor="amount"
                        className="absolute left-2 top-1 text-xs text-gray-800 dark:text-gray-100"
                      >
                        Misli
                      </label>
                      <input
                        type="number"
                        name="amount"
                        className="h-12 w-full rounded border bg-gray-100 px-2 pb-1 pt-4 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-green-500 focus:ring-2 focus:ring-green-200 dark:border-gray-900 dark:bg-gray-700 dark:text-gray-100"
                        value={amount}
                        onChange={(e) => {
                          const newValue = parseInt(e.target.value, 10) // Convert input value to an integer
                          setState((prevState) => ({
                            ...prevState,
                            amount: isNaN(newValue) ? 0 : newValue // Ensure that the value is a number, default to 0 if not
                          }))
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <CouponSubmit state={state} isValid={isValid} />
            </div>
          ) : (
            <CouponEmpty />
          )}
        </div>
      </div>
    </div>
  )
}

export default Coupon
