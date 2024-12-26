import React, { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
// import { useNavigate } from "react-router-dom";

const PropertyCard = ({ property }) => {
  // Define default values for missing data
  const defaultValue = "N/A";

  // State for toggling full description
  const [showFullDescription, setShowFullDescription] = useState(false);
  // const navigate = useNavigate();

  const truncateText = (text, length = 100) =>
    text?.length > length ? `${text.slice(0, length)}...` : text;

  // Handler for Enquire button
  const handleEnquire = (e) => {
    e.stopPropagation(); // Prevent the click from bubbling to the parent div
    // Implement your enquire logic here (e.g., open a modal, redirect to a form)
    alert(`Enquire about: ${property.type}`);
  };

  // Handler for WhatsApp button
  const handleWhatsApp = (e) => {
    e.stopPropagation(); // Prevent the click from bubbling to the parent div
    // Implement your WhatsApp logic here (e.g., open WhatsApp chat)
    const whatsappNumber = "919224448861"; // Replace with actual number
    const message = encodeURIComponent(`Hello, I'm interested in the property: ${property.type}`);
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank");
  };

  return (
    <div
      className="max-w-sm mx-auto bg-white shadow-md rounded-lg overflow-hidden border border-gray-300 cursor-pointer hover:shadow-lg transition-shadow duration-300 lg:min-w-[350px] min-w-[300px]"
      style={{ minHeight: '560px' }}
      // onClick={() => navigate(`/property/${property.id}`)} // Navigate to detail page
    >
      {/* Image Section */}
      <div className="relative">
        <img
          src={property.image || "https://cdn.pixabay.com/photo/2019/05/24/11/00/interior-4226020_1280.jpg"}
          alt={property.type || defaultValue}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-3 left-3 bg-blue-500 text-white text-xs px-2 py-1 rounded-md font-semibold">
          {property.type || defaultValue}
        </div>
        <div className="absolute top-3 right-3 bg-white text-gray-800 text-xs px-2 py-1 rounded-md font-semibold shadow-sm">
          {property.propertyType || defaultValue}
        </div>
      </div>

      {/* Details Section */}
      <div className="p-4">
        <div
          className="flex items-center px-1"
          style={{ borderBottom: "1px solid lightgrey" }}
        >
          <div
            style={{ textAlign: "left" }}
            className="p-2"
          >
            <p className="text-xl font-bold">{property.price || defaultValue}</p>
            <p className="text-sm text-gray-600">{property.location || defaultValue}</p>
          </div>
          {property.propertyType !== "sale" && (
            <p
              className="text-sm font-semibold text-gray-600 flex flex-col align-center ml-auto mr-3"
              style={{ textAlign: "right" }}
            >
              Avg. Rental Yield{" "}
              <span className="text-black" style={{ fontSize: "1.5rem" }}>
                {property.rentalYield || defaultValue}
              </span>
            </p>
          )}
        </div>

        {/* Conditional Rendering for Sale or Rent */}
        <div
          className="mt-4 grid grid-cols-1 p-2 gap-y-2 text-sm text-gray-700"
          style={{ borderBottom: "1px solid lightgrey" }}
        >
          {property.propertyType === "rent" && (
            <>
              <div className="flex items-center gap-2 justify-between">
                <span className="font-medium">Current Rent</span>
                <span
                  className="text-black font-semibold"
                  style={{ fontSize: ".9rem" }}
                >
                  {property.currentRent || defaultValue}
                </span>
              </div>
              <div className="flex items-center gap-2 justify-between">
                <span className="font-medium">Tenant</span>
                <span
                  className="text-black font-semibold"
                  style={{ fontSize: ".9rem" }}
                >
                  {property.tenant || defaultValue}
                </span>
              </div>
              <div className="flex items-center gap-2 justify-between">
                <span className="font-medium">Tenure</span>
                <span
                  className="text-black font-semibold"
                  style={{ fontSize: ".9rem" }}
                >
                  {property.tenure || defaultValue}
                </span>
              </div>
            </>
          )}
          {property.propertyType === "sale" && (
            <>
              <div className="flex items-center gap-2 justify-between">
                <span className="font-medium">BHK</span>
                <span
                  className="text-black font-semibold"
                  style={{ fontSize: ".9rem" }}
                >
                  {property.bhk || defaultValue}
                </span>
              </div>
              <div className="flex items-center gap-2 justify-between">
                <span className="font-medium">Carpet Area</span>
                <span
                  className="text-black font-semibold"
                  style={{ fontSize: ".9rem" }}
                >
                  {property.area || defaultValue}
                </span>
              </div>
              <div className="flex items-center gap-2 justify-between">
                <span className="font-medium">Furnishing Status</span>
                <span
                  className="text-black font-semibold"
                  style={{ fontSize: ".9rem" }}
                >
                  {property.furnishStatus || defaultValue}
                </span>
              </div>
              <div className="flex items-center gap-2 justify-between">
                <span className="font-medium">Current Status</span>
                <span
                  className="text-black font-semibold"
                  style={{ fontSize: ".9rem" }}
                >
                  {property.currentStatus || "Ask for Details"}
                </span>
              </div>
            </>
          )}
        </div>

        {/* Features Section */}
        <div
          className="p-2 flex items-center gap-2 flex-wrap text-xs text-blue-500"
          style={{ borderBottom: "1px solid lightgrey" }}
        >
          {(property.features || [defaultValue]).map((feature, index) => (
            <div
              key={index}
              className="px-2 py-1 bg-blue-100 rounded-full font-semibold"
            >
              {feature}
            </div>
          ))}
        </div>

        {/* Description Section */}
        <p className="text-xs p-2 text-gray-600">
          {showFullDescription
            ? property.description || defaultValue
            : truncateText(property.description)}
          {property.description?.length > 100 && (
            <span
              className="text-blue-500 font-semibold cursor-pointer"
              onClick={(e) => {
                e.stopPropagation(); // Prevent parent onClick
                setShowFullDescription(!showFullDescription);
              }}
            >
              {showFullDescription ? " Show Less" : " Read More"}
            </span>
          )}
        </p>

        {/* Actions */}
        <div className="mt-1 flex items-center gap-2 px-3">
          <button
            className="flex-1 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-500 transition-colors duration-200"
            onClick={(e) => {
              e.stopPropagation(); // Prevent parent onClick
              handleEnquire(e);
            }}
          >
            Enquire
          </button>
          <button
            className="flex items-center justify-center bg-green-500 text-white py-1.5 px-2 rounded-lg hover:bg-green-400 transition-colors duration-200"
            onClick={(e) => {
              e.stopPropagation(); // Prevent parent onClick
              handleWhatsApp(e);
            }}
          >
            <FaWhatsapp className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
