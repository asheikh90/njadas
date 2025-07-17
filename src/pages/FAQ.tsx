import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ChevronDown, ChevronUp } from 'lucide-react'

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: "Do I need ADAS calibration after windshield replacement?",
      answer: "Yes, if your vehicle has a forward-facing camera mounted on the windshield, calibration is required after replacement. The camera position changes slightly with new glass installation, affecting the accuracy of systems like forward collision warning, lane departure warning, and automatic emergency braking. Most vehicle manufacturers specifically require recalibration after windshield replacement to maintain warranty coverage and ensure proper system function."
    },
    {
      question: "How long does an ADAS calibration take?",
      answer: "Most ADAS calibrations take between 2-4 hours to complete, depending on the number of systems requiring calibration and whether static, dynamic, or both types of calibration are needed. Static calibrations (performed in our facility) typically take 1-2 hours, while dynamic calibrations require a road test and can take 2-3 hours. We provide accurate time estimates when you schedule your appointment."
    },
    {
      question: "Can you do ADAS recalibration at my shop?",
      answer: "Yes, we offer mobile ADAS calibration services for collision repair shops, dealerships, and fleet operators. Our mobile units are equipped with the same professional-grade equipment used in our facility. We can perform most static calibrations on-site, and dynamic calibrations can be completed with a nearby road test. Contact us to discuss your specific needs and schedule mobile service."
    },
    {
      question: "What happens if I don't calibrate my ADAS systems?",
      answer: "Skipping ADAS calibration can result in serious safety risks including false warnings, system failures, or systems not activating when needed. Improperly calibrated systems may not detect obstacles, lane departures, or collision risks accurately. This can lead to accidents and may void your vehicle's warranty. Insurance companies may also deny claims if required calibrations were not performed after repairs."
    },
    {
      question: "How much does ADAS calibration cost?",
      answer: "ADAS calibration costs vary depending on the vehicle make/model, number of systems requiring calibration, and type of calibration needed (static vs. dynamic). Typical costs range from $150-$600 per system. We provide detailed estimates before beginning work and work directly with insurance companies for covered repairs. Contact us for a specific quote based on your vehicle's requirements."
    },
    {
      question: "Which vehicles require ADAS calibration?",
      answer: "Most vehicles manufactured after 2015 have some form of ADAS that may require calibration. This includes popular systems like forward collision warning, lane departure warning, blind spot monitoring, and adaptive cruise control. Luxury vehicles and newer models typically have more advanced systems requiring calibration. We service all major vehicle brands including Toyota, Honda, Ford, GM, BMW, Mercedes, Audi, and more."
    },
    {
      question: "What's the difference between static and dynamic calibration?",
      answer: "Static calibration is performed in a controlled environment using specialized targets and equipment while the vehicle is stationary. Dynamic calibration requires driving the vehicle under specific conditions to allow systems to self-calibrate using real-world inputs. Some systems require only static calibration, others need dynamic, and some require both. Our technicians determine the appropriate method based on manufacturer specifications."
    },
    {
      question: "Do you work with insurance companies?",
      answer: "Yes, we work directly with most major insurance companies and can handle the claims process for covered calibrations. We provide all necessary documentation including before/after diagnostic reports, calibration certificates, and detailed invoices. Many insurance policies cover ADAS calibration when it's required after collision repairs or windshield replacement. We can verify your coverage and handle the paperwork."
    },
    {
      question: "How often should ADAS systems be calibrated?",
      answer: "ADAS systems don't require regular calibration like wheel alignments. Calibration is typically needed after specific events such as collision repairs, windshield replacement, wheel alignment, suspension work, or when warning lights appear. However, we recommend having systems checked annually or if you notice any unusual behavior like false warnings or system malfunctions."
    },
    {
      question: "What equipment do you use for calibration?",
      answer: "We use OEM-approved calibration equipment from leading manufacturers including Hunter, Autel, and Bosch. Our equipment is regularly updated with the latest software and procedures to ensure compatibility with new vehicle models. We maintain manufacturer certifications and follow strict OEM procedures for all calibrations to guarantee accuracy and compliance with warranty requirements."
    }
  ]

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  }

  return (
    <div className="min-h-screen">
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>

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
              Frequently Asked <span className="text-primary-400">Questions</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Get answers to common questions about ADAS calibration services, pricing, and requirements.
            </p>
            <Link to="/contact" className="btn-primary">
              Ask a Question
            </Link>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding">
        <div className="container-max max-w-4xl">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="bg-gray-800 rounded-lg overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-700 transition-colors duration-200"
                >
                  <h3 className="text-lg font-semibold pr-4">{faq.question}</h3>
                  {openIndex === index ? (
                    <ChevronUp className="text-primary-400 flex-shrink-0" size={24} />
                  ) : (
                    <ChevronDown className="text-primary-400 flex-shrink-0" size={24} />
                  )}
                </button>
                
                {openIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-4"
                  >
                    <div className="border-t border-gray-700 pt-4">
                      <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="section-padding bg-gray-800">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Still Have Questions?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Our certified technicians are here to help with any ADAS calibration questions or concerns.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn-primary">
                Contact Us
              </Link>
              <a href="tel:(732)555-0123" className="btn-secondary">
                Call (732) 555-0123
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="section-padding">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Learn More About ADAS</h2>
            <p className="text-xl text-gray-300">
              Explore our other resources to understand ADAS calibration better
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-gray-800 p-6 rounded-lg text-center hover:bg-gray-700 transition-colors duration-300"
            >
              <h3 className="text-xl font-semibold mb-4">Our Services</h3>
              <p className="text-gray-300 mb-4">
                Learn about our comprehensive ADAS calibration services and equipment.
              </p>
              <Link to="/services" className="text-primary-400 hover:text-primary-300 font-semibold">
                View Services →
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-gray-800 p-6 rounded-lg text-center hover:bg-gray-700 transition-colors duration-300"
            >
              <h3 className="text-xl font-semibold mb-4">Why Calibration Matters</h3>
              <p className="text-gray-300 mb-4">
                Understand when and why ADAS calibration is required for your vehicle.
              </p>
              <Link to="/why-calibration-matters" className="text-primary-400 hover:text-primary-300 font-semibold">
                Learn More →
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-gray-800 p-6 rounded-lg text-center hover:bg-gray-700 transition-colors duration-300"
            >
              <h3 className="text-xl font-semibold mb-4">Coverage Areas</h3>
              <p className="text-gray-300 mb-4">
                Find out if we service your location in NJ and Philadelphia.
              </p>
              <Link to="/coverage-areas" className="text-primary-400 hover:text-primary-300 font-semibold">
                Check Coverage →
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default FAQ
