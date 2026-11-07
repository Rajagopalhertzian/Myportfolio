import type { Metadata, Viewport } from 'next'
import { Inter, JetBrains_Mono, Space_Grotesk } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Raja Gopal S | Gen AI Engineer & Agentic AI Architect',
  description: 'Building intelligent systems. Engineering autonomous AI. Specializing in Gen AI, Agentic AI, RAG Systems, Multi-Agent Orchestration, and LLM Applications.',
  keywords: ['Gen AI', 'Agentic AI', 'LLM', 'RAG', 'LangGraph', 'MCP', 'Machine Learning', 'AI Engineer', 'Multi-Agent Systems'],
  authors: [{ name: 'Raja Gopal S' }],
  creator: 'Raja Gopal S',
  publisher: 'Raja Gopal S',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://portfolio-flame-ten-86.vercel.app',
    title: 'Raja Gopal S | Gen AI Engineer & Agentic AI Architect',
    description: 'Building intelligent systems. Engineering autonomous AI.',
    siteName: 'Raja Gopal S Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Raja Gopal S | Gen AI Engineer & Agentic AI Architect',
    description: 'Building intelligent systems. Engineering autonomous AI.',
  },
  verification: {
    google: 'google-site-verification-code',
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0d0d15' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrains.variable} ${spaceGrotesk.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="min-h-screen">
        {children}
      </body>
    </html>
  )
}