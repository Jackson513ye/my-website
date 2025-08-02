import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Me',
  description: 'Learn more about my background and experience',
}

export default function AboutPage() {
  return (
    <div className="divide-y divide-gray-200 dark:divide-gray-700">
      <div className="space-y-2 pt-6 pb-8 md:space-y-5">
        <h1 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14 dark:text-gray-100">About Me</h1>
        <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
          Learn more about my background and experience
        </p>
      </div>
      <div className="container py-12">
        <div className="col-span-full py-16 text-center">
          <div className="mx-auto mb-6 h-24 w-24 text-gray-300 dark:text-gray-600">
            <svg fill="currentColor" viewBox="0 0 24 24" className="h-full w-full">
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
            </svg>
          </div>
          <h3 className="mb-2 text-lg font-medium text-gray-900 dark:text-gray-100">Coming Soon</h3>
          <p className="text-gray-500 dark:text-gray-400">More information about my background will be available here soon.</p>
        </div>
      </div>
    </div>
  )
}