import { Metadata } from 'next'
import Card from '@/components/Card'
import { format } from 'date-fns'

export const metadata: Metadata = {
  title: 'Repos',
  description: 'Selected open-source repositories',
}

type RepoDef = {
  title: string
  description: string
  href: string
  imgSrc: string
  fullName: string // owner/repo
}

const repos: RepoDef[] = [
  {
    title: 'LM2PCG',
    description:
      'Language Model to Procedural Content Generation — experiments connecting LLMs with procedural generation workflows.',
    href: 'https://github.com/Jackson513ye/LM2PCG',
    imgSrc: '/images/repos/lm2pcg.svg',
    fullName: 'Jackson513ye/LM2PCG',
  },
  {
    title: 'MeTreec',
    description:
      'Measurement + Tree + EC — a toolkit around tree measurement/estimation and environmental computation.',
    href: 'https://github.com/Jackson513ye/MeTreec',
    imgSrc: '/images/repos/metreec.svg',
    fullName: 'Jackson513ye/MeTreec',
  },
]

async function fetchRepoMeta(fullName: string) {
  const headers: Record<string, string> = { Accept: 'application/vnd.github+json' }
  if (process.env.GITHUB_TOKEN) headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`
  try {
    const res = await fetch(`https://api.github.com/repos/${fullName}`, {
      headers,
      // Cache for 1 hour, but update in background when revalidated
      next: { revalidate: 3600 },
    })
    if (!res.ok) return { language: null as string | null, updated_at: null as string | null }
    const json = (await res.json()) as { language: string | null; updated_at: string | null }
    return { language: json.language, updated_at: json.updated_at }
  } catch (e) {
    return { language: null as string | null, updated_at: null as string | null }
  }
}

export default async function ReposPage() {
  const enriched = await Promise.all(
    repos.map(async (r) => {
      const meta = await fetchRepoMeta(r.fullName)
      const updated = meta.updated_at ? format(new Date(meta.updated_at), 'MMM d, yyyy') : '—'
      const language = meta.language || '—'
      const description = `${r.description} · Language: ${language} · Updated: ${updated}`
      return { ...r, description }
    })
  )

  return (
    <div className="divide-y divide-gray-200 dark:divide-gray-700">
      <div className="space-y-2 pt-6 pb-8 md:space-y-5">
        <h1 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14 dark:text-gray-100">
          Repos
        </h1>
        <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
          Selected open-source work on LLMs, trees, and spatial computing.
        </p>
      </div>
      <div className="container py-12">
        <div className="-m-4 flex flex-wrap">
          {enriched.map((item) => (
            <Card
              key={item.title}
              title={item.title}
              description={item.description}
              imgSrc={item.imgSrc}
              href={item.href}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
