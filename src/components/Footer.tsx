import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    Services: [
      { name: 'ADAS Calibration', href: '/services' },
      { name: 'Static Calibration', href: '/services' },
      { name: 'Dynamic Testing', href: '/services' },
      { name: 'Fleet Services', href: '/fleet-collision-shops' }
    ],
    Company: [
      { name: 'About Us', href: '/why-calibration-matters' },
      { name: 'Coverage Areas', href: '/coverage-areas' },
      { name: 'Blog', href: '/blog' },
      { name: 'FAQ', href: '/faq' }
    ],
    Support: [
      { name: 'Contact Us', href: '/contact' },
      { name: 'Get Quote', href: '/contact' },
      { name: 'Emergency Service', href: '/contact' },
      { name: 'Partnership Program', href: '/fleet-collision-shops' }
    ]
  }

  return (
    <footer className="bg-gray-800 border-t border-gray-700">
      <div className="container-max">
        <div className="py-16">
          <div className="grid lg:grid-cols-4 gap-12">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <Link to="/" className="flex items-center space-x-3 mb-6">
                <motion.div 
                  whileHover={{ scale: 1.05, rotate: 5 }}
                  className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-700 rounded-xl flex items-center justify-center"
                >
                  <span className="text-white font-bold text-xl">NJ</span>
                </motion.div>
                <div>
                  <span className="text-2xl font-bold text-white">ADAS</span>
                  <div className="text-xs text-primary-400 font-medium">Calibration Experts</div>
                </div>
              </Link>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                New Jersey's premier ADAS calibration specialists, serving Neptune, Cinnaminson, and Philadelphia areas with professional safety system calibration services.
              </p>
              
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-gray-300">
                  <Phone size={18} className="text-primary-400" />
                  <a href="tel:(732)555-0123" className="hover:text-white transition-colors">
                    (732) 555-0123
                  </a>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <Mail size={18} className="text-primary-400" />
                  <a href="mailto:info@njadas.com" className="hover:text-white transition-colors">
                    info@njadas.com
                  </a>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <MapPin size={18} className="text-primary-400" />
                  <span>Neptune, NJ & Cinnaminson, NJ</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <Clock size={18} className="text-primary-400" />
                  <span>Mon-Fri: 8AM-6PM, Sat: 9AM-4PM</span>
                </div>
              </div>
            </div>

            {/* Footer Links */}
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h3 className="text-lg font-semibold text-white mb-6">{category}</h3>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link.name}>
                      <Link
                        to={link.href}
                        className="text-gray-300 hover:text-primary-400 transition-colors"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © {currentYear} NJ ADAS. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-primary-400 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-primary-400 transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-primary-400 transition-colors">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
