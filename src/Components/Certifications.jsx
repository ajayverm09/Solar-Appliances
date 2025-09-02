// Certifications.jsx
import React from "react";
import { motion } from "framer-motion";

const Certifications = () => {
  return (
    <section
      className="relative w-full min-h-screen bg-cover bg-center flex items-center"
      style={{
        backgroundImage:
          "url('https://www.venushomeappliances.com/storage/app/applicationFiles/20210127121608certifications-img.jpg')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 w-full px-6 md:px-12 lg:px-20 py-12 flex flex-col justify-center">
        <motion.h2
          className="text-3xl md:text-5xl font-bold text-[#24668F] mb-6 leading-tight drop-shadow-lg"
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          CERTIFICATIONS <br /> / AWARDS
        </motion.h2>

        <motion.p
          className="text-base md:text-lg font-medium leading-relaxed text-white max-w-3xl"
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <span className="font-bold">VENUS HOME APPLIANCES</span> is the first
          water heater company in India to be awarded the prestigious ISI
          certification for its range of water heaters with vitreous enamel
          tanks. Over the years, the company has continued to receive numerous
          recognitions and certifications for innovation, quality, and
          excellence in manufacturing.
        </motion.p>
      </div>
    </section>
  );
};

export default Certifications;
