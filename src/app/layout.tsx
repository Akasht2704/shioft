// src/app/layout.tsx
import './globals.css'
import { ReactNode } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export const metadata = {
  title: 'Shioft Digital Services',
  description: 'Welcome to our tech company website.',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      
      <body className="bg-white text-gray-900 font-sans">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
