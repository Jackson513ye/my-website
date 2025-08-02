import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Publications',
  description: 'My research publications and academic work',
}

export default function PublicationsPage() {
  return (
    <div className="divide-y divide-gray-200 dark:divide-gray-700">
      <div className="space-y-2 pt-6 pb-8 md:space-y-5">
        <h1 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14 dark:text-gray-100">
          Publications
        </h1>
        <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
          My research publications and academic work
        </p>
      </div>
      <div className="container py-12">
        <div className="col-span-full py-16 text-center">
          <div className="mx-auto mb-6 h-24 w-24 text-gray-300 dark:text-gray-600">
            <svg fill="currentColor" viewBox="0 0 24 24" className="h-full w-full">
              <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z" />
            </svg>
          </div>
          <h3 className="mb-2 text-lg font-medium text-gray-900 dark:text-gray-100">
            No Publications Yet
          </h3>
          <p className="text-gray-500 dark:text-gray-400">
            Publications will be listed here once available.
          </p>
        </div>
      </div>
    </div>
  )
}