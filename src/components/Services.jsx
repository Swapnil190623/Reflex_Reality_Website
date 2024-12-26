// import React from 'react';
// import { motion } from 'framer-motion';
// import { FaFileAlt, FaSearch, FaGlobe, FaCalendarAlt, FaBell } from 'react-icons/fa';

// const services = [
//   {
//     id: 1,
//     icon: FaFileAlt,
//     title: 'Save Your Files',
//     description: 'We automatically save your files as you type.',
//     href: '/save-files',
//   },
//   {
//     id: 2,
//     icon: FaSearch,
//     title: 'Full Text Search',
//     description: 'Search through all your files in one place.',
//     href: '/full-text-search',
//   },
//   {
//     id: 3,
//     icon: FaGlobe,
//     title: 'Multilingual',
//     description: 'Supports 100+ languages and counting.',
//     href: '/multilingual',
//   },
//   {
//     id: 4,
//     icon: FaCalendarAlt,
//     title: 'Calendar',
//     description: 'Use the calendar to filter your files by date.',
//     href: '/calendar',
//   },
//   {
//     id: 5,
//     icon: FaBell,
//     title: 'Notifications',
//     description: 'Get notified when someone shares a file or mentions you in a comment.',
//     href: '/notifications',
//   },
// ];

// function Services() {
//   return (
//     <section className="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 body-font py-24">
//       <div className="container mx-auto px-5">
//         <div className="text-center mb-12">
//           <motion.h1
//             className="text-3xl font-medium title-font mb-4"
//             initial={{ opacity: 0, y: -20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5 }}
//           >
//             Our Services
//           </motion.h1>
//           <motion.p
//             className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500 dark:text-gray-400"
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//           >
//             Discover the variety of services we offer to make your experience seamless and efficient.
//           </motion.p>
//         </div>
//         <div className="flex flex-wrap -m-4">
//           {services.map((service) => (
//             <motion.div
//               key={service.id}
//               className="p-4 md:w-1/2 lg:w-1/3"
//               initial={{ opacity: 0, scale: 0.9 }}
//               whileInView={{ opacity: 1, scale: 1 }}
//               transition={{ duration: 0.4 }}
//             >
//               <div className="h-full bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
//                 <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-100 text-indigo-500">
//                   <service.icon className="w-8 h-8" />
//                 </div>
//                 <h2 className="text-lg font-medium title-font mb-2">{service.title}</h2>
//                 <p className="leading-relaxed text-base mb-4">{service.description}</p>
//                 <a
//                   href={service.href}
//                   className="text-indigo-500 hover:underline"
//                 >
//                   Learn More
//                 </a>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Services;


// new Services Section Layout 

import React from 'react'

function Services() {
  return (
    <div>
      <section className=" body-font text-white bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#d3c9c9] via-[#055e68] to-[#191918]">
        <div className="container px-5 py-24 mx-auto">
          <div className="text-center mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4"> Our Services </h1>
            <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug.</p>
            <div className="flex mt-6 justify-center">
              <div className="w-16 h-1 rounded-full bg-indigo-500 inline-flex"></div>
            </div>
          </div>
          <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
            <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
              <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10" viewBox="0 0 24 24">
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                </svg>
              </div>
              <div className="flex-grow">
                <h2 className="text-gray-900 text-lg title-font font-medium mb-3">Shooting Stars</h2>
                <p className="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug VHS try-hard.</p>
                <a className="mt-3 text-indigo-500 inline-flex items-center">Learn More
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
            <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
              <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10" viewBox="0 0 24 24">
                  <circle cx="6" cy="6" r="3"></circle>
                  <circle cx="6" cy="18" r="3"></circle>
                  <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
                </svg>
              </div>
              <div className="flex-grow">
                <h2 className="text-gray-900 text-lg title-font font-medium mb-3">The Catalyzer</h2>
                <p className="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug VHS try-hard.</p>
                <a className="mt-3 text-indigo-500 inline-flex items-center">Learn More
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
            <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
              <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10" viewBox="0 0 24 24">
                  <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </div>
              <div className="flex-grow">
                <h2 className="text-gray-900 text-lg title-font font-medium mb-3">Neptune</h2>
                <p className="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug VHS try-hard.</p>
                <a className="mt-3 text-indigo-500 inline-flex items-center">Learn More
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <button className="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
        </div>
      </section>
    </div>
  )
}

export default Services