// 'use client'

// import Slider from 'react-slick'
// import { FaQuoteLeft } from 'react-icons/fa'

// const testimonials = [
//   {
//     name: 'Anjali Verma',
//     role: 'Product Manager, TechNova',
//     quote: 
//       'Working with Shioft Digital has been an absolute pleasure. Their expertise in React and backend systems helped us scale our product quickly.',
//   },
//   {
//     name: 'Ravi Patel',
//     role: 'Founder, EduLaunch',
//     quote:
//       'They delivered beyond expectations. Professional, innovative, and always on time. Highly recommended!',
//   },
//   {
//     name: 'Neha Sharma',
//     role: 'CTO, HealthSphere',
//     quote:
//       'Their tech team understood our complex needs and provided seamless solutions. Great communication and support throughout.',
//   },
//   {
//     name: 'Amit Kulkarni',
//     role: 'CEO, MarketGenius',
//     quote:
//       'Superb experience! We saw huge improvements in our product quality and delivery speed after partnering with them.',
//   },
// ]

// export default function Testimonials() {
//   const settings = {
//     dots: true,
//     infinite: true,
//     autoplay: true,
//     autoplaySpeed: 5000,
//     speed: 800,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     arrows: false,
//   }

//   return (
//     <section className="bg-gray-50 py-20 px-4" id="testimonials">
//       <div className="max-w-4xl mx-auto text-center">
//         <h2 className="text-4xl font-bold text-gray-800 mb-10">What Our Clients Say</h2>
//         <Slider {...settings}>
//           {testimonials.map((t, idx) => (
//             <div key={idx} className="px-4">
//               <div className="bg-white p-8 rounded-xl shadow-lg border max-w-3xl mx-auto">
//                 <FaQuoteLeft className="text-blue-600 text-3xl mb-4" />
//                 <p className="text-gray-700 italic mb-6 text-lg">"{t.quote}"</p>
//                 <h3 className="text-lg font-semibold text-blue-800">{t.name}</h3>
//                 <p className="text-sm text-gray-500">{t.role}</p>
//               </div>
//             </div>
//           ))}
//         </Slider>
//       </div>
//     </section>
//   )
// }


'use client'

import Slider from 'react-slick'
import { FaQuoteLeft } from 'react-icons/fa'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const testimonials = [
  {
    name: 'Anjali Verma',
    role: 'Product Manager, TechNova',
    quote:
      'Working with Shioft Digital has been an absolute pleasure. Their expertise in React and backend systems helped us scale our product quickly.',
    image: 'https://randomuser.me/api/portraits/women/1.jpg',
  },
  {
    name: 'Ravi Patel',
    role: 'Founder, EduLaunch',
    quote:
      'They delivered beyond expectations. Professional, innovative, and always on time. Highly recommended!',
    image: 'https://randomuser.me/api/portraits/men/2.jpg',
  },
  {
    name: 'Neha Sharma',
    role: 'CTO, HealthSphere',
    quote:
      'Their tech team understood our complex needs and provided seamless solutions. Great communication and support throughout.',
    image: 'https://randomuser.me/api/portraits/women/3.jpg',
  },
  {
    name: 'Amit Kulkarni',
    role: 'CEO, MarketGenius',
    quote:
      'Superb experience! We saw huge improvements in our product quality and delivery speed after partnering with them.',
    image: 'https://randomuser.me/api/portraits/men/4.jpg',
  },
  {
    name: 'Divya Singh',
    role: 'CMO, FinSavvy',
    quote:
      'They crafted a seamless digital experience for our customers. Would love to work with them again.',
    image: 'https://randomuser.me/api/portraits/women/5.jpg',
  },
]

export default function Testimonials() {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 800,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024, // tablet
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640, // mobile
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  }

  return (
    <section className="bg-gradient-to-b from-white to-gray-50 py-20 px-4" id="testimonials">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-12">What Our Clients Say</h2>
        <Slider {...settings}>
          {testimonials.map((t, idx) => (
            <div key={idx} className="px-4">
              <div className="bg-white p-8 rounded-3xl shadow-xl border hover:shadow-2xl transition-all duration-300 h-full flex flex-col items-center text-center">
                {/* <img
                  src={t.image}
                  alt={t.name}
                  className="w-20 h-20 rounded-full object-cover mb-4 border-4 border-blue-100"
                /> */}
               
                <p className="text-gray-700 italic text-md md:text-lg leading-relaxed mb-6">"{t.quote}"</p>
                <div className="mt-auto">
                  <h3 className="text-lg font-semibold text-blue-700">{t.name}</h3>
                  <p className="text-sm text-gray-500">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  )
}
