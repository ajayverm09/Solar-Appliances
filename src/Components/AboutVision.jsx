import React from "react";
import { motion } from "framer-motion";

const VisionSection = () => {
  return (
    <section className="flex flex-col md:flex-row items-center md:items-stretch min-h-screen bg-[#FFFBF5] text-slate-800 overflow-hidden">
      {/* Left Side: Text */}
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
        className="w-full md:w-1/3 flex items-center justify-center p-8 md:p-12 lg:p-16"
      >
        <div className="max-w-lg">
          <motion.h2
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-blue-900 mb-6"
          >
            VISION
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-base md:text-lg leading-relaxed text-slate-700 text-justify"
          >
            To become the most preferred &amp; trusted brand in the global
            market for water heaters and other appliances by offering
            innovative, high quality, eco-friendly products and services.
          </motion.p>
        </div>
      </motion.div>

      {/* Right Side: Image */}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
        className="w-full md:w-2/3"
      >
        <img
          src="https://www.venushomeappliances.com/storage/app/applicationFiles/20210127120901about-vission.jpg"
          alt="Vision Background"
          className="object-cover w-full h-64 sm:h-96 md:h-full"
        />
      </motion.div>
    </section>
  );
};

export default VisionSection;
