import React from 'react';
import {
  Building2,
  PanelsTopLeft,
  DoorOpen,
  LayoutTemplate,
  Ruler,
  Hammer
} from 'lucide-react';

const services = [
  { icon: <Building2 size={40} />, title: 'Car Washing & Detailing', description: 'Reliable and modern car wash and detailing services for everyday and luxury vehicles.' },
  { icon: <PanelsTopLeft size={40} />, title: 'ACP & Glazing', description: 'Expert car wash and detailing for a spotless, long-lasting shine — inside and out.' },
  { icon: <DoorOpen size={40} />, title: 'Foam Wash & Detailing', description: 'Smooth, time-saving car wash systems using premium-grade cleaning products and equipment.' },
  { icon: <LayoutTemplate size={40} />, title: 'Gloss Finish & Surface Protection', description: ' Advanced car detailing and coating services for a sleek, showroom-quality finish.' },
  { icon: <Ruler size={40} />, title: 'Detailing & Shine Solutions', description: 'Tailor-made car care solutions to match your vehicle’s needs and shine goals.' },
  { icon: <Hammer size={40} />, title: 'Luxury Wash & Detailing', description: 'Thorough and reliable car cleaning, crafted with precision and care.' }
];

const WhatWeOffer = () => {
  return (
    <section id="offer" className="px-6 py-20 md:px-16  text-white bg-black">
      <h4 className="text-red-600 text-lg font-bold mb-2 uppercase text-center">What We Offer</h4>
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
        Expert Car Cleaning & Detailing Solutions
      </h2>
      <p className="text-center text-gray-300 mb-10 max-w-2xl mx-auto">
       From high-pressure foam washes to interior detailing and ceramic coatings — we deliver reliable, modern car care tailored for lasting shine and protection.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {services.map((service, idx) => (
          <div
            key={idx}
            className="bg-blue-950 text-white flex flex-col items-center p-10 text-center min-h-[250px] rounded-xl shadow"
          >
            <div className="mb-4 text-yellow-400">{service.icon}</div>
            <h3 className="text-lg font-semibold text-yellow-400">{service.title}</h3>
            <p className="text-sm mt-2">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhatWeOffer;
