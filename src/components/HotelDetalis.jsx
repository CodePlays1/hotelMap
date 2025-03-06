import React from "react";
import { useParams } from "react-router-dom";
import Data from "../Data"; // Import the Data object
import { Link } from "react-router-dom";
import mainImage from "../assets/GrandHotel.webp"
import image1 from "../assets/GrandHotel1.webp"
import image2 from "../assets/GrandHotel2.jpg"
import image3 from "../assets/GrandHotel3.webp"
function HotelDetails() {
  const { id } = useParams();
  const hotel = Data.hotels.find((h) => h.id === parseInt(id));

  if (!hotel) {
    return (
      <div className="flex items-center justify-center h-screen">
        <h2 className="text-2xl font-bold text-red-600">Hotel not found!</h2>
      </div>
    );
  }

  // Placeholder images
  const images = [
    image1,
    image2,
    image3,
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h2 className="text-4xl font-bold text-gray-800 mb-6">{hotel.name}</h2>

      {/* Image Section */}
      <div className="mb-8">
        <img
          src={mainImage}
          alt={`${hotel.name} Main`}
          className="w-full h-64 object-cover rounded-lg shadow-lg mb-4"
        />
        <div className="grid grid-cols-3 gap-4">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Hotel Small ${index + 1}`}
              className="w-full h-24 object-cover rounded-lg shadow-md"
            />
          ))}
        </div>
      </div>

      {/* Hotel Information */}
      <div className="bg-gray-100 p-6 rounded-lg shadow-md mb-8">
        <p className="text-lg">
          <strong className="text-gray-700">Address:</strong> {hotel.location.address}
        </p>
        <p className="text-lg">
          <strong className="text-gray-700">Rating:</strong>{" "}
          <span className="text-yellow-500 font-bold">{hotel.rating} ★</span>
        </p>
        <p className="text-lg">
          <strong className="text-gray-700">Price per Night:</strong>{" "}
          <span className="text-green-600 font-bold">${hotel.price_per_night}</span>
        </p>
        <p className="text-lg">
          <strong className="text-gray-700">Amenities:</strong>{" "}
          <span className="text-gray-600">{hotel.amenities.join(", ")}</span>
        </p>
      </div>

      {/* Rooms Section */}
      <h3 className="text-2xl font-semibold text-gray-800 mb-4">Rooms</h3>
      <ul className="space-y-4 mb-8">
        {hotel.rooms.map((room, index) => (
          <li
            key={index}
            className={`p-4 rounded-lg shadow-md ${
              room.available ? "bg-white border-green-500 border-l-4" : "bg-gray-200 border-red-500 border-l-4"
            }`}
          >
            <strong className="block text-lg font-semibold">{room.type}</strong>
            <p className="text-gray-700">
              Beds: <span className="font-medium">{room.beds}</span>, Price:{" "}
              <span className="text-green-600 font-bold">${room.price}</span>, Available:{" "}
              <span className={`font-bold ${room.available ? "text-green-500" : "text-red-500"}`}>
                {room.available ? "Yes" : "No"}
              </span>
            </p>
          </li>
        ))}
      </ul>

      {/* Contact Information */}
      <h3 className="text-2xl font-semibold text-gray-800 mb-4">Contact Information</h3>
      <div className="bg-gray-100 p-6 rounded-lg shadow-md">
        <p className="text-lg">
          <strong className="text-gray-700">Phone:</strong>{" "}
          <a href={`tel:${hotel.contact_info.phone}`} className="text-blue-500 hover:underline">
            {hotel.contact_info.phone}
          </a>
        </p>
        <p className="text-lg">
          <strong className="text-gray-700">Email:</strong>{" "}
          <a href={`mailto:${hotel.contact_info.email}`} className="text-blue-500 hover:underline">
            {hotel.contact_info.email}
          </a>
        </p>
      </div>

      <p className="mt-8">
        <Link
          to="/"
          className="inline-block px-6 py-3 bg-blue-600 text-white font-bold rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
        >
          Back to Hotels List
        </Link>
      </p>
    </div>
  );
}

export default HotelDetails;
