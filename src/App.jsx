// src/App.js
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import WhatWeOffer from "./pages/WhatWeOffer";
import Contact from "./pages/Contact";
import Footer from "./pages/Footer";
import WhyChooseUs from "./pages/WhyChooseUs";
import ProjectGallery from "./pages/ProjectGallery";
import ClientTestimonials from "./pages/ClientTestimonials";
import IndustriesWeServe from "./pages/IndustriesWeServe";
import StatsAchievements from "./pages/StatsAchievements";
import FloatingCTAButton from "./pages/FloatingCTAButton";
import BlogKnowledgeCenter from "./pages/BlogKnowledgeCenter";

export default function App() {
  return (
    <>
      <Navbar />
      
      <div id="home"><Home /></div>
      <div id="about"><About /></div>
      <div id="services"><Services /></div>

      {/* Below sections will be visible on scroll, not linked in Navbar */}
      <WhatWeOffer />
      <WhyChooseUs />
      <ClientTestimonials />
      
      <StatsAchievements />  
      <ProjectGallery />
      
      <IndustriesWeServe />
      
      <BlogKnowledgeCenter />
      
      <div id="contact"><Contact /></div>
      
      <Footer />
      <FloatingCTAButton />
    </>
  );
}
