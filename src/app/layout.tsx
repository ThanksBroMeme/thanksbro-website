import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'THANKSBRO - The Universal Gesture of Appreciation',
  description: 'When words aren\'t enough, send a THANKSBRO. Built on Solana for instant, meaningful recognition.',
  keywords: 'THANKSBRO, Solana, crypto, appreciation, token, tips',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}