import React from 'react'
import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-gray-800 border-t border-gray-700">
      <div className="container-max section-padding">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">NJ</span>
              </div>
              <span className="text-2xl font-bold text-white">ADAS</span>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Professional ADAS calibration services for collision repair shops, dealerships, and fleet operators across New Jersey and Philadelphia.
            </p>
            <div className="space-y-2">
              <a href="tel:(732)555-0123" className="flex items-center space-x-2 text-gray-300 hover:text-white">
                <Phone size={16} />
                <span>(732) 555-0123</span>
              </a>
              <a href="mailto:info@njadas.com" className="flex items-center space-x-2 text-gray-300 hover:text-white">
                <Mail size={16} />
                <span>info@njadas.com</span>
              </a>
              <div className="flex items-center space-x-2 text-gray-300">
                <MapPin size={16} />
                <span>Serving NJ & Philadelphia</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/services" className="text-gray-300 hover:text-white">Services</Link></li>
              <li><Link to="/coverage-areas" className="text-gray-300 hover:text-white">Coverage Areas</Link></li>
              <li><Link to="/why-calibration-matters" className="text-gray-300 hover:text-white">Why Calibration</Link></li>
              <li><Link to="/faq" className="text-gray-300 hover:text-white">FAQ</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white">Contact</Link></li>
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Service Areas</h3>
            <ul className="space-y-2">
              <li className="text-gray-300">Neptune, NJ</li>
              <li className="text-gray-300">Cinnaminson, NJ</li>
              <li className="text-gray-300">Philadelphia, PA</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 NJADAS. All rights reserved. | Professional ADAS Calibration Services
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
