import React from "react";
import { motion } from "framer-motion";

const Products = () => {
  return (
    <section
      className="relative w-full h-screen bg-cover bg-center flex items-center"
      style={{
        backgroundImage:
          "url('https://www.venushomeappliances.com/storage/app/applicationFiles/20210127121441product-abt.jpg')",
      }}
    >
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl px-6 md:px-12 text-white">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-3xl md:text-5xl font-bold mb-6"
        >
          PRODUCTS
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          className="text-base md:text-lg leading-relaxed"
        >
          The VENUS Products portfolio includes the widest range of water
          heaters — Instant, Storage, Tankless, Solar, and Heat Pumps. We also
          have a full range of fans, room heaters, air coolers, and irons. We
          are continuously adding innovative new appliances to provide comfort
          and ease of living to our customers.
        </motion.p>
      </div>
    </section>
  );
};

export default Products;
