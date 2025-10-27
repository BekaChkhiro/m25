import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { Icon, LatLngExpression } from 'leaflet'
import 'leaflet/dist/leaflet.css'

interface MapProps {
  latitude?: number
  longitude?: number
  zoom?: number
  className?: string
  showPopup?: boolean
}

// Fix for default marker icons in React-Leaflet
const customIcon = new Icon({
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
})

export const Map = ({
  latitude = 41.6938,
  longitude = 44.8015,
  zoom = 16,
  className = '',
  showPopup = true
}: MapProps) => {
  const position: LatLngExpression = [latitude, longitude]

  return (
    <div className={`w-full h-full rounded-xl overflow-hidden ${className}`}>
      <MapContainer
        center={position}
        zoom={zoom}
        scrollWheelZoom={false}
        className="w-full h-full"
        style={{ minHeight: '250px' }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position} icon={customIcon}>
          {showPopup && (
            <Popup>
              <div className="text-center p-2">
                <h3 className="font-bold text-base mb-1">M25 Business Center</h3>
                <p className="text-sm text-gray-600">Mtatsminda N 25, Tbilisi</p>
                <a
                  href="https://maps.google.com/?q=Mtatsminda+N+25+Tbilisi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline text-sm mt-1 inline-block"
                >
                  Open in Google Maps
                </a>
              </div>
            </Popup>
          )}
        </Marker>
      </MapContainer>
    </div>
  )
}
