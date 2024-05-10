import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline'
import { LockClosedIcon } from '@heroicons/react/24/solid'

const EventOdds = ({
  a,
  event,
  dispatchEvent
}: {
  a: any
  event: any
  dispatchEvent: any
}) =>
  event.m.map((item: any) =>
    item.o.map((value: any, index: number) => {
      const { mn } = item
      const { bid, en, mb, ede, edh } = event
      const { ov, ona, odd, oodd, sodd, ou } = value
      const eventData = {
        mb,
        bid,
        en,
        mn,
        ov,
        ona,
        odd,
        ou,
        ede,
        edh,
        oodd,
        sodd
      }

      return (
        <div
          key={index}
          onClick={() =>
            value.odd && value.sodd !== '-' && dispatchEvent(eventData)
          }
          className={`flex w-12 items-center justify-center text-center md:flex-1 ${
            value.odd !== null && value.sodd !== '-'
              ? 'cursor-pointer hover:bg-yellow-300 hover:text-gray-900 dark:hover:text-gray-900'
              : value.sodd.includes(':') && 'bg-gray-100 dark:bg-gray-800'
          }
            ${
              a?.ou === value.ou
                ? 'bg-yellow-300 text-gray-900'
                : 'dark:text-gray-100'
            }
        `}
        >
          {value.sodd === '-' ? (
            <LockClosedIcon className="size-4 text-gray-300 dark:text-gray-500" />
          ) : (
            <div>
              {!value.sodd.includes(':') && (
                <span>
                  {value.odd > parseFloat(value.oodd) ? (
                    <ChevronUpIcon className="mx-auto size-3 text-green-500" />
                  ) : (
                    <ChevronDownIcon className="mx-auto size-3 text-red-500" />
                  )}
                </span>
              )}
              {value.sodd}
            </div>
          )}
        </div>
      )
    })
  )

export default EventOdds
