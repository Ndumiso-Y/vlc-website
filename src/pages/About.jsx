import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { 
  FaShieldAlt, 
  FaBalanceScale, 
  FaCheckCircle, 
  FaIndustry, 
  FaCogs, 
  FaLeaf, 
  FaHandshake, 
  FaUsers, 
  FaHeart,
  FaClock,
  FaAward,
  FaTools
} from "react-icons/fa";

// Video asset path
const aboutVideoUrl = new URL('../assets/3968723-hd_1920_1080_24fps.mp4', import.meta.url).href;

// Construction worker image
const constructionWorkerImg = new URL('../assets/image.png', import.meta.url).href;

export default function About() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="min-h-screen bg-white dark:bg-dark-page text-gray-900 dark:text-gray-100">

      {/* Hero Section with Video Background */}
      <section className="relative overflow-hidden h-[70vh] flex items-center justify-center">
        {/* Background Video — hidden for users who prefer reduced motion */}
        <div className="absolute inset-0 z-0">
          {!prefersReducedMotion && (
            <video
              src={aboutVideoUrl}
              className="w-full h-full object-cover opacity-30 dark:opacity-20"
              autoPlay
              muted
              loop
              playsInline
              preload="none"
              aria-hidden="true"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-br from-brand/80 via-accent/60 to-gold/80 dark:from-dark-page/70 dark:via-brand/50 dark:to-accent/60"></div>
        </div>

        {/* Content */}
        <div className="container relative z-10 text-center text-white">
          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-extrabold mb-6"
          >
            <span className="bg-gradient-to-r from-white via-gold to-white bg-clip-text text-transparent">
              About VLC
            </span>
          </motion.h1>
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl font-light max-w-3xl mx-auto leading-relaxed"
          >
            Excellence, Innovation, and Unwavering Commitment to Quality
          </motion.p>
        </div>
      </section>

      {/* What Sets Us Apart */}
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
                What Sets Us Apart
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-brand to-gold mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-200">
                <span className="font-bold text-2xl bg-gradient-to-r from-brand to-accent bg-clip-text text-transparent">
                  VLC Construction
                </span>{" "}
                distinguishes itself from other construction contractors through its unwavering commitment to excellence, innovation, and client satisfaction.
              </p>
              
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-200">
                With a proven track record of delivering high-quality projects on time and within budget, VLC prioritizes precision and attention to detail in every aspect of its work, led by an extremely dedicated and on-the-ball management team.
              </p>

              <div className="grid sm:grid-cols-2 gap-4 mt-8">
                {[
                  { icon: FaIndustry, text: "Cutting-edge Technologies" },
                  { icon: FaLeaf, text: "Sustainable Practices" },
                  { icon: FaHandshake, text: "Transparent Communication" },
                  { icon: FaAward, text: "Excellence Standard" }
                ].map(({ icon: Icon, text }, index) => (
                  <motion.div
                    key={text}
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-center gap-3 p-3 rounded-lg bg-white/50 dark:bg-white/5 border border-brand/20"
                  >
                    <Icon className="text-brand dark:text-gold text-xl" />
                    <span className="font-medium">{text}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              {/* Construction Worker Image */}
              <div className="relative rounded-3xl overflow-hidden mb-8 shadow-2xl group">
                <img
                  src={constructionWorkerImg}
                  alt="VLC Construction professional worker in safety gear"
                  className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent group-hover:from-black/10 transition-all duration-300"></div>
              </div>

              <div className="bg-gradient-to-br from-brand/10 to-accent/10 dark:from-brand/20 dark:to-accent/20 rounded-3xl p-8 border border-brand/20">
                <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-brand to-gold bg-clip-text text-transparent">
                  Our Commitment
                </h3>
                <ul className="space-y-4">
                  {[
                    "Utilizing cutting-edge technologies",
                    "Implementing sustainable practices", 
                    "Fostering transparent communication",
                    "Building long-lasting relationships",
                    "Exceeding client expectations",
                    "Setting new industry standards"
                  ].map((item, index) => (
                    <motion.li
                      key={index}
                      initial={{ x: 20, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                      className="flex items-center gap-3"
                    >
                      <FaCheckCircle className="text-brand dark:text-gold flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-200">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Community Values */}
      <section className="py-20 bg-white dark:bg-dark-page">
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
                Community at Our Core
              </span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: FaHeart,
                title: "Charity Work",
                description: "Active involvement in community charity initiatives and social responsibility programs.",
                color: "from-brand to-accent"
              },
              {
                icon: FaUsers,
                title: "Staff Events", 
                description: "Regular work events and team building activities to foster strong workplace relationships.",
                color: "from-accent to-gold"
              },
              {
                icon: FaHandshake,
                title: "Local Support",
                description: "Supporting local suppliers and hiring locally to ensure our community has our full support.",
                color: "from-gold to-brand"
              }
            ].map(({ icon: Icon, title, description, color }, index) => (
              <motion.div
                key={title}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="group relative overflow-hidden rounded-2xl bg-white dark:bg-dark-card border border-gray-200 dark:border-white/10 p-8 hover:shadow-2xl transition-all duration-300"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                <div className="relative z-10">
                  <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${color} text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="text-2xl" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">{title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality & Punctuality Ethos */}
      <section className="py-20 bg-gray-50 dark:bg-dark-section relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute top-10 right-10 w-64 h-64 rounded-full blur-3xl opacity-20 bg-gradient-to-br from-brand to-accent"></div>
        <div className="absolute bottom-10 left-10 w-48 h-48 rounded-full blur-3xl opacity-15 bg-gradient-to-br from-gold to-brand"></div>

        <div className="container relative z-10">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-brand via-accent to-gold bg-clip-text text-transparent">
                Our Ethos
              </span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Quality and punctuality serve as the cornerstone of our reputation for excellence
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="bg-white/80 dark:bg-dark-card/80 rounded-3xl p-8 border border-gray-200/50 dark:border-white/10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-xl bg-brand/10 border border-brand/20">
                    <FaAward className="text-2xl text-brand dark:text-gold" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Quality Standards</h3>
                </div>
                <p className="text-gray-700 dark:text-gray-200 leading-relaxed mb-4">
                  At VLC Construction, our ethos revolves around an unwavering emphasis on the quality and punctuality of our work. We understand that quality is not just a goal but a standard that must be upheld in every project we undertake.
                </p>
                <p className="text-gray-700 dark:text-gray-200 leading-relaxed">
                  From the initial planning stages to the final execution, we employ rigorous quality control measures to ensure that every aspect of our work meets or exceeds industry standards.
                </p>
              </div>

              <div className="bg-white/80 dark:bg-dark-card/80 rounded-3xl p-8 border border-gray-200/50 dark:border-white/10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-xl bg-accent/10 border border-accent/20">
                    <FaClock className="text-2xl text-accent dark:text-gold" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Punctuality Promise</h3>
                </div>
                <p className="text-gray-700 dark:text-gray-200 leading-relaxed mb-4">
                  We recognize the importance of punctuality in meeting project deadlines. We meticulously schedule and coordinate our operations to ensure timely completion, recognizing that delays can impact budgets, timelines, and client satisfaction.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              <div className="bg-gradient-to-br from-brand/10 to-accent/10 dark:from-brand/20 dark:to-accent/20 rounded-3xl p-8 border border-brand/20">
                <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-brand to-gold bg-clip-text text-transparent">
                  Our Professional Standards
                </h3>
                
                <div className="space-y-6">
                  {[
                    {
                      icon: FaTools,
                      title: "Skilled Professionals",
                      description: "Team dedicated to delivering craftsmanship of the highest caliber"
                    },
                    {
                      icon: FaCogs,
                      title: "Latest Techniques", 
                      description: "Utilizing the finest materials and cutting-edge construction methods"
                    },
                    {
                      icon: FaShieldAlt,
                      title: "Quality Control",
                      description: "Rigorous measures ensuring every project exceeds industry standards"
                    }
                  ].map(({ icon: Icon, title, description }, index) => (
                    <motion.div
                      key={title}
                      initial={{ y: 20, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                      className="flex items-start gap-4 p-4 rounded-xl bg-white/50 dark:bg-white/5"
                    >
                      <div className="p-2 rounded-lg bg-brand/10">
                        <Icon className="text-brand dark:text-gold" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-1">{title}</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-300">{description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final Statement */}
      <section className="py-20 bg-gradient-to-br from-brand via-accent to-gold text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container relative z-10 text-center">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Excellence in Every Project
            </h2>
            <p className="text-xl md:text-2xl font-light leading-relaxed">
              At VLC Construction, our commitment to quality and punctuality is unwavering, serving as the cornerstone of our reputation for excellence in the construction industry.
            </p>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
