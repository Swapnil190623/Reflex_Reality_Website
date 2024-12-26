

// About us Type 1 

import React from "react";
import { motion } from "framer-motion";
import {
  CheckCircleIcon,
  BoltIcon, // Updated icon name
  GlobeAltIcon,
} from "@heroicons/react/24/outline"; // Ensure using Heroicons v2

const features = [
  {
    id: 1,
    title: "Innovative Solutions",
    description:
      "We provide cutting-edge solutions that drive success and foster growth for your business.",
    icon: <BoltIcon className="h-6 w-6 text-blue-600" />,
  },
  {
    id: 2,
    title: "Global Reach",
    description:
      "Our services are available worldwide, ensuring you receive support no matter where you are.",
    icon: <GlobeAltIcon className="h-6 w-6 text-blue-600" />,
  },
  {
    id: 3,
    title: "Customer Focused",
    description:
      "We prioritize our customers' needs, delivering personalized experiences and exceptional service.",
    icon: <CheckCircleIcon className="h-6 w-6 text-blue-600" />,
  },
];

const AboutUs = () => {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col-reverse md:flex-row items-center md:gap-x-16">
          {/* Text Content */}
          <motion.div
            className="md:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-4">
              About Us
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              We are a team of dedicated professionals committed to delivering
              top-notch services that cater to your business needs. Our
              expertise spans across various domains, ensuring that we provide
              comprehensive solutions that drive growth and success.
            </p>
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature) => (
                <motion.div
                  key={feature.id}
                  className="flex items-start hover:bg-gray-100 dark:hover:bg-gray-800 p-4 rounded-lg transition-colors"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: feature.id * 0.2 }}
                  viewport={{ once: true, amount: 0.5 }}
                >
                  <div className="flex-shrink-0">{feature.icon}</div>
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      {feature.title}
                    </h3>
                    <p className="mt-1 text-gray-600 dark:text-gray-400">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
            {/* Optional: Add a Call-to-Action Button */}
            <a
              href="#contact"
              className="mt-6 inline-block bg-blue-600 text-white px-6 py-3 rounded-md shadow hover:bg-blue-700 transition-colors"
            >
              Get in Touch
            </a>
          </motion.div>

          {/* Image */}
          <motion.div
            className="md:w-1/2 mb-8 md:mb-0"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <img
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              alt="About Us"
              className="rounded-lg shadow-lg w-full h-auto"
              loading="lazy" // Optional: Adds lazy loading
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
