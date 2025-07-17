import React from 'react'
import { motion } from 'framer-motion'
import { Phone } from 'lucide-react'

const FloatingCTA = () => {
  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      className="fixed bottom-6 right-6 z-50 md:hidden"
    >
      <a
        href="tel:(732)555-0123"
        className="bg-primary-600 hover:bg-primary-700 text-white p-4 rounded-full shadow-lg flex items-center space-x-2 transition-all duration-300 transform hover:scale-105"
      >
        <Phone size={20} />
        <span className="font-semibold">Call Now</span>
      </a>
    </motion.div>
  )
}

export default FloatingCTA
