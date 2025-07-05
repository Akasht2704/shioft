
// 'use client';
// import React from 'react'
// import {
//   FaLaptopCode,
//   FaMobileAlt,
//   FaCloud,
//   FaShoppingCart,
//   FaRobot,
//   FaPaintBrush,
//   FaHeadset,
//   FaCheckCircle,
// } from 'react-icons/fa'

// import { Swiper, SwiperSlide } from 'swiper/react'
// import { Autoplay } from 'swiper/modules'
// import 'swiper/css'

// const services = [
//   {
//     title: 'Web Development',
//     description: 'Modern, responsive, and secure web apps.',
//     icon: <FaLaptopCode className="text-5xl text-blue-600 mb-4" />,
//   },
//   {
//     title: 'Mobile App Development',
//     description: 'Cross-platform apps for Android & iOS.',
//     icon: <FaMobileAlt className="text-5xl text-green-600 mb-4" />,
//   },
//   {
//     title: 'Cloud Solutions',
//     description: 'Scalable and cost-effective cloud architecture.',
//     icon: <FaCloud className="text-5xl text-purple-600 mb-4" />,
//   },
//   {
//     title: 'E-commerce App Development',
//     description: 'Custom online store platforms and integrations.',
//     icon: <FaShoppingCart className="text-5xl text-pink-500 mb-4" />,
//   },
//   {
//     title: 'AI / Machine Learning',
//     description: 'Smart solutions using AI/ML for automation.',
//     icon: <FaRobot className="text-5xl text-yellow-500 mb-4" />,
//   },
//   {
//     title: 'UI/UX Design',
//     description: 'Beautiful and user-friendly interface designs.',
//     icon: <FaPaintBrush className="text-5xl text-red-500 mb-4" />,
//   },
//   {
//     title: 'QA & Testing',
//     description: 'Thorough testing for bug-free performance.',
//     icon: <FaCheckCircle className="text-5xl text-indigo-600 mb-4" />,
//   },
//   {
//     title: 'Support & Maintenance',
//     description: 'Ongoing support for your apps and services.',
//     icon: <FaHeadset className="text-5xl text-orange-600 mb-4" />,
//   },
// ]

// export default function Services() {
//   return (
//     <section className="bg-gray-100 py-16 px-4" id="services">
//       <h2 className="text-3xl font-bold text-center mb-10">Our Services</h2>
//       <Swiper
//         modules={[Autoplay]}
//         spaceBetween={30}
//         autoplay={{
//           delay: 2500,
//           disableOnInteraction: false,
//         }}
//         breakpoints={{
//           640: { slidesPerView: 1 },
//           768: { slidesPerView: 2 },
//           1024: { slidesPerView: 3 },
//         }}
//         loop
//       >
//         {services.map((service, idx) => (
//           <SwiperSlide key={idx}>
//             <div className="bg-white p-6 shadow rounded-lg text-center h-full">
//               <div className="flex justify-center">{service.icon}</div>
//               <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
//               <p className="text-gray-600">{service.description}</p>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </section>
//   )
// }




'use client'
import React from 'react'

const services = [
  {
    title: 'Web Development',
    description: `We craft fast, secure, and SEO-friendly websites using the latest technologies like React, Next.js, and Node.js to help businesses build a solid online presence.`,
    img: '/images/web-development-service.png',
  },
  {
    title: 'Mobile App Development',
    description: `Our team builds high-performing, cross-platform mobile apps for Android and iOS using Flutter and React Native, ensuring excellent user experiences.`,
    img: '/images/mobile-app-development-service.png',
  },
  // {
  //   title: 'Cloud Solutions',
  //   description: `We offer scalable cloud infrastructure setup and DevOps automation using AWS, Azure, or GCP to power modern applications with reliability.`,
  //   img: '/your-images/cloud.jpg',
  // },
  // {
  //   title: 'E-commerce App Development',
  //   description: `We design and develop feature-rich e-commerce platforms that are fast, secure, and easy to manage, supporting integrations like Stripe, Razorpay, etc.`,
  //   img: '/your-images/ecommerce.jpg',
  // },
  // {
  //   title: 'AI / Machine Learning',
  //   description: `Unlock the power of intelligent automation with our AI/ML solutions, from recommendation systems to chatbots and predictive analytics.`,
  //   img: '/your-images/ai.jpg',
  // },
  {
    title: 'UI/UX Design',
    description: `We design clean, engaging, and user-friendly interfaces that elevate your brand and deliver intuitive experiences to your users.`,
    img: 'images/website-designing-service.png',
  },
  // {
  //   title: 'QA & Testing',
  //   description: `From unit tests to automated test suites, our QA experts ensure your software is robust, reliable, and bug-free across all environments.`,
  //   img: '/your-images/testing.jpg',
  // },
  // {
  //   title: 'Support & Maintenance',
  //   description: `We provide ongoing technical support, updates, and performance monitoring to ensure your app or website runs smoothly post-launch.`,
  //   img: '/your-images/support.jpg',
  // },

  {
    title: 'SEO (Search Engine Optimization)',
    description: `Our SEO experts optimize your website to rank higher in search engine results, bringing in more traffic, leads, and conversions through content and technical strategies.`,
    img: '/images/search-engine-optimization-service.png',
  },
  {
    title: 'Social Media Marketing',
    description: `We manage your brand’s presence across platforms like Instagram, Facebook, LinkedIn, and Twitter with engaging content, ads, and growth strategies.`,
    img: '/images/search-engine-optimization-1-service.png',
  },
]

export default function Services() {
  return (
    <section className="bg-white py-16 px-4 md:px-10" id="services">
      <h2 className="text-4xl font-bold text-center mb-14">Our Services</h2>

      <div className="space-y-20 px-40 py-8 sm:px-0 sm:py-0 md:px-12 md:py-4">
        {services.map((service, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row ${
              index % 2 !== 0 ? 'md:flex-row-reverse' : ''
            } items-center gap-8`}
          >
            {/* Content Left / Right */}
            <div className="md:w-1/2 space-y-4">
              <h3 className="text-2xl font-bold text-blue-600">{service.title}</h3>
              <p className="text-gray-700 text-lg leading-relaxed">{service.description}</p>
            </div>

            {/* Image Right / Left */}
            <div className="md:w-1/2">
              <div className="w-full h-auto bg-gray-200 rounded-lg overflow-hidden shadow-md">
                <img
                  src={service.img}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}




  