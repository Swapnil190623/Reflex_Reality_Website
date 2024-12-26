import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


import HeroSection from './components/HeroSection.jsx'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Services from './components/Services.jsx'
import Gallery from './components/Gallery.jsx'
import PropertyCard from './components/PropertyCard.jsx'
import Contact from './components/Contact.jsx'

import SingleProjectCard from './components/SingleProjectCard.jsx'
import AboutUs from './pages/AboutUs.jsx'



function App() {
  const [count, setCount] = useState(0)

  //data
  const propertyData = {
    image: "https://cdn.pixabay.com/photo/2020/02/25/16/09/house-4877149_1280.jpg",
    type: "Apartment",
    propertyType: "sale",
    price: "₹1.5 Crore",
    location: "Mumbai, Maharashtra",
    rentalYield: "4.5%",
    currentRent: "₹50,000/month",
    tenant: "John Doe",
    tenure: "2 years",
    bhk: "3 BHK",
    area: "1200 sq. ft.",
    furnishStatus: "Fully Furnished",
    currentStatus: "Available",
    features: ["Garden", "Gym", "Swimming Pool", "Security", "Parking"],
    description: "A beautiful 3 BHK apartment located in the heart of the city. It's fully furnished with all modern amenities. The apartment has a spacious living area, well-maintained rooms, and a large balcony with a scenic view.",
  };

  return (
    <>

      <Header />

      <HeroSection />

      <hr />

      <Services />

      <hr />

      <Gallery />

      <hr />

      {/* <PropertyCard property={propertyData}/> */}
      <br />

      <Contact />
      <br />

      {/* <ProjectCard/> */}

      {/* <SingleProjectCard/> */  } 

      <AboutUs/>

      <hr />
    


      <Footer />

    </>
  )
}

export default App
