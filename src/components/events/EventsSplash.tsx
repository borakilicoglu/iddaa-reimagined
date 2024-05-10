import React from 'react'

// Define a type for the component props
type RepeatedDivsProps = {
  parentWidth: string // The width class for the parent div, e.g., 'w-3/4'
  widths: string[] // An array of width classes for the child divs
  repetitions: number // Number of times to repeat the child divs
}

const RepeatedDivs: React.FC<RepeatedDivsProps> = ({
  parentWidth,
  widths,
  repetitions
}) => {
  // Create an array with 'repetitions' elements
  const items = new Array(repetitions).fill(null)

  return (
    <div className={`space-y-4 py-1 ${parentWidth}`}>
      {items.map((_, index) => (
        <React.Fragment key={index}>
          {widths.map((width, i) => (
            <div
              key={i}
              className={`h-4 ${width} rounded bg-gray-400 dark:bg-gray-900`}
            ></div>
          ))}
        </React.Fragment>
      ))}
    </div>
  )
}

const EventsSplash = () => (
  <div className="h-full min-h-screen overflow-hidden">
    <div className="mx-auto mt-8 size-full min-h-screen overflow-hidden rounded-md border border-gray-300 p-4 shadow dark:border-gray-900">
      <div className="flex animate-pulse space-x-4">
        <RepeatedDivs
          parentWidth="w-3/4"
          widths={['w-3/4', 'w-full', 'w-5/6', 'w-2/4']}
          repetitions={50}
        />

        <RepeatedDivs
          parentWidth="w-1/4"
          widths={['w-3/4', 'w-full', 'w-5/6', 'w-1/4']}
          repetitions={50}
        />
      </div>
    </div>
  </div>
)

export default EventsSplash
