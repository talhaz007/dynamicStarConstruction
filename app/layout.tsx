import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Dynamic Star Construction',
  description: 'Professional renovation services that transform your property with expert craftsmanship and premium materials. Get a Free Estimate',
  generator: 'Dyn',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
