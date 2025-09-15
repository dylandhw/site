import type { Metadata } from 'next'
import { IBM_Plex_Mono } from 'next/font/google'
import './globals.css'
import './prism.css'
import Header from '@/components/Header'
import { Analytics } from "@vercel/analytics/next"
import { PostHogProvider } from './providers'

const ibmPlexMono = IBM_Plex_Mono({ 
  weight: ['400', '500'],
  subsets: ['latin'] 
})

export const metadata: Metadata = {
  title: 'Dylan Wilkins',
  description: 'software engineer, student, forever learning.',
  icons: {
    icon: '/dogwoof.jpg',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${ibmPlexMono.className} container mx-auto px-4 max-w-2xl pt-16`}>
        <div className='w-full flex justify-center mb-8'>
          <div className='shadow-md rounded-lg '>
          <Header/>
          </div>
        </div>
        <div className="prose prose-neutral max-w-none">
          <PostHogProvider>
            {children}
          </PostHogProvider>
          <Analytics />
        </div>
      </body>
    </html>
  )
}