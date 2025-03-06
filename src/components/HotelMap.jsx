import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./MapStyles.css";
import { useCoordinate } from "./Cordinate";

function CenterOnMarker({ position }) {
  const map = useMap();

  useEffect(() => {
    if (position) {
      map.setView(position, 13); // Center the map on the position with a zoom level of 13
    }
  }, [position, map]);

  return null;
}

export default function Map() {
  const { cordinate } = useCoordinate(); // Get the coordinate from context

  const [center, setCenter] = useState([34.0736, -118.4053]); // Default location if no coordinate is passed

  useEffect(() => {
    if (cordinate) {
      setCenter([cordinate.latitude, cordinate.longitude]);
    }
  }, [cordinate]);

  return (
    <div className="mapContainer">
      <MapContainer className="map" center={center} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {cordinate && (
          <>
            <Marker
              position={center}
              eventHandlers={{
                click: () => {
                  setCenter([cordinate.latitude, cordinate.longitude]);
                },
              }}
            >
              <Popup>
                Selected Location: <br />
                Latitude: {cordinate.latitude} <br />
                Longitude: {cordinate.longitude}
              </Popup>
            </Marker>
            <CenterOnMarker position={center} />
          </>
        )}
      </MapContainer>
    </div>
  );
}
