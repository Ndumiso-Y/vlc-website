import React from 'react';
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt, FaGlobe } from 'react-icons/fa';

export default function Contact() {
  const emails = [
    { label: 'General Enquiries', value: 'info@vlcconstruction.co.za' },
    { label: 'CEO', value: 'viran@vlcconstruction.co.za' },
    { label: 'Assistant CEO (Quinton)', value: 'quinton@vlcconstruction.co.za' },
    { label: 'Assistant CEO (Victor)', value: 'victor@vlcconstruction.co.za' },
    { label: 'Supervisor', value: 'shivesh@vlcconstruction.co.za' },
    { label: 'Admin Enquiries', value: 'anna@vlcconstruction.co.za' },
  ];

  const phones = [
    { label: 'CEO — Viran Chand', value: '083 303 0722' },
    { label: 'Site Manager — Victor Ratshimolo', value: '079 219 3017' },
    { label: 'Site Manager — Quinton Douwie', value: '068 547 3287' },
  ];

  return (
    <section className="py-16">
      <div className="container grid md:grid-cols-2 gap-10">
        <div>
          <h1 className="text-3xl font-bold text-brand dark:text-gold mb-4">Contact Us</h1>
          <form className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <input className="border rounded-lg px-3 py-2 dark:bg-white/5 dark:border-white/10" placeholder="First name" />
              <input className="border rounded-lg px-3 py-2 dark:bg.White/5 dark:border-white/10" placeholder="Last name" />
            </div>
            <input className="border rounded-lg px-3 py-2 w-full dark:bg-white/5 dark:border-white/10" placeholder="Email" />
            <input className="border rounded-lg px-3 py-2 w-full dark:bg-white/5 dark:border-white/10" placeholder="Phone" />
            <textarea className="border rounded-lg px-3 py-2 w-full dark:bg-white/5 dark:border-white/10" rows="5" placeholder="Tell us about your project..." />
            <button className="px-5 py-3 bg-accent text-white rounded-xl" type="button">Send</button>
          </form>
        </div>

        <div className="card p-6 space-y-5">
          <div>
            <h3 className="font-semibold text-brand dark:text-white">Office</h3>
            <p className="text-sm text-gray-700 dark:text-gray-300 mt-2 flex items-start gap-2">
              <FaMapMarkerAlt className="mt-1 text-brand dark:text-gold" />
              192A Kock Street, Rustenburg, NW 0299
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-brand dark:text-white">Email</h4>
            <ul className="mt-2 space-y-1">
              {emails.map((e) => (
                <li key={e.value} className="text-sm text-gray-700 dark:text-gray-300 flex items-center gap-2">
                  <FaEnvelope className="text-brand dark:text-gold" /> {e.label}: <a className="underline hover:no-underline" href={`mailto:${e.value}`}>{e.value}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-brand dark:text-white">Phone</h4>
            <ul className="mt-2 space-y-1">
              {phones.map((p) => (
                <li key={p.value} className="text-sm text-gray-700 dark:text-gray-300 flex items-center gap-2">
                  <FaPhoneAlt className="text-brand dark:text-gold" /> {p.label}: {p.value}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
            <FaGlobe className="text-brand dark:text-gold" />
            Website: <a className="underline hover:no-underline" href="https://www.vlc-construction.com" target="_blank" rel="noreferrer">www.vlc-construction.com</a>
          </div>
        </div>
      </div>
    </section>
  );
}
