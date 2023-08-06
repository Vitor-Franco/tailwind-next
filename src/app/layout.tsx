import { Sidebar } from '@/components/Sidebar'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Masterizando o TailwindCSS',
  description: 'practing tailwindcss with nextjs',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br" className="antialiased">
      <body className={inter.className}>
        <div className="grid min-h-screen grid-cols-app">
          <Sidebar />

          <main className="px-8 pb-12 pt-8">{children}</main>
        </div>
      </body>
    </html>
  )
}
