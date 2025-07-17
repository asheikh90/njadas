import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Phone, X, MessageCircle } from 'lucide-react'

const FloatingCTA = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 3000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          className="fixed bottom-6 right-6 z-50"
        >
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 20, scale: 0.8 }}
                className="mb-4 bg-gray-800 rounded-2xl p-6 shadow-2xl border border-gray-700 max-w-sm"
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-lg font-semibold text-white">Need ADAS Calibration?</h3>
                  <button
                    onClick={() => setIsExpanded(false)}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <X size={20} />
                  </button>
                </div>
                <p className="text-gray-300 text-sm mb-4">
                  Get expert ADAS calibration services in Neptune, Cinnaminson, and Philadelphia areas.
                </p>
                <div className="space-y-2">
                  <a
                    href="tel:(732)555-0123"
                    className="flex items-center space-x-2 w-full bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg transition-colors"
                  >
                    <Phone size={16} />
                    <span>Call Now</span>
                  </a>
                  <a
                    href="/contact"
                    className="flex items-center space-x-2 w-full bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-lg transition-colors"
                  >
                    <MessageCircle size={16} />
                    <span>Get Quote</span>
                  </a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsExpanded(!isExpanded)}
            className="bg-primary-600 hover:bg-primary-700 text-white p-4 rounded-full shadow-2xl transition-colors"
          >
            <Phone size={24} />
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default FloatingCTA
