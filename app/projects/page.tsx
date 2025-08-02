import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Projects',
  description: 'My research projects and academic work',
}

// 保留的项目卡片组件模板
function ProjectCard({ project }) {
  return (
    <div className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-lg transition-all hover:shadow-xl dark:border-gray-700 dark:bg-gray-800">
      <div className="p-6">
        <div className="mb-4 flex items-start justify-between">
          <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100">{project.title}</h2>
          <span className="rounded-full bg-primary-100 px-3 py-1 text-xs font-medium text-primary-800 dark:bg-primary-900 dark:text-primary-200">
            {project.status || 'In Progress'}
          </span>
        </div>
        <p className="mb-4 text-gray-600 dark:text-gray-300">{project.description}</p>
        <div className="mb-4 flex flex-wrap gap-2">
          {project.technologies?.map((tech) => (
            <span key={tech} className="rounded-md bg-gray-100 px-2 py-1 text-xs font-medium text-gray-800 dark:bg-gray-700 dark:text-gray-200">
              {tech}
            </span>
          ))}
        </div>
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-500 dark:text-gray-400">
            {project.date && new Date(project.date).toLocaleDateString()}
          </span>
          {project.link && (
            <a 
              href={project.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400 inline-flex items-center text-sm font-medium"
            >
              View Project
              <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

export default function ProjectsPage() {
  // 空数组，用于显示无内容状态
  const projects = []

  return (
    <div className="divide-y divide-gray-200 dark:divide-gray-700">
      <div className="space-y-2 pt-6 pb-8 md:space-y-5">
        <h1 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14 dark:text-gray-100">Projects</h1>
        <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">Explore my research projects and academic work.</p>
      </div>
      <div className="container py-12">
        <div className="flex flex-col gap-8">
          {projects.length > 0 ? (
            projects.map((project) => <ProjectCard key={project.slug} project={project} />)
          ) : (
            <div className="py-16 text-center">
              <div className="mx-auto mb-6 h-24 w-24 text-gray-300 dark:text-gray-600">
                <svg fill="currentColor" viewBox="0 0 24 24" className="h-full w-full">
                  <path d="M20,6A2,2 0 0,1 22,8V18A2,2 0 0,1 20,20H4A2,2 0 0,1 2,18V6A2,2 0 0,1 4,4H10L12,6H20Z" />
                </svg>
              </div>
              <h3 className="mb-2 text-lg font-medium text-gray-900 dark:text-gray-100">No Projects Available</h3>
              <p className="text-gray-500 dark:text-gray-400">Check back soon for my latest research projects and work.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}