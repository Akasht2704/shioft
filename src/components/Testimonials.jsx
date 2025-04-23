'use client'

import Slider from 'react-slick'
import { FaQuoteLeft } from 'react-icons/fa'

const testimonials = [
  {
    name: 'Anjali Verma',
    role: 'Product Manager, TechNova',
    quote: 
      'Working with Shioft Digital has been an absolute pleasure. Their expertise in React and backend systems helped us scale our product quickly.',
  },
  {
    name: 'Ravi Patel',
    role: 'Founder, EduLaunch',
    quote:
      'They delivered beyond expectations. Professional, innovative, and always on time. Highly recommended!',
  },
  {
    name: 'Neha Sharma',
    role: 'CTO, HealthSphere',
    quote:
      'Their tech team understood our complex needs and provided seamless solutions. Great communication and support throughout.',
  },
  {
    name: 'Amit Kulkarni',
    role: 'CEO, MarketGenius',
    quote:
      'Superb experience! We saw huge improvements in our product quality and delivery speed after partnering with them.',
  },
]

export default function Testimonials() {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  }

  return (
    <section className="bg-gray-50 py-20 px-4" id="testimonials">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-10">What Our Clients Say</h2>
        <Slider {...settings}>
          {testimonials.map((t, idx) => (
            <div key={idx} className="px-4">
              <div className="bg-white p-8 rounded-xl shadow-lg border max-w-3xl mx-auto">
                <FaQuoteLeft className="text-blue-600 text-3xl mb-4" />
                <p className="text-gray-700 italic mb-6 text-lg">"{t.quote}"</p>
                <h3 className="text-lg font-semibold text-blue-800">{t.name}</h3>
                <p className="text-sm text-gray-500">{t.role}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  )
}
