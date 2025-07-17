import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Calendar, Clock, ArrowLeft, Phone, Mail } from 'lucide-react'
import AnimatedSection from '../components/AnimatedSection'

const blogPosts = {
  'adas-calibration-after-windshield-replacement': {
    title: 'Do I Really Need ADAS Calibration After Windshield Replacement?',
    date: '2024-01-15',
    readTime: '5 min read',
    category: 'Safety',
    image: 'https://images.pexels.com/photos/3806288/pexels-photo-3806288.jpeg?auto=compress&cs=tinysrgb&w=1200',
    excerpt: 'Learn why ADAS recalibration is crucial after windshield replacement and how it ensures your safety systems work properly.',
    content: `
      <p>When you need windshield replacement, many drivers focus solely on getting clear visibility back. However, if your vehicle is equipped with Advanced Driver Assistance Systems (ADAS), there's a critical step that's often overlooked: <strong>ADAS calibration after windshield replacement</strong>.</p>

      <h2>Why ADAS Calibration is Essential After Glass Replacement</h2>
      
      <p>Modern vehicles integrate numerous safety sensors directly into or around the windshield area. These include:</p>
      
      <ul>
        <li>Forward collision warning cameras</li>
        <li>Lane departure warning sensors</li>
        <li>Automatic emergency braking systems</li>
        <li>Adaptive cruise control radar</li>
        <li>Rain sensors and automatic wipers</li>
      </ul>

      <p>When your windshield is replaced, even the slightest misalignment can cause these systems to malfunction. In Neptune, NJ and surrounding areas, we've seen countless cases where drivers experienced false warnings or, worse, systems that failed to activate when needed.</p>

      <h2>The Risks of Skipping Calibration</h2>

      <p>Without proper <strong>windshield sensor recalibration</strong>, you might experience:</p>

      <ul>
        <li>Lane keep assist pulling your vehicle unexpectedly</li>
        <li>Forward collision warnings activating unnecessarily</li>
        <li>Adaptive cruise control not maintaining proper distance</li>
        <li>Complete system shutdowns with dashboard warning lights</li>
      </ul>

      <p>These malfunctions don't just create annoyance—they can compromise your safety and that of other drivers on New Jersey roads.</p>

      <h2>Glass Shop Calibration Requirements in NJ</h2>

      <p>New Jersey regulations increasingly require proper ADAS calibration after windshield replacement. Many <strong>glass shops in NJ</strong> are partnering with certified calibration specialists to ensure compliance and customer safety.</p>

      <p>At NJ ADAS, we work directly with glass replacement shops throughout Cinnaminson, Neptune, and Philadelphia to provide seamless calibration services. This partnership ensures your vehicle's safety systems are restored to factory specifications.</p>

      <h2>Static vs. Dynamic Calibration for Windshield Replacement</h2>

      <p>Depending on your vehicle's make and model, windshield replacement may require:</p>

      <ul>
        <li><strong>Static calibration:</strong> Performed in our controlled facility using specialized targets</li>
        <li><strong>Dynamic calibration:</strong> Road testing to verify system performance</li>
        <li><strong>Both methods:</strong> Some vehicles require a combination approach</li>
      </ul>

      <p>Our certified technicians determine the exact calibration requirements for your specific vehicle and ensure all systems meet manufacturer specifications.</p>

      <h2>Don't Risk Your Safety</h2>

      <p>ADAS calibration after windshield replacement isn't optional—it's essential for your safety. If you've recently had windshield work done in the Neptune, Cinnaminson, or Philadelphia areas, contact NJ ADAS for professional calibration services.</p>

      <p>Our team provides fast, accurate calibration that restores your vehicle's safety systems to optimal performance. Don't wait until a malfunction puts you at risk.</p>
    `,
    schema: {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "headline": "Do I Really Need ADAS Calibration After Windshield Replacement?",
      "description": "Learn why ADAS recalibration is crucial after windshield replacement and how it ensures your safety systems work properly.",
      "author": {
        "@type": "Organization",
        "name": "NJ ADAS"
      },
      "publisher": {
        "@type": "Organization",
        "name": "NJ ADAS"
      },
      "datePublished": "2024-01-15",
      "dateModified": "2024-01-15"
    }
  },
  'signs-adas-sensors-need-recalibration': {
    title: 'Top Signs Your Vehicle\'s Safety Sensors Need Recalibration',
    date: '2024-01-10',
    readTime: '4 min read',
    category: 'Maintenance',
    image: 'https://images.pexels.com/photos/3807277/pexels-photo-3807277.jpeg?auto=compress&cs=tinysrgb&w=1200',
    excerpt: 'Discover the warning signs that indicate your ADAS sensors require professional recalibration to maintain optimal performance.',
    content: `
      <p>Advanced Driver Assistance Systems (ADAS) are designed to enhance your safety on the road, but they're only effective when properly calibrated. Recognizing the <strong>signs your ADAS sensors need recalibration</strong> can prevent dangerous malfunctions and ensure your safety systems work when you need them most.</p>

      <h2>Common ADAS Sensor Issues in NJ Vehicles</h2>

      <p>Our technicians in Neptune and Cinnaminson frequently encounter these warning signs that indicate <strong>ADAS sensor issues</strong>:</p>

      <h3>1. Lane Keep Assist Malfunctions</h3>
      <p>If your <strong>lane keep assist isn't working after a collision</strong> or recent service, this is a clear indicator that recalibration is needed. Symptoms include:</p>
      <ul>
        <li>System pulling the steering wheel unexpectedly</li>
        <li>Failure to detect lane markings</li>
        <li>Inconsistent activation on familiar roads</li>
        <li>Dashboard warnings about lane assist unavailability</li>
      </ul>

      <h3>2. Forward Collision Warning Problems</h3>
      <p>Your forward collision system should provide consistent, accurate warnings. Watch for:</p>
      <ul>
        <li>False alarms when no obstacles are present</li>
        <li>Failure to warn when approaching vehicles or objects</li>
        <li>Inconsistent detection distances</li>
        <li>System completely shutting down</li>
      </ul>

      <h3>3. Adaptive Cruise Control Issues</h3>
      <p>Adaptive cruise control relies on precise sensor calibration. Signs of problems include:</p>
      <ul>
        <li>Maintaining incorrect following distances</li>
        <li>Sudden acceleration or braking</li>
        <li>Inability to detect vehicles in adjacent lanes</li>
        <li>System disengaging unexpectedly</li>
      </ul>

      <h2>When ADAS Recalibration is Required</h2>

      <p>Several situations necessitate professional <strong>ADAS recalibration</strong>:</p>

      <ul>
        <li><strong>After collision repair:</strong> Even minor accidents can misalign sensors</li>
        <li><strong>Windshield replacement:</strong> Camera and sensor positions may shift</li>
        <li><strong>Suspension work:</strong> Changes in vehicle height affect sensor angles</li>
        <li><strong>Wheel alignment:</strong> Steering angle sensors require recalibration</li>
        <li><strong>Battery replacement:</strong> Some systems lose calibration data</li>
      </ul>

      <h2>Dashboard Warning Lights</h2>

      <p>Your vehicle's computer system will often alert you to ADAS problems through dashboard warnings:</p>

      <ul>
        <li>ADAS system unavailable messages</li>
        <li>Lane assist warning lights</li>
        <li>Forward collision system alerts</li>
        <li>Adaptive cruise control disabled notifications</li>
      </ul>

      <p>Never ignore these warnings. They indicate that your safety systems aren't functioning properly and require immediate attention.</p>

      <h2>The Importance of Professional Calibration</h2>

      <p>ADAS sensor calibration requires specialized equipment and expertise. DIY attempts or ignoring the problem can result in:</p>

      <ul>
        <li>Compromised safety system performance</li>
        <li>Increased accident risk</li>
        <li>Potential insurance complications</li>
        <li>Failed vehicle inspections</li>
      </ul>

      <h2>Expert ADAS Calibration in New Jersey</h2>

      <p>If you're experiencing any of these <strong>ADAS sensor issues in NJ</strong>, don't wait. Our certified technicians provide comprehensive calibration services throughout Neptune, Cinnaminson, and the greater Philadelphia area.</p>

      <p>We use manufacturer-approved equipment and procedures to ensure your vehicle's safety systems operate exactly as designed. Contact NJ ADAS today for professional diagnosis and calibration services.</p>
    `,
    schema: {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "headline": "Top Signs Your Vehicle's Safety Sensors Need Recalibration",
      "description": "Discover the warning signs that indicate your ADAS sensors require professional recalibration to maintain optimal performance.",
      "author": {
        "@type": "Organization",
        "name": "NJ ADAS"
      },
      "publisher": {
        "@type": "Organization",
        "name": "NJ ADAS"
      },
      "datePublished": "2024-01-10",
      "dateModified": "2024-01-10"
    }
  },
  'static-vs-dynamic-adas-calibration': {
    title: 'Static vs. Dynamic ADAS Calibration – What\'s the Difference?',
    date: '2024-01-05',
    readTime: '6 min read',
    category: 'Technical',
    image: 'https://images.pexels.com/photos/3807277/pexels-photo-3807277.jpeg?auto=compress&cs=tinysrgb&w=1200',
    excerpt: 'Understanding the two main types of ADAS calibration methods and when each is required for your vehicle.',
    content: `
      <p>When your vehicle requires ADAS calibration, understanding the difference between <strong>static vs dynamic ADAS calibration</strong> is crucial for ensuring proper service and optimal safety system performance. Both methods serve specific purposes and are often required for different vehicle systems.</p>

      <h2>What is Static ADAS Calibration?</h2>

      <p>Static calibration, also known as "bench calibration," is performed in a controlled indoor environment using specialized targets and equipment. This method involves:</p>

      <ul>
        <li>Positioning the vehicle on a level surface</li>
        <li>Setting up manufacturer-specific calibration targets</li>
        <li>Using diagnostic equipment to adjust sensor parameters</li>
        <li>Ensuring precise measurements and alignments</li>
      </ul>

      <p>Static calibration is typically required for:</p>
      <ul>
        <li>Forward-facing cameras</li>
        <li>Radar sensors</li>
        <li>Lidar systems</li>
        <li>Night vision cameras</li>
      </ul>

      <h2>Understanding Dynamic ADAS Calibration</h2>

      <p>Dynamic calibration, or "on-road calibration," requires driving the vehicle under specific conditions to allow the ADAS systems to self-calibrate through real-world data collection. This process involves:</p>

      <ul>
        <li>Driving at specified speeds</li>
        <li>Following particular road marking patterns</li>
        <li>Maintaining specific following distances</li>
        <li>Completing predetermined driving routes</li>
      </ul>

      <p>Dynamic calibration is commonly used for:</p>
      <ul>
        <li>Lane departure warning systems</li>
        <li>Adaptive cruise control</li>
        <li>Blind spot monitoring</li>
        <li>Traffic sign recognition</li>
      </ul>

      <h2>Which Calibration Method is Required?</h2>

      <p>The calibration method depends on your vehicle's make, model, and specific ADAS systems. Many vehicles require both static and dynamic calibration to ensure complete system functionality.</p>

      <h3>Factors Determining Calibration Type:</h3>
      <ul>
        <li><strong>Manufacturer specifications:</strong> Each automaker defines specific calibration requirements</li>
        <li><strong>System type:</strong> Different ADAS features require different calibration approaches</li>
        <li><strong>Service performed:</strong> The type of repair or maintenance affects calibration needs</li>
        <li><strong>Sensor location:</strong> Front, rear, and side sensors may have different requirements</li>
      </ul>

      <h2>ADAS Reset Requirements in Neptune, NJ</h2>

      <p>For vehicles serviced in Neptune, Cinnaminson, and surrounding New Jersey areas, proper <strong>ADAS reset procedures</strong> are essential after:</p>

      <ul>
        <li>Collision repair work</li>
        <li>Windshield replacement</li>
        <li>Suspension modifications</li>
        <li>Wheel alignment services</li>
        <li>Battery replacement</li>
      </ul>

      <p>Our certified technicians determine the exact calibration requirements for your specific vehicle and perform both static and dynamic procedures as needed.</p>

      <h2>The Calibration Process at NJ ADAS</h2>

      <h3>Static Calibration Procedure:</h3>
      <ol>
        <li>Vehicle positioning on alignment rack</li>
        <li>Diagnostic system connection</li>
        <li>Target setup according to manufacturer specs</li>
        <li>Sensor adjustment and verification</li>
        <li>System testing and validation</li>
      </ol>

      <h3>Dynamic Calibration Process:</h3>
      <ol>
        <li>Pre-drive system initialization</li>
        <li>Controlled test drive on specified routes</li>
        <li>Real-time system monitoring</li>
        <li>Data collection and analysis</li>
        <li>Final system verification</li>
      </ol>

      <h2>Why Professional Calibration Matters</h2>

      <p>Attempting DIY calibration or using incorrect procedures can result in:</p>

      <ul>
        <li>Improperly functioning safety systems</li>
        <li>False warnings and alerts</li>
        <li>System failures in critical situations</li>
        <li>Potential liability issues</li>
      </ul>

      <p>Professional calibration ensures your ADAS systems meet manufacturer specifications and provide reliable safety protection.</p>

      <h2>Expert ADAS Calibration Services</h2>

      <p>Whether your vehicle requires static, dynamic, or combination calibration, NJ ADAS provides comprehensive services throughout the Neptune, Cinnaminson, and Philadelphia regions. Our certified technicians use manufacturer-approved equipment and procedures to ensure your safety systems operate flawlessly.</p>

      <p>Don't compromise on safety—contact us for professional ADAS calibration that meets all manufacturer requirements and keeps you protected on New Jersey roads.</p>
    `,
    schema: {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "headline": "Static vs. Dynamic ADAS Calibration – What's the Difference?",
      "description": "Understanding the two main types of ADAS calibration methods and when each is required for your vehicle.",
      "author": {
        "@type": "Organization",
        "name": "NJ ADAS"
      },
      "publisher": {
        "@type": "Organization",
        "name": "NJ ADAS"
      },
      "datePublished": "2024-01-05",
      "dateModified": "2024-01-05"
    }
  },
  'collision-centers-adas-revenue-boost': {
    title: 'How Collision Centers Can Boost Revenue With In-House ADAS',
    date: '2024-01-01',
    readTime: '7 min read',
    category: 'Business',
    image: 'https://images.pexels.com/photos/3807277/pexels-photo-3807277.jpeg?auto=compress&cs=tinysrgb&w=1200',
    excerpt: 'Explore how collision repair shops can increase profitability by offering ADAS calibration services to their customers.',
    content: `
      <p>The automotive repair industry is rapidly evolving, and collision centers that adapt to include <strong>ADAS calibration for body shops</strong> are positioning themselves for significant revenue growth. With over 90% of new vehicles now equipped with advanced safety systems, ADAS calibration has become an essential service rather than an optional add-on.</p>

      <h2>The Growing ADAS Market Opportunity</h2>

      <p>The ADAS calibration market is experiencing explosive growth, driven by:</p>

      <ul>
        <li>Increasing ADAS-equipped vehicle population</li>
        <li>Insurance requirements for proper calibration</li>
        <li>Regulatory compliance mandates</li>
        <li>Consumer awareness of safety system importance</li>
      </ul>

      <p>Collision centers in New Jersey, particularly in areas like Cinnaminson and Neptune, are discovering that ADAS services can add $200-$800 per repair order, significantly boosting profitability.</p>

      <h2>Revenue Benefits of In-House ADAS Services</h2>

      <h3>Direct Revenue Streams:</h3>
      <ul>
        <li><strong>Calibration fees:</strong> $150-$500 per system calibrated</li>
        <li><strong>Diagnostic services:</strong> $100-$200 per vehicle assessment</li>
        <li><strong>Pre-scan/post-scan services:</strong> $75-$150 per scan</li>
        <li><strong>System validation:</strong> $50-$100 per verification</li>
      </ul>

      <h3>Indirect Revenue Benefits:</h3>
      <ul>
        <li>Reduced sublet costs and delays</li>
        <li>Improved customer satisfaction and retention</li>
        <li>Enhanced insurance relationships</li>
        <li>Competitive advantage over shops without ADAS capabilities</li>
      </ul>

      <h2>Partnership Opportunities with ADAS Specialists</h2>

      <p>For collision centers not ready to invest in full ADAS equipment, <strong>partner ADAS services</strong> offer an excellent alternative. NJ ADAS provides comprehensive partnership programs for body shops throughout New Jersey and Pennsylvania.</p>

      <h3>Partnership Benefits Include:</h3>
      <ul>
        <li>On-site calibration services</li>
        <li>Rapid response times</li>
        <li>Shared revenue opportunities</li>
        <li>Technical support and training</li>
        <li>Marketing co-op programs</li>
      </ul>

      <h2>Cinnaminson ADAS Calibration Partner Program</h2>

      <p>Our <strong>Cinnaminson ADAS calibration partner</strong> program is specifically designed for collision centers looking to expand their service offerings without significant capital investment. Partners receive:</p>

      <ul>
        <li>Priority scheduling for calibration services</li>
        <li>Competitive wholesale pricing</li>
        <li>Technical consultation and support</li>
        <li>Customer referral programs</li>
        <li>Joint marketing opportunities</li>
      </ul>

      <h2>Implementation Strategies for Collision Centers</h2>

      <h3>Option 1: Full In-House Setup</h3>
      <p>Investment requirements:</p>
      <ul>
        <li>ADAS calibration equipment: $50,000-$150,000</li>
        <li>Technician training and certification: $5,000-$15,000</li>
        <li>Facility modifications: $10,000-$25,000</li>
        <li>Software subscriptions: $3,000-$8,000 annually</li>
      </ul>

      <h3>Option 2: Strategic Partnership</h3>
      <p>Benefits of partnering with NJ ADAS:</p>
      <ul>
        <li>No equipment investment required</li>
        <li>Immediate service availability</li>
        <li>Expert technician support</li>
        <li>Flexible scheduling options</li>
        <li>Revenue sharing opportunities</li>
      </ul>

      <h2>Customer Demand and Market Trends</h2>

      <p>Consumer awareness of ADAS importance is driving demand for proper calibration services. Key trends include:</p>

      <ul>
        <li>Insurance companies requiring calibration documentation</li>
        <li>Customers specifically requesting ADAS services</li>
        <li>Liability concerns driving compliance</li>
        <li>Manufacturer warranty requirements</li>
      </ul>

      <h2>Competitive Advantages</h2>

      <p>Collision centers offering ADAS services gain significant competitive advantages:</p>

      <ul>
        <li><strong>One-stop service:</strong> Complete repair and calibration under one roof</li>
        <li><strong>Faster turnaround:</strong> No waiting for external calibration providers</li>
        <li><strong>Quality control:</strong> Direct oversight of all repair processes</li>
        <li><strong>Customer convenience:</strong> Single point of contact for all services</li>
      </ul>

      <h2>ROI and Profitability Analysis</h2>

      <p>Collision centers implementing ADAS services typically see:</p>

      <ul>
        <li>15-25% increase in average repair order value</li>
        <li>Improved cycle times through reduced sublet dependencies</li>
        <li>Enhanced customer satisfaction scores</li>
        <li>Stronger insurance relationships</li>
        <li>12-18 month ROI on equipment investments</li>
      </ul>

      <h2>Getting Started with ADAS Services</h2>

      <p>Whether you choose in-house implementation or partnership, the key is to start offering ADAS services to your customers. The market demand is strong and growing, and early adopters are capturing significant market share.</p>

      <h3>Next Steps:</h3>
      <ol>
        <li>Assess your current customer base and ADAS service needs</li>
        <li>Evaluate in-house vs. partnership options</li>
        <li>Contact NJ ADAS for consultation and partnership opportunities</li>
        <li>Develop staff training and customer communication strategies</li>
        <li>Implement services and track performance metrics</li>
      </ol>

      <h2>Partner with NJ ADAS Today</h2>

      <p>Don't let your competition capture the growing ADAS market. NJ ADAS offers comprehensive partnership programs designed specifically for collision centers in Cinnaminson, Neptune, and throughout New Jersey and Pennsylvania.</p>

      <p>Our experienced team provides the expertise, equipment, and support you need to successfully add ADAS services to your business model. Contact us today to learn how we can help boost your revenue and enhance your competitive position.</p>
    `,
    schema: {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "headline": "How Collision Centers Can Boost Revenue With In-House ADAS",
      "description": "Explore how collision repair shops can increase profitability by offering ADAS calibration services to their customers.",
      "author": {
        "@type": "Organization",
        "name": "NJ ADAS"
      },
      "publisher": {
        "@type": "Organization",
        "name": "NJ ADAS"
      },
      "datePublished": "2024-01-01",
      "dateModified": "2024-01-01"
    }
  }
}

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>()
  const post = slug ? blogPosts[slug as keyof typeof blogPosts] : null

  if (!post) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Post Not Found</h1>
          <Link to="/blog" className="text-primary-400 hover:text-primary-300">
            ← Back to Blog
          </Link>
        </div>
      </div>
    )
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(post.schema) }}
      />
      
      <article className="min-h-screen bg-gray-900">
        {/* Hero Section */}
        <section className="relative">
          <div className="h-96 bg-gradient-to-br from-gray-800 to-gray-900 relative overflow-hidden">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover opacity-30"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent" />
          </div>
          
          <div className="absolute inset-0 flex items-end">
            <div className="container-max w-full pb-12">
              <AnimatedSection>
                <Link
                  to="/blog"
                  className="inline-flex items-center space-x-2 text-primary-400 hover:text-primary-300 mb-6 transition-colors"
                >
                  <ArrowLeft size={20} />
                  <span>Back to Blog</span>
                </Link>
                
                <div className="mb-4">
                  <span className="bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {post.category}
                  </span>
                </div>
                
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                  {post.title}
                </h1>
                
                <div className="flex items-center space-x-6 text-gray-300">
                  <div className="flex items-center space-x-2">
                    <Calendar size={18} />
                    <span>{new Date(post.date).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock size={18} />
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="section-padding">
          <div className="container-max">
            <div className="max-w-4xl mx-auto">
              <AnimatedSection>
                <div 
                  className="prose prose-lg prose-invert max-w-none"
                  dangerouslySetInnerHTML={{ __html: post.content }}
                />
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-gradient-to-r from-primary-900/20 to-accent-900/20">
          <div className="container-max">
            <AnimatedSection>
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-gray-800/50 backdrop-blur-sm rounded-3xl p-12 border border-gray-700 text-center"
              >
                <h2 className="text-3xl font-bold text-white mb-4">
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
                    className="btn-primary inline-flex items-center justify-center space-x-2"
                  >
                    <Mail size={20} />
                    <span>Get Free Quote</span>
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href="tel:(732)555-0123"
                    className="btn-secondary inline-flex items-center justify-center space-x-2"
                  >
                    <Phone size={20} />
                    <span>Call Now</span>
                  </motion.a>
                </div>
              </motion.div>
            </AnimatedSection>
          </div>
        </section>
      </article>
    </>
  )
}

export default BlogPost
