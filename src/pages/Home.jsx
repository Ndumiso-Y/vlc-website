import React from 'react';
import { motion } from 'framer-motion';
import { FaHardHat, FaClock, FaHandshake, FaAward } from 'react-icons/fa';
import side from '../assets/vlc-side.png';
import cover from '../assets/coverimage.png';

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden group">
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

        <div className="container relative z-0 py-20 md:py-28 grid md:grid-cols-2 gap-12 items-center">
          {/* Left: headline + copy + actions */}
          <div>
            <motion.h1
              initial={{ y: 16, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-5xl font-extrabold"
            >
              <span className="gradient-text">Build Better</span>. On Time. Within Budget.
            </motion.h1>

            <motion.p
              initial={{ y: 16, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.05 }}
              className="mt-4 text-gray-900 dark:text-gray-100"
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
              <a href="/projects" className="px-5 py-3 bg-accent text-white rounded-xl shadow-soft">View Projects</a>
              <a href="/contact" className="px-5 py-3 border border-brand dark:border-white/20 rounded-xl">Get a Quote</a>
            </motion.div>
          </div>

          {/* Right: cover image w/ side logo overlay */}
          <div className="relative rounded-2xl overflow-hidden shadow-xl">
            <img
              src={cover}
              alt="VLC Construction cover"
              className="w-full h-[450px] object-cover object-center"
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
                  src={side}
                  alt="VLC secondary brand"
                  className="w-28 md:w-32 h-auto object-contain drop-shadow-lg transition-transform duration-300 group-hover:scale-105"
                />
                <span className="hidden sm:inline text-white text-sm font-medium">
                  Engineering Excellence
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-12">
        <div className="container grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: <FaHardHat />, label: "Projects Delivered", value: "120+" },
            { icon: <FaClock />, label: "Years Combined Experience", value: "35+" },
            { icon: <FaHandshake />, label: "Client Satisfaction", value: "98%" },
            { icon: <FaAward />, label: "Safety Incidents", value: "0 LTI" },
          ].map((s) => (
            <div key={s.label} className="card p-6 flex items-center gap-4">
              <div className="text-3xl text-brand dark:text-gold">{s.icon}</div>
              <div>
                <div className="text-2xl font-extrabold">{s.value}</div>
                <div className="text-sm text-gray-700 dark:text-gray-300">{s.label}</div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
