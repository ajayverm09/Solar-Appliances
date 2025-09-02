// ContactForm.jsx
import React from "react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const ContactForm = () => {
  return (
    <section className="bg-[#12608c] text-white py-12 px-4">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10">
        {/* LEFT: Contact Info */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="space-y-6 flex flex-col justify-center"
        >
          <h2 className="text-2xl md:text-3xl font-semibold">
            We're here for you.
          </h2>
          <p className="text-sm">All your service concerns in one place.</p>

          <p className="text-4xl md:text-6xl font-bold">081446 66999</p>

          <div>
            <h3 className="text-red-400 text-2xl md:text-3xl font-bold mb-2">
              WARNING!
            </h3>
            <p className="text-base md:text-lg leading-relaxed">
              Avoid getting your Venus products serviced by third-party
              technicians. Always get your Venus products serviced by{" "}
              <strong>AUTHORISED</strong> service technicians by registering a
              Service Request through multiple channels like our Call Center
              Number <strong>081446 66999</strong>, WhatsApp number{" "}
              <strong>9686496499</strong>, Email ID{" "}
              <a
                href="mailto:customercare@venushomeappliances.com"
                className="underline"
              >
                customercare@venushomeappliances.com
              </a>
              , and website portal link{" "}
              <a
                className="underline"
                href="https://www.venushomeappliances.com/service-complaints.html"
                target="_blank"
                rel="noreferrer"
              >
                here
              </a>
              . VENUS HOME APPLIANCES will not be responsible for any disputes
              arising due to products being serviced by third-party technicians.
            </p>
          </div>
        </motion.div>

        {/* RIGHT: Contact Form */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
          className="bg-white text-black p-6 rounded-md shadow-md"
        >
          <form className="space-y-8">
            {/* Inquiry Section */}
            <div>
              <p className="font-semibold mb-4 text-xl">I am looking for...</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-4">
                {[
                  "Sales Related Query",
                  "Service Complaints",
                  "Supplier Enquiry",
                  "Distributor / Dealership Enquiry",
                  "Export Enquiry",
                  "Project Enquiry",
                  "Product Informations",
                  "AMC",
                ].map((item, i) => (
                  <label
                    key={i}
                    className="flex items-center text-sm sm:text-base space-x-2"
                  >
                    <input
                      type="radio"
                      name="inquiry"
                      className="accent-sky-600"
                    />
                    <span>{item}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Personal Details Section */}
            <div>
              <p className="font-semibold mb-4 text-xl">Personal Details</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { label: "Your Full Name", type: "text" },
                  { label: "Age", type: "text" },
                  { label: "Occupation", type: "text" },
                  { label: "Mobile Number", type: "text" },
                  { label: "Email", type: "email" },
                  { label: "State", type: "text" },
                  { label: "City", type: "text" },
                  { label: "Pincode", type: "text" },
                ].map((field, i) => (
                  <div key={i} className="flex flex-col text-sm">
                    <label className="mb-1">{field.label}</label>
                    <input
                      type={field.type}
                      placeholder={`${field.label} *`}
                      className="border p-2 rounded w-full"
                    />
                  </div>
                ))}
              </div>

              <div className="mt-4 flex flex-col text-sm">
                <label className="mb-1">Address</label>
                <textarea
                  placeholder="Address *"
                  className="border p-2 rounded w-full"
                  rows="2"
                />
              </div>

              <div className="mt-4 flex flex-col text-sm">
                <label className="mb-1">Remarks</label>
                <textarea
                  placeholder="Remarks *"
                  className="border p-2 rounded w-full"
                  rows="2"
                />
              </div>
            </div>

            {/* CAPTCHA */}
            <div className="border p-4 w-full flex justify-center items-center bg-gray-100 rounded">
              <span className="text-gray-500 text-sm">[reCAPTCHA here]</span>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 rounded w-full sm:w-auto transition duration-300"
            >
              SUBMIT
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactForm;
