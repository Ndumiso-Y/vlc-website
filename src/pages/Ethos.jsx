import React from "react";
import { FaBullseye, FaEye } from "react-icons/fa";

export default function Ethos() {
  return (
    <section className="py-16">
      <div className="container space-y-10">
        <header>
          <h1 className="text-3xl font-bold mb-2">Our Ethos</h1>
          <p className="text-gray-900 dark:text-gray-100">
            Excellence, innovation, safety and integrity guide everything we do.
          </p>
        </header>

        <div className="grid md:grid-cols-2 gap-6">
          <article className="card p-6">
            <div className="flex items-center gap-3">
              <FaBullseye className="text-brand dark:text-gold text-2xl" />
              <h3 className="font-semibold">Our Mission</h3>
            </div>
            <p className="mt-2 text-sm text-gray-800 dark:text-gray-200">
              Add value by delivering on expectations safely and cost-effectively, with integrity
              and commitment to customers and employees.
            </p>
          </article>

          <article className="card p-6">
            <div className="flex items-center gap-3">
              <FaEye className="text-brand dark:text-gold text-2xl" />
              <h3 className="font-semibold">Our Vision</h3>
            </div>
            <p className="mt-2 text-sm text-gray-800 dark:text-gray-200">
              Lead sustainably by developing talent, enhancing asset value, integrating vertically,
              and achieving operational excellence with eco-friendly practices and a skilled,
              diverse workforce.
            </p>
          </article>
        </div>

        <div className="card p-6">
          <h3 className="font-semibold">Core Principles</h3>
          <ul className="mt-3 list-disc list-inside text-sm text-gray-800 dark:text-gray-200 space-y-1">
            <li>Safety first — everyone goes home safely.</li>
            <li>Transparent collaboration and fair pricing.</li>
            <li>Quality workmanship and punctual delivery.</li>
            <li>Community upliftment and local supplier support.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
