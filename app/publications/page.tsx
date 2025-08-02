import { Metadata } from 'next'
import Image from 'next/image'
import { format, parseISO } from 'date-fns'
import { useMDXComponent } from 'pliny/mdx-components'

export const metadata: Metadata = {
  title: 'Publications',
  description: 'My research publications and academic work',
}

function PublicationItem({ publication }) {
  const MDXContent = useMDXComponent(publication.body.code)

  return (
    <a href={publication.link} target="_blank" rel="noopener noreferrer" className="group block">
      <article className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-lg transition-all group-hover:shadow-xl dark:border-gray-700 dark:bg-gray-800">
        <div className="flex flex-col md:flex-row">
          <div className="relative h-48 overflow-hidden md:h-auto md:w-1/3">
            <Image 
              src={publication.image} 
              alt={publication.title} 
              fill 
              className="object-cover transition-transform group-hover:scale-105" 
              sizes="(max-width: 768px) 100vw, 33vw" 
            />
          </div>
          <div className="flex-1 p-6">
            <div className="mb-2 flex items-center justify-between">
              <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100">{publication.title}</h2>
              <svg className="h-4 w-4 text-gray-400 dark:text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </div>
            <p className="mb-3 text-sm text-gray-500 dark:text-gray-400">{format(parseISO(publication.date), 'MMM dd, yyyy')}</p>
            <div className="text-sm text-gray-700 dark:text-gray-300">
              <MDXContent />
            </div>
          </div>
        </div>
      </article>
    </a>
  )
}

export default function PublicationsPage() {
  // 空数组，用于显示无内容状态
  const publications = []

  return (
    <div className="divide-y divide-gray-200 dark:divide-gray-700">
      <div className="space-y-2 pt-6 pb-8 md:space-y-5">
        <h1 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14 dark:text-gray-100">Publications</h1>
        <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">Explore my research publications and academic work</p>
      </div>
      <div className="container py-12">
        <div className="space-y-6">
          {publications.length > 0 ? (
            publications.map((publication) => (
              <PublicationItem key={publication.slug} publication={publication} />
            ))
          ) : (
            <div className="col-span-full py-16 text-center">
              <div className="mx-auto mb-6 h-24 w-24 text-gray-300 dark:text-gray-600">
                <svg fill="currentColor" viewBox="0 0 24 24" className="h-full w-full">
                  <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z" />
                </svg>
              </div>
              <h3 className="mb-2 text-lg font-medium text-gray-900 dark:text-gray-100">No Publications Yet</h3>
              <p className="text-gray-500 dark:text-gray-400">Publications will be listed here once available.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}