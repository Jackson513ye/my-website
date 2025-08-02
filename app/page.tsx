'use client'

import { Mail, Github, FileText } from 'lucide-react'
import Link from '@/components/Link'
import Image from 'next/image'
import { allEvents, allCareers } from 'contentlayer/generated'
import partnersData from '@/data/partnersData'
import { compareDesc, parseISO, isAfter, format } from 'date-fns'
import { useState } from 'react'

export default function HomePage() {
  const [showOverlay, setShowOverlay] = useState(false)
  
  // Get future events only
  const now = new Date()
  const futureEvents = allEvents
    .filter((event) => isAfter(parseISO(event.date), now))
    .sort((a, b) => compareDesc(parseISO(b.date), parseISO(a.date)))
    .slice(0, 2)
  const latestCareers = allCareers.sort((a, b) => compareDesc(parseISO(a.applicationDeadline), parseISO(b.applicationDeadline))).slice(0, 2)

  const handleImageClick = () => {
    setShowOverlay(!showOverlay)
  }

  return (
    <>
      {/* Hero Banner Section */}
      <div className="relative overflow-hidden rounded-lg">
        <div className="absolute inset-0">
          <Image src="/images/home/banner.jpg" alt="GEOS Banner" fill className="object-cover object-bottom" priority />
          <div className="bg-opacity-40 absolute inset-0"></div>
        </div>
        <div className="relative container mx-auto px-4 py-5">
          <div className="text-center text-white">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl" style={{textShadow: '2px 2px 4px rgba(176, 0, 0, 0.6), -1px -1px 2px rgba(176, 0, 0, 0.6), 1px -1px 2px rgba(176, 0, 0, 0.6), -1px 1px 2px rgba(176, 0, 0, 0.6)'}}>
              Hongyu Ye
            </h1>
            <p className="mx-auto mt-3 max-w-2xl text-2xl" style={{textShadow: '2px 2px 4px rgba(176, 0, 0, 0.6), -1px -1px 2px rgba(176, 0, 0, 0.6), 1px -1px 2px rgba(176, 0, 0, 0.6), -1px 1px 2px rgba(176, 0, 0, 0.6)'}}>
              MSc in Geomatics
            </p>
            <p className="mx-auto mt-1 max-w-2xl text-base" style={{textShadow: '2px 2px 4px rgba(176, 0, 0, 0.6), -1px -1px 2px rgba(176, 0, 0, 0.6), 1px -1px 2px rgba(176, 0, 0, 0.6), -1px 1px 2px rgba(176, 0, 0, 0.6)'}}>
              Faculty of Architecture and the Built Environment, TU Delft
            </p>
            <div className="mt-5 flex justify-center gap-4">
              <a href="mailto:h.ye-5@student.tudelft.nl" className="rounded-md border border-white px-6 py-3 text-white transition-colors hover:bg-white hover:text-gray-900 flex items-center gap-2">
                <Mail className="h-4 w-4" />
                Email
              </a>
              <a href="https://github.com/Jackson513ye" target="_blank" rel="noopener noreferrer" className="rounded-md border border-white px-6 py-3 text-white transition-colors hover:bg-white hover:text-gray-900 flex items-center gap-2">
                <Github className="h-4 w-4" />
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Biography */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div className="relative h-80 lg:h-110 group cursor-pointer" onClick={handleImageClick}>
              <Image 
                src="/images/home/me.jpg" 
                alt="Hongyu Ye" 
                fill 
                className="rounded-lg object-cover grayscale group-hover:grayscale-0 transition-all duration-500 ease-in-out" 
              />
              {/* Overlay */}
              <div className={`absolute inset-0 bg-black bg-opacity-60 rounded-lg flex items-center justify-center transition-opacity duration-300 ${showOverlay ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                <div className="text-center text-white px-6">
                  <p className="text-lg md:text-xl font-medium leading-relaxed">
                  鲦鱼出游从容，是鱼之乐也。
                  </p>
                  <p className="text-sm md:text-base mt-2 opacity-75">
                    — 庄子 · 秋水
                  </p>
                </div>
              </div>
            </div>
            <div>
              <h2 className="mb-6 text-3xl font-bold text-gray-900 dark:text-gray-100">Biography</h2>
              <p className="mb-4 text-gray-600 dark:text-gray-400">
                I am currently a <strong>Master's student in Geomatics</strong> at <a href="https://www.tudelft.nl/en/" target="_blank" rel="noopener noreferrer" className="text-primary-500 hover:text-primary-600 underline">TU Delft</a>. I previously earned my BSc in Geographical Sciences from <a href="https://www.snnu.edu.cn/" target="_blank" rel="noopener noreferrer" className="text-primary-500 hover:text-primary-600 underline">Shaanxi Normal University</a>.
              </p>
              <p className="mb-4 text-gray-600 dark:text-gray-400">
                I am also a <strong>Research Assistant</strong> at <a href="https://www.hkust-gz.edu.cn/" target="_blank" rel="noopener noreferrer" className="text-primary-500 hover:text-primary-600 underline">HKUST(GZ)</a>, working in the AI4DCity Lab with <a href="https://wufan-zhao.github.io/" target="_blank" rel="noopener noreferrer" className="text-primary-500 hover:text-primary-600 underline">Prof. Wufan Zhao</a> on urban tree CFD simulation. Previously, I worked at <a href="https://www.cuhk.edu.cn/en" target="_blank" rel="noopener noreferrer" className="text-primary-500 hover:text-primary-600 underline">CUHK(SZ)</a> with <a href="https://myweb.cuhk.edu.cn/shuliluo" target="_blank" rel="noopener noreferrer" className="text-primary-500 hover:text-primary-600 underline">Prof. Shuli Luo</a> on social media data mining for urban mobility research.
              </p>
              <p className="mb-6 text-gray-600 dark:text-gray-400">
                My research interests span <strong>3D city modeling and simulation, built environment analysis, and social sensing for urban mobility behavior analysis.</strong>
              </p>
              {futureEvents.length > 0 && (
                <div className="mb-6 space-y-3">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Upcoming Events:</h3>
                  {futureEvents.map((event) => (
                    <div key={event.slug} className="border-primary-500 border-l-4 pl-4">
                      <Link href={`/events/${event.slug}`} className="hover:text-primary-600 block">
                        <h4 className="font-medium text-gray-900 dark:text-gray-100">{event.title}</h4>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          {format(parseISO(event.date), 'MMM dd, yyyy')} {event.time && `• ${event.time}`} • {event.location}
                        </p>
                      </Link>
                    </div>
                  ))}
                </div>
              )}
              <a href="/files/HongyuYe_CV.pdf" target="_blank" rel="noopener noreferrer" className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400 inline-flex items-center gap-2">
                <FileText className="h-4 w-4" />
                Curriculum Vitae
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}