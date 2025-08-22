import React from "react";
import {
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
} from "react-icons/fa";

export default function Services() {
  const services = [
    { title: "Welding & Metal Joining", icon: FaWrench, desc: "Expert welding services for assembly and repair of steel parts, ensuring structural integrity." },
    { title: "Surface Treatment & Coating", icon: FaBrush, desc: "Galvanizing, painting, and powder coating to prevent corrosion and extend component lifespan." },
    { title: "Quality Control & Inspection", icon: FaCheckCircle, desc: "Rigorous QC and inspections to ensure compliance with industry standards and specifications." },
    { title: "Consultation & Technical Support", icon: FaComments, desc: "Expert advice and technical support to ensure the success of steelwork projects." },
    { title: "Project Management", icon: FaProjectDiagram, desc: "Comprehensive management across inception-to-completion for schedule, scope, and quality." },
    { title: "Demolition & Dismantling", icon: FaHammer, desc: "Safe, compliant dismantling and decommissioning of steel structures and plant assets." },
  ];

  const products = [
    { title: "Fabrication", icon: FaCogs, desc: "Cutting, bending, and assembling steel components to specification." },
    { title: "Erection & Installation", icon: FaScrewdriver, desc: "On-site assembly and installation of steel structures and components, safely and efficiently." },
    { title: "Maintenance & Repair", icon: FaHardHat, desc: "Routine maintenance and emergency repair to keep assets in optimal condition." },
    { title: "Design & Engineering", icon: FaDraftingCompass, desc: "Innovative design solutions and engineering for steel structures." },
  ];

  const Card = ({ Icon, title, desc }) => (
    <article className="card p-6">
      <div className="text-3xl text-brand dark:text-gold mb-3">
        <Icon />
      </div>
      <h3 className="font-semibold">{title}</h3>
      <p className="text-sm mt-2">{desc}</p>
    </article>
  );

  return (
    <section className="py-16">
      <div className="container space-y-12">
        <div>
          <h1 className="text-3xl font-bold mb-6">Services</h1>
          <div className="grid md:grid-cols-3 gap-6">
            {services.map((s) => (
              <Card key={s.title} Icon={s.icon} title={s.title} desc={s.desc} />
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-6">Products</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {products.map((p) => (
              <Card key={p.title} Icon={p.icon} title={p.title} desc={p.desc} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
