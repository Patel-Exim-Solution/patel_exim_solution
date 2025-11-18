// /components/MyMap.jsx
"use client";
import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

export default function MyMap() {
  const [L, setL] = useState(null);

  useEffect(() => {
    // call your setup helper on client only
    const leaflet = require("../utils/fixLeafletIcon").setupLeafletIcon();
    setL(leaflet);
  }, []);

  // while leaflet not loaded, render a placeholder to avoid SSR issues
  if (!L) {
    return <div style={{ height: 300 }}>Loading map…</div>;
  }

  return (
    <MapContainer center={[23.0810, 72.5768]} zoom={13} style={{ height: "300px", width: "100%" }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
      />
      <Marker position={[23.0810, 72.5768]}>
        <Popup>Hello! This is Gujarat, India 🚀</Popup>
      </Marker>
    </MapContainer>
  );
}
