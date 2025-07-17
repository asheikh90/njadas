import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { CheckCircle, Shield, Clock, MapPin, Phone, ArrowRight } from 'lucide-react'

const Home = () => {
  const services = [
    'Static ADAS Calibration',
    'Dynamic Calibration',
    'Post-Collision Calibration',
    'Lane Keep Assist',
    'Blind Spot Systems',
    'Radar & Camera Recalibration'
  ]

  const serviceAreas = [
    { city: 'Neptune', state: 'NJ', description: 'Professional ADAS calibration services in Neptune, New Jersey' },
    { city: 'Cinnaminson', state: 'NJ', description: 'Expert ADAS recalibration in Cinnaminson, New Jersey' },
    { city: 'Philadelphia', state: 'PA', description: 'Collision ADAS reset services in Philadelphia, Pennsylvania' }
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Certified <span className="text-primary-400">ADAS Calibration</span> Services in NJ & Philadelphia
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Static & dynamic sensor calibration for post-collision, glass replacement, and dealer compliance. Professional service with OEM-grade equipment.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact" className="btn-primary inline-flex items-center justify-center">
                  Schedule Your Calibration
                  <ArrowRight className="ml-2" size={20} />
                </Link>
                <a href="tel:(732)555-0123" className="btn-secondary inline-flex items-center justify-center">
                  <Phone className="mr-2" size={20} />
                  Call Now
                </a>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <img
                src="https://images.pexels.com/photos/3806288/pexels-photo-3806288.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="ADAS calibration equipment and modern vehicle"
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent rounded-lg"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section-padding bg-gray-800">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our ADAS Calibration Services</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive calibration services for all major vehicle manufacturers and ADAS systems
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-700 p-6 rounded-lg hover:bg-gray-600 transition-colors duration-300"
              >
                <CheckCircle className="text-primary-400 mb-4" size={24} />
                <h3 className="text-lg font-semibold mb-2">{service}</h3>
                <p className="text-gray-300">Professional calibration with OEM-grade equipment and certified technicians.</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/services" className="btn-primary">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Choose NJADAS?</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Shield className="text-primary-400 mt-1" size={24} />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Certified Technicians</h3>
                    <p className="text-gray-300">Our team is certified and trained on the latest ADAS technologies and calibration procedures.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Clock className="text-primary-400 mt-1" size={24} />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Fast Turnaround</h3>
                    <p className="text-gray-300">Most calibrations completed within 2-4 hours, getting vehicles back on the road quickly.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <MapPin className="text-primary-400 mt-1" size={24} />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Mobile Service Available</h3>
                    <p className="text-gray-300">On-site calibration services for collision shops and fleet operators.</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <img
                src="https://images.pexels.com/photos/3807277/pexels-photo-3807277.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Professional ADAS calibration technician at work"
                className="rounded-lg shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Coverage Areas */}
      <section className="section-padding bg-gray-800">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Service Coverage Areas</h2>
            <p className="text-xl text-gray-300">Professional ADAS calibration services across New Jersey and Philadelphia</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {serviceAreas.map((area, index) => (
              <motion.div
                key={`${area.city}-${area.state}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-700 p-6 rounded-lg text-center hover:bg-gray-600 transition-colors duration-300"
              >
                <MapPin className="text-primary-400 mx-auto mb-4" size={32} />
                <h3 className="text-2xl font-bold mb-2">{area.city}, {area.state}</h3>
                <p className="text-gray-300">{area.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/coverage-areas" className="btn-primary">
              View Coverage Details
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary-600">
        <div className="container-max text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Schedule Your ADAS Calibration?</h2>
            <p className="text-xl mb-8 opacity-90">
              Get your vehicle's safety systems properly calibrated by certified professionals
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="bg-white text-primary-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors duration-300">
                Schedule Service
              </Link>
              <a href="tel:(732)555-0123" className="border-2 border-white text-white hover:bg-white hover:text-primary-600 px-8 py-4 rounded-lg font-semibold transition-colors duration-300">
                Call (732) 555-0123
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}

export default Home
