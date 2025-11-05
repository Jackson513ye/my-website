import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'More',
  description: 'B-side of my life',
}

export default function MorePage() {
  return (
    <div className="divide-y divide-gray-200 dark:divide-gray-700">
      <div className="space-y-2 pt-6 pb-8 md:space-y-5">
        <h1 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14 dark:text-gray-100">More</h1>
        <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">B-side of my life</p>
      </div>
      <div className="container py-12">
        <div className="col-span-full py-16 text-center">
          <div className="mx-auto mb-6 h-24 w-24 text-gray-300 dark:text-gray-600">
            <svg fill="currentColor" viewBox="0 0 24 24" className="h-full w-full">
              <path d="M20 6h-2.18c.11-.31.18-.65.18-1a2.996 2.996 0 0 0-5.5-1.65l-.5.67-.5-.68C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-5-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM9 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1z" />
            </svg>
          </div>
          <h3 className="mb-2 text-lg font-medium text-gray-900 dark:text-gray-100">No Content Available</h3>
          <p className="text-gray-500 dark:text-gray-400">Check back soon for new updates.</p>
        </div>
      </div>
    </div>
  )
}
