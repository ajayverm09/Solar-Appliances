import React from "react";
import { useParams } from "react-router-dom";
import { blogs } from "../Components/BlogsData";
import { motion } from "framer-motion";

const BlogDetails = () => {
  const { id } = useParams();
  const blog = blogs.find((b) => b.id === parseInt(id));

  if (!blog) {
    return (
      <motion.h2
        className="text-center py-20 text-xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        Blog not found.
      </motion.h2>
    );
  }

  // Motion variants
  const heroVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1 } },
  };

  const contentVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.3 } },
  };

  return (
    <section className="w-full bg-gray-50">
      {/* Hero Section */}
      <motion.div
        className="relative w-full h-64 sm:h-80 md:h-[450px]"
        initial="hidden"
        animate="visible"
        variants={heroVariants}
      >
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center px-4">
          <motion.h1
            className="text-2xl sm:text-3xl md:text-5xl font-bold text-white text-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.3 } }}
          >
            {blog.title}
          </motion.h1>
        </div>
      </motion.div>

      {/* Content Section */}
      <motion.div
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14"
        initial="hidden"
        animate="visible"
        variants={contentVariants}
      >
        <p className="text-base sm:text-lg leading-relaxed text-gray-700 whitespace-pre-line">
          {blog.content}
        </p>
      </motion.div>
    </section>
  );
};

export default BlogDetails;
