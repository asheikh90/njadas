import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Shield, Zap, Users, CheckCircle, Star, ArrowRight, Phone, Mail } from 'lucide-react'
import AnimatedSection from '../components/AnimatedSection'

const Home = () => {
  const features = [
    {
      icon: Shield,
      title: 'Certified Technicians',
      description: 'Factory-trained experts with the latest ADAS calibration equipment and techniques.'
    },
    {
      icon: Zap,
      title: 'Fast Turnaround',
      description: 'Most calibrations completed same-day with minimal disruption to your schedule.'
    },
    {
      icon: Users,
      title: 'Fleet Services',
      description: 'Specialized programs for collision centers and fleet operators throughout NJ.'
    }
  ]

  const services = [
    'Static ADAS Calibration',
    'Dynamic Road Testing',
    'Pre & Post Collision Scans',
    'Windshield Replacement Calibration',
    'Fleet Calibration Programs',
    'Emergency Mobile Service'
  ]

  const testimonials = [
    {
      name: 'Mike Johnson',
      company: 'Neptune Auto Body',
      text: 'NJ ADAS has been our go-to calibration partner for over a year. Their technicians are professional, fast, and always get it right the first time.',
      rating: 5
    },
    {
      name: 'Sarah Chen',
      company: 'Cinnaminson Collision',
      text: 'The partnership with NJ ADAS has allowed us to offer complete collision repair services. Our customers love the convenience.',
      rating: 5
    },
    {
      name: 'David Rodriguez',
      company: 'Fleet Manager, Philadelphia',
      text: 'Managing ADAS calibration for our 50+ vehicle fleet was a nightmare until we found NJ ADAS. They handle everything seamlessly.',
      rating: 5
    }
  ]

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-800 via-gray-900 to-black" />
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3806288/pexels-photo-3806288.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-10" />
        
        <div className="container-max relative z-10 text-center">
          <AnimatedSection>
            <motion.h1 
              className="text-6xl md:text-7xl lg:text-8xl font-bold mb-8 bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent leading-tight"
            >
              NJ ADAS
            </motion.h1>
            <motion.p 
              className="text-2xl md:text-3xl text-gray-300 mb-6 font-light"
            >
              Advanced Driver Assistance System Calibration
            </motion.p>
            <motion.p 
              className="text-xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed"
            >
              Professional ADAS calibration services for Neptune, Cinnaminson, and Philadelphia areas. 
              Ensuring your safety systems work perfectly after collision repair or windshield replacement.
            </motion.p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <motion.a
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                href="/contact"
                className="btn-primary inline-flex items-center space-x-3 text-lg"
              >
                <span>Get Free Quote</span>
                <ArrowRight size={20} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                href="tel:(732)555-0123"
                className="btn-secondary inline-flex items-center space-x-3 text-lg"
              >
                <Phone size={20} />
                <span>Call Now</span>
              </motion.a>
            </div>
          </AnimatedSection>
        </div>

        {/* Floating Elements */}
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 left-10 w-20 h-20 bg-primary-600/20 rounded-full blur-xl"
        />
        <motion.div
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-20 right-10 w-32 h-32 bg-accent-600/20 rounded-full blur-xl"
        />
      </section>

      {/* Features Section */}
      <section className="section-padding bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="container-max">
          <AnimatedSection className="text-center mb-20">
            <h2 className="text-5xl font-bold text-white mb-6">
              Why Choose NJ ADAS?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              We're New Jersey's premier ADAS calibration specialists, combining cutting-edge technology 
              with unmatched expertise to keep your safety systems operating flawlessly.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-12">
            {features.map((feature, index) => (
              <AnimatedSection key={feature.title} delay={index * 0.2}>
                <motion.div
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 hover:border-primary-500/50 transition-all duration-300 h-full"
                >
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-700 rounded-2xl flex items-center justify-center mb-6"
                  >
                    <feature.icon size={32} className="text-white" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{feature.description}</p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection direction="left">
              <h2 className="text-5xl font-bold text-white mb-8">
                Complete ADAS Solutions
              </h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                From static calibration to dynamic road testing, we provide comprehensive ADAS services 
                that ensure your vehicle's safety systems meet manufacturer specifications.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {services.map((service, index) => (
                  <motion.div
                    key={service}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center space-x-3"
                  >
                    <CheckCircle size={20} className="text-primary-400 flex-shrink-0" />
                    <span className="text-gray-300">{service}</span>
                  </motion.div>
                ))}
              </div>
              
              <Link to="/services" className="btn-primary inline-flex items-center space-x-2">
                <span>View All Services</span>
                <ArrowRight size={20} />
              </Link>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="relative"
              >
                <img
                  src="https://images.pexels.com/photos/3807277/pexels-photo-3807277.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="ADAS Calibration Equipment"
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent rounded-2xl" />
              </motion.div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Coverage Areas */}
      <section className="section-padding bg-gradient-to-r from-primary-900/20 to-accent-900/20">
        <div className="container-max">
          <AnimatedSection className="text-center">
            <h2 className="text-5xl font-bold text-white mb-8">
              Serving New Jersey & Beyond
            </h2>
            <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
              We provide mobile ADAS calibration services throughout central New Jersey and the greater Philadelphia area.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {['Neptune, NJ', 'Woodbury, NJ', 'Philadelphia, PA'].map((location, index) => (
                <motion.div
                  key={location}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700"
                >
                  <h3 className="text-2xl font-bold text-white mb-2">{location}</h3>
                  <p className="text-gray-300">Full-service ADAS calibration available</p>
                </motion.div>
              ))}
            </div>
            
            <Link to="/coverage-areas" className="btn-secondary inline-flex items-center space-x-2">
              <span>View All Coverage Areas</span>
              <ArrowRight size={20} />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding">
        <div className="container-max">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-6">
              What Our Partners Say
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Don't just take our word for it. Here's what collision centers and fleet managers say about our services.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <AnimatedSection key={testimonial.name} delay={index * 0.2}>
                <motion.div
                  whileHover={{ y: -5 }}
                  className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 h-full"
                >
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} size={20} className="text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-6 leading-relaxed italic">
                    "{testimonial.text}"
                  </p>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-primary-400 text-sm">{testimonial.company}</div>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-gray-800 to-gray-900">
        <div className="container-max">
          <AnimatedSection>
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-r from-primary-600/20 to-accent-600/20 rounded-3xl p-16 text-center border border-gray-700"
            >
              <h2 className="text-5xl font-bold text-white mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
                Contact us today for professional ADAS calibration services. Fast, accurate, and reliable.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="/contact"
                  className="btn-primary inline-flex items-center space-x-3 text-lg"
                >
                  <Mail size={20} />
                  <span>Get Free Quote</span>
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="tel:(267)212-1034"
                  className="btn-secondary inline-flex items-center space-x-3 text-lg"
                >
                  <Phone size={20} />
                  <span>(267) 212-1034</span>
                </motion.a>
              </div>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}

export default Home
