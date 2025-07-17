import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Settings, Radar, Camera, Shield, Zap, Target } from 'lucide-react'

const Services = () => {
  const services = [
    {
      icon: <Settings size={32} />,
      title: 'Static ADAS Calibration',
      description: 'Precise calibration using specialized targets and equipment in controlled environment.',
      features: ['Forward collision warning', 'Automatic emergency braking', 'Lane departure warning', 'Adaptive cruise control'],
      image: 'https://images.pexels.com/photos/3807277/pexels-photo-3807277.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      icon: <Zap size={32} />,
      title: 'Dynamic Calibration',
      description: 'Road-based calibration for systems requiring real-world driving conditions.',
      features: ['Lane keep assist', 'Traffic sign recognition', 'Blind spot monitoring', 'Cross traffic alert'],
      image: 'https://images.pexels.com/photos/3806288/pexels-photo-3806288.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      icon: <Shield size={32} />,
      title: 'Post-Collision Calibration',
      description: 'Complete recalibration after accident repairs to ensure safety system functionality.',
      features: ['Impact assessment', 'System diagnostics', 'Full recalibration', 'Safety verification'],
      image: 'https://images.pexels.com/photos/3807277/pexels-photo-3807277.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      icon: <Camera size={32} />,
      title: 'Camera & Radar Systems',
      description: 'Specialized calibration for camera and radar-based ADAS components.',
      features: ['Front camera calibration', 'Radar sensor alignment', 'Multi-camera systems', 'Sensor cleaning'],
      image: 'https://images.pexels.com/photos/3806288/pexels-photo-3806288.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      icon: <Target size={32} />,
      title: 'Blind Spot Monitoring',
      description: 'Calibration and testing of blind spot detection and warning systems.',
      features: ['Side mirror sensors', 'Rear cross traffic', 'Lane change assist', 'System validation'],
      image: 'https://images.pexels.com/photos/3807277/pexels-photo-3807277.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      icon: <Radar size={32} />,
      title: 'Lane Departure Systems',
      description: 'Precise calibration of lane keeping and departure warning systems.',
      features: ['Lane detection', 'Steering assistance', 'Warning alerts', 'System testing'],
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
              Professional <span className="text-primary-400">ADAS Calibration</span> Services
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Comprehensive static and dynamic calibration services for all major vehicle manufacturers. OEM-grade equipment and certified technicians ensure your safety systems work perfectly.
            </p>
            <Link to="/contact" className="btn-primary">
              Schedule Calibration Service
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-800 rounded-lg overflow-hidden hover:bg-gray-700 transition-colors duration-300"
              >
                <div className="p-8">
                  <div className="flex items-center mb-4">
                    <div className="text-primary-400 mr-4">
                      {service.icon}
                    </div>
                    <h2 className="text-2xl font-bold">{service.title}</h2>
                  </div>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-300">
                        <div className="w-2 h-2 bg-primary-400 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <img
                  src={service.image}
                  alt={`${service.title} calibration service`}
                  className="w-full h-48 object-cover"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* OEM Equipment Section */}
      <section className="section-padding bg-gray-800">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">OEM-Grade Equipment & Certification</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We use manufacturer-approved equipment and follow OEM procedures for accurate calibration
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <div className="bg-primary-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Settings className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Professional Equipment</h3>
              <p className="text-gray-300">State-of-the-art calibration tools and diagnostic equipment from leading manufacturers.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-center"
            >
              <div className="bg-primary-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Certified Technicians</h3>
              <p className="text-gray-300">Our team holds certifications from major automotive manufacturers and training organizations.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-center"
            >
              <div className="bg-primary-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Precision Accuracy</h3>
              <p className="text-gray-300">Every calibration meets or exceeds manufacturer specifications for optimal safety performance.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Coverage Areas CTA */}
      <section className="section-padding bg-primary-600">
        <div className="container-max text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Serving New Jersey & Philadelphia</h2>
            <p className="text-xl mb-8 opacity-90">
              Professional ADAS calibration services in Neptune NJ, Cinnaminson NJ, and Philadelphia PA
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/coverage-areas" className="bg-white text-primary-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors duration-300">
                View Coverage Areas
              </Link>
              <Link to="/contact" className="border-2 border-white text-white hover:bg-white hover:text-primary-600 px-8 py-4 rounded-lg font-semibold transition-colors duration-300">
                Schedule Service
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Services
