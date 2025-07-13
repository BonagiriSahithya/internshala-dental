import React, { useState } from 'react';

const serviceList = [
  { title: "Cleaning", desc: "Professional dental cleaning for healthy gums.", icon: "🦷" },
  { title: "Filling", desc: "Tooth-colored fillings to restore your teeth.", icon: "🛠️" },
  { title: "Braces", desc: "Orthodontic treatments for perfect alignment.", icon: "😬" },
  { title: "Whitening", desc: "Advanced teeth whitening treatments.", icon: "✨" },
  { title: "Implants", desc: "Permanent solutions for missing teeth.", icon: "🔩" },
  { title: "Root Canal", desc: "Painless root canal therapy.", icon: "🧪" }
];

const Services = () => {
  const [selected, setSelected] = useState(null);

  return (
    <section className="services">
      <h2>Our Services</h2>
      <div className="grid">
        {serviceList.map((srv, index) => (
          <div key={index} className="card" onClick={() => setSelected(index)}>
            <h3>{srv.icon} {srv.title}</h3>
            {selected === index && <p>{srv.desc}</p>}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
