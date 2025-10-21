import { Metadata } from 'next'
import Link from '@/components/Link'
import Image from '@/components/Image'
import { allProjects } from 'contentlayer/generated'
import { format } from 'date-fns'

export const metadata: Metadata = {
  title: 'Projects',
  description: 'My research projects and academic work',
}

export default function ProjectsPage() {
  const projects = allProjects.slice().sort((a, b) => (a.date > b.date ? -1 : 1))

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
        <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <li key={project.slug} className="group rounded-lg border border-gray-200 dark:border-gray-800 overflow-hidden">
              {project.image ? (
                <Link href={`/projects/${project.slug}`} aria-label={`Open ${project.title}`}>
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={1200}
                    height={630}
                    className="h-40 w-full object-cover transition-transform hover:scale-[1.01]"
                  />
                </Link>
              ) : null}
              <div className="p-5">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                  {project.title}
                </h3>
                <p className="mt-1 text-sm font-medium text-gray-900 dark:text-gray-100">{project.role}</p>
                {project.mentors && (
                  <p className="mt-0.5 text-xs text-gray-500 dark:text-gray-400">Mentor: {project.mentors}</p>
                )}
                <p className="mt-1 text-xs text-gray-400">
                  {format(new Date(project.date), 'MMM yyyy')}
                  {project.endDate ? ` – ${format(new Date(project.endDate), 'MMM yyyy')}` : ''}
                </p>
                {project.excerpt && (
                  <p className="mt-3 text-sm text-gray-600 dark:text-gray-300">{project.excerpt}</p>
                )}
                <div className="mt-4 flex gap-4">
                  <Link href={`/projects/${project.slug}`} className="text-primary-500 hover:text-primary-600">
                    Details →
                  </Link>
                  {project.external && (
                    <Link href={project.external} className="text-gray-500 hover:text-gray-700">
                      External ↗
                    </Link>
                  )}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}