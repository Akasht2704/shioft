'use client'

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
  FaEnvelope,
} from 'react-icons/fa'

const allServices = [
  {
    slug: 'web-development',
    title: 'Web Development',
    description: 'We build modern, scalable websites.',
    fullDescription:
      'We specialize in building responsive, secure, and fast-loading websites using technologies like Next.js, React, and Tailwind CSS. From portfolio sites to enterprise applications, we deliver robust solutions tailored to your needs.',
    icon: <FaLaptopCode className="text-6xl text-blue-600 mb-4" />,
    imgUrl: '/images/website-development.webp',
  },
  {
    slug: 'mobile-app-development',
    title: 'Mobile App Development',
    description: 'Build native and cross-platform apps.',
    fullDescription:
      "Our mobile apps are crafted to offer smooth user experiences on both Android and iOS. Whether it's a business tool or a consumer app, we leverage React Native and Flutter to build feature-rich and high-performance apps.",
    icon: <FaMobileAlt className="text-6xl text-green-600 mb-4" />,
    imgUrl: '/images/mobile-app.jpg',
  },
  {
    slug: 'cloud-solution',
    title: 'Cloud Solutions',
    description: 'Reliable and scalable cloud deployments.',
    fullDescription:
      'We provide end-to-end cloud solutions including infrastructure setup, CI/CD, monitoring, and scaling using AWS, Azure, or GCP. Let us modernize your workflow with secure and cost-effective cloud architecture.',
    icon: <FaCloud className="text-6xl text-purple-600 mb-4" />,
    imgUrl: '/images/cloud-computing.jpg',
  },
  {
    slug: 'e-commerce-app-development',
    title: 'E-commerce App Development',
    description: 'Custom e-commerce solutions for your business.',
    fullDescription:
      'From shopping carts to payment gateways and inventory systems, our team builds customized e-commerce platforms to help your business grow online. We ensure secure transactions and modern UI/UX for better conversions.',
    icon: <FaShoppingCart className="text-6xl text-pink-500 mb-4" />,
    imgUrl: '',
  },
  {
    slug: 'ai-ml',
    title: 'AI / Machine Learning',
    description: 'Smart solutions using AI.',
    fullDescription:
      'Harness the power of AI for your business. We implement machine learning models to analyze data, predict trends, automate decisions, and optimize operations — driving innovation and efficiency.',
    icon: <FaRobot className="text-6xl text-yellow-500 mb-4" />,
    imgUrl: '/images/ai1.jpg',
  },
  {
    slug: 'natural-language-processing',
    title: 'Natural Language Processing (NLP)',
    description: 'Enable machines to understand language.',
    fullDescription:
      'Our NLP solutions include chatbots, sentiment analysis, text classification, and language modeling. We help you turn unstructured text into valuable insights using deep learning and large language models.',
    icon: <FaBrain className="text-6xl text-teal-500 mb-4" />,
    imgUrl: '',
  },
  {
    slug: 'computer-vision',
    title: 'Computer Vision',
    description: 'Automate image and video intelligence.',
    fullDescription:
      'We build systems that can detect objects, classify images, and analyze video streams using advanced computer vision techniques. Useful for surveillance, quality control, healthcare, and more.',
    icon: <FaMicrochip className="text-6xl text-indigo-500 mb-4" />,
    imgUrl: '',
  },
  {
    slug: 'ai-consulting',
    title: 'AI Consulting',
    description: 'Strategic guidance for AI adoption.',
    fullDescription:
      'Our experts guide you in identifying AI opportunities, choosing the right tools, and implementing solutions aligned with your business goals. We focus on delivering real ROI with explainable AI.',
    icon: <FaSearch className="text-6xl text-emerald-500 mb-4" />,
    imgUrl: '',
  },
  {
    slug: 'web-design',
    title: 'UI/UX Design',
    description: 'Beautiful, user-friendly interface design.',
    fullDescription:
      'Our designers create engaging and intuitive user experiences backed by user research and prototyping. From wireframes to high-fidelity UI, we ensure consistency, usability, and brand alignment.',
    icon: <FaPaintBrush className="text-6xl text-red-500 mb-4" />,
    imgUrl: '/images/website-designing-service.png',
  },
  {
    slug: 'qa-testing',
    title: 'QA & Testing',
    description: 'Ensure quality with thorough testing.',
    fullDescription:
      'We offer manual and automated testing services, including unit tests, integration tests, and end-to-end testing. Our QA team ensures your app runs bug-free, reliably, and securely before release.',
    icon: <FaCheckCircle className="text-6xl text-indigo-600 mb-4" />,
    imgUrl: '',
  },
  {
    slug: 'support-maintenance',
    title: 'Support & Maintenance',
    description: 'We take care post-deployment.',
    fullDescription:
      'From fixing bugs to updating features and performance monitoring, we provide ongoing support and proactive maintenance to ensure your application stays up-to-date and optimized.',
    icon: <FaHeadset className="text-6xl text-orange-600 mb-4" />,
    imgUrl: '',
  },
  {
    slug: 'seo',
    title: 'Search Engine Optimization (SEO)',
    description: 'Boost your site visibility.',
    fullDescription:
      'We improve your organic ranking with on-page SEO, technical fixes, speed optimization, backlinks, and keyword-rich content. Our strategies help increase traffic, leads, and conversions long term.',
    icon: <FaSearch className="text-6xl text-green-700 mb-4" />,
    imgUrl: '/images/search-engine-optimization-service.png',
  },
  {
    slug: 'smm',
    title: 'Social Media Marketing',
    description: 'Grow your brand on social media.',
    fullDescription:
      'We manage your brand’s presence across platforms like Instagram, LinkedIn, Facebook, and Twitter. From content creation to audience engagement and analytics, we help you connect and convert.',
    icon: <FaHeadset className="text-6xl text-pink-600 mb-4" />,
    imgUrl: '/images/search-engine-optimization-1-service.png',
  },
  {
    slug: 'email-sms-marketing',
    title: 'Email/SMS Marketing',
    description: 'Connect with customers directly through email and SMS campaigns.',
    fullDescription:
      'We help you reach your audience effectively with personalized email and SMS campaigns. From promotional messages to transactional updates, our strategies ensure higher open rates, click-throughs, and conversions.',
    icon: <FaEnvelope className="text-6xl text-yellow-600 mb-4" />,
    imgUrl: '/images/email-sms.png',
  },
]

export default function ServiceDetail({ slug }) {
  const service = allServices.find((s) => s.slug === slug)

  if (!service) {
    return (
      <div className="text-center mt-20 text-red-500 text-2xl">
        Service Not Found
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-white py-16 px-4">
      <div className="max-w-6xl mx-auto bg-white shadow-xl rounded-xl p-10">
        <div className="text-center mb-10">
          <div className="flex justify-center">{service.icon}</div>
          <h1 className="text-4xl font-bold text-gray-800">{service.title}</h1>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">{service.description}</p>
        </div>

        <div className="flex flex-col md:flex-row gap-10 items-start">
          <div className="md:w-1/2 text-gray-700 text-lg">
            <p className="whitespace-pre-line mb-6 p-8">{service.fullDescription}</p>
          </div>

          <div className="md:w-1/2">
            {service.imgUrl ? (
              <img
                src={service.imgUrl}
                alt={`${service.title} services by Shioft Digital`}
                className="rounded-lg shadow-lg w-auto object-cover max-h-[400px]"
              />
            ) : (
              <div className="w-full h-64 bg-gray-100 border border-dashed border-gray-300 flex items-center justify-center text-gray-400 rounded-lg shadow-inner">
                Image coming soon...
              </div>
            )}
          </div>
        </div>

        <div className="mt-10 flex justify-center">
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
