
 /* import { FaPaperPlane } from 'react-icons/fa'

  export default function Hero() {
    return (
      <section className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-24 px-4 text-center relative overflow-hidden">
       
        <div className="absolute top-0 left-0 w-32 h-32 bg-white opacity-10 rounded-full blur-2xl animate-ping"></div>
        <div className="absolute bottom-0 right-0 w-40 h-40 bg-white opacity-10 rounded-full blur-2xl animate-pulse"></div>
  
        
        <div className="relative z-10 max-w-4xl mx-auto">
         
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight drop-shadow-lg">
          Empowering   <span className="text-yellow-300"> Ideas with </span> Technology
          </h1>
          <p className="text-lg md:text-2xl mb-8 text-white/90">
          From websites to apps, custom software to cloud solutions — we craft smart digital products that deliver real results, on time, every time.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-3 bg-white text-blue-600 px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-yellow-300 hover:text-white transition duration-300"
          >
            <FaPaperPlane className="animate-bounce" />
            Get In Touch
          </a>
        </div>
      </section>
    )
  }
    */


/*use client'
import { FaPaperPlane } from 'react-icons/fa'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-cyan-500 via-indigo-600 to-purple-700 text-white py-24 px-4 text-center relative overflow-hidden">
     
      <div className="absolute top-10 left-10 w-40 h-40 bg-white opacity-10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-52 h-52 bg-white opacity-10 rounded-full blur-3xl animate-ping"></div>

      
      <div className="relative z-10 max-w-4xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight drop-shadow-lg"
        >
          Empowering <span className="text-yellow-300">Ideas with</span> Technology
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-lg md:text-2xl mb-8 text-white/90"
        >
          From sleek websites to intelligent apps and scalable cloud systems — we engineer digital solutions that truly perform.
        </motion.p>

        <motion.a
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          href="#contact"
          className="inline-flex items-center gap-3 bg-yellow-300 text-gray-900 px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-yellow-400 transition duration-300"
        >
          <FaPaperPlane className="animate-bounce" />
          Get In Touch
        </motion.a>
      </div>
    </section>
  )
}
  */

'use client'
import { FaPaperPlane } from 'react-icons/fa'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-cyan-500 via-indigo-600 to-purple-700 text-white py-24 px-6 md:px-12 relative overflow-hidden">
      {/* Soft Background Orbs */}
      <div className="absolute top-10 left-10 w-40 h-40 bg-white opacity-10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-52 h-52 bg-white opacity-10 rounded-full blur-3xl animate-ping"></div>

      {/* Grid Layout for Text and Image */}
      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12">
        
        {/* Left: Main Text */}
        <div>
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight drop-shadow-lg"
          >
            Empowering <span className="text-yellow-300">Ideas with</span> Technology
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-lg md:text-2xl mb-8 text-white/90"
          >
            From sleek websites to intelligent apps and scalable cloud systems — we engineer digital solutions that truly perform.
          </motion.p>

          <motion.a
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            href="#contact"
            className="inline-flex items-center gap-3 bg-yellow-300 text-gray-900 px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-yellow-400 transition duration-300"
          >
            <FaPaperPlane className="animate-bounce" />
            Get In Touch
          </motion.a>
        </div>

        {/* Right: Image Placeholder */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="flex justify-center"
        >
          <img
            src="/images/hero.png"
            alt="Hero Illustration"
            className="w-full max-w-md md:max-w-lg rounded-xl shadow-xl"
          />
        </motion.div>
      </div>
    </section>
  )
}

