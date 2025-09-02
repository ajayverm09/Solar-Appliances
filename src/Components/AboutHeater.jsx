import React from "react";
import { motion } from "framer-motion";

const WaterHeaterSection = () => {
  return (
    <section className="w-full bg-white py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold text-center mb-10 md:mb-16 text-[#1d1d1f] leading-tight"
        >
          60 Years of Innovation and Trust in Water Heating
        </motion.h2>

        {/* ---------- Section 1 ---------- */}
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16 mb-16">
          {/* Left - Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="md:w-1/2 text-[#1d1d1f] text-base md:text-lg leading-relaxed"
          >
            <p className="mb-4">
              Venus Home Appliances has been a pioneer in water heating solutions for over 60 years. As makers of the trusted Venus water heaters, we've led the industry with cutting-edge technology.
            </p>
            <p className="mb-4">
              Over the decades, we've expanded our offering, becoming a reliable name in households across the globe.
            </p>
            <p>
              Our focus on durability and customer satisfaction continues to drive our success.
            </p>
          </motion.div>

          {/* Right - Video */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="md:w-1/2 w-full"
          >
            <div className="relative w-full pb-[56.25%]">
              {/* 16:9 aspect ratio */}
              <iframe
                className="absolute top-0 left-0 w-full h-full rounded-xl shadow-lg"
                src="https://www.youtube.com/embed/OAMUVBQ1FlE"
                title="Venus Splash Pro Smart - Ultimate Bathing Experience"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </motion.div>
        </div>

        {/* ---------- Section 2 (Zigzag) ---------- */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-10 md:gap-16">
          {/* Right - Text */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="md:w-1/2 text-[#1d1d1f] text-base md:text-lg leading-relaxed"
          >
            <p className="mb-4">
              Our advanced range of smart water heaters redefines convenience and energy efficiency.
            </p>
            <p className="mb-4">
              With smart controls, faster heating, and eco-friendly designs, Venus continues to set new benchmarks in the industry.
            </p>
            <p>
              Every product reflects our unwavering commitment to quality and innovation.
            </p>
          </motion.div>

          {/* Left - Video */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="md:w-1/2 w-full"
          >
            <div className="relative w-full pb-[56.25%]">
              {/* 16:9 aspect ratio */}
              <iframe
                className="absolute top-0 left-0 w-full h-full rounded-xl shadow-lg"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ" // replace with actual second video link
                title="Venus Innovation Series"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WaterHeaterSection;
