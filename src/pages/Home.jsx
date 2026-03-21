// src/pages/Home.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import { FaHardHat, FaClock, FaHandshake, FaAward } from 'react-icons/fa';

// Let Vite handle asset paths
const coverUrl = new URL('../assets/coverimage.png', import.meta.url).href;
const videoUrl = new URL('../assets/6997690-hd_1920_1080_25fps.mp4', import.meta.url).href;
const sideUrl  = new URL('../assets/vlc-side.png', import.meta.url).href;
const maintenanceWork3Url = new URL('../assets/Maintaince work 3.png', import.meta.url).href;
const installationUrl = new URL('../assets/Installation.png', import.meta.url).href;
const maintenanceWork4Url = new URL('../assets/Maintaince work 4.png', import.meta.url).href;

// Counter animation component
const AnimatedCounter = ({ target, suffix = "", duration = 2 }) => {
  const [count, setCount] = useState(0);
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.3 });

  useEffect(() => {
    if (!isInView) return;
    
    let startTime;
    const targetNum = typeof target === 'string' ? parseInt(target.replace(/\D/g, '')) : target;
    
    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);
      
      // Easing function for smooth animation
      const easeOut = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(easeOut * targetNum));
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(targetNum);
      }
    };
    
    requestAnimationFrame(animate);
  }, [isInView, target, duration]);

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  );
};

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden group">
        {/* Background video */}
        <div className="absolute inset-0 z-0">
          <video
            src={videoUrl}
            className="w-full h-full object-cover opacity-[0.225] dark:opacity-[0.175]"
            autoPlay
            muted
            loop
            playsInline
            preload="none"
            poster={coverUrl}
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-white/50 dark:bg-[#0b1020]/60"></div>
        </div>

        {/* Background blobs */}
        <motion.div
          className="absolute -top-20 -left-20 -z-10 pointer-events-none w-[40rem] h-[40rem] rounded-full blur-3xl opacity-30 bg-gradient-to-br from-brand to-accent"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.35 }}
          transition={{ duration: 0.9 }}
        />
        <motion.div
          className="absolute -bottom-24 -right-24 -z-10 pointer-events-none w-[38rem] h-[38rem] rounded-full blur-3xl opacity-25 bg-gradient-to-br from-gold to-brand"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.25 }}
          transition={{ duration: 0.9, delay: 0.15 }}
        />

        <div className="container relative z-10 py-20 md:py-28 grid md:grid-cols-2 gap-12 items-center">
          {/* Left: headline + copy + actions */}
          <div>
            <motion.h1
              initial={{ y: 16, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-5xl font-extrabold"
            >
              {/* ORIGINAL BRAND GRADIENT via Tailwind theme */}
              <span className="bg-gradient-to-r from-brand via-accent to-gold bg-clip-text text-transparent">
                Build Better
              </span>
              . <span className="relative inline-block">
                <span className="relative">
                  On Time. Within Budget
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
                    animate={{
                      x: ['-100%', '200%']
                    }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      repeatDelay: 1
                    }}
                    style={{
                      background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.6), transparent)',
                      filter: 'blur(1px)'
                    }}
                  />
                </span>
              </span>
            </motion.h1>

            <motion.p
              initial={{ y: 16, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.05 }}
              className="mt-4"
            >
              Civil works, renovations, and industrial plant services delivered with
              safety, transparency and integrity throughout South Africa.
            </motion.p>

            <motion.div
              initial={{ y: 16, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.1 }}
              className="mt-8 flex gap-3"
            >
              <Link to="/projects" className="px-5 py-3 bg-accent text-white rounded-xl shadow-soft">View Projects</Link>
              <Link to="/contact" className="px-5 py-3 border border-brand dark:border-white/20 rounded-xl">Get a Quote</Link>
            </motion.div>
          </div>

          {/* Right: cover image w/ side logo overlay */}
          <div className="relative rounded-2xl overflow-hidden shadow-xl">
            <img
              src={coverUrl}
              alt="VLC Construction cover"
              className="w-full h-[450px] object-cover object-center rounded-2xl shadow-soft"
              loading="eager"
              decoding="async"
            />

            {/* Frosted logo chip w/ glow */}
            <div className="absolute bottom-5 right-5 z-10">
              <div
                className="bg-white/25 dark:bg-black/40 backdrop-blur-md rounded-2xl px-4 py-3 flex items-center gap-3
                           border border-brand/40 
                           shadow-[0_0_20px_rgba(43,94,123,0.4)]
                           transition-all duration-300 
                           group-hover:bg-white/15 group-hover:dark:bg-black/30
                           group-hover:shadow-[0_0_30px_rgba(43,94,123,0.7)]"
              >
                <img
                  src={sideUrl}
                  alt="VLC secondary brand"
                  className="w-28 md:w-32 h-auto object-contain rounded-xl shadow-lg transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                  decoding="async"
                />
                <span className="hidden sm:inline text-white text-sm font-medium">
                  Engineering Excellence
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COMPANY DESCRIPTION - flows naturally */}
      <section className="py-16 bg-white dark:bg-[#0b1020]">
        <div className="container">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <p className="text-lg md:text-xl leading-relaxed text-gray-700 dark:text-gray-200">
              <span className="font-bold text-2xl bg-gradient-to-r from-brand via-accent to-gold bg-clip-text text-transparent">
                VLC Construction
              </span>{" "}
              is a premier provider of high-quality steel products and comprehensive services for industrial plant projects. With a strong commitment to excellence and decades of industry experience, we specialize in delivering custom solutions that cater to the unique requirements of our clients across various sectors, including manufacturing, petrochemical, and construction.
            </p>
          </motion.div>
        </div>
      </section>

      {/* SHOWCASE SECTION */}
      <section className="py-16 bg-gray-50 dark:bg-[#0d1324]">
        <div className="container">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-brand via-accent to-gold bg-clip-text text-transparent">
                Our Work in Action
              </span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              From precision installations to comprehensive maintenance, we deliver excellence across all construction phases.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Maintenance Work 3 */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={maintenanceWork3Url}
                  alt="Maintenance Work in Progress"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-xl font-bold mb-2">Precision Maintenance</h3>
                <p className="text-sm opacity-90">Expert maintenance services ensuring optimal performance</p>
              </div>
            </motion.div>

            {/* Installation */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={installationUrl}
                  alt="Professional Installation Services"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-xl font-bold mb-2">Expert Installation</h3>
                <p className="text-sm opacity-90">Professional installation services with precision and care</p>
              </div>
            </motion.div>

            {/* Maintenance Work 4 */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={maintenanceWork4Url}
                  alt="Advanced Maintenance Solutions"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-xl font-bold mb-2">Advanced Solutions</h3>
                <p className="text-sm opacity-90">Cutting-edge maintenance solutions for complex projects</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-16">
        <div className="container grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { 
              icon: <FaHardHat />, 
              label: "Projects Delivered", 
              value: "120", 
              suffix: "+",
              bgColor: "bg-brand", 
              iconColor: "text-white" 
            },
            { 
              icon: <FaClock />, 
              label: "Years Combined Experience", 
              value: "35", 
              suffix: "+",
              bgColor: "bg-accent", 
              iconColor: "text-white" 
            },
            { 
              icon: <FaHandshake />, 
              label: "Client Satisfaction", 
              value: "98", 
              suffix: "%",
              bgColor: "bg-gold", 
              iconColor: "text-white" 
            },
            { 
              icon: <FaAward />, 
              label: "Safety Incidents", 
              value: "0", 
              suffix: " LTI",
              bgColor: "bg-gradient-to-br from-brand to-accent", 
              iconColor: "text-white" 
            },
          ].map((s, index) => (
            <motion.div
              key={s.label}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`${s.bgColor} p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 text-white relative overflow-hidden group`}
            >
              {/* Background pattern overlay */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute -top-4 -right-4 text-6xl opacity-20 transform rotate-12 group-hover:rotate-6 transition-transform duration-500">
                  {s.icon}
                </div>
              </div>
              
              <div className="relative z-10 flex items-center gap-4">
                <div className={`text-3xl ${s.iconColor} drop-shadow-lg`}>{s.icon}</div>
                <div>
                  <div className="text-3xl font-extrabold drop-shadow-lg">
                    <AnimatedCounter target={s.value} suffix={s.suffix} duration={2.5} />
                  </div>
                  <div className="text-sm opacity-90 font-medium">{s.label}</div>
                </div>
              </div>
              
              {/* Subtle shine effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
                animate={{
                  x: ['-200%', '200%']
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatDelay: 4,
                  ease: "easeInOut"
                }}
              />
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}
