import React from "react";
import { motion } from "framer-motion";

const WhyVenusSolar = () => {
  const features = [
    {
      icon: "https://www.venushomeappliances.com/theme-assets/img/solar/venus1.png",
      title: "END TO END SOLUTIONS FOR COMPLETE SYSTEM",
      desc: "We take care of everything from installation to maintenance.",
    },
    {
      icon: "https://www.venushomeappliances.com/theme-assets/img/solar/venus3.png",
      title: "EFFICIENT AND EFFECTIVE CUSTOMER SUPPORT",
      desc: "We ensure best customer support post installation providing you complete peace of mind.",
    },
    {
      icon: "https://www.venushomeappliances.com/theme-assets/img/solar/venus2.png",
      title: "QUICK AND QUALITY INSTALLATION",
      desc: "We have qualified installers for safe and fast setup.",
    },
    {
      icon: "https://www.venushomeappliances.com/theme-assets/img/solar/venus4.png",
      title: "RELIABLE LONG-LASTING SYSTEM",
      desc: "Solar Panel - performance guarantee of 25 years; Inverter - 5 years guarantee; Other parts - 1 year guarantee.",
    },
  ];

  // Motion variants
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 0.5 },
    }),
  };

  return (
    <section className="w-full bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-12">
          Why Venus Solar?
        </h2>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10">
          {features.map((item, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              animate="visible"
              variants={cardVariants}
              className="flex items-start space-x-4 bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all"
            >
              {/* Icon */}
              <div className="flex-shrink-0">
                <img src={item.icon} alt={item.title} className="w-16 h-16" />
              </div>

              {/* Content */}
              <div>
                <h3 className="font-semibold text-lg text-gray-800 mb-2 leading-snug">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyVenusSolar;
