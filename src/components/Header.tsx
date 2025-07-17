import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Menu, X, Phone, Mail } from 'lucide-react'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Coverage Areas', href: '/coverage-areas' },
    { name: 'Why Calibration Matters', href: '/why-calibration-matters' },
    { name: 'Fleet & Collision', href: '/fleet-collision-shops' },
    { name: 'Blog', href: '/blog' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Contact', href: '/contact' },
  ]

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="bg-gray-800/95 backdrop-blur-sm shadow-lg sticky top-0 z-50 border-b border-gray-700/50"
    >
      <div className="container-max">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="flex items-center space-x-3">
            <motion.div 
              whileHover={{ scale: 1.05, rotate: 5 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-700 rounded-xl flex items-center justify-center shadow-lg"
            >
              <span className="text-white font-bold text-xl">NJ</span>
            </motion.div>
            <div>
              <span className="text-2xl font-bold text-white tracking-tight">ADAS</span>
              <div className="text-xs text-primary-400 font-medium">Calibration Experts</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-1">
            {navigation.map((item) => (
              <motion.div key={item.name} whileHover={{ y: -2 }}>
                <Link
                  to={item.href}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    location.pathname === item.href
                      ? 'text-primary-400 bg-primary-900/30'
                      : 'text-gray-300 hover:text-white hover:bg-gray-700/50'
                  }`}
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}
          </nav>

          {/* Contact Info */}
          <div className="hidden md:flex items-center space-x-6">
            <motion.a 
              whileHover={{ scale: 1.05 }}
              href="tel:(732)555-0123" 
              className="flex items-center space-x-2 text-sm text-gray-300 hover:text-primary-400 transition-colors"
            >
              <Phone size={16} />
              <span>(732) 555-0123</span>
            </motion.a>
            <motion.a 
              whileHover={{ scale: 1.05 }}
              href="mailto:info@njadas.com" 
              className="flex items-center space-x-2 text-sm text-gray-300 hover:text-primary-400 transition-colors"
            >
              <Mail size={16} />
              <span>info@njadas.com</span>
            </motion.a>
          </div>

          {/* Mobile menu button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-md text-gray-300 hover:text-white hover:bg-gray-700/50 transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden pb-4"
          >
            <nav className="flex flex-col space-y-1">
              {navigation.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    to={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                      location.pathname === item.href
                        ? 'text-primary-400 bg-primary-900/30'
                        : 'text-gray-300 hover:text-white hover:bg-gray-700/50'
                    }`}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </div>
    </motion.header>
  )
}

export default Header
