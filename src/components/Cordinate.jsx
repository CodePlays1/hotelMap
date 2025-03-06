import React, { createContext, useContext, useState } from 'react';

// Create a Context for the coordinates
const CoordinateContext = createContext();

// Custom hook to use the CoordinateContext
export const useCoordinate = () => {
  const context = useContext(CoordinateContext);
  if (!context) {
    throw new Error('useCoordinate must be used within a CoordinateProvider');
  }
  return context;
};

// Coordinate Provider component
export const CoordinateProvider = ({ children }) => {
  const [cordinate, setCordinate] = useState(null); // State to store coordinates

  return (
    <CoordinateContext.Provider value={{ cordinate, setCordinate }}>
      {children}
    </CoordinateContext.Provider>
  );
};
