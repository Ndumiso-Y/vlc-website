import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaIndustry,
  FaWrench,
  FaBrush,
  FaCheckCircle,
  FaComments,
  FaProjectDiagram,
  FaHammer,
  FaCogs,
  FaDraftingCompass,
  FaScrewdriver,
  FaHardHat,
  FaTools,
  FaBuilding,
  FaUsers,
  FaLeaf,
  FaClipboardCheck,
  FaArrowRight,
  FaPhone,
  FaEnvelope,
  FaGlobe,
  FaShieldAlt
} from "react-icons/fa";

export default function Services() {
  const [activeTab, setActiveTab] = useState('products');

  // Core Products - Main offerings
  const products = [
    {
      title: "Structural Steel Installation",
      icon: FaBuilding,
      description: "VLC provides comprehensive structural steel installation services, ensuring that steel frameworks are erected with precision and stability. Our experienced team handles everything from the initial design and fabrication to the final installation, ensuring structural integrity and compliance with all safety standards.",
      features: ["Initial Design & Fabrication", "Precision Installation", "Safety Standards Compliance", "Structural Integrity Assurance"],
      color: "from-brand to-accent"
    },
    {
      title: "Steel Piping Fabrication and Installation",
      icon: FaCogs,
      description: "VLC specializes in the fabrication and installation of all types of steel piping, including carbon steel, stainless steel, and alloy piping. Our services cover everything from custom pipe bending and welding to on-site installation, ensuring optimal performance and longevity for industrial and commercial applications.",
      features: ["Carbon Steel Piping", "Stainless Steel Systems", "Custom Pipe Bending", "On-site Installation"],
      color: "from-accent to-gold"
    },
    {
      title: "Steel Manufacturing and Fabrication",
      icon: FaTools,
      description: "At VLC, we manufacture and fabricate a wide range of steel products, including carbon steel and stainless-steel components. Our state-of-the-art facilities and skilled workforce enable us to produce high-quality, durable steel products tailored to meet the specific needs of our clients.",
      features: ["State-of-the-art Facilities", "Custom Steel Components", "Carbon & Stainless Steel", "Tailored Solutions"],
      color: "from-brand to-gold"
    },
    {
      title: "Labour Hire Services",
      icon: FaUsers,
      description: "VLC offers specialized labour hire services, providing skilled workers for various construction and maintenance projects. Our team includes experienced welders, fitters, riggers, and other tradespeople, ensuring that you have the right expertise on-site to complete your projects efficiently and safely.",
      features: ["Experienced Welders", "Skilled Fitters & Riggers", "Various Tradespeople", "On-site Expertise"],
      color: "from-accent to-brand"
    },
    {
      title: "Process Division for Nickel Plate Maintenance",
      icon: FaLeaf,
      description: "Our process division is dedicated to the maintenance and restoration of nickel plates. We utilize advanced buffing and restoration techniques to ensure that nickel-plated surfaces are maintained in optimal condition, enhancing their durability and appearance.",
      features: ["Advanced Buffing Techniques", "Surface Restoration", "Durability Enhancement", "Optimal Condition Maintenance"],
      color: "from-gold to-brand"
    },
    {
      title: "Construction Erection Services",
      icon: FaBuilding,
      description: "VLC excels in providing construction erection services for various projects, including commercial, industrial, and residential buildings. Our comprehensive approach ensures that all structural elements are accurately positioned and securely fastened, adhering to stringent safety and quality standards.",
      features: ["Commercial Projects", "Industrial Buildings", "Residential Construction", "Quality Standards Adherence"],
      color: "from-brand via-accent to-gold"
    },
    {
      title: "Turnkey Project Solutions",
      icon: FaClipboardCheck,
      description: "We offer turnkey project solutions, managing every aspect of your construction project from inception to completion. VLC's turnkey services include design, procurement, construction, and commissioning, delivering fully operational facilities that meet your specific requirements and timelines.",
      features: ["Complete Project Management", "Design to Commissioning", "Procurement Services", "Timeline Adherence"],
      color: "from-gold via-accent to-brand"
    }
  ];

  // Supporting Services
  const services = [
    {
      title: "Design & Engineering",
      icon: FaDraftingCompass,
      description: "Offering innovative design solutions and comprehensive engineering services for steel structures.",
      color: "from-brand to-accent"
    },
    {
      title: "Welding and Metal Joining",
      icon: FaWrench,
      description: "Expert welding services for both assembly and repair of steel parts, ensuring structural integrity.",
      color: "from-accent to-gold"
    },
    {
      title: "Surface Treatment and Coating",
      icon: FaBrush,
      description: "Applying protective coatings such as galvanizing, painting, and powder coating to prevent corrosion and extend the lifespan of steel components.",
      color: "from-gold to-brand"
    },
    {
      title: "Quality Control and Inspection",
      icon: FaCheckCircle,
      description: "Ensuring all steelwork meets industry standards and project specifications through rigorous quality control and inspection processes.",
      color: "from-brand to-gold"
    },
    {
      title: "Consultation and Technical Support",
      icon: FaComments,
      description: "Providing expert advice and technical support to ensure the success of steelwork projects.",
      color: "from-accent to-brand"
    },
    {
      title: "Project Management",
      icon: FaProjectDiagram,
      description: "Comprehensive project management services to oversee all aspects of steelwork projects from inception to completion.",
      color: "from-gold to-accent"
    },
    {
      title: "Fabrication",
      icon: FaCogs,
      description: "Providing precise cutting, bending, and assembling of steel components to meet project requirements.",
      color: "from-brand to-accent"
    },
    {
      title: "Erection and Installation",
      icon: FaScrewdriver,
      description: "Professional on-site assembly and installation of steel structures and components, ensuring safety and efficiency.",
      color: "from-accent to-gold"
    },
    {
      title: "Maintenance and Repair",
      icon: FaHardHat,
      description: "Routine maintenance and emergency repair services to keep steel structures and equipment in optimal condition.",
      color: "from-gold to-brand"
    },
    {
      title: "Demolition and Dismantling",
      icon: FaHammer,
      description: "Safe and efficient demolition and dismantling of steel structures, equipment, and industrial facilities. Our team follows strict safety protocols to ensure controlled removal with minimal disruption, while maximising material recovery and recycling where possible.",
      color: "from-brand to-gold"
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-dark-page text-gray-900 dark:text-gray-100">
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-brand via-accent to-gold text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute top-10 right-10 w-64 h-64 rounded-full blur-3xl opacity-30 bg-white"></div>
        <div className="absolute bottom-10 left-10 w-48 h-48 rounded-full blur-3xl opacity-20 bg-white"></div>
        
        <div className="container relative z-10">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6">
              Our Services
            </h1>
            <p className="text-xl md:text-2xl font-light leading-relaxed mb-8">
              At VLC Construction, we pride ourselves on delivering top-notch steel products and specialized services for industrial plant projects. Our extensive experience across manufacturing, petrochemical, and construction sectors allows us to offer tailored solutions that meet the distinct needs of each client.
            </p>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-wrap justify-center gap-4"
            >
              <span className="px-4 py-2 bg-white/20 rounded-full text-sm font-medium">Manufacturing</span>
              <span className="px-4 py-2 bg-white/20 rounded-full text-sm font-medium">Petrochemical</span>
              <span className="px-4 py-2 bg-white/20 rounded-full text-sm font-medium">Construction</span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Tab Navigation */}
      <section className="py-8 bg-gray-50 dark:bg-dark-section border-b border-gray-200 dark:border-white/10">
        <div className="container">
          {/* Instructions for clarity */}
          <div className="text-center mb-6">
            <p className="text-sm text-gray-600 dark:text-gray-400 font-medium">
              Choose a category to explore our services
            </p>
          </div>
          
          <div className="flex justify-center">
            <div className="bg-white dark:bg-dark-card rounded-2xl p-2 shadow-lg border border-gray-200 dark:border-white/10">
              <button
                onClick={() => setActiveTab('products')}
                className={`px-8 py-3 rounded-xl font-semibold transition-all duration-300 transform ${
                  activeTab === 'products'
                    ? 'bg-gradient-to-r from-brand to-accent text-white shadow-lg scale-105 shadow-brand/30'
                    : 'text-gray-600 dark:text-gray-300 bg-gray-100 dark:bg-[#1a2236] hover:text-white hover:bg-gradient-to-r hover:from-brand/80 hover:to-accent/80 hover:scale-102'
                }`}
              >
                <div className="flex items-center gap-2">
                  <FaIndustry className="text-lg" />
                  <span>Core Products</span>
                </div>
              </button>
              <button
                onClick={() => setActiveTab('services')}
                className={`ml-2 px-8 py-3 rounded-xl font-semibold transition-all duration-300 transform ${
                  activeTab === 'services'
                    ? 'bg-gradient-to-r from-brand to-accent text-white shadow-lg scale-105 shadow-brand/30'
                    : 'text-gray-600 dark:text-gray-300 bg-gray-100 dark:bg-[#1a2236] hover:text-white hover:bg-gradient-to-r hover:from-brand/80 hover:to-accent/80 hover:scale-102'
                }`}
              >
                <div className="flex items-center gap-2">
                  <FaCogs className="text-lg" />
                  <span>Supporting Services</span>
                </div>
              </button>
            </div>
          </div>
          
          {/* Tab indicators */}
          <div className="flex justify-center mt-4">
            <div className="flex gap-2">
              <div className={`w-2 h-2 rounded-full transition-all duration-300 ${
                activeTab === 'products' ? 'bg-brand dark:bg-gold' : 'bg-gray-300 dark:bg-gray-600'
              }`} />
              <div className={`w-2 h-2 rounded-full transition-all duration-300 ${
                activeTab === 'services' ? 'bg-brand dark:bg-gold' : 'bg-gray-300 dark:bg-gray-600'
              }`} />
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      {activeTab === 'products' && (
        <section className="py-20">
          <div className="container">
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-brand via-accent to-gold bg-clip-text text-transparent">
                  Core Products
                </span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Comprehensive steel solutions from design to delivery
              </p>
            </motion.div>

            <div className="space-y-12">
              {products.map((product, index) => (
                <motion.div
                  key={product.title}
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-white dark:bg-dark-card rounded-3xl p-8 shadow-xl border border-gray-200 dark:border-white/10"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`p-4 rounded-2xl bg-gradient-to-br ${product.color} text-white shadow-lg`}>
                      <product.icon className="text-3xl" />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                      {product.title}
                    </h3>
                  </div>
                  
                  <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-200 mb-6">
                    {product.description}
                  </p>
                  
                  <div className="grid sm:grid-cols-2 gap-3">
                    {product.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3 p-3 rounded-lg bg-gray-50 dark:bg-dark-section border border-gray-200 dark:border-white/10">
                        <FaCheckCircle className="text-brand dark:text-gold flex-shrink-0" />
                        <span className="text-sm font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Why Choose VLC Section */}
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mt-20"
            >
              <div className="bg-gradient-to-br from-brand via-accent to-gold rounded-3xl p-12 text-white shadow-2xl relative overflow-hidden">
                <div className="absolute top-4 right-4 opacity-20">
                  <FaShieldAlt className="text-8xl" />
                </div>
                <div className="relative z-10 max-w-4xl mx-auto text-center">
                  <h3 className="text-3xl md:text-4xl font-bold mb-8">Why Choose VLC Construction?</h3>
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div className="flex flex-col items-center text-center">
                      <div className="p-4 rounded-2xl bg-white/20 mb-4">
                        <FaShieldAlt className="text-3xl" />
                      </div>
                      <h4 className="font-bold mb-2">Safety First</h4>
                      <p className="text-sm opacity-90">Industry-leading safety standards on every project</p>
                    </div>
                    <div className="flex flex-col items-center text-center">
                      <div className="p-4 rounded-2xl bg-white/20 mb-4">
                        <FaCheckCircle className="text-3xl" />
                      </div>
                      <h4 className="font-bold mb-2">Quality Guaranteed</h4>
                      <p className="text-sm opacity-90">Exceptional outcomes delivered every time</p>
                    </div>
                    <div className="flex flex-col items-center text-center">
                      <div className="p-4 rounded-2xl bg-white/20 mb-4">
                        <FaUsers className="text-3xl" />
                      </div>
                      <h4 className="font-bold mb-2">Expert Team</h4>
                      <p className="text-sm opacity-90">Experienced professionals you can trust</p>
                    </div>
                    <div className="flex flex-col items-center text-center">
                      <div className="p-4 rounded-2xl bg-white/20 mb-4">
                        <FaGlobe className="text-3xl" />
                      </div>
                      <h4 className="font-bold mb-2">Nationwide Coverage</h4>
                      <p className="text-sm opacity-90">Service available across South Africa</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Services Section */}
      {activeTab === 'services' && (
        <section className="py-20 bg-gray-50 dark:bg-dark-section">
          <div className="container">
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-brand via-accent to-gold bg-clip-text text-transparent">
                  Supporting Services
                </span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Comprehensive support services to complete your project ecosystem
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group relative overflow-hidden rounded-2xl bg-white dark:bg-dark-card border border-gray-200 dark:border-white/10 p-8 hover:shadow-2xl transition-all duration-300"
                >
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-brand/10 to-accent/10 rounded-bl-3xl"></div>
                  
                  <div className="relative z-10">
                    <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${service.color} text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <service.icon className="text-2xl" />
                    </div>
                    
                    <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white group-hover:text-brand dark:group-hover:text-gold transition-colors">
                      {service.title}
                    </h3>
                    
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-dark-section to-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-brand/20 via-accent/20 to-gold/20"></div>
        <div className="absolute top-10 right-10 w-64 h-64 rounded-full blur-3xl opacity-20 bg-gold"></div>
        <div className="absolute bottom-10 left-10 w-48 h-48 rounded-full blur-3xl opacity-15 bg-brand"></div>
        
        <div className="container relative z-10">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl font-light leading-relaxed mb-12">
              Let VLC Construction bring your vision to life with our comprehensive steel solutions and expert services. Contact us today for a consultation.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="inline-flex p-4 rounded-2xl bg-white/10 border border-white/20 mb-4">
                  <FaPhone className="text-2xl text-gold" />
                </div>
                <h3 className="font-bold mb-2">Call Us</h3>
                <p className="text-gray-300">Get immediate assistance</p>
              </div>
              <div className="text-center">
                <div className="inline-flex p-4 rounded-2xl bg-white/10 border border-white/20 mb-4">
                  <FaEnvelope className="text-2xl text-gold" />
                </div>
                <h3 className="font-bold mb-2">Email Us</h3>
                <p className="text-gray-300">info@vlcconstruction.co.za</p>
              </div>
              <div className="text-center">
                <div className="inline-flex p-4 rounded-2xl bg-white/10 border border-white/20 mb-4">
                  <FaClipboardCheck className="text-2xl text-gold" />
                </div>
                <h3 className="font-bold mb-2">Get Quote</h3>
                <p className="text-gray-300">Free project consultation</p>
              </div>
            </div>
            
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link 
                to="/contact" 
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-gold to-brand text-white rounded-2xl font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300"
              >
                Get Free Quote
                <FaArrowRight />
              </Link>
              <Link 
                to="/projects" 
                className="inline-flex items-center gap-3 px-8 py-4 border-2 border-white/30 text-white rounded-2xl font-semibold hover:bg-white/10 transition-all duration-300"
              >
                View Our Projects
                <FaArrowRight />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
