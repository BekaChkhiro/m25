interface MapProps {
  latitude?: number
  longitude?: number
  zoom?: number
  className?: string
}

export const Map = ({
  latitude = 41.6938,
  longitude = 44.8015,
  zoom = 16,
  className = ''
}: MapProps) => {
  // Google Maps Embed URL with language set to English
  // Using coordinates to ensure accurate location
  const mapUrl = `https://maps.google.com/maps?q=${latitude},${longitude}&hl=en&z=${zoom}&output=embed`

  return (
    <div className={`w-full h-full rounded-xl overflow-hidden relative ${className}`}>
      {/* Dark blue night mode theme - very prominent */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a1628]/70 via-[#1e3a8a]/60 to-[#1e40af]/55 z-10 pointer-events-none rounded-xl" />
      <div className="absolute inset-0 bg-[#1d4ed8]/40 z-[11] pointer-events-none rounded-xl mix-blend-color" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0c4a6e]/50 to-transparent z-[12] pointer-events-none rounded-xl" />
      <iframe
        title="M25 Business Center Location"
        src={mapUrl}
        width="100%"
        height="100%"
        style={{
          border: 0,
          minHeight: '250px',
          filter: 'brightness(0.45) contrast(1.4) saturate(0.4) hue-rotate(210deg) invert(0.1)'
        }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  )
}
