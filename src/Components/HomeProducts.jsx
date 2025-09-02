// Products.jsx
import React from "react";
import { motion } from "framer-motion";

const Products = () => {
  const products = [
    {
      id: 1,
      title: "On Grid",
      img: "https://www.venushomeappliances.com/storage/app/applicationFiles/ongrid-home.png",
      link: "#",
    },
    {
      id: 2,
      title: "Off Grid",
      img: "https://www.venushomeappliances.com/storage/app/applicationFiles/offgrid-home.png",
      link: "#",
    },
  ];

  return (
    <section className="w-full bg-white py-12 sm:py-16">
      {/* Heading */}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12">
        Our Products
      </h2>

      {/* Product Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4 sm:px-8 md:px-16 lg:px-24">
        {products.map((product, index) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.3, duration: 0.8 }}
            whileHover={{ scale: 1.05 }}
            className="flex flex-col items-center bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-6"
          >
            {/* Product Image */}
            <img
              src={product.img}
              alt={product.title}
              className="w-full max-w-[320px] h-auto object-contain mb-6"
            />

            {/* Button */}
            <a
              href={product.link}
              className="px-6 py-2 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition"
            >
              {product.title}
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Products;
