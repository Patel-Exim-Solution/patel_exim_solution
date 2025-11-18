// /utils/fixLeafletIcon.js
// DO NOT run this at module top-level if it touches `window` or `L`
export function setupLeafletIcon() {
  if (typeof window === "undefined") return; // server-safe guard

  // lazy import Leaflet only in the browser (optional)
  const L = require("leaflet");

  // set default icon options (example)
  delete L.Icon.Default.prototype._getIconUrl;
  L.Icon.Default.mergeOptions({
    iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
    iconUrl: require("leaflet/dist/images/marker-icon.png"),
    shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
  });

  return L;
}
