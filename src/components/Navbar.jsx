import React, { useState, useEffect } from "react";
import { IoMenu } from "react-icons/io5";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [navbarBg, setNavbarBg] = useState(false);

    useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 600) {
        setNavbarBg(true); // Show white bg
      } else {
        setNavbarBg(false); // Transparent
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <nav
      className={`w-full p-2 fixed top-0 left-0 z-50 transition-all duration-300 ${
        navbarBg ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">

        {/* Logo */}
        <h1 className="text-black font-bold text-xl">CARWASHING</h1>

        {/* Mobile Button */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-black text-xl focus:outline-none"
          >
            {isOpen ? "✕" : <IoMenu />}
          </button>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex gap-6 items-center text-black font-medium">
          <li><a href="#home" className="hover:text-yellow-400">Home</a></li>
          <li><a href="#about" className="hover:text-yellow-400">About</a></li>
          <li><a href="#services" className="hover:text-yellow-400">Services</a></li>
          <li><a href="#contact" className="hover:text-yellow-400">Contact</a></li>
          <li>
            <a href="#contact">
              <button className="ml-4 bg-yellow-400 text-black px-4 py-2 rounded hover:bg-yellow-300 font-semibold transition duration-200">
                Need Help
              </button>
            </a>
          </li>
        </ul>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
  <div className="lg:hidden bg-white shadow-xl rounded-b-xl px-6 py-6 space-y-4 text-base font-medium text-gray-800 animate-slide-down">
    <a href="#home" onClick={() => setIsOpen(false)} className="block hover:text-indigo-600 transition">
      Home
    </a>
    <a href="#about" onClick={() => setIsOpen(false)} className="block hover:text-indigo-600 transition">
      About
    </a>
    <a href="#services" onClick={() => setIsOpen(false)} className="block hover:text-indigo-600 transition">
      Services
    </a>
    <a href="#contact" onClick={() => setIsOpen(false)} className="block hover:text-indigo-600 transition">
      Contact
    </a>
    <a href="#contact" onClick={() => setIsOpen(false)} className="block">
      <button className="w-full bg-yellow-400 text-black py-2 rounded font-semibold hover:bg-yellow-300 transition duration-200">
        Need Help
      </button>
    </a>
  </div>
)}

    </nav>
  );
}
