'use client'
import { motion } from 'framer-motion'

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-[#ffffff]" id="why-us px-8">
      <div className="max-w-7xl mx-auto px-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold mb-4 text-gray-800">
            Empowering Your Digital Growth
          </h2>
          <p className="text-gray-700 mb-4 text-lg leading-relaxed">
            At <span className="font-semibold text-blue-600">TechCompany</span>, we create smart, scalable solutions tailored for your success. 
            Our expert team transforms ideas into innovative digital products that perform.
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li><span className="font-semibold text-blue-600">5+ years</span> of industry experience</li>
            <li><span className="font-semibold text-blue-600">100+ clients</span> worldwide</li>
            <li><span className="font-semibold text-blue-600">25+ talented</span> team members</li>
            <li><span className="font-semibold text-blue-600">150+ successful</span> projects</li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <img
            src="/images/about.png"
            alt="Tech Illustration"
            className="w-[90%] md:w-[100%] max-w-md rounded-md shadow-lg"
            style={{ backgroundColor: '#ffffff' }}
          />
        </motion.div>
      </div>
    </section>
  )
}
