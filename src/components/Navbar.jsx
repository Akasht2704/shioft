/*'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react' // Using lucide-react for icons

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
       
        <Link href="/" className="text-2xl font-extrabold text-blue-600 tracking-wide">
          Shioft Digital
        </Link>

        
        <div className="hidden md:flex space-x-8 text-gray-700 font-medium">
          <Link href="/" className="hover:text-blue-600 transition-colors duration-200">
            Home
          </Link>
          <Link href="/about" className="hover:text-blue-600 transition-colors duration-200">
            About
          </Link>
          <Link href="/#services" className="hover:text-blue-600 transition-colors duration-200">
            Services
          </Link>
          <Link href="/#contact" className="hover:text-blue-600 transition-colors duration-200">
            Contact
          </Link>
        </div>

        
        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      
      {isOpen && (
        <div className="md:hidden bg-white shadow-inner px-4 pb-4 space-y-2 text-gray-700 font-medium">
          <Link href="/" className="block hover:text-blue-600" onClick={() => setIsOpen(false)}>
            Home
          </Link>
          <Link href="#about" className="block hover:text-blue-600" onClick={() => setIsOpen(false)}>
            About
          </Link>
          <Link href="#services" className="block hover:text-blue-600" onClick={() => setIsOpen(false)}>
            Services
          </Link>
          <Link href="#contact" className="block hover:text-blue-600" onClick={() => setIsOpen(false)}>
            Contact
          </Link>
        </div>
      )}
    </nav>
  )
}
  */
 'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo + Brand */}
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/images/shioftlogo.png"
            alt="Logo"
            width={70}
            height={70}
            className="rounded-full"
          />
          <span className="text-2xl font-bold text-blue-600 tracking-tight">Shioft Digital</span>
        </Link>


        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 text-gray-700 font-medium items-center">
          <Link href="/" className="hover:text-blue-600 transition-colors duration-200">
            Home
          </Link>
          <Link href="/about" className="hover:text-blue-600 transition-colors duration-200">
            About
          </Link>
          <Link href="/services" className="hover:text-blue-600 transition-colors duration-200">
            Services
          </Link>
          <Link href="/#contact" className="hover:text-blue-600 transition-colors duration-200">
            Contact
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white px-4 pb-4 space-y-3 shadow-inner text-gray-700 font-medium">
          <Link href="/" className="block hover:text-blue-600" onClick={() => setIsOpen(false)}>
            Home
          </Link>
          <Link href="/about" className="block hover:text-blue-600" onClick={() => setIsOpen(false)}>
            About
          </Link>
          <Link href="/#services" className="block hover:text-blue-600" onClick={() => setIsOpen(false)}>
            Services
          </Link>
          <Link href="/#contact" className="block hover:text-blue-600" onClick={() => setIsOpen(false)}>
            Contact
          </Link>
        </div>
      )}
    </nav>
  )
}

