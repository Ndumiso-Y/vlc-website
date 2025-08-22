import React from "react";
import { FaShieldAlt, FaBalanceScale, FaCheckCircle } from "react-icons/fa";

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#0b0f19] text-gray-900 dark:text-gray-100">
      <div className="container py-16">
        {/* Page Title */}
        <h1 className="text-4xl font-bold text-center text-brand dark:text-gold mb-12">
          About Us
        </h1>

        {/* Mission Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-brand dark:text-gold mb-6">
            Our Mission
          </h2>
          <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
            To deliver exceptional construction services with a focus on
            reliability, integrity, and quality craftsmanship. We are committed
            to building not only structures but lasting relationships with our
            clients and communities.
          </p>
        </section>

        {/* Vision Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-brand dark:text-gold mb-6">
            Our Vision
          </h2>
          <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
            To be recognized as a leader in the construction industry by setting
            benchmarks in innovation, sustainability, and customer satisfaction.
          </p>
        </section>

        {/* Core Values – clean card style */}
        <section className="mb-16">
          <h3 className="text-2xl font-bold text-brand dark:text-gold mb-6">
            Core Values
          </h3>

          <div className="grid gap-6 md:grid-cols-3">
            {/* Safety */}
            <div className="bg-white dark:bg-[#0f1426] border border-gray-200 dark:border-white/10 rounded-xl shadow-md hover:shadow-lg transition p-6 text-center">
              <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-subtle dark:bg-white/10">
                <FaShieldAlt className="text-brand dark:text-gold text-2xl" />
              </div>
              <h4 className="font-semibold text-lg text-brand dark:text-white">
                Safety
              </h4>
              <p className="text-sm text-gray-700 dark:text-gray-300 mt-1">
                Everyone goes home safely.
              </p>
            </div>

            {/* Integrity */}
            <div className="bg-white dark:bg-[#0f1426] border border-gray-200 dark:border-white/10 rounded-xl shadow-md hover:shadow-lg transition p-6 text-center">
              <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-subtle dark:bg-white/10">
                <FaBalanceScale className="text-brand dark:text-gold text-2xl" />
              </div>
              <h4 className="font-semibold text-lg text-brand dark:text-white">
                Integrity
              </h4>
              <p className="text-sm text-gray-700 dark:text-gray-300 mt-1">
                Fair pricing & reliable timelines.
              </p>
            </div>

            {/* Quality */}
            <div className="bg-white dark:bg-[#0f1426] border border-gray-200 dark:border-white/10 rounded-xl shadow-md hover:shadow-lg transition p-6 text-center">
              <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-subtle dark:bg-white/10">
                <FaCheckCircle className="text-brand dark:text-gold text-2xl" />
              </div>
              <h4 className="font-semibold text-lg text-brand dark:text-white">
                Quality
              </h4>
              <p className="text-sm text-gray-700 dark:text-gray-300 mt-1">
                Do it right the first time.
              </p>
            </div>
          </div>
        </section>

        {/* Closing Section */}
        <section className="text-center">
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            At VLC Construction, we are passionate about transforming visions
            into reality while ensuring the highest standards of safety,
            integrity, and quality.
          </p>
        </section>
      </div>
    </div>
  );
}
