import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { MapPin, Phone, Clock, Car } from 'lucide-react'

const CoverageAreas = () => {
  const serviceAreas = [
    {
      city: 'Neptune',
      state: 'NJ',
      zipCodes: ['07753', '07754'],
      description: 'Professional ADAS calibration in Neptune, NJ for collision repair shops, dealerships, and individual vehicle owners. Our certified technicians provide both static and dynamic calibration services using OEM-grade equipment.',
      highlights: [
        'Same-day service available',
        'Mobile calibration for shops',
        'All major vehicle brands',
        'Post-collision specialists'
      ],
      image: 'https://images.pexels.com/photos/3806288/pexels-photo-3806288.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      city: 'Cinnaminson',
      state: 'NJ',
      zipCodes: ['08077'],
      description: 'Expert ADAS recalibration services in Cinnaminson, NJ. We specialize in windshield replacement calibration, collision repair calibration, and routine maintenance calibration for all advanced driver assistance systems.',
      highlights: [
        'Windshield replacement calibration',
        'Fleet service discounts',
        'Insurance claim support',
        'Quick turnaround times'
      ],
      image: 'https://images.pexels.com/photos/3807277/pexels-photo-3807277.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      city: 'Philadelphia',
      state: 'PA',
      zipCodes: ['19101', '19102', '19103', '19104', '19106'],
      description: 'Collision ADAS reset and calibration services in Philadelphia, PA. Serving auto body shops, insurance companies, and vehicle owners with comprehensive ADAS calibration solutions throughout the Philadelphia metro area.',
      highlights: [
        'Insurance preferred provider',
        'Multi-location service',
        'Emergency calibration',
        'Commercial fleet services'
      ],
      image: 'https://images.pexels.com/photos/3806288/pexels-photo-3806288.jpeg?auto=compress&cs=tinysrgb&w=600'
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 section-padding">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              ADAS Calibration <span className="text-primary-400">Service Areas</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Professional ADAS calibration services across New Jersey and Philadelphia. Mobile service available for collision shops and fleet operators.
            </p>
            <a href="tel:(732)555-0123" className="btn-primary inline-flex items-center">
              <Phone className="mr-2" size={20} />
              Call (732) 555-0123
            </a>
          </motion.div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="section-padding">
        <div className="container-max">
          <div className="space-y-16">
            {serviceAreas.map((area, index) => (
              <motion.div
                key={`${area.city}-${area.state}`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="flex items-center mb-4">
                    <MapPin className="text-primary-400 mr-2" size={24} />
                    <h2 className="text-3xl md:text-4xl font-bold">
                      ADAS Calibration {area.city}, {area.state}
                    </h2>
                  </div>
                  
                  <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                    {area.description}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                    {area.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-center">
                        <div className="w-2 h-2 bg-primary-400 rounded-full mr-3"></div>
                        <span className="text-gray-300">{highlight}</span>
                      </div>
                    ))}
                  </div>

                  <div className="bg-gray-800 p-4 rounded-lg mb-6">
                    <h3 className="font-semibold mb-2">Service ZIP Codes:</h3>
                    <p className="text-gray-300">{area.zipCodes.join(', ')}</p>
                  </div>

                  <Link to="/contact" className="btn-primary">
                    Schedule Service in {area.city}
                  </Link>
                </div>

                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <img
                    src={area.image}
                    alt={`ADAS calibration services in ${area.city}, ${area.state}`}
                    className="rounded-lg shadow-xl w-full h-80 object-cover"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Features */}
      <section className="section-padding bg-gray-800">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose NJADAS in Your Area?</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Local expertise with professional-grade equipment and certified technicians
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <div className="bg-primary-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Fast Service</h3>
              <p className="text-gray-300">Most calibrations completed within 2-4 hours</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-center"
            >
              <div className="bg-primary-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Car className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Mobile Service</h3>
              <p className="text-gray-300">On-site calibration for collision shops and fleets</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-center"
            >
              <div className="bg-primary-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Local Expertise</h3>
              <p className="text-gray-300">Deep knowledge of local collision shops and dealers</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-center"
            >
              <div className="bg-primary-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
              <p className="text-gray-300">Emergency calibration services available</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section-padding">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Service Coverage Map</h2>
            <p className="text-xl text-gray-300">
              Serving a 50-mile radius from our base locations
            </p>
          </motion.div>

          <div className="bg-gray-800 p-8 rounded-lg">
            <div className="aspect-video bg-gray-700 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <MapPin className="text-primary-400 mx-auto mb-4" size={48} />
                <p className="text-xl font-semibold mb-2">Interactive Service Map</p>
                <p className="text-gray-300">
                  Contact us to confirm service availability in your specific location
                </p>
              </div>
            </div>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Schedule Your Calibration?</h2>
            <p className="text-xl mb-8 opacity-90">
              Professional ADAS calibration services in your area
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
    </div>
  )
}

export default CoverageAreas
