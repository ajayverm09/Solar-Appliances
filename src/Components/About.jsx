import React from "react";
import { motion } from "framer-motion";

const AboutUsSection = () => {
  return (
    <section className="w-full bg-white py-12 sm:py-16 px-4 sm:px-6 md:px-12 lg:px-24">
      {/* Small Heading */}
      <motion.h3
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-sm sm:text-base md:text-lg font-semibold text-blue-700 tracking-widest uppercase mb-3 sm:mb-4 text-center"
      >
        About Us
      </motion.h3>

      {/* Main Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
        className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-black mb-4 sm:mb-6 text-center"
      >
        Manufacturers of electric water heaters for more than 60 years
      </motion.h2>

      {/* First Paragraph */}
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: true }}
        className="text-sm sm:text-base md:text-lg text-blue-800 max-w-4xl mx-auto mb-3 sm:mb-4 text-center"
      >
        <span className="font-semibold">VENUS HOME APPLIANCES (P) LTD.</span>,
        manufacturers of Venus Water Heaters for more than 60 years, is a market
        leader and pioneer in the water heater industry.
      </motion.p>

      {/* Second Paragraph */}
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        viewport={{ once: true }}
        className="text-sm sm:text-base md:text-lg text-blue-800 max-w-5xl mx-auto text-center"
      >
        The Company has also forayed into other home appliances - Fans, Oven
        Toaster Griller (OTG), Solar Water Heaters, Heatpump Water Heaters,
        Solar Power, Room Heaters, Air Coolers, and Irons. Our products stand
        for <span className="font-semibold">Quality, Reliability</span>, and{" "}
        <span className="font-semibold">Performance</span>.
      </motion.p>
    </section>
  );
};

export default AboutUsSection;
