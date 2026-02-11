import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Analytics } from '@vercel/analytics/react'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Services from './pages/Services'
import CoverageAreas from './pages/CoverageAreas'
import WhyCalibration from './pages/WhyCalibration'
import FleetCollision from './pages/FleetCollision'
import FAQ from './pages/FAQ'
import Contact from './pages/Contact'
import Blog from './pages/Blog'
import BlogPost from './pages/BlogPost'
import FloatingCTA from './components/FloatingCTA'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-900 text-white">
        <Header />
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/coverage-areas" element={<CoverageAreas />} />
            <Route path="/why-calibration-matters" element={<WhyCalibration />} />
            <Route path="/fleet-collision-shops" element={<FleetCollision />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
          </Routes>
        </motion.main>
        <Footer />
        <FloatingCTA />
        <Analytics />
      </div>
    </Router>
  )
}

export default App
