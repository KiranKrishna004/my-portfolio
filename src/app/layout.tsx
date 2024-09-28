import type { Metadata } from 'next'
import './globals.css'
import { Analytics } from '@vercel/analytics/react'

export const metadata: Metadata = {
  title: 'Kiran | Portfolio',
  description:
    'Frontend Developer with 3 years of experience in building e-commerce platforms, Fintech tools, and landing pages. Skilled in React.js, Next.js, and CSS libraries, delivering scalable, high-performance web applications.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
