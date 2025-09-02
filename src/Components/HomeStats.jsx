// Stats.jsx
import React from "react";
import CountUp from "react-countup";
import { motion } from "framer-motion";

const Stats = () => {
  const stats = [
    { id: 1, value: 1000, label: "Happy Customers" },
    { id: 2, value: 1000, label: "Projects Completed" },
    { id: 3, value: 15, label: "Years of Experience" },
    { id: 4, value: 1000, label: "Total Capacity Installed" },
  ];

  return (
    <section className="w-full bg-[#F0F5F9] py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.3, duration: 0.8 }}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-lg shadow-md p-8 flex flex-col items-center justify-center hover:shadow-lg transition-all duration-300"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-black">
                <CountUp end={stat.value} duration={3} separator="," />+
              </h2>
              <p className="mt-3 text-lg font-medium text-red-600">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
