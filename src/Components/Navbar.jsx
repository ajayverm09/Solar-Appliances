// Navbar.jsx
import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import { Link as RouterLink } from "react-router-dom";

// Motion-enabled Link
const MotionLink = motion(RouterLink);

const Navbar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  // Links
  const leftLinks = ["/", "/about"];
  const rightLinks = ["/blogs", "/contact"];
  const nameMap = {
    "/": "Home",
    "/about": "About Us",
    "/blogs": "Blogs",
    "/contact": "Contact Us",
  };

  const isActive = (path) => location.pathname === path;

  // Animation variants for mobile menu
  const menuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1 },
    }),
  };

  return (
    <header className="w-full bg-white shadow fixed top-0 left-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Left links (desktop) */}
          <div className="hidden md:flex space-x-6">
            {leftLinks.map((path, i) => (
              <RouterLink
                key={i}
                to={path}
                className={`font-semibold ${
                  isActive(path)
                    ? "text-red-500"
                    : "hover:underline hover:text-red-500"
                }`}
              >
                {nameMap[path]}
              </RouterLink>
            ))}
          </div>

          {/* Logo */}
          <div className="flex flex-col items-center flex-shrink-0">
            <img
              src="https://www.venushomeappliances.com/storage/app/product_settings/logo.png"
              alt="VENUS Logo"
              className="h-14 md:h-16"
            />
            <p className="text-center text-xs md:text-sm font-semibold text-gray-600 -mt-1">
              Hot Water Professionals
            </p>
          </div>

          {/* Right links (desktop) */}
          <div className="hidden md:flex space-x-6">
            {rightLinks.map((path, i) => (
              <RouterLink
                key={i}
                to={path}
                className={`font-semibold ${
                  isActive(path)
                    ? "text-red-500"
                    : "hover:text-red-500 hover:underline"
                }`}
              >
                {nameMap[path]}
              </RouterLink>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-gray-700 hover:text-red-500 focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile dropdown menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-white shadow-lg border-t"
        >
          <div className="px-4 pt-4 pb-6 space-y-4 text-center">
            {[...leftLinks, ...rightLinks].map((path, i) => (
              <MotionLink
                key={i}
                to={path}
                onClick={() => setIsOpen(false)}
                className={`block font-semibold ${
                  isActive(path) ? "text-red-500" : "hover:text-red-500"
                }`}
                custom={i}
                initial="hidden"
                animate="visible"
                variants={menuVariants}
              >
                {nameMap[path]}
              </MotionLink>
            ))}
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Navbar;
