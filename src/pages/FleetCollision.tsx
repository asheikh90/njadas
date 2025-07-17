import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Truck, Building, Clock, Shield, Users, Wrench } from 'lucide-react'

const FleetCollision = () => {
  const clientTypes = [
    {
      icon: <Building size={32} />,
      title: 'Collision Centers',
      description: 'Complete ADAS calibration services for auto body shops and collision repair facilities.',
      features: [
        'On-site mobile calibration',
        'Insurance claim support',
        'Fast turnaround times',
        'OEM compliance documentation'
      ],
      image: 'https://images.pexels.com/photos/3807277/pexels-photo-3807277.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      icon: <Wrench size={32} />,
      title: 'Windshield Installers',
      description: 'Specialized calibration services for glass replacement and windshield installation companies.',
      features: [
        'Same-day calibration service',
        'All major vehicle brands',
        'Mobile service available',
        'Warranty support'
      ],
      image: 'https://images.pexels.com/photos/3806288/pexels-photo-3806288.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      icon: <Users size={32} />,
      title: 'Auto Dealerships',
      description: 'Professional calibration services for new and used vehicle sales departments.',
      features: [
        'Pre-delivery inspections',
        'Service department support',
        'Customer satisfaction guarantee',
        'Flexible scheduling'
      ],
      image: 'https://images.pexels.com/photos/3807277/pexels-photo-3807277.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      icon: <Truck size={32} />,
      title: 'Fleet Operators',
      description: 'Comprehensive ADAS maintenance and calibration for commercial vehicle fleets.',
      features: [
        'Volume pricing discounts',
        'Scheduled maintenance programs',
        'Multi-location service',
        'Fleet management reporting'
      ],
      image: 'https://images.pexels.com/photos/3806288/pexels-photo-3806288.jpeg?auto=compress&cs=tinysrgb&w=600'
    }
  ]

  const benefits = [
    {
      icon: <Clock size={24} />,
      title: 'Fast Turnaround',
      description: 'Most calibrations completed within 2-4 hours to minimize vehicle downtime.'
    },
    {
      icon: <Shield size={24} />,
      title: 'Insurance Approved',
      description: 'Work directly with insurance companies and provide required documentation.'
    },
    {
      icon: <Truck size={24} />,
      title: 'Mobile Service',
      description: 'On-site calibration at your facility to maximize efficiency and convenience.'
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
              <span className="text-primary-400">Fleet & Collision Shop</span> ADAS Services
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Professional ADAS calibration services for collision centers, windshield installers, auto dealerships, and fleet operators. On-site service with fast turnaround times.
            </p>
            <Link to="/contact" className="btn-primary">
              Partner With NJADAS
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Client Types */}
      <section className="section-padding">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Who We Serve</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Specialized ADAS calibration services tailored to your business needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {clientTypes.map((client, index) => (
              <motion.div
                key={client.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-800 rounded-lg overflow-hidden hover:bg-gray-700 transition-colors duration-300"
              >
                <div className="p-8">
                  <div className="flex items-center mb-4">
                    <div className="text-primary-400 mr-4">
                      {client.icon}
                    </div>
                    <h3 className="text-2xl font-bold">{client.title}</h3>
                  </div>
                  <p className="text-gray-300 mb-6">{client.description}</p>
                  <ul className="space-y-2 mb-6">
                    {client.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-300">
                        <div className="w-2 h-2 bg-primary-400 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <img
                  src={client.image}
                  alt={`${client.title} ADAS calibration services`}
                  className="w-full h-48 object-cover"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding bg-gray-800">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Partner With NJADAS?</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Professional service designed to support your business operations
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="bg-primary-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="text-white">
                    {benefit.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Process */}
      <section className="section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Commercial Service Process</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">1</div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Initial Consultation</h3>
                    <p className="text-gray-300">We assess your business needs and develop a customized service plan.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-primary-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">2</div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Service Agreement</h3>
                    <p className="text-gray-300">Flexible terms with volume pricing and priority scheduling options.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-primary-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">3</div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">On-Site Service</h3>
                    <p className="text-gray-300">Professional calibration at your location with minimal disruption.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-primary-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">4</div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Documentation & Reporting</h3>
                    <p className="text-gray-300">Complete service records and insurance documentation provided.</p>
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
                alt="Commercial ADAS calibration service process"
                className="rounded-lg shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pricing & Packages */}
      <section className="section-padding bg-gray-800">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Commercial Service Packages</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Flexible pricing options designed for business needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-gray-700 p-6 rounded-lg"
            >
              <h3 className="text-xl font-bold mb-4">Basic Partnership</h3>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-gray-300">
                  <div className="w-2 h-2 bg-primary-400 rounded-full mr-3"></div>
                  Standard pricing
                </li>
                <li className="flex items-center text-gray-300">
                  <div className="w-2 h-2 bg-primary-400 rounded-full mr-3"></div>
                  Next-day scheduling
                </li>
                <li className="flex items-center text-gray-300">
                  <div className="w-2 h-2 bg-primary-400 rounded-full mr-3"></div>
                  Basic documentation
                </li>
              </ul>
              <p className="text-gray-400">Perfect for occasional calibration needs</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-primary-600 p-6 rounded-lg relative"
            >
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-accent-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                Most Popular
              </div>
              <h3 className="text-xl font-bold mb-4">Premium Partnership</h3>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                  Volume discounts
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                  Priority scheduling
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                  Comprehensive reporting
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                  On-site service
                </li>
              </ul>
              <p className="opacity-90">Ideal for regular calibration requirements</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-gray-700 p-6 rounded-lg"
            >
              <h3 className="text-xl font-bold mb-4">Enterprise Partnership</h3>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-gray-300">
                  <div className="w-2 h-2 bg-primary-400 rounded-full mr-3"></div>
                  Custom pricing
                </li>
                <li className="flex items-center text-gray-300">
                  <div className="w-2 h-2 bg-primary-400 rounded-full mr-3"></div>
                  Dedicated support
                </li>
                <li className="flex items-center text-gray-300">
                  <div className="w-2 h-2 bg-primary-400 rounded-full mr-3"></div>
                  Multi-location service
                </li>
                <li className="flex items-center text-gray-300">
                  <div className="w-2 h-2 bg-primary-400 rounded-full mr-3"></div>
                  Fleet management tools
                </li>
              </ul>
              <p className="text-gray-400">For large fleets and high-volume operations</p>
            </motion.div>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Partner With NJADAS?</h2>
            <p className="text-xl mb-8 opacity-90">
              Let's discuss how we can support your business with professional ADAS calibration services
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="bg-white text-primary-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors duration-300">
                Book Commercial Calibrations
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

export default FleetCollision
