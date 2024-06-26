import type { Metadata } from 'next'
import './globals.css'
import Layout from '@/components/Layout/Layout'
import NextTopLoader from 'nextjs-toploader'


export const metadata: Metadata = {
  title: 'Auto Parts',
  description: 'Generated for Auto Parts',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo.svg" />
      </head>
      <body>
        <NextTopLoader
          color="#2F80ED"
          initialPosition={0.08}
          crawlSpeed={200}
          height={3}
          crawl={true}
          showSpinner={false}
          easing="ease"
          speed={200}
          shadow="0 0 10px #2299DD,0 0 5px #2299DD"
        />
        <Layout>
          {children}
        </Layout>
      </body>
    </html>
  )
}
