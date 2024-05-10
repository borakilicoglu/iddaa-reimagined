import { Popover } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/24/solid'

const MockFilter = ({ name }: { name: string }) => {
  return (
    <Popover className="relative w-full">
      {({ open }) => (
        <>
          <Popover.Button
            className={`
                ${open ? '' : 'text-opacity-90'}
                group mr-2 inline-flex h-9 w-full items-center justify-between truncate rounded bg-gray-900 px-3 text-sm font-medium text-gray-100 hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}
          >
            <span>{name}</span>
            <ChevronDownIcon
              className={`${open ? '' : 'text-opacity-70'}
                  ml-2 size-5 text-gray-200 transition duration-150 ease-in-out group-hover:text-opacity-80`}
              aria-hidden="true"
            />
          </Popover.Button>
        </>
      )}
    </Popover>
  )
}

export default MockFilter
