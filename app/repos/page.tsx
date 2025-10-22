import { Metadata } from 'next'
import type { ReactNode } from 'react'
import Card from '@/components/Card'
import { format } from 'date-fns'

export const metadata: Metadata = {
  title: 'Repos',
  description: 'Selected open-source repositories',
}

type RepoDef = {
  title: string
  description: ReactNode
  href: string
  imgSrc: string
  fullName: string // owner/repo
}

const repos: RepoDef[] = [
  {
    title: 'LM2PCG',
    description:
      'A compact C++17 pipeline for indoor point-cloud processing with PCL (and optional CGAL). Clusters objects, computes upright OBBs, preserves colors, reconstructs meshes, and exports standardized results. Includes standalone tools (pcg_room, pcg_reconstruct, pcg_volume, pcg_area, pcg_color, pcg_bbox) and a Python AI API that orchestrates operations with structured JSON I/O.',
    href: 'https://github.com/Jackson513ye/LM2PCG',
    imgSrc: '/images/repos/lm2pcg.svg',
    fullName: 'Jackson513ye/LM2PCG',
  },
  {
    title: 'MeTreec',
    description:
      'An end-to-end single-tree point cloud pipeline: AdTree-based 3D reconstruction, CGAL hole filling, skeleton/leaf filtering, and automatic metrics (height, DBH, crown radius/depth, volume/area). C++17/CMake with modular components and per-tree JSON plus batch CSV outputs.',
    href: 'https://github.com/ai4city-hkust/Metreec-v1.0',
    imgSrc: '/images/repos/metreec.svg',
    fullName: 'ai4city-hkust/Metreec-v1.0',
  },
  {
    title: 'Mask2Cluster',
    description:
      'Seeded DBSCAN pipeline scaffold that searches masked point clouds around a pose-derived reference point C, returning the first cluster that meets configurable thresholds. Ships CMake-based layout, planned PDAL/PCL integrations, and YAML-driven defaults for future point-cloud extraction milestones.',
    href: 'https://github.com/Jackson513ye/Mask2Cluster',
    imgSrc: '/images/repos/mask2cluster.svg',
    fullName: 'Jackson513ye/Mask2Cluster',
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
    if (!res.ok)
      return { language: null as string | null, updated_at: null as string | null, stargazers_count: null as number | null }
    const json = (await res.json()) as { language: string | null; updated_at: string | null; stargazers_count: number | null }
    return { language: json.language, updated_at: json.updated_at, stargazers_count: json.stargazers_count }
  } catch (e) {
    return { language: null as string | null, updated_at: null as string | null, stargazers_count: null as number | null }
  }
}

export default async function ReposPage() {
  const enriched = await Promise.all(
    repos.map(async (r) => {
      const meta = await fetchRepoMeta(r.fullName)
      const updated = meta.updated_at ? format(new Date(meta.updated_at), 'MMM d, yyyy') : '—'
      const language = meta.language || '—'
      const stars = typeof meta.stargazers_count === 'number' ? meta.stargazers_count : null
      const description = (
        <div>
          <p>{r.description}</p>
          <p>
            <span className="font-medium text-gray-700 dark:text-gray-300">Language:</span> {language}
          </p>
          <p>
            <span className="font-medium text-gray-700 dark:text-gray-300">Updated:</span> {updated}
          </p>
          <p>
            <span className="font-medium text-gray-700 dark:text-gray-300">Stars:</span> {stars !== null ? stars : '—'}
          </p>
        </div>
      )
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
