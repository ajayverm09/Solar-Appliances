// MoreSupport.jsx
import React from "react";
import {
  FaMapMarkerAlt,
  FaQuestionCircle,
  FaFileDownload,
  FaTools,
  FaRegEdit,
} from "react-icons/fa";
import { motion } from "framer-motion";

const MoreSupport = () => {
  const cards = [
    {
      icon: <FaMapMarkerAlt className="text-red-500 text-5xl mb-4" />,
      title: "Dealer/Service Locator",
      button: "TAKE ME THERE",
    },
    {
      icon: <FaQuestionCircle className="text-red-500 text-5xl mb-4" />,
      title: "Frequently Asked Questions",
      button: "TAKE ME THERE",
    },
    {
      icon: <FaFileDownload className="text-red-500 text-5xl mb-4" />,
      title: "Download Catalogues",
      button: "TAKE ME THERE",
    },
    {
      icon: <FaTools className="text-red-500 text-5xl mb-4" />,
      title: "Service Charges",
      button: "VIEW NOW",
    },
    {
      icon: <FaRegEdit className="text-red-500 text-5xl mb-4" />,
      title: "Blogs",
      button: "VIEW NOW",
    },
  ];

  return (
    <section className="bg-[#E6F2F7] py-12 px-4 w-full">
      <div className="max-w-7xl mx-auto text-center">
        {/* Section Title */}
        <motion.h2
          className="text-3xl font-bold mb-10"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          MORE SUPPORT
        </motion.h2>

        {/* Responsive Grid with Animations */}
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              className="bg-white border-2 border-blue-500 p-6 rounded-lg flex flex-col items-center justify-between text-center shadow hover:shadow-xl transition-transform"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              {card.icon}
              <h3 className="text-lg font-medium mb-4">{card.title}</h3>
              <motion.button
                whileHover={{ scale: 1.1 }}
                className="border border-blue-500 text-blue-500 px-4 py-2 rounded font-medium hover:bg-blue-50 transition"
              >
                {card.button}
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MoreSupport;
