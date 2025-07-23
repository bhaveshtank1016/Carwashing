import React from "react";
import { PhoneCall } from "lucide-react";
import { FaWhatsapp, FaRegEnvelope } from "react-icons/fa";

const FloatingCTAButton = () => {
  return (
    <>
      {/* Middle-right Enquiry Button */}
   <a
  href="#contact"
  className="fixed top-1/2 right-0 transform -translate-y-1/2 bg-yellow-500 
    hover:bg-yellow-600 text-white px-2 py-2 text-sm font-medium z-50 shadow-md border-l-2 border-yellow-700"
  style={{
    writingMode: "vertical-rl",
    textOrientation: "mixed",
    borderRadius: "4px 0 0 4px", // soft left edge
    height: "120px",             // vertical size
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }}
>
  Booking
</a>



      {/* Bottom-right WhatsApp and Call Buttons */}
      <div className="fixed bottom-6 right-4 flex flex-col gap-3 z-50">
        <a
          href="https://wa.me/918619965763"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 hover:bg-green-600 text-white px-3 py-3 rounded-full shadow-lg flex items-center gap-2 text-sm font-medium"
        >
          <FaWhatsapp size={18} />
          <span className="hidden sm:block">WhatsApp Us</span>
        </a>

        <a
          href="tel:+918619965763"
          className="bg-indigo-600 hover:bg-indigo-700 text-white px-3 py-3 rounded-full shadow-lg flex items-center gap-2 text-sm font-medium"
        >
          <PhoneCall size={18} />
          <span className="hidden sm:block">Call Now</span>
        </a>
      </div>
    </>
  );
};

export default FloatingCTAButton;
