export interface GalleryImage {
  id: string
  src: string
  alt: string
  caption?: string
  category: 'render' | 'plan' | 'detailed' | 'presentation'
  width?: number
  height?: number
}

export interface OfficeSize {
  id: string
  size: string
  area: string
  description: string
  features: string[]
  priceRange?: string
  icon?: string
}

export interface Amenity {
  id: string
  title: string
  description: string
  size?: string
  capacity?: string
  icon?: string
}

export interface NavigationItem {
  id: string
  label: string
  href: string
  external?: boolean
  download?: boolean
}

export interface ContactFormData {
  firstName: string
  lastName: string
  email: string
  phone: string
  preferredDate?: string
  company?: string
  message?: string
}

export interface BookingFormData extends ContactFormData {
  preferredDate: string
  preferredTime?: string
  phone: string
  notes?: string
}

export interface Stat {
  id: string
  value: string
  label: string
  suffix?: string
}

export interface TeamMember {
  id: string
  name: string
  role: string
  image?: string
  bio?: string
  email?: string
  linkedin?: string
}
