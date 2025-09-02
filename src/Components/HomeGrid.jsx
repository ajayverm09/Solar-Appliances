// OnGridSystem.jsx
import React from "react";
import { motion } from "framer-motion";

const OnGridSystem = () => {
  return (
    <section
      className="relative bg-cover bg-center w-full"
      style={{
        backgroundImage:
          "url('https://www.venushomeappliances.com/storage/app/applicationFiles/20250303073407solar-pv-03.jpg')",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 text-white">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12"
        >
          What is a Solar On-Grid System?
        </motion.h2>

        {/* Two-column layout */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-white/90 text-gray-900 rounded-2xl shadow-lg p-6 sm:p-10"
        >
          {/* Left - Image */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <img
              src="https://www.venushomeappliances.com/theme-assets/img/solar/111.png"
              alt="On Grid System Diagram"
              className="w-full max-w-sm sm:max-w-md rounded-lg shadow-md"
            />
          </motion.div>

          {/* Right - Text */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
          >
            <p className="mb-6 text-sm sm:text-base leading-relaxed text-justify">
              An <span className="font-semibold">On-Grid System</span> is a Solar
              Power Generation System (SPGS) where the solar photovoltaic system
              is connected directly to the utility grid. The electricity produced
              by the system is supplied to the grid or electrical service provider
              and is also used to run household or industrial appliances. These
              systems are cost-effective, require less maintenance, and are easy
              to install.
            </p>

            <ul className="list-decimal list-inside space-y-2 text-sm sm:text-base font-medium">
              <li>Solar PV Modules</li>
              <li>Mounting Structures</li>
              <li>Solar Inverter</li>
              <li>Monitoring Device</li>
              <li>Net Meter</li>
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default OnGridSystem;
