import React from "react";
import { motion } from "framer-motion";

const AboutSolarPower = () => {
  const cards = [
    {
      id: 1,
      img: "https://www.venushomeappliances.com/storage/app/applicationFiles/20241220121845solarpanne-homel.png",
      text: "Solar PV modules convert sunlight into energy and generate DC power during the day. DC power is supplied to the inverter which converts DC to AC power for domestic usage.",
    },
    {
      id: 2,
      img: "https://www.venushomeappliances.com/storage/app/applicationFiles/20241220121858solarpannel2-home.png",
      text: "Net meter is synchronized with solar on-grid and prioritizes utilizing solar power first, followed by grid power.",
    },
    {
      id: 3,
      img: "https://www.venushomeappliances.com/storage/app/applicationFiles/20241220121845solarpanne-homel.png",
      text: "The system reduces electricity usage from the grid and minimizes net payable amounts by adjusting excess solar power supplied back to the grid.",
    },
  ];

  return (
    <section className="bg-white py-12 sm:py-16 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-900 mb-10 sm:mb-12"
        >
          ABOUT SOLAR POWER
        </motion.h2>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {cards.map((card, index) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="bg-blue-50 rounded-2xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-xl transition-all duration-300"
            >
              <motion.img
                src={card.img}
                alt="Solar Panel"
                className="w-full h-40 sm:h-48 object-contain mb-6 rounded-lg"
                whileHover={{ rotate: 2, scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                {card.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSolarPower;
