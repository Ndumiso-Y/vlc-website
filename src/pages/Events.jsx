import React from "react";

export default function Events() {
  const items = [
    { title: "10th Anniversary", desc: "Celebrating a decade of building with integrity." },
    { title: "VLC Car Show", desc: "Community event showcasing craft, speed and precision." },
    { title: "VLC Sports Day", desc: "Team building and wellness across all departments." },
  ];

  return (
    <section className="py-16">
      <div className="container">
        <h1 className="text-3xl font-bold mb-6">Events & Activities</h1>
        <div className="grid md:grid-cols-3 gap-6">
          {items.map((e) => (
            <article key={e.title} className="card p-6 hover:-translate-y-1 transition">
              <h3 className="font-semibold">{e.title}</h3>
              <p className="text-sm mt-2 text-gray-800 dark:text-gray-200">{e.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
