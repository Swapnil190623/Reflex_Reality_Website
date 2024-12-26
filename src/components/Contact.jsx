


// import React from "react";

// const Contact = () => {
//   return (
//     <>
//       <section className="relative max-w-[1200px]   m-auto z-10 overflow-hidden bg-white py-20 dark:bg-dark lg:py-[120px]">
//         <div className="container">
//           <div className="-mx-4 flex flex-wrap lg:justify-between">
//             {/* Contact Information Section */}
//             <div className="w-full px-4 lg:w-1/2 xl:w-6/12">
//               <div className="mb-12 max-w-[570px] lg:mb-0">
//                 <span className="mb-4 block text-base font-semibold text-primary">
//                   Contact Us
//                 </span>
//                 <h2 className="mb-6 text-[32px] font-bold uppercase text-dark dark:text-white sm:text-[40px] lg:text-[36px] xl:text-[40px]">
//                   GET IN TOUCH WITH US
//                 </h2>
//                 <p className="mb-9 text-base leading-relaxed text-body-color dark:text-dark-6">
//                   Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
//                   do eius tempor incididunt ut labore e dolore magna aliqua. Ut
//                   enim adiqua minim veniam quis nostrud exercitation ullamco
//                 </p>

//                 {/* Location */}
//                 <div className="mb-8 flex w-full max-w-[370px]">
//                   {/* Removed SVG Icon */}
//                   <div className="mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded bg-primary/5 text-primary sm:h-[70px] sm:max-w-[70px]">
//                     {/* SVG removed */}
//                   </div>
//                   <div className="w-full">
//                     <h4 className="mb-1 text-xl font-bold text-dark dark:text-white">
//                       Our Location
//                     </h4>
//                     <p className="text-base text-body-color dark:text-dark-6">
//                       99 S.t Jomblo Park Pekanbaru 28292. Indonesia
//                     </p>
//                   </div>
//                 </div>

//                 {/* Phone Number */}
//                 <div className="mb-8 flex w-full max-w-[370px]">
//                   {/* Removed SVG Icon */}
//                   <div className="mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded bg-primary/5 text-primary sm:h-[70px] sm:max-w-[70px]">
//                     {/* SVG removed */}
//                   </div>
//                   <div className="w-full">
//                     <h4 className="mb-1 text-xl font-bold text-dark dark:text-white">
//                       Phone Number
//                     </h4>
//                     <p className="text-base text-body-color dark:text-dark-6">
//                       (+62)81 414 257 9980
//                     </p>
//                   </div>
//                 </div>

//                 {/* Email Address */}
//                 <div className="mb-8 flex w-full max-w-[370px]">
//                   {/* Removed SVG Icon */}
//                   <div className="mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded bg-primary/5 text-primary sm:h-[70px] sm:max-w-[70px]">
//                     {/* SVG removed */}
//                   </div>
//                   <div className="w-full">
//                     <h4 className="mb-1 text-xl font-bold text-dark dark:text-white">
//                       Email Address
//                     </h4>
//                     <p className="text-base text-body-color dark:text-dark-6">
//                       info@yourdomain.com
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Contact Form Section */}
//             <div className="w-full px-4 lg:w-1/2 xl:w-5/12">
//               <div className="relative rounded-lg bg-white font-medium p-8 shadow-xl m-2 dark:bg-dark-2 sm:p-12">
//                 <form>
//                   <ContactInputBox
//                     type="text"
//                     name="name"
//                     placeholder="Your Name"
//                   />
//                   <ContactInputBox
//                     type="email"
//                     name="email"
//                     placeholder="Your Email"
//                   />
//                   <ContactInputBox
//                     type="tel"
//                     name="phone"
//                     placeholder="Your Phone"
//                   />
//                   <ContactTextArea
//                     row="6"
//                     placeholder="Your Message"
//                     name="details"
//                     defaultValue=""
//                   />
//                   <div>
//                     <button
//                       type="submit"
//                       className="w-full rounded border border-primary bg-[#091057] text-white p-3  transition hover:bg-opacity-90"
//                     >
//                       Send Message
//                     </button>
//                   </div>
//                 </form>

//                 {/* Decorative SVGs Removed */}
//                 {/* If you still want decorative elements, consider using CSS or other methods */}
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default Contact;

// // ContactTextArea Component
// const ContactTextArea = ({ row, placeholder, name, defaultValue }) => {
//   return (
//     <>
//       <div className="mb-6">
//         <textarea
//           rows={row}
//           placeholder={placeholder}
//           name={name}
//           className="w-full resize-none rounded border border-stroke px-[14px] py-3 text-base text-body-color outline-none focus:border-primary dark:border-dark-3 dark:bg-dark dark:text-dark-6"
//           defaultValue={defaultValue}
//         />
//       </div>
//     </>
//   );
// };

// // ContactInputBox Component
// const ContactInputBox = ({ type, placeholder, name }) => {
//   return (
//     <>
//       <div className="mb-6">
//         <input
//           type={type}
//           placeholder={placeholder}
//           name={name}
//           className="w-full rounded border border-stroke px-[14px] py-3 text-base text-body-color outline-none focus:border-primary dark:border-dark-3 dark:bg-dark dark:text-dark-6"
//         />
//       </div>
//     </>
//   );
// };








// type 2 

// src/components/Contact.jsx
// src/components/Contact.jsx
import React from "react";
import { motion } from "framer-motion";
import {
  MapPinIcon,    // Updated Icon Name
  PhoneIcon,
  EnvelopeIcon,  // Updated Icon Name
} from "@heroicons/react/24/outline"; // Importing Heroicons v2

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative max-w-[1200px] m-auto z-10 overflow-hidden bg-white py-20 dark:bg-dark lg:py-[120px]  "
    >
      <div className="container ">
        <div className="-mx-4 flex flex-wrap lg:justify-between ">
          {/* Contact Information Section */}
          <motion.div
            className="w-full px-4 lg:w-1/2 xl:w-6/12"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <div className="mb-12 max-w-[570px] lg:mb-0">
              <span className="mb-4 block text-base font-semibold text-primary">
                Contact Us
              </span>
              <h2 className="mb-6 text-3xl font-bold uppercase text-dark dark:text-white sm:text-4xl lg:text-3xl xl:text-4xl">
                GET IN TOUCH WITH US
              </h2>
              <p className="mb-9 text-base leading-relaxed text-body-color dark:text-dark-6">
                We are a team of dedicated professionals committed to delivering
                top-notch services that cater to your business needs. Our
                expertise spans across various domains, ensuring that we provide
                comprehensive solutions that drive growth and success.
              </p>

              {/* Location */}
              <motion.div
                className="mb-8 flex w-full max-w-[370px]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true, amount: 0.5 }}
              >
                <div className="mr-6 flex h-[60px] w-[60px] items-center justify-center overflow-hidden rounded bg-primary/5 text-primary sm:h-[70px] sm:w-[70px]">
                  <MapPinIcon className="h-6 w-6" /> {/* Updated Icon */}
                </div>
                <div className="w-full">
                  <h4 className="mb-1 text-xl font-bold text-dark dark:text-white">
                    Our Location
                  </h4>
                  <p className="text-base text-body-color dark:text-dark-6">
                    99 S.t Jomblo Park Pekanbaru 28292. Indonesia
                  </p>
                </div>
              </motion.div>

              {/* Phone Number */}
              <motion.div
                className="mb-8 flex w-full max-w-[370px]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true, amount: 0.5 }}
              >
                <div className="mr-6 flex h-[60px] w-[60px] items-center justify-center overflow-hidden rounded bg-primary/5 text-primary sm:h-[70px] sm:w-[70px]">
                  <PhoneIcon className="h-6 w-6" />
                </div>
                <div className="w-full">
                  <h4 className="mb-1 text-xl font-bold text-dark dark:text-white">
                    Phone Number
                  </h4>
                  <p className="text-base text-body-color dark:text-dark-6">
                    (+62)81 414 257 9980
                  </p>
                </div>
              </motion.div>

              {/* Email Address */}
              <motion.div
                className="mb-8 flex w-full max-w-[370px]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true, amount: 0.5 }}
              >
                <div className="mr-6 flex h-[60px] w-[60px] items-center justify-center overflow-hidden rounded bg-primary/5 text-primary sm:h-[70px] sm:w-[70px]">
                  <EnvelopeIcon className="h-6 w-6" /> {/* Updated Icon */}
                </div>
                <div className="w-full">
                  <h4 className="mb-1 text-xl font-bold text-dark dark:text-white">
                    Email Address
                  </h4>
                  <p className="text-base text-body-color dark:text-dark-6">
                    info@yourdomain.com
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Contact Form Section */}
          <motion.div
            className="w-full px-4 lg:w-1/2 xl:w-5/12"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <div className="relative rounded-lg bg-white font-medium p-8 shadow-xl m-2 dark:bg-dark-2 sm:p-12">
              <form>
                {/* Name Input */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true, amount: 0.5 }}
                >
                  <ContactInputBox
                    type="text"
                    name="name"
                    placeholder="Your Name"
                  />
                </motion.div>

                {/* Email Input */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true, amount: 0.5 }}
                >
                  <ContactInputBox
                    type="email"
                    name="email"
                    placeholder="Your Email"
                  />
                </motion.div>

                {/* Phone Input */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  viewport={{ once: true, amount: 0.5 }}
                >
                  <ContactInputBox
                    type="tel"
                    name="phone"
                    placeholder="Your Phone"
                  />
                </motion.div>

                {/* Message TextArea */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  viewport={{ once: true, amount: 0.5 }}
                >
                  <ContactTextArea
                    row="6"
                    placeholder="Your Message"
                    name="details"
                    defaultValue=""
                  />
                </motion.div>

                {/* Submit Button */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.0 }}
                  viewport={{ once: true, amount: 0.5 }}
                >
                  <button
                    type="submit"
                    className="w-full rounded border border-primary bg-[#091057] text-white p-3 transition hover:bg-opacity-90"
                  >
                    Send Message
                  </button>
                </motion.div>
              </form>

              {/* Decorative Elements Removed */}
              {/* If you still want decorative elements, consider using CSS or other methods */}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

// ContactTextArea Component
const ContactTextArea = ({ row, placeholder, name, defaultValue }) => {
  return (
    <div className="mb-6">
      <textarea
        rows={row}
        placeholder={placeholder}
        name={name}
        className="w-full resize-none rounded border border-stroke px-[14px] py-3 text-base text-body-color outline-none focus:border-primary dark:border-dark-3 dark:bg-dark dark:text-dark-6"
        defaultValue={defaultValue}
      />
    </div>
  );
};

// ContactInputBox Component
const ContactInputBox = ({ type, placeholder, name }) => {
  return (
    <div className="mb-6">
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        className="w-full rounded border border-stroke px-[14px] py-3 text-base text-body-color outline-none focus:border-primary dark:border-dark-3 dark:bg-dark dark:text-dark-6"
      />
    </div>
  );
};
