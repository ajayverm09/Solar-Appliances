// src/components/Footer.jsx
import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaWhatsapp,
} from "react-icons/fa";

export default function Footer() {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <footer className="bg-white text-gray-800 text-sm border-t border-gray-300">
      {/* Links Section */}
      <motion.div
        className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {/* MENU */}
        <motion.div variants={fadeUp}>
          <h3 className="font-bold mb-3">MENU</h3>
          <ul className="space-y-2">
            <li className="hover:text-red-500 cursor-pointer">About us</li>
            <li className="hover:text-red-500 cursor-pointer">Contact us</li>
            <li className="hover:text-red-500 cursor-pointer">Products</li>
            <li className="hover:text-red-500 cursor-pointer">Media</li>
            <li className="hover:text-red-500 cursor-pointer">Csr</li>
            <li className="hover:text-red-500 cursor-pointer">Support</li>
          </ul>
        </motion.div>

        {/* CUSTOMER SERVICE */}
        <motion.div variants={fadeUp}>
          <h3 className="font-bold mb-3">CUSTOMER SERVICE</h3>
          <ul className="space-y-2">
            <li className="hover:text-red-500 cursor-pointer">
              Electric water heater FAQs
            </li>
            <li className="hover:text-red-500 cursor-pointer">
              Solar water heater FAQs
            </li>
            <li className="hover:text-red-500 cursor-pointer">Heatpump FAQs</li>
            <li className="hover:text-red-500 cursor-pointer">Certification</li>
            <li className="hover:text-red-500 cursor-pointer">
              Product range downloads
            </li>
            <li className="hover:text-red-500 cursor-pointer">
              Model Selection Guide
            </li>
          </ul>
        </motion.div>

        {/* QUICK LINKS */}
        <motion.div variants={fadeUp}>
          <h3 className="font-bold mb-3">QUICK LINKS</h3>
          <ul className="space-y-2">
            <li className="hover:text-red-500 cursor-pointer">
              Terms and Condition
            </li>
            <li className="hover:text-red-500 cursor-pointer">
              How to choose a water heater
            </li>
            <li className="hover:text-red-500 cursor-pointer">
              Power Consumption
            </li>
            <li className="hover:text-red-500 cursor-pointer">
              Tankless Calculator
            </li>
            <li className="hover:text-red-500 cursor-pointer">
              Solar Savings Calculator
            </li>
            <li className="hover:text-red-500 cursor-pointer">
              Solar Installations
            </li>
          </ul>
        </motion.div>

        {/* POLICIES */}
        <motion.div variants={fadeUp}>
          <h3 className="font-bold mb-3">POLICIES</h3>
          <ul className="space-y-2">
            <li className="hover:text-red-500 cursor-pointer">
              Whistle-blower-policy
            </li>
            <li className="hover:text-red-500 cursor-pointer">Terms of Use</li>
            <li className="hover:text-red-500 cursor-pointer">
              Privacy Policy
            </li>
            <li className="hover:text-red-500 cursor-pointer">Csr Policy</li>
            <li className="hover:text-red-500 cursor-pointer">
              Return,Refund & Cancellation Policy
            </li>
            <li className="hover:text-red-500 cursor-pointer">
              Shipping Policy
            </li>
          </ul>
        </motion.div>
      </motion.div>

      {/* Address Section */}
      <motion.div
        className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-8 text-sm border-t"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <motion.div variants={fadeUp}>
          <h4 className="font-bold">Manufacturer / Importer</h4>
          <p className="mt-2">Venus Home Appliances Pvt Ltd</p>

          <h4 className="mt-4 font-bold">Registered Office & Factory:</h4>
          <p className="mt-2">
            Venus Home Appliances Pvt Ltd <br />
            5/54-A, Senthilampannai, <br />
            Tuticorin - 628103 Tuticorin District, <br />
            Tamilnadu, India.
          </p>
        </motion.div>

        <motion.div variants={fadeUp}>
          <h4 className="font-bold">Central Marketing Office</h4>
          <p className="mt-2">
            Venus Home Appliances Pvt Ltd <br />
            No.18, 1st & 2nd Floors, 1st Link Road, Nehru Nagar <br />
            Kottivakkam (OMR), <br />
            Chennai-600041, Tamil Nadu, India. <br />
            Phone: +91-044 - 3554 6900 <br />
            Fax: +91-044 - 43401525
          </p>
        </motion.div>

        <motion.div variants={fadeUp}>
          <h4 className="font-bold">For Consumer Complaint, Contact:</h4>
          <p className="mt-2">
            The Customer Relation Officer <br />
            Venus Home Appliances Pvt Ltd <br />
            No. 18, 1st & 2nd Floors, 1st Link Road, Nehru Nagar, <br />
            Kottivakkam (OMR), <br />
            Chennai-600041, Tamil Nadu, India. <br />
            Customer Care Number: 08144666999 <br />
            customercare@venushomeappliances.com <br />
            enquiry@venushomeappliances.com
          </p>
        </motion.div>
      </motion.div>

      {/* Bottom Strip */}
      <motion.div
        className="bg-black text-white text-xs py-4 px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Copyright */}
          <motion.div
            className="flex items-center text-center md:text-left"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <span>
              © 2025
              <img
                src="https://www.venushomeappliances.com/storage/app/product_settings/logo.png"
                alt="VENUS Logo"
                className="inline h-5 mx-2 align-middle"
              />
              All Rights Reserved.
            </span>
          </motion.div>

          {/* Social Icons */}
          <motion.div
            className="flex items-center gap-4"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <a href="#" className="text-white text-lg hover:text-gray-400">
              <FaFacebookF />
            </a>
            <a href="#" className="text-white text-lg hover:text-gray-400">
              <FaTwitter />
            </a>
            <a href="#" className="text-white text-lg hover:text-gray-400">
              <FaInstagram />
            </a>
            <a href="#" className="text-white text-lg hover:text-gray-400">
              <FaYoutube />
            </a>
            <a
              href="https://wa.me/919884064999"
              className="text-green-500 text-lg hover:text-green-400"
            >
              <FaWhatsapp />
            </a>
          </motion.div>
        </div>
      </motion.div>
    </footer>
  );
}
