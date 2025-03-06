import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you are using React Router
import image1 from "../assets/GrandHotel.webp"
import { useCoordinate } from './Cordinate';
export default function HotelCard({ hotel }) {
  const { setCordinate } = useCoordinate(); // Get the setCordinate function from context

  if (!hotel || !hotel.location) {
    return null; // Gracefully handle missing hotel or location data
  }

  const handleClick = () => {
    // Set coordinates to context when a card is clicked
    setCordinate({
      latitude: hotel.location.latitude,
      longitude: hotel.location.longitude,
    });
  };

  return (
    <div className="max-w-md mx-auto mb-8 overflow-auto">
      <div
        className="p-4 border-2 border-gray-300 bg-gray-100 rounded-md cursor-pointer"
        onClick={handleClick}
      >
        <img
          className="w-full h-80 rounded-lg mb-3 object-cover"
          src={image1 || 'https://via.placeholder.com/300x200'} // Fallback image
          alt={hotel.name || 'Hotel'} // Fallback alt text
        />
        <div className="px-2">
          <h2 className="font-bold text-xl mb-2">{hotel.name || 'Unknown Hotel'}</h2>
          <p className="text-gray-700 text-base mb-4">{hotel.location.address || 'Address not available'}</p>
          <p className="text-gray-600 text-sm mb-4">Rating: {hotel.rating || 'N/A'} ★</p>
          <p className="text-gray-600 text-sm mb-4">Price per night: ${hotel.price_per_night || 'N/A'}</p>

          {hotel.amenities && hotel.amenities.length > 0 && (
            <ul className="mb-4">
              {hotel.amenities.map((amenity, index) => (
                <li key={index} className="flex items-center mb-2">
                  <svg
                    className="w-4 h-4 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    ></path>
                  </svg>
                  <span>{amenity}</span>
                </li>
              ))}
            </ul>
          )}

          <Link
            to={`/hotel/${hotel.id}`}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md block text-center transition duration-300 ease-in-out transform hover:bg-blue-600 hover:scale-105"
          >
            Details
          </Link>
        </div>
      </div>
    </div>
  );
}
