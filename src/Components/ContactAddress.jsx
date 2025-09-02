import { useState } from "react";
import { motion } from "framer-motion";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFax } from "react-icons/fa";

const branchOffices = [
  {
    city: "BANGALORE",
    address: `Venus Home Appliances Pvt Ltd
7/1, 3rd Main, 12th Cross
(opp: S.B.I) Wilson Garden,
Bangalore - 560030,
Karnataka.`,
  },
  {
    city: "MUMBAI",
    address: `Venus Home Appliances Pvt Ltd
Office No.404, 'D' Wing, 4th Floor,
Neelkanth Business Park,
Nathani Road, Vidyavihar (W), Mumbai - 400086,
Maharashtra.`,
  },
  {
    city: "CHENNAI",
    address: `Venus Home Appliances Pvt Ltd
No. 18, 1st & 2nd Floors,
1st Link Road, Nehru Nagar,
Kottivakkam (OMR), Chennai - 600041,
Tamil Nadu, India.`,
  },
  {
    city: "KOLKATA",
    address: `Venus Home Appliances Pvt Ltd
Nahar Park, Block - A (Commercial),
No 45/4A Chakraberia Road (South)
Kolkata - 700025,
West Bengal.`,
  },
  {
    city: "HYDERABAD",
    address: `Venus Home Appliances Pvt Ltd
B3 Ida Uppal,
Ranga Reddy Dist Telangana
Hyderabad - 500039,
Telangana.`,
  },
  {
    city: "MADURAI",
    address: `Venus Home Appliances Pvt Ltd
No.265 J/5, Bypass Road,
Bethaniyapuram,
Madurai - 625010,
Tamil Nadu.`,
  },
  {
    city: "COIMBATORE",
    address: `Venus Home Appliances Pvt Ltd
H NO 8-2-82/4,
16, Srinath Layout back side-1,
Alwin Nagar, ByPass Road, Chungam,
Coimbatore - 641045,
Tamil Nadu.`,
  },
  {
    city: "VIJAYAWADA",
    address: `Venus Home Appliances Pvt Ltd
D.NO. 76-18-11,
Plot NO-11, IRON Complex,
Bhavanipuram, Vijayawada - 520012,
Andhra Pradesh.`,
  },
  {
    city: "JAMMU",
    address: `Venus Home Appliances Pvt Ltd
Karam Complex, Near Police Post,
Rani Talab Road,
Digiana - 180010,
Jammu.`,
  },
  {
    city: "ERNAKULAM",
    address: `Venus Home Appliances Pvt Ltd
No.: 22/701F, Crescent Villa,
HMT P.O, Kalamassery,
Ernakulam - 683503,
Kerala.`,
  },
  {
    city: "CHANDIGARH",
    address: `Venus Home Appliances Pvt Ltd
Plot no. 520/1, Railway Road
Near Guru Nanak Dharmkanta, Village Daria,
UT Chandigarh
Chandigarh - 160101,
Punjab.`,
  },
  {
    city: "GUWAHATI",
    address: `Venus Home Appliances Pvt Ltd
Jain House, Opp Mahindra Showroom
G.S. Road, Ganeshguri Dispur,
Guwahati - 781005,
Assam.`,
  },
  {
    city: "JAIPUR",
    address: `Venus Home Appliances Pvt Ltd
H1-626 B, Road No. 6,
Vishwa Karma Industrial Area,
Jaipur - 302013,
Rajasthan.`,
  },
  {
    city: "INDORE",
    address: `Venus Home Appliances Pvt Ltd
Opposite Lasudia Police Station Lasudia Chowk, Plot No. 89,
Singhal Compound, Dewas Naka,
Indore - 452010,
Madhya Pradesh.`,
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const ContactSection = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredOffices = branchOffices.filter((office) =>
    office.city.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section className="py-10 px-4 bg-gray-50 text-gray-800">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.h2
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold text-center mb-10"
        >
          Contact Us
        </motion.h2>

        {/* Registered + Central + Delhi */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Registered + Central */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Registered */}
            <div>
              <div className="flex items-center gap-2 text-lg font-bold mb-2">
                <FaMapMarkerAlt className="text-blue-600" />
                REGISTERED OFFICE & FACTORY : TUTICORIN
              </div>
              <p className="text-gray-700 leading-relaxed">
                Venus Home Appliances Pvt Ltd <br />
                5/54-A, Senthilampannai <br />
                Tuticorin - 628 103 <br />
                Tuticorin District <br />
                Tamil Nadu, India.
              </p>
            </div>

            {/* Central Marketing */}
            <div>
              <div className="flex items-center gap-2 text-lg font-bold mb-2">
                <FaMapMarkerAlt className="text-blue-600" />
                CENTRAL MARKETING OFFICE : CHENNAI
              </div>
              <p className="text-gray-700 leading-relaxed">
                Venus Home Appliances Pvt Ltd <br />
                No. 18, 1st &amp; 2nd Floors <br />
                1st Link Road, Nehru Nagar <br />
                Kottivakkam (OMR), Chennai - 600041 <br />
                Tamil Nadu, India.
              </p>

              <div className="mt-4 space-y-1 text-gray-700">
                <p className="flex items-center gap-2">
                  <FaPhone className="text-blue-600" /> Phone: +91-044-3554 6900
                </p>
                <p className="flex items-center gap-2">
                  <FaFax className="text-blue-600" /> Fax: +91-044-43401525
                </p>
                <p className="flex items-center gap-2">
                  <FaPhone className="text-blue-600" /> Customer Care: 08144666999
                </p>
                <p className="flex items-center gap-2">
                  <FaEnvelope className="text-blue-600" />{" "}
                  customercare@venushomeappliances.com
                </p>
                <p className="flex items-center gap-2">
                  <FaEnvelope className="text-blue-600" />{" "}
                  enquiry@venushomeappliances.com
                </p>
              </div>
            </div>
          </motion.div>

          {/* Delhi Office */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div>
              <div className="flex items-center gap-2 text-lg font-bold mb-2">
                <FaMapMarkerAlt className="text-blue-600" />
                BRANCH OFFICE : NEW DELHI
              </div>
              <p className="text-gray-700 leading-relaxed">
                Venus Home Appliances Pvt Ltd <br />
                AB-8, First Floor <br />
                Safdarjung Enclave <br />
                Opposite to Indian Bank <br />
                New Delhi - 110029.
              </p>
            </div>

            <motion.div
              variants={fadeInUp}
              className="rounded-lg overflow-hidden shadow-md"
            >
              <img
                src="https://www.venushomeappliances.com/storage/app/applicationFiles/20210127123602map-location.jpg"
                alt="New Delhi Office Map"
                className="w-full h-64 object-cover"
              />
            </motion.div>
          </motion.div>
        </div>

        {/* Search */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-12 mb-6 max-w-md mx-auto"
        >
          <input
            type="text"
            placeholder="Search by city name (e.g., Bangalore)"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full border border-gray-300 px-4 py-2 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </motion.div>

        {/* Branch Offices */}
        <motion.div
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: { staggerChildren: 0.15 },
            },
          }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredOffices.map((office, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="p-5 border rounded-lg shadow-sm hover:shadow-md transition bg-white"
            >
              <div className="flex items-center gap-2 text-lg font-bold mb-2 text-gray-900">
                <FaMapMarkerAlt className="text-blue-600" />
                {office.city}
              </div>
              <p className="text-gray-700 whitespace-pre-line leading-relaxed">
                {office.address}
              </p>
            </motion.div>
          ))}

          {filteredOffices.length === 0 && (
            <p className="text-center col-span-full text-gray-500">
              No branch offices found for "{searchQuery}"
            </p>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
