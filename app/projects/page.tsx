import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Projects',
  description: 'My research projects and academic work',
}

export default function ProjectsPage() {
  return (
    <div className="divide-y divide-gray-200 dark:divide-gray-700">
      <div className="space-y-2 pt-6 pb-8 md:space-y-5">
        <h1 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14 dark:text-gray-100">
          Projects
        </h1>
        <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
          Explore my research projects and academic work.
        </p>
      </div>
      <div className="container py-12">
        <div className="py-16 text-center">
          <div className="mx-auto mb-6 h-24 w-24 text-gray-300 dark:text-gray-600">
            <svg fill="currentColor" viewBox="0 0 24 24" className="h-full w-full">
              <path d="M20,6A2,2 0 0,1 22,8V18A2,2 0 0,1 20,20H4A2,2 0 0,1 2,18V6A2,2 0 0,1 4,4H10L12,6H20Z" />
            </svg>
          </div>
          <h3 className="mb-2 text-lg font-medium text-gray-900 dark:text-gray-100">
            No Projects Available
          </h3>
          <p className="text-gray-500 dark:text-gray-400">
            Check back soon for my latest research projects and work.
          </p>
        </div>
      </div>
    </div>
  )
}