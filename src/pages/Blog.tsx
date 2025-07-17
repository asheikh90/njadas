import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Calendar, Clock, ArrowRight } from 'lucide-react'
import AnimatedSection from '../components/AnimatedSection'

const blogPosts = [
  {
    slug: 'adas-calibration-after-windshield-replacement',
    title: 'Do I Really Need ADAS Calibration After Windshield Replacement?',
    excerpt: 'Learn why ADAS recalibration is crucial after windshield replacement and how it ensures your safety systems work properly.',
    image: 'https://images.pexels.com/photos/3806288/pexels-photo-3806288.jpeg?auto=compress&cs=tinysrgb&w=800',
    date: '2024-01-15',
    readTime: '5 min read',
    category: 'Safety'
  },
  {
    slug: 'signs-adas-sensors-need-recalibration',
    title: 'Top Signs Your Vehicle\'s Safety Sensors Need Recalibration',
    excerpt: 'Discover the warning signs that indicate your ADAS sensors require professional recalibration to maintain optimal performance.',
    image: 'https://images.pexels.com/photos/3807277/pexels-photo-3807277.jpeg?auto=compress&cs=tinysrgb&w=800',
    date: '2024-01-10',
    readTime: '4 min read',
    category: 'Maintenance'
  },
  {
    slug: 'static-vs-dynamic-adas-calibration',
    title: 'Static vs. Dynamic ADAS Calibration – What\'s the Difference?',
    excerpt: 'Understanding the two main types of ADAS calibration methods and when each is required for your vehicle.',
    image: 'https://images.pexels.com/photos/3807277/pexels-photo-3807277.jpeg?auto=compress&cs=tinysrgb&w=800',
    date: '2024-01-05',
    readTime: '6 min read',
    category: 'Technical'
  },
  {
    slug: 'collision-centers-adas-revenue-boost',
    title: 'How Collision Centers Can Boost Revenue With In-House ADAS',
    excerpt: 'Explore how collision repair shops can increase profitability by offering ADAS calibration services to their customers.',
    image: 'https://images.pexels.com/photos/3807277/pexels-photo-3807277.jpeg?auto=compress&cs=tinysrgb&w=800',
    date: '2024-01-01',
    readTime: '7 min read',
    category: 'Business'
  }
]

const Blog = () => {
  return (
    <div className="min-h-screen bg-gray-900">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-gray-800 to-gray-900">
        <div className="container-max">
          <AnimatedSection className="text-center max-w-4xl mx-auto">
            <motion.h1 
              className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent"
            >
              ADAS Knowledge Hub
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-300 mb-8 leading-relaxed"
            >
              Expert insights, technical guides, and industry updates from New Jersey's leading ADAS calibration specialists.
            </motion.p>
          </AnimatedSection>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="section-padding">
        <div className="container-max">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {blogPosts.map((post, index) => (
              <AnimatedSection key={post.slug} delay={index * 0.2}>
                <motion.article
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3 }}
                  className="bg-gray-800 rounded-2xl overflow-hidden shadow-xl border border-gray-700 hover:border-primary-500/50 transition-all duration-300"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-64 object-cover transition-transform duration-500 hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-8">
                    <div className="flex items-center space-x-4 text-sm text-gray-400 mb-4">
                      <div className="flex items-center space-x-1">
                        <Calendar size={16} />
                        <span>{new Date(post.date).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock size={16} />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    
                    <h2 className="text-2xl font-bold text-white mb-4 leading-tight hover:text-primary-400 transition-colors">
                      {post.title}
                    </h2>
                    
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {post.excerpt}
                    </p>
                    
                    <Link
                      to={`/blog/${post.slug}`}
                      className="inline-flex items-center space-x-2 text-primary-400 hover:text-primary-300 font-semibold transition-colors group"
                    >
                      <span>Read More</span>
                      <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </motion.article>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary-900/20 to-accent-900/20">
        <div className="container-max">
          <AnimatedSection className="text-center">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-3xl p-12 border border-gray-700"
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Need Professional ADAS Calibration?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Our certified technicians provide expert ADAS calibration services throughout Neptune, Cinnaminson, and Philadelphia areas.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="/contact"
                  className="btn-primary inline-flex items-center justify-center"
                >
                  Get Free Quote
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="tel:(732)555-0123"
                  className="btn-secondary inline-flex items-center justify-center"
                >
                  Call Now
                </motion.a>
              </div>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}

export default Blog
