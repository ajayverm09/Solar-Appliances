import React from "react";
import { motion } from "framer-motion";

const ValueSection = () => {
  return (
    <section
      className="relative w-full h-screen bg-cover bg-center flex items-center"
      style={{
        backgroundImage:
          'url("https://www.venushomeappliances.com/storage/app/applicationFiles/20210127121319value.jpg")',
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-end w-full h-full px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-2xl text-right"
        >
          <motion.h2
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-3xl md:text-5xl font-bold text-white mb-6"
          >
            VALUE
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-base md:text-lg leading-relaxed text-white"
          >
            Quality has always been the driving force for the company. The
            company is committed to providing customers with products of quality
            and reliability with continued efforts to innovate and improve on
            the existing products to suit the needs of the customers. The
            company strongly stands for values such as Ethics, Honesty and
            Integrity.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default ValueSection;
