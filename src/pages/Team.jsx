import React from 'react';

export default function Team() {
  const people = [
    { name: 'Viran Chand', role: 'CEO' },
    { name: 'Quinton Douwie', role: 'Assistant CEO' },
    { name: 'Victor Ratshimolo', role: 'Assistant CEO' },
    { name: 'Shivesh Singh', role: 'Supervisor' },
    { name: 'John Makhubela', role: 'Construction Manager' },
    { name: 'Karabo Mohale', role: 'Supervisor' },
    { name: 'Ofentse Ntshabele', role: 'Supervisor' },
    { name: 'Robert Muthivhi', role: 'Supervisor' },
    { name: 'Ozia Khoza', role: 'Supervisor' },
    { name: 'Anna Van Staden', role: 'Admin' },
    { name: 'Alex Manicus', role: 'Admin' },
    { name: 'Isaac Gadinabokao', role: 'Safety Officer' },
  ];

  return (
    <section className="py-16">
      <div className="container">
        <h1 className="text-3xl font-bold text-brand dark:text-gold mb-6">Meet Our Team</h1>
        <p className="text-gray-700 dark:text-gray-300 max-w-2xl">
          The VLC Construction team exemplifies excellence and innovation, consistently
          exceeding expectations with dedication, expertise and a commitment to quality.
        </p>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
          {people.map(m => (
            <div key={m.name} className="card p-5">
              <div className="font-semibold text-brand dark:text-white">{m.name}</div>
              <div className="text-sm text-gray-600 dark:text-gray-300">{m.role}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
