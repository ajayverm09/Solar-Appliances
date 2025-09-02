import React from "react";
import { motion } from "framer-motion";

const BenefitsOnGrid = () => {
  const benefits = [
    {
      icon: "https://www.venushomeappliances.com/theme-assets/img/solar/ongrid1.png",
      title: "PAY ZERO FOR YOUR ELECTRICITY BILL",
      desc: "Install a system with recommended specifications to eliminate conventional power use.",
    },
    {
      icon: "https://www.venushomeappliances.com/theme-assets/img/solar/ongrid2.png",
      title: "GET PROTECTED AGAINST TARIFF HIKES",
      desc: "Ensure that rising electricity tariff hikes have practically zero impact on your budget.",
    },
    {
      icon: "https://www.venushomeappliances.com/theme-assets/img/solar/ongrid3.png",
      title: "EARN FROM YOUR IDLE ROOFTOP SPACES",
      desc: "Excess power is exported back to the grid and compensated by the Electricity Board.",
    },
    {
      icon: "https://www.venushomeappliances.com/theme-assets/img/solar/ongrid4.png",
      title: "REAP ACCELERATED DEPRECIATION BENEFIT",
      desc: "Eligible for accelerated depreciation from the first year.",
    },
  ];

  return (
    <section className="bg-white py-12 sm:py-16 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-900 mb-10 sm:mb-12"
        >
          Benefits of On Grid Solar System
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <img
              src="https://www.venushomeappliances.com/storage/app/applicationFiles/20250303082307solar-pv-05.jpg"
              alt="On Grid System"
              className="w-full max-w-md rounded-lg shadow-md"
            />
          </motion.div>

          {/* Right Benefits Grid */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.2 },
              },
            }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {benefits.map((item, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 40 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.6 }}
                whileHover={{ scale: 1.05 }}
                className="bg-blue-50 rounded-xl shadow-sm p-6 flex flex-col items-center text-center hover:shadow-lg transition-all duration-300"
              >
                <motion.img
                  src={item.icon}
                  alt={item.title}
                  className="w-12 h-12 mb-4 object-contain"
                  whileHover={{ rotate: 5, scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                />
                <h3 className="font-semibold text-base sm:text-lg mb-2 text-gray-800">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsOnGrid;
