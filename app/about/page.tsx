import { Metadata } from 'next'
import Link from '@/components/Link'
import Image from '@/components/Image'
import { FileText, User, GraduationCap, Briefcase, Code2, Wrench, Languages, Award } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About',
  description: 'About Hongyu Ye — Geomatics MSc student with research experience in urban analytics, spatial AI, and point-cloud understanding.',
}

export default function AboutPage() {
  return (
    <div className="divide-y divide-gray-200 dark:divide-gray-700">
      <div className="space-y-2 pt-6 pb-8 md:space-y-5">
        <h1 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14 dark:text-gray-100">
          About
        </h1>
        <div className="flex items-center gap-2 text-lg leading-7 text-gray-500 dark:text-gray-400">
          <span>For more about my background and experience, see:</span>
          <a
            href="/files/HongyuYe_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400 inline-flex items-center gap-2"
          >
            <FileText className="h-4 w-4" /> Curriculum Vitae
          </a>
        </div>
      </div>
      <div className="container py-12">
        <div className="mx-auto max-w-5xl space-y-8">
          {/* Removed profile hero section per request */}
          <section className="rounded-xl border border-gray-200/60 dark:border-gray-800/60 bg-white/60 dark:bg-gray-900/60 p-6 ring-1 ring-gray-200/40 dark:ring-white/10">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 flex items-center gap-2">
              <User className="h-5 w-5 text-gray-500" /> Bio
            </h2>
            <div className="mt-3 grid gap-6 md:grid-cols-5 items-center">
              <div className="md:col-span-3">
                <p className="text-gray-700 dark:text-gray-300">
                  My research interests span 3D city modeling and simulation, built environment analysis, and social sensing for urban mobility behavior analysis. Recently, I have worked on studies about how urban form and vegetation influence thermal comfort, and how natural language interfaces can make 3D scan data more accessible.
                </p>
              </div>
              <div className="md:col-span-2">
                <Image
                  src="/images/about/flow.gif"
                  alt="Research workflow"
                  width={600}
                  height={400}
                  className="w-full rounded-md object-contain"
                />
              </div>
            </div>
          </section>

          <section className="rounded-xl border border-gray-200/60 dark:border-gray-800/60 bg-white/60 dark:bg-gray-900/60 p-6 ring-1 ring-gray-200/40 dark:ring-white/10">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 flex items-center gap-2">
              <GraduationCap className="h-5 w-5 text-gray-500" /> Education
            </h2>
            <ul className="mt-3 space-y-3 text-gray-700 dark:text-gray-300">
              <li>
                <div className="flex items-center gap-2">
                  <Image src="/images/about/tu_delft.jpg" alt="TU Delft" width={20} height={20} className="h-5 w-5 rounded-sm object-cover" />
                  <div>
                    <strong>
                      <Link href="https://www.tudelft.nl/en/">Delft University of Technology</Link>
                    </strong>
                    {' '}(TU Delft), <strong>Netherlands</strong>
                  </div>
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">Sep 2024 – Present</div>
                <div>Faculty of Architecture and Built Environments</div>
                <div><em>MSc Geomatics</em></div>
              </li>
              <li>
                <div className="flex items-center gap-2">
                  <Image src="/images/about/snnu.jpg" alt="SNNU" width={20} height={20} className="h-5 w-5 rounded-sm object-cover" />
                  <div>
                    <strong>
                      <Link href="https://www.snnu.edu.cn/">Shaanxi Normal University</Link>
                    </strong>
                    {' '}(SNNU), <strong>China</strong>
                  </div>
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">Sep 2020 – Jun 2024</div>
                <div>School of Geography and Tourism</div>
                <div><em>BSc Geographical Sciences</em></div>
              </li>
            </ul>
          </section>

          <section className="rounded-xl border border-gray-200/60 dark:border-gray-800/60 bg-white/60 dark:bg-gray-900/60 p-6 ring-1 ring-gray-200/40 dark:ring-white/10">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 flex items-center gap-2">
              <Briefcase className="h-5 w-5 text-gray-500" /> Research Experience
            </h2>
            <div className="mt-4 space-y-6">
              <div>
                <div className="font-medium text-gray-900 dark:text-gray-100 flex items-center gap-2">
                  <Image src="/images/about/ai4city.jpg" alt="AI4City Lab" width={20} height={20} className="h-5 w-5 rounded-sm object-cover" />
                  <span>
                    <Link href="https://wufan-zhao.github.io/group/">AI4City Lab</Link>,{' '}
                    <Link href="https://www.hkust-gz.edu.cn/">The Hong Kong University of Science and Technology-Guangzhou</Link>, China · Research Assistant
                  </span>
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">Jul 2025 – Present</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  Mentor: <Link href="https://wufan-zhao.github.io/">Asst.Prof. Wufan Zhao</Link>
                </div>
                <ul className="mt-2 list-disc pl-5 text-gray-700 dark:text-gray-300 space-y-1">
                  <li>Research on environment simulation, e.g., micro‑climate simulation of 3D urban models.</li>
                  <li>Develop algorithms for tree inventory, attribute extraction, and species labelling from street‑view images.</li>
                </ul>
              </div>
              <div>
                <div className="font-medium text-gray-900 dark:text-gray-100 flex items-center gap-2">
                  <Image src="/images/about/cuhksz.jpg" alt="CUHK-Shenzhen" width={20} height={20} className="h-5 w-5 rounded-sm object-cover" />
                  <span>
                    <Link href="https://hss.cuhk.edu.cn/en">School of Humanities and Social Science</Link>,{' '}
                    <Link href="https://www.cuhk.edu.cn/en">The Chinese University of Hong Kong‑Shenzhen</Link>, China · Research Assistant
                  </span>
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">Jun 2024 – Oct 2024</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  Mentor: <Link href="https://myweb.cuhk.edu.cn/shuliluo/Home/Index">Asst.Prof. Shuli Luo</Link>
                </div>
                <ul className="mt-2 list-disc pl-5 text-gray-700 dark:text-gray-300 space-y-1">
                  <li>Crawling, processing, and semantic analysis of social media data on Shenzhen Metro.</li>
                  <li>Spatial querying and processing of mobile signalling data and map service API POI data.</li>
                  <li>Literature reviews on LLM applications in transit service, travel satisfaction, and urban planning.</li>
                </ul>
              </div>
              <div>
                <div className="font-medium text-gray-900 dark:text-gray-100 flex items-center gap-2">
                  <Image src="/images/about/snnu.jpg" alt="SNNU" width={20} height={20} className="h-5 w-5 rounded-sm object-cover" />
                  <span>
                    <Link href="http://gtzy.snnu.edu.cn/index.htm">Northwest Land and Resource Research Centre</Link>, SNNU, China · Research Assistant
                  </span>
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">Sep 2023 – Nov 2023</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  Mentor: <Link href="https://faculty.snnu.edu.cn/litao/zh_CN/index.htm">Prof. Tao Li</Link>
                </div>
                <ul className="mt-2 list-disc pl-5 text-gray-700 dark:text-gray-300 space-y-1">
                  <li>Mapping and preprocessing of road network datasets; calculating OD time‑cost matrices.</li>
                  <li>Contributed to authored funding applications about intercity mobility volatility studies.</li>
                  <li>Literature review on seasonality, intra‑week, and holiday patterns in intercity mobility fluctuations.</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="rounded-xl border border-gray-200/60 dark:border-gray-800/60 bg-white/60 dark:bg-gray-900/60 p-6 ring-1 ring-gray-200/40 dark:ring-white/10">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 flex items-center gap-2">
              <Code2 className="h-5 w-5 text-gray-500" /> Skills
            </h2>
            <ul className="mt-3 space-y-2 text-gray-700 dark:text-gray-300">
              <li className="flex items-start gap-2">
                <Code2 className="mt-0.5 h-4 w-4 text-gray-500" />
                <span>Programming: Python (OpenCV, PyTorch), C++ (CGAL, Eigen, PCL)</span>
              </li>
              <li className="flex items-start gap-2">
                <Wrench className="mt-0.5 h-4 w-4 text-gray-500" />
                <span>Tools: ArcGIS Pro, QGIS, OpenFOAM, MySQL, Blender, Adobe Premiere Pro, Final Cut Pro</span>
              </li>
              <li className="flex items-start gap-2">
                <Languages className="mt-0.5 h-4 w-4 text-gray-500" />
                <span>Language: IELTS 7.0 (L7.5, R7.5, S7.0, W6.5)</span>
              </li>
            </ul>
          </section>

          <section className="rounded-xl border border-gray-200/60 dark:border-gray-800/60 bg-white/60 dark:bg-gray-900/60 p-6 ring-1 ring-gray-200/40 dark:ring-white/10">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 flex items-center gap-2">
              <Award className="h-5 w-5 text-gray-500" /> Awards
            </h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-gray-700 dark:text-gray-300">
              <li>2023 Fall — Special Award Fund for Foreign Language Examinations of SNNU (First Prize)</li>
              <li>2023 Fall — Outstanding Student of SNNU (Third-class Scholarship, Top 20%)</li>
              <li>2021 Fall — Outstanding Student of SNNU (Third-class Scholarship, Top 20%)</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  )
}