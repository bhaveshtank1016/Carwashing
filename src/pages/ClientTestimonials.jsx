import React from 'react';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';
import StatsAchievements from './StatsAchievements';

const testimonials = [
  {
    name: 'Anjali Sharma',
    role: 'Homeowner',
    feedback:
      'Krishika Fabrication did a wonderful job with my balcony railings. Highly professional and timely service!',
    stars: 5,
    initials: 'AS'
  },
  {
    name: 'Rahul Meena',
    role: 'Contractor',
    feedback:
      'I’m impressed by their attention to detail and quality. Great communication and excellent craftsmanship.',
    stars: 4,
    initials: 'RM'
  },
  {
    name: 'Sonia Jain',
    role: 'Interior Designer',
    feedback:
      'Collaborating with Krishika has been seamless. My clients loved the final look!',
    stars: 5,
    initials: 'SJ'
  }
];

const ClientTestimonials = () => {
  return (
    <section className="bg-gradient-to-b from-black via-gray-900 to-black text-white py-25 px-2 sm:px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          What Our Clients Say
        </h2>
        <p className="mb-12 max-w-2xl mx-auto text-gray-200">
          Real stories from happy clients who trusted us with their fabrication needs.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-20">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-white text-black p-6 rounded-xl shadow-md relative"
            >
              <FaQuoteLeft className="text-2xl text-yellow-400 mb-4" />
              <p className="mb-4 text-sm">{item.feedback}</p>
              <div className="flex items-center gap-4">
                <div className="bg-yellow-400 text-black w-10 h-10 flex items-center justify-center rounded-full font-bold">
                  {item.initials}
                </div>
                <div>
                  <p className="font-semibold text-sm">{item.name}</p>
                  <p className="text-xs text-gray-600">{item.role}</p>
                  <div className="flex text-yellow-400 mt-1">
                    {Array(item.stars)
                      .fill()
                      .map((_, i) => (
                        <FaStar key={i} size={14} />
                      ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

     
    </section>
  );
};

export default ClientTestimonials;
