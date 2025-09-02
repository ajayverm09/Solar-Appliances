// SolarHero.jsx
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const SolarHero = () => {
  // Background images
  const images = [
    "https://www.venushomeappliances.com/storage/app/applicationFiles/20250303081015solar-pv04.jpg",
    "https://www.venushomeappliances.com/storage/app/applicationFiles/20250303073407solar-pv-03.jpg",
    "https://www.venushomeappliances.com/storage/app/applicationFiles/20250303073326solar-pv-01.jpg",
    "https://www.venushomeappliances.com/storage/app/applicationFiles/20250303073345solar-pv-02.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-change every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="relative h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] w-full flex items-center justify-center text-center overflow-hidden">
      {/* Background Images with Crossfade */}
      <div className="absolute inset-0">
        <AnimatePresence>
          <motion.div
            key={currentIndex}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${images[currentIndex]})` }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2 }}
          />
        </AnimatePresence>
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 px-4 sm:px-8"
      >
        <div className="bg-black/40 backdrop-blur-sm px-6 sm:px-10 py-6 sm:py-10 rounded-2xl max-w-2xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-white text-2xl sm:text-3xl md:text-4xl font-medium mb-3"
          >
            Reduce Your Electricity
          </motion.h2>

          <motion.h1
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-white text-4xl sm:text-5xl md:text-6xl font-bold mb-4"
          >
            BILL
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="text-white text-lg sm:text-xl md:text-2xl"
          >
            With Rooftop Solar
          </motion.p>
        </div>
      </motion.div>
    </section>
  );
};

export default SolarHero;
