import React, { useRef } from "react";
import { Phone, Mail, Clock, MapPin } from "lucide-react";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_6sbjhds',
        'template_cmgp9a9',
        form.current,
        'AuuiQAXPgWMXLUGCh'
      )
      .then(
        () => {
          alert("✅ Booking request sent successfully!");
          form.current.reset();
        },
        (error) => {
          console.error(error.text);
          alert("❌ Failed to send booking. Please try again.");
        }
      );
  };

  return (
    <section id="contact" className="bg-gradient-to-b from-black via-gray-900 to-black  py-20 px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
        {/* Left Side Info */}
        <div >
          <h2 className="text-4xl font-bold mb-6 text-gray-200">
            Book a <span className="text-indigo-600">Car Wash</span> Today
          </h2>
          <p className="text-gray-300 mb-10 text-lg leading-relaxed">
            Get your car professionally cleaned, polished, and detailed with top-notch service. Home pickup & drop available!
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-gray-800 text-sm">
            <div className="flex items-start gap-3">
              <Phone className="text-indigo-600 mt-1" />
              <div className="text-white">
                <p className="font-semibold">Call Us</p>
                <p>+91 86199 65763</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Mail className="text-indigo-600 mt-1" />
              <div className="text-white">
                <p className="font-semibold">Email</p>
                <p>bookings@carshinepro.com</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Clock className="text-indigo-600 mt-1" />
              <div className="text-white">
                <p className="font-semibold">Hours</p>
                <p>Mon – Sun: 8:00 AM – 8:00 PM</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <MapPin className="text-indigo-600 mt-1" />
              <div className="text-white">
                <p className="font-semibold">Location</p>
                <p>22-B, CarShine Complex, MI Road, Jaipur</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side Form */}
        <div className="bg-gradient-to-b from-neutral-700 via-gray-500 to-gray-500  focus:ring-indigo-400 outline-none border border-gray-300 shadow-lg rounded-xl p-8 md:p-10">
          <h3 className="text-2xl font-bold text-black mb-4">Book Your Wash</h3>
          <p className="text-gray-300 text-sm mb-6">
            Fill out the form to schedule your car wash.
          </p>

          <form ref={form} onSubmit={sendEmail} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                name="name"
                type="text"
                required
                placeholder="Full Name"
                className="border border-gray-300 p-3 rounded w-full focus:ring-2 focus:ring-indigo-400 outline-none"
              />
              <input
                name="phone"
                type="tel"
                required
                placeholder="Phone Number"
                className="border border-gray-300 p-3 rounded w-full focus:ring-2 focus:ring-indigo-400 outline-none"
              />
            </div>

            <input
              name="email"
              type="email"
              required
              placeholder="Email Address"
              className="border border-gray-300 p-3 rounded w-full focus:ring-2 focus:ring-indigo-400 outline-none"
            />

            <input
              name="vehicle"
              type="text"
              required
              placeholder="Vehicle Model (e.g., Swift, Creta)"
              className="border border-gray-300 p-3 rounded w-full focus:ring-2 focus:ring-indigo-400 outline-none"
            />

            <select
              name="service_type"
              required
              className="border border-gray-300 p-3 rounded w-full focus:ring-2 focus:ring-indigo-400 outline-none"
            >
              <option value="">Select Service Type</option>
              <option value="Basic Exterior Wash">Basic Exterior Wash</option>
              <option value="Interior Vacuuming">Interior Vacuuming</option>
              <option value="Full Detailing">Full Detailing</option>
              <option value="Wax & Polish">Wax & Polish</option>
            </select>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                name="preferred_date"
                type="date"
                required
                className="border border-gray-300 p-3 rounded w-full focus:ring-2 focus:ring-indigo-400 outline-none"
              />
              <input
                name="preferred_time"
                type="time"
                required
                className="border border-gray-300 p-3 rounded w-full focus:ring-2 focus:ring-indigo-400 outline-none"
              />
            </div>

            <select
              name="pickup_drop"
              required
              className="border border-gray-300 p-3 rounded w-full focus:ring-2 focus:ring-indigo-400 outline-none"
            >
              <option value="">Pickup & Drop?</option>
              <option value="Yes">Yes</option>
              <option value="No, I’ll bring the car">No, I’ll bring the car</option>
            </select>

            <textarea
              name="message"
              rows="4"
              placeholder="Additional Instructions"
              className="border border-gray-300 p-3 rounded w-full focus:ring-2 focus:ring-indigo-400 outline-none"
            ></textarea>

            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-3 px-6 rounded font-semibold text-sm tracking-wide hover:bg-indigo-500 transform hover:scale-105 transition duration-300"
            >
              Submit Booking
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;

