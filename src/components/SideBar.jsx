import React from 'react';
import Data from '../Data'; // Assuming you are importing your data here
import HotelCard from './HotelCard';
export default function Sidebar({ onCardClick }) {
Data.hotels.map(hotel => console.log(hotel)) // Logs the entire data structure for debugging

  return (
    <div className="h-[600px] w-1/2 bg-gray-200 p-4 border rounded-lg shadow-md overflow-auto">
      {Data.hotels.map(hotel => (
        <HotelCard key={hotel.id} hotel={hotel} onCardClick={onCardClick} />
      ))}
    </div>
  );
}
