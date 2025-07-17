import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { AlertTriangle, Shield, Eye, Zap, Car, Settings } from 'lucide-react'

const WhyCalibration = () => {
  const reasons = [
    {
      icon: <Car size={32} />,
      title: 'After Collision Repair',
      description: 'Any impact can misalign sensors and cameras, requiring recalibration to restore proper function.',
      details: ['Frame damage affects sensor positioning', 'Airbag deployment triggers recalibration needs', 'Body panel replacement changes sensor angles']
    },
    {
      icon: <Eye size={32} />,
      title: 'Windshield Replacement',
      description: 'Forward-facing cameras mounted on windshields must be recalibrated after glass replacement.',
      details: ['Camera position changes with new glass', 'Adhesive curing affects mounting angles', 'OEM specifications require recalibration']
    },
    {
      icon: <Settings size={32} />,
      title: 'Wheel Alignment',
      description: 'Changes in vehicle geometry from alignment services can affect ADAS sensor accuracy.',
      details: ['Steering angle sensor recalibration', 'Lane keeping system adjustment', 'Radar alignment verification']
    },
    {
      icon: <Zap size={32} />,
      title: 'System Updates',
      description: 'Software updates and component replacements often require system recalibration.',
      details: ['ECU replacements', 'Software version updates', 'Sensor component changes']
    }
  ]

  const consequences = [
    {
      icon: <AlertTriangle size={24} />,
      title: 'False Warnings',
      description: 'Improperly calibrated systems may trigger unnecessary alerts, causing driver distraction.'
    },
    {
      icon: <Shield size={24} />,
      title: 'Reduced Safety',
      description: 'Systems may not activate when needed, compromising vehicle and occupant safety.'
    },
    {
      icon: <Eye size={24} />,
      title: 'System Failures',
      description: 'Complete system shutdown or malfunction can occur without proper calibration.'
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
              Why ADAS <span className="text-primary-400">Calibration Matters</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Understanding when and why your vehicle's Advanced Driver Assistance Systems need professional calibration to maintain optimal safety performance.
            </p>
            <Link to="/contact" className="btn-primary">
              Schedule Your Calibration
            </Link>
          </motion.div>
        </div>
      </section>

      {/* What is ADAS */}
      <section className="section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">What is ADAS?</h2>
              <p className="text-lg text-gray-300 mb-6">
                Advanced Driver Assistance Systems (ADAS) are electronic systems that help drivers avoid collisions and accidents. These systems use sensors, cameras, and radar to monitor the vehicle's surroundings and assist with driving tasks.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary-400 rounded-full mt-2"></div>
                  <div>
                    <h3 className="font-semibold mb-1">Forward Collision Warning</h3>
                    <p className="text-gray-300">Alerts drivers of potential frontal collisions</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary-400 rounded-full mt-2"></div>
                  <div>
                    <h3 className="font-semibold mb-1">Lane Departure Warning</h3>
                    <p className="text-gray-300">Warns when vehicle drifts from lane without signaling</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary-400 rounded-full mt-2"></div>
                  <div>
                    <h3 className="font-semibold mb-1">Blind Spot Monitoring</h3>
                    <p className="text-gray-300">Detects vehicles in blind spots during lane changes</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary-400 rounded-full mt-2"></div>
                  <div>
                    <h3 className="font-semibold mb-1">Adaptive Cruise Control</h3>
                    <p className="text-gray-300">Maintains safe following distance automatically</p>
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
                src="https://images.pexels.com/photos/3806288/pexels-photo-3806288.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Modern vehicle with ADAS sensors and cameras"
                className="rounded-lg shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* When Calibration is Needed */}
      <section className="section-padding bg-gray-800">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">When is ADAS Calibration Required?</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Several situations require professional ADAS calibration to ensure your safety systems function correctly
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {reasons.map((reason, index) => (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-700 p-6 rounded-lg hover:bg-gray-600 transition-colors duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className="text-primary-400 mr-4">
                    {reason.icon}
                  </div>
                  <h3 className="text-xl font-bold">{reason.title}</h3>
                </div>
                <p className="text-gray-300 mb-4">{reason.description}</p>
                <ul className="space-y-2">
                  {reason.details.map((detail, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-400">
                      <div className="w-1.5 h-1.5 bg-primary-400 rounded-full mr-2"></div>
                      {detail}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Consequences of Skipping */}
      <section className="section-padding">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What Happens If You <span className="text-red-400">Skip Calibration?</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Improperly calibrated ADAS systems can be dangerous and may not protect you when needed most
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {consequences.map((consequence, index) => (
              <motion.div
                key={consequence.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-red-900/20 border border-red-500/30 p-6 rounded-lg text-center"
              >
                <div className="text-red-400 mb-4 flex justify-center">
                  {consequence.icon}
                </div>
                <h3 className="text-xl font-bold mb-2 text-red-300">{consequence.title}</h3>
                <p className="text-gray-300">{consequence.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Calibration Process */}
      <section className="section-padding bg-gray-800">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <img
                src="https://images.pexels.com/photos/3807277/pexels-photo-3807277.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Professional ADAS calibration process"
                className="rounded-lg shadow-xl"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Calibration Process</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">1</div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">System Diagnosis</h3>
                    <p className="text-gray-300">Complete diagnostic scan to identify all systems requiring calibration.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-primary-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">2</div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Pre-Calibration Setup</h3>
                    <p className="text-gray-300">Vehicle positioning and target placement according to OEM specifications.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-primary-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">3</div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Calibration Execution</h3>
                    <p className="text-gray-300">Static and/or dynamic calibration using manufacturer-approved procedures.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-primary-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">4</div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Verification Testing</h3>
                    <p className="text-gray-300">Final testing to ensure all systems are functioning within specifications.</p>
                  </div>
                </div>
              </div>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Don't Compromise on Safety</h2>
            <p className="text-xl mb-8 opacity-90">
              Ensure your ADAS systems are properly calibrated by certified professionals
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="bg-white text-primary-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors duration-300">
                Schedule Calibration
              </Link>
              <Link to="/services" className="border-2 border-white text-white hover:bg-white hover:text-primary-600 px-8 py-4 rounded-lg font-semibold transition-colors duration-300">
                View Our Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default WhyCalibration
