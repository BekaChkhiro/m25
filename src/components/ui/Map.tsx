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
      {/* Brand color overlay with stronger effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#4aa3ff]/30 via-[#0c0f14]/40 to-[#4aa3ff]/25 z-10 pointer-events-none rounded-xl mix-blend-multiply" />
      <div className="absolute inset-0 bg-[#4aa3ff]/15 z-[9] pointer-events-none rounded-xl mix-blend-color" />
      <iframe
        title="M25 Business Center Location"
        src={mapUrl}
        width="100%"
        height="100%"
        style={{
          border: 0,
          minHeight: '250px',
          filter: 'brightness(0.85) contrast(1.1) saturate(0.8) hue-rotate(180deg)'
        }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  )
}
