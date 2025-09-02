// ContactBanner.jsx
import React from "react";
import { motion } from "framer-motion";

const ContactBanner = () => {
  return (
    <section
      className="relative w-full h-[50vh] sm:h-[65vh] md:h-[80vh] lg:h-screen bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "url('https://www.venushomeappliances.com/storage/app/applicationFiles/20210127122704ciontact-us-banner.jpg')",
      }}
    >
      {/* Dark overlay for better contrast */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Animated Content */}
      <div className="relative z-10 flex items-center justify-center h-full px-4">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center drop-shadow-lg"
        >
          Contact Us
        </motion.h1>
      </div>
    </section>
  );
};

export default ContactBanner;
