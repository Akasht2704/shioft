// 'use client'

// import Link from 'next/link'
// import Image from 'next/image'
// import { useState } from 'react'
// import { Menu, X } from 'lucide-react'

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false)

//   return (
//     <nav className="bg-white shadow-md sticky top-0 z-50">
//       <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
//         {/* Logo + Brand */}
//         <Link href="/" className="flex items-center space-x-2">
//           <Image
//             src="/images/shioftlogo.png"
//             alt="Logo"
//             width={70}
//             height={70}
//             className="rounded-full"
//           />
//           <span className="text-2xl font-bold text-blue-600 tracking-tight">Shioft Digital</span>
//         </Link>


//         {/* Desktop Menu */}
//         <div className="hidden md:flex space-x-8 text-gray-700 font-medium items-center">
//           <Link href="/" className="hover:text-blue-600 transition-colors duration-200">
//             Home
//           </Link>
//           <Link href="/about" className="hover:text-blue-600 transition-colors duration-200">
//             About
//           </Link>
//           <Link href="/services" className="hover:text-blue-600 transition-colors duration-200">
//             Services
//           </Link>
//           <Link href="/#contact" className="hover:text-blue-600 transition-colors duration-200">
//             Contact
//           </Link>
//         </div>

//         {/* Mobile Menu Toggle */}
//         <button
//           className="md:hidden text-gray-700"
//           onClick={() => setIsOpen(!isOpen)}
//           aria-label="Toggle Menu"
//         >
//           {isOpen ? <X size={28} /> : <Menu size={28} />}
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       {isOpen && (
//         <div className="md:hidden bg-white px-4 pb-4 space-y-3 shadow-inner text-gray-700 font-medium">
//           <Link href="/" className="block hover:text-blue-600" onClick={() => setIsOpen(false)}>
//             Home
//           </Link>
//           <Link href="/about" className="block hover:text-blue-600" onClick={() => setIsOpen(false)}>
//             About
//           </Link>
//           <Link href="/#services" className="block hover:text-blue-600" onClick={() => setIsOpen(false)}>
//             Services
//           </Link>
//           <Link href="/#contact" className="block hover:text-blue-600" onClick={() => setIsOpen(false)}>
//             Contact
//           </Link>
//         </div>
//       )}
//     </nav>
//   )
// }



// 'use client'

// import Link from 'next/link'
// import Image from 'next/image'
// import { useState, useEffect, useRef } from 'react'
// import { Menu, X, ChevronDown, ChevronRight } from 'lucide-react'

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false)
//   const [mobileServiceOpen, setMobileServiceOpen] = useState(false)
//   const [desktopSubmenuOpen, setDesktopSubmenuOpen] = useState('')
//   const [mobileSubmenuOpen, setMobileSubmenuOpen] = useState('')

//   const desktopDropdownRef = useRef(null)

//   // Close desktop dropdown on outside click
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (
//         desktopDropdownRef.current &&
//         !desktopDropdownRef.current.contains(event.target)
//       ) {
//         setDesktopSubmenuOpen('')
//       }
//     }

//     document.addEventListener('mousedown', handleClickOutside)
//     return () => {
//       document.removeEventListener('mousedown', handleClickOutside)
//     }
//   }, [])

//   const services = {
//     'Software-Development': [
//       { label: 'Web Development', href: '/services/web-development' },
//       { label: 'App Development', href: '/services/app-development' },
//       { label: 'UI/UX Design', href: '/services/ui-ux' },
//     ],
//     'Digital Marketing': [
//       { label: 'SEO', href: '/services/seo' },
//       { label: 'Social Media Marketing', href: '/services/smm' },
//     ],
//   }

//   return (
//     <nav className="bg-white shadow-md sticky top-0 z-50">
//       <div className="w-full max-w-6xl mx-auto px-2 py-3 flex justify-between items-center">
//         {/* Logo */}
//         <Link href="/" className="flex items-center space-x-2">
//           <Image src="/images/shioftlogo.png" alt="Logo" width={60} height={60} className="rounded-full" />
//           <span className="text-2xl font-bold text-blue-600 tracking-tight">Shioft Digital</span>
//         </Link>

//         {/* Desktop Navigation */}
//         <div className="hidden md:flex space-x-8 text-gray-700 font-medium items-center">
//           <Link href="/" className="hover:text-blue-600">Home</Link>

//           {/* Services Dropdown */}
//           <div className="relative" ref={desktopDropdownRef}>
//             <button
//               className="flex items-center hover:text-blue-600"
//               onClick={() => setDesktopSubmenuOpen(desktopSubmenuOpen ? '' : 'open')}
//             >
//               Services <ChevronDown size={16} className="ml-1" />
//             </button>

//             {desktopSubmenuOpen && (
//               <div className="absolute bg-white shadow-md rounded-md mt-2 p-2 w-60 z-50">
//                 {Object.keys(services).map((category) => (
//                   <div key={category} className="relative">
//                     <button
//                       className="flex w-full items-center justify-between px-2 py-1 hover:text-blue-600"
//                       onClick={() =>
//                         setDesktopSubmenuOpen(
//                           desktopSubmenuOpen === category ? 'open' : category
//                         )
//                       }
//                     >
//                       {category}
//                       <ChevronRight size={14} />
//                     </button>

//                     {desktopSubmenuOpen === category && (
//                       <div className="absolute left-full top-0 ml-2 bg-white shadow-lg rounded-md p-2 w-48 z-50">
//                         {services[category].map((service) => (
//                           <Link
//                             key={service.label}
//                             href={service.href}
//                             className="block px-2 py-1 hover:bg-blue-50"
//                           >
//                             {service.label}
//                           </Link>
//                         ))}
//                       </div>
//                     )}
//                   </div>
//                 ))}
//               </div>
//             )}
//           </div>

//           <Link href="/about" className="hover:text-blue-600">About</Link>
//           <Link href="/#contact" className="hover:text-blue-600">Contact</Link>
//         </div>

//         {/* Mobile Toggle */}
//         <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-gray-700">
//           {isOpen ? <X size={28} /> : <Menu size={28} />}
//         </button>
//       </div>

//       {/* Mobile Navigation */}
//       {isOpen && (
//         <div className="md:hidden bg-white px-4 pb-4 space-y-3 shadow-inner text-gray-700 font-medium">
//           <Link href="/" className="block hover:text-blue-600" onClick={() => setIsOpen(false)}>Home</Link>
//           <Link href="/about" className="block hover:text-blue-600" onClick={() => setIsOpen(false)}>About</Link>

//           {/* Services Dropdown for Mobile */}
//           <div>
//             <button
//               onClick={() => setMobileServiceOpen(!mobileServiceOpen)}
//               className="flex justify-between items-center w-full hover:text-blue-600"
//             >
//               Services <ChevronDown size={16} />
//             </button>

//             {mobileServiceOpen && (
//               <div className="pl-4 mt-2 space-y-1">
//                 {Object.keys(services).map((category) => (
//                   <div key={category}>
//                     <button
//                       onClick={() =>
//                         setMobileSubmenuOpen(
//                           mobileSubmenuOpen === category ? '' : category
//                         )
//                       }
//                       className="flex justify-between w-full hover:text-blue-600"
//                     >
//                       {category}
//                       <ChevronRight size={14} />
//                     </button>
//                     {mobileSubmenuOpen === category && (
//                       <div className="pl-4 mt-1 space-y-1">
//                         {services[category].map((service) => (
//                           <Link
//                             key={service.label}
//                             href={service.href}
//                             onClick={() => setIsOpen(false)}
//                             className="block hover:text-blue-600"
//                           >
//                             {service.label}
//                           </Link>
//                         ))}
//                       </div>
//                     )}
//                   </div>
//                 ))}
//               </div>
//             )}
//           </div>

//           <Link href="/#contact" className="block hover:text-blue-600" onClick={() => setIsOpen(false)}>Contact</Link>
//         </div>
//       )}
//     </nav>
//   )
// }



'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect, useRef } from 'react'
import { Menu, X, ChevronDown } from 'lucide-react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [serviceDropdownOpen, setServiceDropdownOpen] = useState(false)
  const [activeCategory, setActiveCategory] = useState('')
  const [mobileSubmenuOpen, setMobileSubmenuOpen] = useState('')

  const dropdownRef = useRef(null)
  
  const services = {
    'Software-Development': [
      { label: 'Web Development', href: '/services/web-development' },
      { label: 'App Development', href: '/services/mobile-app-development' },
      { label: 'AI-Solutions', href: '/services/ai-ml' },
      { label: 'Web Design', href: '/services/web-design' },
      { label: 'Cloud Solution', href: '/services/cloud-solution' },
    ],
    'Digital Marketing': [
      { label: 'SEO', href: '/services/seo' },
      { label: 'Social Media Marketing', href: '/services/smm' },
      { label: 'Email/sms Marketing', href: '/services/email-sms-marketing' },
    ],
  }

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setServiceDropdownOpen(false)
        setActiveCategory('')
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="w-full max-w-7xl mx-auto px-2 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/images/shioftlogo.png"
            alt="Logo"
            width={60}
            height={60}
            className="rounded-full"
          />
          <span className="text-2xl font-bold text-blue-600 tracking-tight">
            Shioft Digital
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-8 text-gray-700 font-medium items-center">
          <Link href="/" className="hover:text-blue-600">
            Home
          </Link>

          {/* Services Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              className="flex items-center hover:text-blue-600"
              onClick={() => {
                setServiceDropdownOpen(!serviceDropdownOpen)
                setActiveCategory('')
              }}
            >
              Services
              <ChevronDown
                size={16}
                className={`ml-1 transform transition-transform duration-200 ${
                  serviceDropdownOpen ? 'rotate-180' : ''
                }`}
              />
            </button>

            {serviceDropdownOpen && (
              <div className="absolute left-0 mt-2 w-56 bg-white shadow-lg rounded-md p-2 space-y-2 z-50">
                {Object.keys(services).map((category) => (
                  <div key={category}>
                    <button
                      className="w-full text-left flex items-center justify-between px-2 py-1 hover:bg-blue-50 rounded"
                      onClick={() =>
                        setActiveCategory(
                          activeCategory === category ? '' : category
                        )
                      }
                    >
                      {category}
                      <ChevronDown
                        size={14}
                        className={`transform transition-transform duration-200 ${
                          activeCategory === category ? 'rotate-180' : ''
                        }`}
                      />
                    </button>

                    {activeCategory === category && (
                      <div className="mt-1 ml-4 space-y-1">
                        {services[category].map((service) => (
                          <Link
                            key={service.label}
                            href={service.href}
                            className="block px-2 py-1 text-md hover:text-blue-600"
                          >
                            {service.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>

          <Link href="/about" className="hover:text-blue-600">
            About
          </Link>
          <Link href="/#contact" className="hover:text-blue-600">
            Contact
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-700"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white px-4 pb-4 space-y-3 shadow-inner text-gray-700 font-medium">
          <Link
            href="/"
            className="block hover:text-blue-600"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/about"
            className="block hover:text-blue-600"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>

          {/* Mobile Services Dropdown */}
          <div>
            <button
              onClick={() => setServiceDropdownOpen(!serviceDropdownOpen)}
              className="flex justify-between items-center w-full hover:text-blue-600"
            >
              Services
              <ChevronDown
                size={16}
                className={`transform transition-transform duration-200 ${
                  serviceDropdownOpen ? 'rotate-180' : ''
                }`}
              />
            </button>

            {serviceDropdownOpen && (
              <div className="pl-4 mt-2 space-y-2">
                {Object.keys(services).map((category) => (
                  <div key={category}>
                    <button
                      onClick={() =>
                        setMobileSubmenuOpen(
                          mobileSubmenuOpen === category ? '' : category
                        )
                      }
                      className="flex justify-between w-full hover:text-blue-600"
                    >
                      {category}
                      <ChevronDown
                        size={14}
                        className={`transform transition-transform duration-200 ${
                          mobileSubmenuOpen === category ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    {mobileSubmenuOpen === category && (
                      <div className="pl-4 mt-1 space-y-1">
                        {services[category].map((service) => (
                          <Link
                            key={service.label}
                            href={service.href}
                            onClick={() => setIsOpen(false)}
                            className="block hover:text-blue-600 text-sm"
                          >
                            {service.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>

          <Link
            href="/#contact"
            className="block hover:text-blue-600"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  )
}
