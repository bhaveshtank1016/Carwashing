import React, { useState, useEffect, useRef } from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const blogPosts = [
  {
    id: "choose-railings",
    title: "Choosing the Right Car Care Package: A Practical Guide",
    summary:
      "Discover key factors for selecting railings that balance safety, aesthetics, and long-term durability.",
    content: `
      Selecting the ideal railings is about more than just design—it's about safety, regulations, and long-term performance.
      <br/><br/>
      ✔ <strong>Material Selection:</strong> Popular choices include stainless steel for durability, glass for transparency, and aluminum for cost-effectiveness. Choose depending on whether it's indoor, outdoor, coastal, or heavy-traffic.
      <br/><br/>
      ✔ <strong>Compliance:</strong> Railings must meet building codes. The right height, proper spacing between bars, and firm installation are legal and safety requirements.
      <br/><br/>
      ✔ <strong>Visual Harmony:</strong> Your railings must align with the rest of the interior/exterior. For minimalist homes, opt for glass or cable railings. For traditional ones, wrought iron may be better.
      <br/><br/>
      ✔ <strong>Maintenance Factor:</strong> Stainless steel is rust-resistant but expensive. Aluminum is light and cheaper. Iron needs periodic painting.
      <br/><br/>
      <em>A well-chosen railing adds architectural character and ensures safety without compromise.</em>
    `,
    image: "/src/assets/gallery2.jpg",
    date: "June 1, 2025",
  },
  {
    id: "metal-fabrication-trends",
    title: "Emerging Trends in Car Cleaning & Detailing",
    summary:
      "Explore the latest innovations, sustainable practices, and smarter production techniques in metal fabrication.",
    content: `
      Metal fabrication is no longer just about cutting and welding. It's now a digitally driven, precision-based, highly customized field.
      <br/><br/>
      ✔ <strong>Smart Automation:</strong> CNC and laser-cutting machines now integrate AI for real-time error detection, resulting in improved quality and efficiency.
      <br/><br/>
      ✔ <strong>3D Metal Printing:</strong> Additive manufacturing opens up new opportunities for complex, lightweight, yet strong structures in aerospace and healthcare.
      <br/><br/>
      ✔ <strong>Sustainability Focus:</strong> Use of recyclable materials, low-energy machinery, and efficient scrap reuse is becoming a new industry standard.
      <br/><br/>
      ✔ <strong>Digital Twin Technology:</strong> Engineers now simulate stress and performance of metal components virtually before production.
      <br/><br/>
      <em>As innovation continues, metal fabrication is poised to lead the future of smart and green infrastructure.</em>
    `,
    image: "/src/assets/gallery.jpg",
    date: "May 20, 2025",
  },
  {
    id: "aluminum-windows-benefits",
    title: "How to Pick the Best Car Wash & Detailing Services",
    summary:
      "Experience long-lasting shine, enhanced aesthetics, and protective care with our expert car cleaning and detailing services..",
    content: `
      Aluminum windows blend strength, lightweight design, and a clean look—making them the #1 choice in commercial and modern residential construction.
      <br/><br/>
      ✔ <strong>Durability:</strong> Unlike wood or plastic frames, aluminum resists warping, rotting, or fading—even in harsh climates.
      <br/><br/>
      ✔ <strong>Design Flexibility:</strong> It allows narrow frames, bigger glass panes, and custom powder coating colors for sleek, modern looks.
      <br/><br/>
      ✔ <strong>Thermal Break Technology:</strong> New systems insulate aluminum frames using polyamide inserts, reducing heat transfer significantly.
      <br/><br/>
      ✔ <strong>Low Maintenance:</strong> All it takes is occasional cleaning—no sealing, repainting, or polishing needed.
      <br/><br/>
      <em>From high-rises to villas, aluminum windows combine form and function in the most elegant way.</em>
    `,
    image: "/src/assets/projectGallery.jpg",
    date: "May 5, 2025",
  },
];

const BlogKnowledgeCenter = () => {
  const [selectedPost, setSelectedPost] = useState(null);
  const blogRef = useRef();

  useEffect(() => {
    if (selectedPost && blogRef.current) {
      blogRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [selectedPost]);

  const handleReadMore = (post) => {
    setSelectedPost(post);
  };

  const handleBack = () => {
    setSelectedPost(null);
    setTimeout(() => {
      blogRef.current.scrollIntoView({ behavior: "smooth" });
    }, 50);
  };

  return (
    <section ref={blogRef} className="bg-black text-white py-16 px-4 sm:px-6 md:px-8">
      <div className="max-w-6xl mx-auto">
        {!selectedPost ? (
          <>
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-200">
                Blog & Knowledge Center
              </h2>
              <p className="text-gray-300 mt-3 text-base md:text-lg max-w-2xl mx-auto">
                Stay updated with practical guides and industry-leading knowledge to empower your project decisions.
              </p>
            </div>

 <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <div
                  key={index}
                  className="bg-white/5 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 group"
                >
                  <div className="relative overflow-hidden h-52">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end p-4">
                      <button
                        onClick={() => handleReadMore(post)}
                        className="text-sm text-white font-medium bg-indigo-600 px-4 py-2 rounded hover:bg-indigo-500 transition"
                      >
                        Read More
                      </button>
                    </div>
                  </div>
                  <div className="p-5">
                    <p className="text-xs text-gray-400 mb-1">{post.date}</p>
                    <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                    <p className="text-gray-300 text-sm">{post.summary}</p>
                  </div>
                </div>
              ))}
            </div>
          </>
        ) : (
          <div className="max-w-4xl mx-auto border rounded-xl p-5 md:p-6 shadow bg-white">
            <button
              onClick={handleBack}
              className="text-indigo-600 hover:underline mb-4 flex items-center text-sm"
            >
              <FaArrowLeft className="mr-2" /> Back to Blog
            </button>

            <img
              src={selectedPost.image}
              alt="Blog banner"
              className="w-full h-52 object-cover rounded-lg mb-4"
            />

            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-1">
              {selectedPost.title}
            </h1>
            <p className="text-gray-500 text-xs mb-4">{selectedPost.date}</p>

            <div
              className="text-gray-800 text-[15.5px] md:text-base leading-7 md:leading-8"
              dangerouslySetInnerHTML={{ __html: selectedPost.content }}
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default BlogKnowledgeCenter;


