import { allProjects } from 'contentlayer/generated'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import { format } from 'date-fns'
import MDXContentClient from '@/components/MDXContentClient'
import Link from '@/components/Link'

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const project = allProjects.find((d) => d.slug === slug)

  if (!project) return notFound()

  return (
    <article className="prose dark:prose-invert mx-auto max-w-3xl py-12">
      <div className="not-prose mb-4">
        <Link href="/projects" className="text-primary-500 hover:text-primary-600 no-underline">
          ← Back
        </Link>
      </div>
      <h1>{project.title}</h1>
      {project.image && <Image src={project.image} alt={project.title} width={800} height={400} className="mb-6 rounded" />}
      <div className="mb-4 text-gray-500">
        {project.role && (
          <div>
            <strong>Role:</strong> {project.role}
          </div>
        )}
        {project.mentors && (
          <div>
            <strong>Mentors:</strong> {project.mentors}
          </div>
        )}
        <div className="text-sm text-gray-400">
          {format(new Date(project.date), 'MMM yyyy')}
          {project.endDate ? ` – ${format(new Date(project.endDate), 'MMM yyyy')}` : ''}
        </div>
      </div>
      <MDXContentClient code={project.body.code || ''} />
    </article>
  )
}
