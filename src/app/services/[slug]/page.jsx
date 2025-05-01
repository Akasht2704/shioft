/*import React from 'react'
import services from '@/app/data/servicesData'
import { notFound } from 'next/navigation'

export default function ServiceDetail({ params }) {
  const service = services.find((s) => s.slug === params.slug)

  if (!service) return notFound()

  return (
    <div className="max-w-3xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-4">{service.title}</h1>
      <p className="text-gray-700 text-lg">{service.fullDescription}</p>
    </div>
  )
}
  */

import { FaLaptopCode, FaMobileAlt, FaCloud, FaShoppingCart, FaRobot, FaPaintBrush, FaHeadset, FaCheckCircle, FaBrain, FaMicrochip, FaSearch } from 'react-icons/fa'

const allServices = [
  {
    slug: 'web-development',
    title: 'Web Development',
    description: 'We build fast, secure, and scalable websites using modern technologies like React, Next.js, and Tailwind CSS.',
    icon: <FaLaptopCode className="text-6xl text-blue-600 mb-4" />,
  },
  {
    slug: 'mobile-app-development',
    title: 'Mobile App Development',
    description: 'Cross-platform mobile applications with React Native and Flutter for Android and iOS.',
    icon: <FaMobileAlt className="text-6xl text-green-600 mb-4" />,
  },
  {
    slug: 'cloud-solution',
    title: 'Cloud Solutions',
    description: 'Robust and scalable cloud architecture using AWS, Azure, or GCP.',
    icon: <FaCloud className="text-6xl text-purple-600 mb-4" />,
  },
  {
    slug: 'e-commerce-app-development',
    title: 'E-commerce App Development',
    description: 'Custom e-commerce platforms with secure payment integrations and modern UI.',
    icon: <FaShoppingCart className="text-6xl text-pink-500 mb-4" />,
  },
  {
    slug: 'ai-machine-learning',
    title: 'AI / Machine Learning',
    description: 'Leverage data and machine learning to automate business processes and gain insights.',
    icon: <FaRobot className="text-6xl text-yellow-500 mb-4" />,
  },
  {
    slug: 'natural-language-processing',
    title: 'Natural Language Processing (NLP)',
    description: 'Enable machines to understand and generate human language with NLP models.',
    icon: <FaBrain className="text-6xl text-teal-500 mb-4" />,
  },
  {
    slug: 'computer-vision',
    title: 'Computer Vision',
    description: 'Extract intelligence from images and videos using AI.',
    icon: <FaMicrochip className="text-6xl text-indigo-500 mb-4" />,
  },
  {
    slug: 'ai-consulting',
    title: 'AI Consulting',
    description: 'Strategic guidance for AI integration into your business.',
    icon: <FaSearch className="text-6xl text-emerald-500 mb-4" />,
  },
  {
    slug: 'ui-ux-design',
    title: 'UI/UX Design',
    description: 'Stunning, user-friendly interfaces that delight users.',
    icon: <FaPaintBrush className="text-6xl text-red-500 mb-4" />,
  },
  {
    slug: 'qa-testing',
    title: 'QA & Testing',
    description: 'Comprehensive testing services to ensure bug-free performance.',
    icon: <FaCheckCircle className="text-6xl text-indigo-600 mb-4" />,
  },
  {
    slug: 'support-maintenance',
    title: 'Support & Maintenance',
    description: 'Continuous monitoring and improvements post-launch.',
    icon: <FaHeadset className="text-6xl text-orange-600 mb-4" />,
  },
]

export default function ServiceDetail({ params }) {
  const service = allServices.find(s => s.slug === params.slug)

  if (!service) {
    return (
      <div className="text-center mt-20 text-red-500 text-2xl">
        Service Not Found 😢
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-white py-16 px-4">
      <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-xl p-10 text-center">
        <div className="flex justify-center">{service.icon}</div>
        <h1 className="text-4xl font-bold text-gray-800 mb-4">{service.title}</h1>
        <p className="text-gray-600 text-lg">{service.description}</p>

        <div className="mt-8 text-left">
          <h2 className="text-2xl font-semibold mb-2 text-blue-600">Why Choose Us?</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Experienced developers and designers</li>
            <li>Customer-first approach</li>
            <li>On-time delivery with quality assurance</li>
            <li>Modern tools and frameworks</li>
            <li>Post-deployment support</li>
          </ul>
        </div>

        <div className="mt-10">
          <a
            href="/#contact"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  )
}

