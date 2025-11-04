import Link from './Link'
import siteMetadata from '@/data/siteMetadata'
import SocialIcon from '@/components/social-icons'

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white py-8 dark:border-gray-700 dark:bg-gray-950">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <p className="text-xs text-gray-500 dark:text-gray-400">© Hongyu Ye | Last update: Nov 2025</p>
        </div>
      </div>
    </footer>
  )
}