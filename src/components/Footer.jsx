import { FaFacebookF, FaLinkedinIn, FaTwitter, FaGithub } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10 mt-20">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">
        
        {/* Company Info */}
        <div>
          <h3 className="text-2xl font-semibold mb-2">Shioft Digital Pvt Limited</h3>
          <p className="text-gray-400 text-sm">
            Building innovative tech solutions to help businesses grow faster in the digital era.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-xl font-semibold mb-2">Quick Links</h4>
          <ul className="text-gray-400 space-y-2 text-sm">
            <li><a href="#about" className="hover:text-white transition">About Us</a></li>
            <li><a href="#services" className="hover:text-white transition">Services</a></li>
            <li><a href="#technologies" className="hover:text-white transition">Technologies</a></li>
            <li><a href="#contact" className="hover:text-white transition">Contact</a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h4 className="text-xl font-semibold mb-2">Connect with Us</h4>
          <div className="flex justify-center md:justify-start space-x-4 mt-4">
            <a href="#" className="text-gray-400 hover:text-white transition text-xl"><FaFacebookF /></a>
            <a href="#" className="text-gray-400 hover:text-white transition text-xl"><FaLinkedinIn /></a>
            <a href="#" className="text-gray-400 hover:text-white transition text-xl"><FaTwitter /></a>
            <a href="#" className="text-gray-400 hover:text-white transition text-xl"><FaGithub /></a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-700 mt-10 pt-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} TechCompany. All rights reserved.
      </div>
    </footer>
  )
}
