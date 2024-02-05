import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Donald Trump AI',
  description: 'Make America Great Again! - Donald Trump ',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
