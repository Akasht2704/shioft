'use client'

import React from 'react'
import Link from 'next/link'
import {
  FaLaptopCode,
  FaMobileAlt,
  FaCloud,
  FaShoppingCart,
  FaRobot,
  FaPaintBrush,
  FaHeadset,
  FaCheckCircle,
  FaBrain,
  FaMicrochip,
  FaSearch,
  FaBullhorn,
  FaCode,
  FaPalette, 
  FaEnvelope
} from 'react-icons/fa'


import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'

const services = [
  { 
    slug: 'web-development',
    title: 'Web Development',
    description: 'Modern, responsive, and secure web apps.',
    icon: <FaLaptopCode className="text-5xl text-blue-600 mb-4" />,
  },
  { 
    slug: 'mobile-app-development',
    title: 'Mobile App Development',
    description: 'Cross-platform apps for Android & iOS.',
    icon: <FaMobileAlt className="text-5xl text-green-600 mb-4" />,
  },
  { 
    slug: 'cloud-solution',
    title: 'Cloud Solutions',
    description: 'Scalable and cost-effective cloud architecture.',
    icon: <FaCloud className="text-5xl text-purple-600 mb-4" />,
  },
  {
    slug: 'e-commerce-app-development', 
    title: 'E-commerce App Development',
    description: 'Custom online store platforms and integrations.',
    icon: <FaShoppingCart className="text-5xl text-pink-500 mb-4" />,
  },
  { 
    slug: 'ai-machine-learning',
    title: 'AI / Machine Learning',
    description: 'Smart solutions using AI/ML for automation.',
    icon: <FaRobot className="text-5xl text-yellow-500 mb-4" />,
  },
  
   {
     slug: 'computer-vision',
     title: 'Computer Vision',
     description: 'AI that interprets and analyzes images and videos.',
     icon: <FaMicrochip className="text-5xl text-indigo-500 mb-4" />,
   },
  { 
    slug:'ai-consulting',
    title: 'AI Consulting',
    description: 'Strategy, planning, and implementation of AI projects.',
    icon: <FaSearch className="text-5xl text-emerald-500 mb-4" />,
  },
  { 
    slug: 'web-design',
    title: 'UI/UX Design',
    description: 'Beautiful and user-friendly interface designs.',
    icon: <FaPalette className="text-5xl text-red-500 mb-4" />,
  },
  { 
    slug:'qa-testing',
    title: 'QA & Testing',
    description: 'Thorough testing for bug-free performance.',
    icon: <FaCheckCircle className="text-5xl text-indigo-600 mb-4" />,
  },
  { 
    slug:'support-maintenance',
    title: 'Support & Maintenance',
    description: 'Ongoing support for your apps and services.',
    icon: <FaHeadset className="text-5xl text-orange-600 mb-4" />,
  },
  {
    slug:'seo',
    title: "Search Engine Optimization ",
    description: "Optimizing your website for search engines to boost visibility and drive organic traffic.",
    icon: <FaSearch className="text-green-600 text-3xl mb-4" />,
  },
  { slug:'social-media-marketing',
    title: "Social Media Marketing",
    description: "Creating and managing impactful social media campaigns to grow your brand presence online.",
    icon: <FaBullhorn className="text-purple-600 text-3xl mb-4" />,
  },
  {
    slug: 'email-sms-marketing',
    title: 'Email/SMS Marketing',
    description: 'Connect with customers directly through email and SMS campaigns.',
    icon: <FaEnvelope className="text-3xl text-yellow-600 mb-4" />,
}
 
]

export default function Services() {
  return (
    <section className="bg-gray-100 py-16 px-4" id="services">
      <h2 className="text-3xl font-bold text-center mb-10">Our Services</h2>
      <Swiper
        modules={[Autoplay]}
        spaceBetween={30}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        loop
      >
        {services.map((service, idx) => (
          <SwiperSlide key={idx}>
            <Link href={`/services/${service.slug}`}>
            
            <div className="bg-white p-6 shadow rounded-lg text-center h-full">
              <div className="flex justify-center">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}
  

