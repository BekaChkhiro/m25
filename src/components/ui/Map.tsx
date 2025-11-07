import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

// Add custom marker styles
const markerStyles = `
  .custom-marker {
    background: transparent !important;
    border: none !important;
  }
`

// Inject styles
if (typeof document !== 'undefined') {
  const styleSheet = document.createElement('style')
  styleSheet.textContent = markerStyles
  document.head.appendChild(styleSheet)
}

interface MapProps {
  latitude?: number
  longitude?: number
  zoom?: number
  className?: string
  showPopup?: boolean
}

// Custom marker icon in brand color (#4aa3ff)
const customIcon = new L.DivIcon({
  className: 'custom-marker',
  html: `
    <div style="position: relative; width: 32px; height: 44px;">
      <svg width="32" height="44" viewBox="0 0 32 44" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 0C7.163 0 0 7.163 0 16C0 28 16 44 16 44C16 44 32 28 32 16C32 7.163 24.837 0 16 0Z" fill="#4aa3ff"/>
        <circle cx="16" cy="16" r="6" fill="white"/>
      </svg>
    </div>
  `,
  iconSize: [32, 44],
  iconAnchor: [16, 44],
  popupAnchor: [0, -44]
})

export const Map = ({
  latitude = 41.6938,
  longitude = 44.8015,
  zoom = 16,
  className = '',
  showPopup = true
}: MapProps) => {
  const position: [number, number] = [latitude, longitude]

  return (
    <div className={`w-full h-full rounded-xl overflow-hidden relative ${className}`}>
      {/* Brand color overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#4aa3ff]/15 via-[#0c0f14]/25 to-[#4aa3ff]/10 z-10 pointer-events-none rounded-xl" />
      <MapContainer
        center={position}
        zoom={zoom}
        scrollWheelZoom={false}
        className="w-full h-full"
        style={{
          minHeight: '250px',
          filter: 'brightness(0.95) contrast(0.9) hue-rotate(195deg) saturate(1.1)'
        }}
      >
        <TileLayer
          attribution='&copy; <a href="https://carto.com/">CARTO</a>'
          url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
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
