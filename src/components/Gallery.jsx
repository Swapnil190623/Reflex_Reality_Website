// import React from 'react';
// import { motion } from 'framer-motion';
// import { FaHome, FaMapMarkedAlt, FaRupeeSign, FaBed, FaKey } from 'react-icons/fa';

// const services = [
//   {
//     id: 1,
//     icon: FaHome,
//     title: 'Find Your Dream Home',
//     description: 'Browse through our vast collection of properties to find the perfect place to call home.',
//     href: '/find-home',
//   },
//   {
//     id: 2,
//     icon: FaMapMarkedAlt,
//     title: 'Explore Locations',
//     description: 'Discover homes in the best neighborhoods with our interactive map feature.',
//     href: '/explore-locations',
//   },
//   {
//     id: 3,
//     icon: FaRupeeSign,
//     title: 'Affordable Options',
//     description: 'Explore properties that fit your budget, from luxury estates to affordable apartments.',
//     href: '/affordable-options',
//   },
//   {
//     id: 4,
//     icon: FaBed,
//     title: 'Bedrooms That Suit You',
//     description: 'Choose from a wide range of bedroom sizes and layouts that match your lifestyle.',
//     href: '/bedroom-options',
//   },
//   {
//     id: 5,
//     icon: FaKey,
//     title: 'Easy Ownership',
//     description: 'Get access to the easiest and fastest homeownership options with flexible payment plans.',
//     href: '/easy-ownership',
//   },
// ];

// function Gallery() {
//   return (
//     <section className="text-gray-900 dark:text-gray-100 bg-gray-100 dark:bg-gray-900 body-font">
//       <div className="container px-5 py-24 mx-auto">
//         <div className="text-center mb-20">
//           <motion.h1
//             className="sm:text-3xl text-2xl font-medium title-font mb-4"
//             initial={{ opacity: 0, y: -50 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1.2, type: 'spring', stiffness: 50 }}
//           >
//             This Will be the Gallery Section In Website
//           </motion.h1>
//           <motion.p
//             className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500 dark:text-gray-400"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 1, delay: 0.3 }}
//           >
//             We are going to place the images here .
//           </motion.p>
//         </div>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {services.map((service) => (
//             <motion.div
//               key={service.id}
//               className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl"
//               initial={{ opacity: 0, scale: 0.95, boxShadow: '0 10px 15px rgba(0, 0, 0, 0.1)' }}
//               whileInView={{ opacity: 1, scale: 1, boxShadow: '0 10px 15px rgba(0, 0, 0, 0.1)' }}
//               transition={{ duration: 0.1 }}
//               whileHover={{
//                 boxShadow: '0 20px 25px rgba(0, 0, 0, 0.3)',  // Darker shadow
//               }}
//             >
//               <div className="w-16 h-16 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5">
//                 <service.icon className="w-10 h-10" />
//               </div>
//               <h2 className="text-lg font-medium title-font mb-2">{service.title}</h2>
//               <p className="leading-relaxed text-base mb-4">{service.description}</p>
//               <a
//                 href={service.href}
//                 className="text-indigo-500 hover:text-indigo-700 transition duration-300 ease-in-out transform hover:scale-105"
//               >
//                 Learn More
//               </a>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Gallery;







// let's try this 



import { motion } from 'framer-motion';

function Gallery() {
  const images = [
    'https://cdn.pixabay.com/photo/2020/08/28/06/13/building-5523630_960_720.jpg',
    'https://cdn.pixabay.com/photo/2019/05/24/11/00/interior-4226020_1280.jpg',
    'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg',
    'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg',
    'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg',
    'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg',
    'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg',
    'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg',
    'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg',
    'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg',
    'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg',
    'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg',
  ];

  return (
    <>
      <div className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-100">
        <div className="max-w-[1200px] mx-auto">
          {/* Grid Layout for Gallery */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {images.map((image, index) => (
              <motion.div
                key={index}
                className="grid gap-4"
                whileHover={{ scale: 0.9}}
                transition={{ duration: 0.3 }}
                whileInView={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                viewport={{ once: true }}
              >
                <div className="h-80 w-full">
                  <motion.img
                    src={image}
                    alt={`Image ${index}`}
                    className="object-cover h-full w-full rounded-lg"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Gallery;
