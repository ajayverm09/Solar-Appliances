// Blogs.jsx
import React from "react";
import { Link } from "react-router-dom";
import { blogs } from "../Components/BlogsData";
import { motion } from "framer-motion";

const BlogSection = () => {
  if (!blogs || blogs.length === 0) {
    return (
      <section className="w-full bg-gray-50 py-12">
        <p className="text-center text-gray-500">No blogs available.</p>
      </section>
    );
  }

  return (
    <section className="w-full bg-gray-50">
      {/* Top Banner */}
      <div className="w-full">
        <img
          src="https://www.venushomeappliances.com/storage/app/applicationFiles/20211214120416faq.jpg"
          alt="Blogs Banner"
          className="w-full h-64 sm:h-80 md:h-96 object-cover"
        />
      </div>

      {/* Blogs Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
          Our Blogs
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <motion.div
              key={blog.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Link
                to={`/blogs/${blog.id}`}
                className="bg-white rounded-lg shadow-md hover:shadow-lg transition overflow-hidden flex flex-col h-full"
              >
                {/* Blog Image */}
                {blog.image ? (
                  <img
                    src={blog.image}
                    alt={blog.title || "Blog Image"}
                    className="w-full h-48 sm:h-56 md:h-64 object-cover"
                  />
                ) : (
                  <div className="w-full h-48 sm:h-56 md:h-64 bg-gray-200 flex items-center justify-center text-gray-500">
                    No Image
                  </div>
                )}

                {/* Blog Content */}
                <div className="p-5 flex flex-col flex-grow">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    {blog.title || "Untitled Blog"}
                  </h3>
                  <p className="text-gray-600 text-sm flex-grow">
                    {blog.description
                      ? blog.description.length > 100
                        ? blog.description.slice(0, 100) + "..."
                        : blog.description
                      : "No description available."}
                  </p>
                  <span className="mt-4 inline-block text-red-500 font-medium hover:underline">
                    Read More →
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
