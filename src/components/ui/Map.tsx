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
  // Google Maps Embed with English language (hl=en)
  const mapUrl = `https://maps.google.com/maps?q=${latitude},${longitude}&hl=en&z=${zoom}&output=embed`

  return (
    <div className={`w-full h-full rounded-xl overflow-hidden relative ${className}`} style={{ background: '#0c0f14' }}>
      <iframe
        title="M25 Business Center Location"
        src={mapUrl}
        width="100%"
        height="100%"
        style={{
          border: 0,
          minHeight: '250px',
          filter: 'invert(90%) hue-rotate(190deg) brightness(0.85) contrast(1.1) saturate(0.9)'
        }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />

      {/* Dark overlay to match site background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'linear-gradient(135deg, rgba(12, 15, 20, 0.4) 0%, rgba(18, 23, 34, 0.3) 50%, rgba(12, 15, 20, 0.4) 100%)',
          mixBlendMode: 'multiply'
        }}
      />

      {/* Blue tint overlay to match brand */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'rgba(74, 163, 255, 0.08)',
          mixBlendMode: 'overlay'
        }}
      />
    </div>
  )
}
