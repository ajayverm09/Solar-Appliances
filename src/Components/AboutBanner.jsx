import React from "react";
import { motion } from "framer-motion";
import { FaPhoneAlt } from "react-icons/fa";

const AboutBanner = () => {
  return (
    <div
      className="relative w-full h-[280px] sm:h-[380px] md:h-[480px] lg:h-[580px] bg-cover bg-center"
      style={{
        backgroundImage: `url('https://www.venushomeappliances.com/storage/app/applicationFiles/20210818071913about-banner-(1).jpg')`,
      }}
    >
      {/* Overlay for contrast */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Contact Info Section with Animations */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="absolute right-4 sm:right-8 bottom-6 sm:bottom-8 text-white text-right z-10"
      >
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="flex items-center justify-end space-x-2"
        >
          <span className="text-lg sm:text-xl">
            <FaPhoneAlt />
          </span>
          <span className="text-base sm:text-lg font-semibold">Call Us</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-xl sm:text-2xl md:text-3xl font-bold mt-1"
        >
          081 4466 6999
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AboutBanner;
