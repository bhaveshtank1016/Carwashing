import React, { useEffect, useRef } from "react";
import { Home, Building2, Factory, Landmark } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const industries = [
  {
    icon: <Home size={40} className="text-indigo-600 dark:text-indigo-400" />,
    title: "Residential",
    description: "Customized fabrication solutions for homes, apartments, and private villas.",
  },
  {
    icon: <Building2 size={40} className="text-indigo-600 dark:text-indigo-400" />,
    title: "Commercial",
    description: "Expertise in glass facades, office partitions, and shopfront fittings.",
  },
  {
    icon: <Factory size={40} className="text-indigo-600 dark:text-indigo-400" />,
    title: "Industrial",
    description: "Reliable metalwork for warehouses, plants, and heavy-duty industrial structures.",
  },
  {
    icon: <Landmark size={40} className="text-indigo-600 dark:text-indigo-400" />,
    title: "Government Contracts",
    description: "Experience in public infrastructure and government-certified projects.",
  },
];

const IndustriesWeServe = () => {
  const cardsRef = useRef([]);

useEffect(() => {
  if (!cardsRef.current.length) return;

  cardsRef.current.forEach((card, index) => {
    if (!card) return; // Skip null refs

    gsap.fromTo(
      card,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        delay: index * 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: card,
          start: "top 85%", // Adjust for earlier animation trigger
          toggleActions: "play none none none", // ensures it only plays once
        },
      }
    );
  });

  // Cleanup GSAP animations on unmount
  return () => {
    ScrollTrigger.getAll().forEach(trigger => trigger.kill());
  };
}, []);

  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black via-gray-900 to-black dark:bg-black transition-colors duration-500">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-gray-900 dark:text-white">
          Industries We <span className="text-indigo-600 dark:text-indigo-400">Serve</span>
        </h2>
        <p className="mb-12 text-gray-600 dark:text-gray-300 text-center max-w-2xl mx-auto">
          Our versatile expertise spans across residential, commercial, industrial, and public sector projects.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {industries.map((item, idx) => (
            <div
              key={idx}
              ref={(el) => (cardsRef.current[idx] = el)}
              className="group bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 text-center sm:text-left transform hover:-translate-y-1 hover:scale-[1.02]"
            >
              <div className="flex justify-center sm:justify-start mb-4 transition-transform duration-300 group-hover:scale-110">
                {item.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-white">
                {item.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesWeServe;
