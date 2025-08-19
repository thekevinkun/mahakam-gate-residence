import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Fix Leaflet's default icon path
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});

const position = [-0.4772294, 117.1306983];

const AgentMap = () => {
  return (
    <MapContainer
      center={position}
      zoom={15}
      scrollWheelZoom={false}
      className="h-full w-full rounded"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/">OSM</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        <Popup>Agent Office Location</Popup>
      </Marker>
    </MapContainer>
  );
};

export default AgentMap;
