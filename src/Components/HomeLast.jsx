// SolarAdvantage.jsx
import React from "react";
import { motion } from "framer-motion";

const SolarAdvantage = () => {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Animated Banner Image */}
      <motion.img
        src="https://www.venushomeappliances.com/storage/app/applicationFiles/solar-pv-home-bottom.jpg"
        alt="Venus SolarRoof Advantage"
        className="w-full h-[250px] sm:h-[350px] md:h-[500px] lg:h-[600px] object-cover"
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      />

      {/* Overlay (Optional for better text contrast) */}
      <div className="absolute inset-0 bg-black/20"></div>

      {/* Centered Content (Optional) */}
      <div className="absolute inset-0 flex items-center justify-center text-center">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-white text-2xl sm:text-3xl md:text-4xl font-bold drop-shadow-lg"
        >
          The Venus SolarRoof Advantage
        </motion.h2>
      </div>
    </section>
  );
};

export default SolarAdvantage;
