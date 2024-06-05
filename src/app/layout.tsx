import type { Metadata } from 'next'
import './globals.css'
import Layout from '@/components/Layout/Layout'


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
        <Layout>
          {children}
        </Layout>
      </body>
    </html>
  )
}
