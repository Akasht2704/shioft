// 'use client'

// import { FaUser, FaEnvelope, FaCommentDots, FaPaperPlane } from 'react-icons/fa'
// import axios from 'axios'
// import { useRouter } from 'next/navigation';
// import { useState } from 'react';

// export default function Contact() {

//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     message: ''
//   })
//   const router = useRouter();

//   const [status, setStatus] = useState(null)

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value })
//   }

//   const handleSubmit = async (e) => {
//     e.preventDefault()
//     setStatus('loading')

//     try {
//       const res = await axios.post('/api/interest',formData)

//       if (res.data.success) {
//         setStatus('success')
//         setFormData({ name: '', email: '',  message: '' })
//         router.push('/thank-you');
//       } else {
//         setStatus(result.error || 'Something went wrong')
//       }
//     } catch (error) {
//       setStatus('error')
//     }
//   }
//   return (
//     <section
//       id="contact"
//       className="relative py-24 px-6 bg-gradient-to-br from-blue-100 via-white to-indigo-100 overflow-hidden"
//     >
//       <div className="absolute inset-0 bg-[url('/contact-bg.jpg')] bg-cover bg-center opacity-10 blur-sm"></div>

//       <div className="relative max-w-4xl mx-auto">
//         <div className="text-center mb-12">
//           <h2 className="text-4xl font-extrabold text-gray-800 drop-shadow-sm">Let’s Talk</h2>
//           <p className="mt-2 text-gray-600 text-lg">
//             Have a project or just want to say hi? Fill the form below.
//           </p>
//         </div>

//         <form onSubmit={handleSubmit} className="bg-white/70 backdrop-blur-md rounded-3xl shadow-2xl p-10 space-y-8">
//           {/* Name Field */}
//           <div className="flex items-center border border-gray-300 rounded-xl overflow-hidden transition-all focus-within:ring-2 focus-within:ring-blue-500">
//             <div className="bg-blue-100 px-4 py-3">
//               <FaUser className="text-blue-600" />
//             </div>
//             <input
//               type="text"
//               name='name'
//               value={formData.name}
//               onChange={handleChange}
//               placeholder="Your Full Name"
//               className="w-full px-4 py-3 text-gray-800 placeholder-gray-500 bg-transparent focus:outline-none"
//             />
//           </div>

//           {/* Email Field */}
//           <div className="flex items-center border border-gray-300 rounded-xl overflow-hidden transition-all focus-within:ring-2 focus-within:ring-blue-500">
//             <div className="bg-blue-100 px-4 py-3">
//               <FaEnvelope className="text-blue-600" />
//             </div>
//             <input
//               type="email"
//               name='email'
//               value={formData.email}
//               onChange={handleChange}
//               placeholder="Your Email Address"
//               className="w-full px-4 py-3 text-gray-800 placeholder-gray-500 bg-transparent focus:outline-none"
//             />
//           </div>

//           {/* Message Field */}
//           <div className="flex items-start border border-gray-300 rounded-xl overflow-hidden transition-all focus-within:ring-2 focus-within:ring-blue-500">
//             <div className="bg-blue-100 px-4 py-3">
//               <FaCommentDots className="text-blue-600 mt-1" />
//             </div>
//             <textarea
//               name='message'
//               value={formData.message}
//               onChange={handleChange}
//               placeholder="Your Message"
//               rows={6}
//               className="w-full px-4 py-3 text-gray-800 placeholder-gray-500 bg-transparent focus:outline-none resize-none"
//             />
//           </div>

//           {/* Submit Button */}
//           <button
//             type="submit"
//             className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-indigo-600 hover:to-blue-600 text-white px-8 py-4 rounded-full font-semibold text-lg flex items-center justify-center gap-3 transition-all hover:shadow-xl hover:scale-105 duration-300"
//           >
//             <FaPaperPlane className="animate-bounce" />
//             Send Message
//           </button>
//         </form>
//       </div>
//     </section>
//   )
// }



// 'use client'

// import { useState } from 'react'
// import { useRouter } from 'next/navigation'
// import axios from 'axios'
// import { FaPaperPlane } from 'react-icons/fa'

// export default function Contact() {
//   const [formData, setFormData] = useState({ name: '', email: '', message: '' })
//   const [status, setStatus] = useState(null)
//   const router = useRouter()

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value })
//   }

//   const handleSubmit = async (e) => {
//     e.preventDefault()
//     setStatus('loading')
//     try {
//       const res = await axios.post('/api/interest', formData)
//       if (res.data.success) {
//         setStatus('success')
//         setFormData({ name: '', email: '', message: '' })
//         router.push('/thank-you')
//       } else {
//         setStatus('error')
//       }
//     } catch (error) {
//       setStatus('error')
//     }
//   }

//   return (
//     <section className="py-20 px-4 bg-background" id="contact">
//       <div className="max-w-xl mx-auto space-y-8">
//         <div className="text-center">
//           <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
//             Let’s Talk
//           </h2>
//           <p className="mt-2 text-gray-600 text-base sm:text-lg">
//             Have a project or just want to say hi? Fill the form below.
//           </p>
//         </div>

//         <form
//           onSubmit={handleSubmit}
//           className="space-y-6 bg-white border border-gray-200 rounded-2xl shadow-sm p-8"
//         >
//           {/* Name */}
//           <div className="grid w-full items-center gap-1.5">
//             <label htmlFor="name" className="text-base font-medium text-gray-700">
//               Full Name
//             </label>
//             <input
//               type="text"
//               id="name"
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//               placeholder="Enter your name"
//               className="border border-gray-300 text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 px-4 py-2 w-full"
//               required
//             />
//           </div>

//           {/* Email */}
//           <div className="grid w-full items-center gap-1.5">
//             <label htmlFor="email" className="text-base font-medium text-gray-700">
//               Email Address
//             </label>
//             <input
//               type="email"
//               id="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               placeholder="you@example.com"
//               className="border border-gray-300 text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 px-4 py-2 w-full"
//               required
//             />
//           </div>

//           {/* Message */}
//           <div className="grid w-full items-center gap-1.5">
//             <label htmlFor="message" className="text-base font-medium text-gray-700">
//               Message
//             </label>
//             <textarea
//               id="message"
//               name="message"
//               value={formData.message}
//               onChange={handleChange}
//               placeholder="Type your message here..."
//               rows={5}
//               className="border border-gray-300 text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 px-4 py-2 w-full resize-none"
//               required
//             ></textarea>
//           </div>

//           {/* Button */}
//           <button
//             type="submit"
//             disabled={status === 'loading'}
//             className="w-full inline-flex items-center justify-center gap-2 rounded-md bg-blue-600 hover:bg-blue-700 px-6 py-3 text-white font-medium text-sm transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
//           >
//             <FaPaperPlane className="text-md" />
//             {status === 'loading' ? 'Sending...' : 'Send Message'}
//           </button>

//           {/* Feedback */}
//           {status === 'error' && (
//             <p className="text-red-500 text-sm mt-2 text-center">
//               Something went wrong. Please try again.
//             </p>
//           )}
//         </form>
//       </div>
//     </section>
//   )
// }

'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import axios from 'axios'
import { FaPaperPlane } from 'react-icons/fa'
import { FaComments } from 'react-icons/fa6'

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState(null)
  const router = useRouter()

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')
    try {
      const res = await axios.post('/api/interest', formData)
      if (res.data.success) {
        setStatus('success')
        setFormData({ name: '', email: '', message: '' })
        router.push('/thank-you')
      } else {
        setStatus('error')
      }
    } catch (error) {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="py-16 px-4 bg-gray-50">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-white rounded-3xl shadow-lg overflow-hidden">
        
        {/* Left Section */}
        <div className="relative bg-gradient-to-br from-blue-600 to-indigo-700 h-full p-10 text-white flex flex-col justify-center space-y-6 overflow-hidden rounded-l-3xl">

  {/* Decorative Background Circle */}
  <div className="absolute -top-16 -left-16 w-64 h-64 bg-indigo-900 opacity-20 rounded-full z-0"></div>
  <div className="absolute bottom-0 right-0 w-32 h-32 bg-blue-800 opacity-10 rounded-full z-0"></div>

  {/* Content */}
  <div className="relative z-10 space-y-4">
    <FaComments className="text-5xl text-white drop-shadow" />

    <h2 className="text-4xl font-bold leading-snug">Let’s Connect</h2>
    <h2 className="text-3xl font-bold leading-snug">9336237922</h2>

    <p className="text-lg text-white/80">
      Have a project in mind or just want to say hello? <br />
      Fill the form and let's get started.
    </p>

    <hr className="border-t border-white/20 my-4 w-2/3" />

    <ul className="text-lg space-y-2 text-white/80">
      <li className="flex items-center gap-2">
        📧 <span>support@shioft.com</span>
      </li>
      <li className="flex items-center gap-2">
        📍 <span>Gurugram, India</span>
      </li>
      <li className="flex items-center gap-2">
        ⏱️ <span>Mon – Fri, 9:00AM – 6:00PM</span>
      </li>
    </ul>
  </div>

  <div className="relative z-10 mt-auto text-xs text-white/50">
    We usually respond within 24 hours.
  </div>
</div>


        {/* Right Section - Form */}
        <form onSubmit={handleSubmit} className="p-6 md:p-8 space-y-4">
          {/* Name */}
          <div>
            <label htmlFor="name" className="block text-md font-medium text-gray-700 mb-1">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Your name"
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-md font-medium text-gray-700 mb-1">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="you@example.com"
            />
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="block text-md font-medium text-gray-700 mb-1">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              required
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none resize-none"
              placeholder="Write your query here..."
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={status === 'loading'}
            className="w-full inline-flex items-center justify-center gap-2 rounded-md bg-blue-600 hover:bg-blue-700 px-5 py-2.5 text-white font-medium text-md transition-all"
          >
            <FaPaperPlane />
            {status === 'loading' ? 'Sending...' : 'Send Message'}
          </button>

          {/* Status Feedback */}
          {status === 'error' && (
            <p className="text-red-500 text-xs text-center mt-2">
              Something went wrong. Please try again.
            </p>
          )}
        </form>
      </div>
    </section>
  )
}


