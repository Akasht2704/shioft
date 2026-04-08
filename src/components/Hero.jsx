'use client'
import { motion } from 'framer-motion'
import { FaPaperPlane } from 'react-icons/fa'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-gradient-to-br from-[#02022d] via-[#111101] to-[#210151] text-white overflow-hidden">
      {/* Very subtle matching glow layers */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Cyan glow - matches the light sources in your image */}
        <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-cyan-600/8 rounded-full blur-3xl" />
        {/* Purple/blue glow - matches the overall tone */}
        <div className="absolute bottom-[-5%] right-[-10%] w-[70%] h-[70%] bg-indigo-600/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-16 py-20 md:py-20 grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Left - Text Content */}
        <div className="space-y-8 md:space-y-10">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight"
          >
            Transform Your Vision
            <br />
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-500 bg-clip-text text-transparent">
              Into Digital Reality
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-lg md:text-xl text-gray-300/90 max-w-xl leading-relaxed font-light"
          >
            We craft high-performance websites, intelligent applications, and scalable cloud solutions that help brands grow faster.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="flex flex-wrap gap-5 pt-4"
          >
            <motion.a
              href="#contact"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-700 rounded-xl font-semibold text-lg shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 transition-all duration-300"
              whileHover={{ scale: 1.04, y: -3 }}
              whileTap={{ scale: 0.97 }}
            >
              <motion.span
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
              >
                <FaPaperPlane className="text-lg" />
              </motion.span>
              Let's Talk Project
            </motion.a>

            <motion.a
              href="#services"
              className="inline-flex items-center px-8 py-4 rounded-xl font-medium text-lg border border-white/15 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.98 }}
            >
              View Our Services →
            </motion.a>
          </motion.div>
        </div>

        {/* Right - Your new image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.3, delay: 0.5, type: "spring", stiffness: 90 }}
          className="relative mt-12 md:mt-0 flex justify-center"
       >
       {/* Optional glow (same as before) */}
         <div className="absolute inset-[-15%] bg-gradient-to-tr from-cyan-600/12 via-blue-600/8 to-transparent blur-2xl opacity-70 rounded-full" />
  
          <img
            src="/images/cloud-computing.jpg"  // ← apni image ka path yahan daalo
            alt="Digital Transformation Illustration"
            className="w-full max-w-md sm:max-w-lg md:max-w-xl rounded-2xl shadow-2xl ring-1 ring-white/10 object-cover"
          />
        </motion.div>
      </div>
    </section>
  )
}