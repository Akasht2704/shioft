// 'use client'

// import { useState } from 'react'
// import { useRouter } from 'next/navigation'
// import axios from 'axios'
// import { FaPaperPlane } from 'react-icons/fa'
// import { FaComments } from 'react-icons/fa6'

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
//     <section id="contact" className="py-16 px-4 bg-gray-50">
//       <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-white rounded-3xl shadow-lg overflow-hidden">
        
//         {/* Left Section */}
//         <div className="relative bg-gradient-to-br from-blue-600 to-indigo-700 h-full p-10 text-white flex flex-col justify-center space-y-6 overflow-hidden rounded-l-3xl">

//   {/* Decorative Background Circle */}
//   <div className="absolute -top-16 -left-16 w-64 h-64 bg-indigo-900 opacity-20 rounded-full z-0"></div>
//   <div className="absolute bottom-0 right-0 w-32 h-32 bg-blue-800 opacity-10 rounded-full z-0"></div>

//   {/* Content */}
//   <div className="relative z-10 space-y-4">
//     <FaComments className="text-5xl text-white drop-shadow" />

//     <h2 className="text-4xl font-bold leading-snug">Let’s Connect</h2>
//     <h2 className="text-3xl font-bold leading-snug">9336237922</h2>

//     <p className="text-lg text-white/80">
//       Have a project in mind or just want to say hello? <br />
//       Fill the form and let's get started.
//     </p>

//     <hr className="border-t border-white/20 my-4 w-2/3" />

//     <ul className="text-lg space-y-2 text-white/80">
//       <li className="flex items-center gap-2">
//         📧 <span>support@shioft.com</span>
//       </li>
//       <li className="flex items-center gap-2">
//         📍 <span>Gurugram, India</span>
//       </li>
//       <li className="flex items-center gap-2">
//         ⏱️ <span>Mon – Fri, 9:00AM – 6:00PM</span>
//       </li>
//     </ul>
//   </div>

//   <div className="relative z-10 mt-auto text-xs text-white/50">
//     We usually respond within 24 hours.
//   </div>
// </div>


//         {/* Right Section - Form */}
//         <form onSubmit={handleSubmit} className="p-6 md:p-8 space-y-4">
//           {/* Name */}
//           <div>
//             <label htmlFor="name" className="block text-md font-medium text-gray-700 mb-1">
//               Full Name
//             </label>
//             <input
//               type="text"
//               id="name"
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//               required
//               className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
//               placeholder="Your name"
//             />
//           </div>

//           {/* Email */}
//           <div>
//             <label htmlFor="email" className="block text-md font-medium text-gray-700 mb-1">
//               Email Address
//             </label>
//             <input
//               type="email"
//               id="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               required
//               className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
//               placeholder="you@example.com"
//             />
//           </div>

//           {/* Message */}
//           <div>
//             <label htmlFor="message" className="block text-md font-medium text-gray-700 mb-1">
//               Message
//             </label>
//             <textarea
//               id="message"
//               name="message"
//               value={formData.message}
//               onChange={handleChange}
//               rows={4}
//               required
//               className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none resize-none"
//               placeholder="Write your query here..."
//             />
//           </div>

//           {/* Submit */}
//           <button
//             type="submit"
//             disabled={status === 'loading'}
//             className="w-full inline-flex items-center justify-center gap-2 rounded-md bg-blue-600 hover:bg-blue-700 px-5 py-2.5 text-white font-medium text-md transition-all"
//           >
//             <FaPaperPlane />
//             {status === 'loading' ? 'Sending...' : 'Send Message'}
//           </button>

//           {/* Status Feedback */}
//           {status === 'error' && (
//             <p className="text-red-500 text-xs text-center mt-2">
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
import ReCAPTCHA from 'react-google-recaptcha'

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState(null)
  const [captchaToken, setCaptchaToken] = useState(null)
  const router = useRouter()

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!captchaToken) {
      alert('Please complete the CAPTCHA')
      return
    }

    setStatus('loading')

    try {
      // Verify captcha before sending form
      const verifyRes = await fetch('/api/verify-captcha', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ token: captchaToken }),
      })

      const verifyData = await verifyRes.json()

      if (!verifyData.success) {
        setStatus('error')
        alert('Captcha verification failed.')
        return
      }

      // Submit form after captcha passed
      const res = await axios.post('/api/register', formData)

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
          <div className="absolute -top-16 -left-16 w-64 h-64 bg-indigo-900 opacity-20 rounded-full z-0"></div>
          <div className="absolute bottom-0 right-0 w-32 h-32 bg-blue-800 opacity-10 rounded-full z-0"></div>

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
              <li className="flex items-center gap-2">📧 <span>support@shioft.com</span></li>
              <li className="flex items-center gap-2">📍 <span>Gurugram, India</span></li>
              <li className="flex items-center gap-2">⏱️ <span>Mon – Fri, 9:00AM – 6:00PM</span></li>
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
            <label htmlFor="name" className="block text-md font-medium text-gray-700 mb-1">Full Name</label>
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
            <label htmlFor="email" className="block text-md font-medium text-gray-700 mb-1">Email Address</label>
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
            <label htmlFor="message" className="block text-md font-medium text-gray-700 mb-1">Message</label>
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

          {/* reCAPTCHA */}
          <div>
            <ReCAPTCHA
              sitekey="6LcVinorAAAAAP0Psyv3Dz_TbN9NKpCPY8TpcSO5" 
              onChange={(token) => setCaptchaToken(token)}
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


