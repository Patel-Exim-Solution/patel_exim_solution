"use client"; // if using App Router

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "@/utils/fixLeafletIcon"; // import the fix

export default function MyMap() {
  return (
    <MapContainer
      center={[23.0810, 72.5768]} // latitude, longitude
      zoom={13}
      style={{ height: "300px", width: "100%" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
      />
      <Marker position={[23.0810, 72.5768]} icon={new L.Icon.Default()}>
        <Popup>Hello! This is Gujarat, India 🚀</Popup>
      </Marker>
    </MapContainer>
  );
}
