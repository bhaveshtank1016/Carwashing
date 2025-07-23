// import React from "react";
// import { CheckCircle, Timer, Award, Hammer } from "lucide-react";
// import ClientTestimonials from './ClientTestimonials';

// const reasons = [
//   {
//     icon: <Award className="text-indigo-600 w-8 h-8" />,
//     title: "10+ Years Experience",
//     description: "A decade of expertise in fabrication, glazing, and metal works."
//   },
//   {
//     icon: <Timer className="text-indigo-600 w-8 h-8" />,
//     title: "On-Time Delivery",
//     description: "We respect your time and always meet our deadlines."
//   },
//   {
//     icon: <CheckCircle className="text-indigo-600 w-8 h-8" />,
//     title: "Certified Welders",
//     description: "Skilled professionals ensure quality and safety in every job."
//   },
//   {
//     icon: <Hammer className="text-indigo-600 w-8 h-8" />,
//     title: "Tailored Solutions",
//     description: "Custom work to match your exact needs and specifications."
//   }
// ];

// const WhyChooseUs = () => {
//   return (
//     <section id="about">
//     <section className="py-20 bg-white px-6 md:px-16">
//       <div className="max-w-6xl mx-auto text-center">
//         <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
//           Why <span className="text-indigo-600">Choose Us?</span>
//         </h2>
//         <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
//           We don’t just build structures, we build trust through consistent performance, high quality, and professional service.
//         </p>

//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 pb-15">
//           {reasons.map((item, index) => (
//             <div key={index} className="flex flex-col items-center text-center">
//               <div className="mb-4">{item.icon}</div>
//               <h3 className="font-semibold text-lg mb-2 text-gray-800">{item.title}</h3>
//               <p className="text-sm text-gray-600">{item.description}</p>
//             </div>
//           ))}
//         </div>
//       </div>
      
     
//     </section></section>
//   );
// };

// export default WhyChooseUs;



// import React from 'react'

// function WhyChooseUs() {
//   return (
//     <div className='relative'>
//       <div className='heading'> 
//         <div>
//           <h5>Our services List</h5>
//           <h1>Why Choose Carwash.......</h1>
//         </div>
//       </div>
//       <div className='align items-center'>
// <div></div>
//       </div>
//     </div>
//   )
// }

// export default WhyChooseUs


import React, { useEffect, useRef } from "react";
import { FaTools, FaLeaf, FaCheckCircle, FaCogs, FaBuilding, FaShieldAlt } from "react-icons/fa";
import gsap from "gsap";
import carImage from "../assets/car_yellow.webp"; // Your uploaded yellow car image

const WhyChooseUs = () => {
  const sectionRef = useRef();

  useEffect(() => {
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-black text-white py-20 px-4 md:px-10 relative"
      style={{
        background: "radial-gradient(circle, #1f0000 0%, #000000 70%)",
      }}
    >
      <div className="text-center mb-12">
        <p className="text-yellow-400 font-semibold uppercase">Our Service List</p>
        <h2 className="text-3xl md:text-5xl font-bold">
          Why Choose <span className="text-yellow-400">CarWash</span><span className="text-yellow-500">...</span>
        </h2>
        <div className="mt-2 h-1 w-20 mx-auto bg-yellow-400"></div>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center gap-12 relative">
        {/* Left Content */}
        <div className="space-y-10 text-right md:w-1/3">
          <div>
            <div className="flex items-center justify-end gap-3">
              <p className="font-bold text-lg">Commitment</p>
              <FaTools className="text-red-600 text-2xl" />
            </div>
            <p className="text-sm text-gray-300">
              Meets Assigned Targets in Just 20 Minutes and see the difference in your Car.
            </p>
          </div>

          <div>
            <div className="flex items-center justify-end gap-3">
              <p className="font-bold text-lg">Reliability</p>
              <FaCheckCircle className="text-red-600 text-2xl" />
            </div>
            <p className="text-sm text-gray-300">
              We are the Most Reliable Car Cleaning Company in the Indian Market.
            </p>
          </div>

          <div>
            <div className="flex items-center justify-end gap-3">
              <p className="font-bold text-lg">Services</p>
              <FaBuilding className="text-red-600 text-2xl" />
            </div>
            <p className="text-sm text-gray-300">
              Hassle-free Cleaning Service from the Experienced & Well Trained Professionals.
            </p>
          </div>
        </div>

        {/* Center Car Image */}
        <div className="w-[300px] md:w-[400px]">
          <img src={carImage} alt="car" className="w-full animate-pulse" />
        </div>

        {/* Right Content */}
        <div className="space-y-10 text-left md:w-1/3">
          <div className="">
            <div className="flex items-center gap-3">
              <FaLeaf className="text-red-600 text-2xl" />
              <p className="font-bold text-lg">Eco-Friendly</p>
            </div>
            <p className="text-sm text-gray-300">
              Range of Eco-Friendly Techniques And Chemicals are used for Car Cleaning.
            </p>
          </div>

          <div>
            <div className="flex items-center gap-3">
              <FaCogs className="text-red-600 text-2xl" />
              <p className="font-bold text-lg">Quality</p>
            </div>
            <p className="text-sm text-gray-300">
              "Car Cleaning" – Think Again. We Do a lot More than this With the premium quality products and equipment.
            </p>
          </div>

          <div>
            <div className="flex items-center gap-3">
              <FaShieldAlt className="text-red-600 text-2xl" />
              <p className="font-bold text-lg">Trust</p>
            </div>
            <p className="text-sm text-gray-300">
              Being recognized as the most trusted car detailing company in the Indian market is a significant achievement.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
