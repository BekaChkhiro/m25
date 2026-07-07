import type { GalleryImage } from '@/types'

// Floor Plans
export const floorPlanImages: GalleryImage[] = [
  {
    id: 'plan-ground',
    src: '/assets/plan_ground.jpg',
    alt: 'Ground Floor Plan',
    caption: 'Ground Floor',
    category: 'plan'
  },
  {
    id: 'plan-1st',
    src: '/assets/plan_1st.jpg',
    alt: '1st Floor Plan',
    caption: '1st Floor',
    category: 'plan'
  },
  {
    id: 'plan-2nd',
    src: '/assets/plan_2nd.jpg',
    alt: '2nd Floor Plan',
    caption: '2nd Floor',
    category: 'plan'
  },
  {
    id: 'plan-4th',
    src: '/assets/plan_4th.jpg',
    alt: '4th Floor Plan',
    caption: '4th Floor',
    category: 'plan'
  },
  {
    id: 'plan-5th',
    src: '/assets/plan_5th.jpg',
    alt: '5th Floor Plan',
    caption: '5th Floor',
    category: 'plan'
  },
  {
    id: 'plan-6th',
    src: '/assets/plan_6th.jpg',
    alt: '6th Floor Plan',
    caption: '6th Floor',
    category: 'plan'
  },
]

// Presentation Images (showing first 21)
export const presentationImages: GalleryImage[] = Array.from({ length: 21 }, (_, i) => ({
  id: `presentation-${i + 1}`,
  src: `/assets/presentation_p${String(i + 1).padStart(2, '0')}.jpg`,
  alt: `M25 Presentation ${i + 1}`,
  caption: `Presentation ${i + 1}`,
  category: 'presentation' as const
}))

// Render Images (97-188, total 92 images, with 117 and 118 at the end)
export const renderImages: GalleryImage[] = [
  // 97-116 (20 images)
  ...Array.from({ length: 20 }, (_, i) => ({
    id: `render-${i + 97}`,
    src: `/assets/render_p${String(i + 97).padStart(3, '0')}.jpg`,
    alt: `M25 Architectural Render ${i + 97}`,
    caption: `Render ${i + 97}`,
    category: 'render' as const
  })),
  // 119-188 (70 images)
  ...Array.from({ length: 70 }, (_, i) => ({
    id: `render-${i + 119}`,
    src: `/assets/render_p${String(i + 119).padStart(3, '0')}.jpg`,
    alt: `M25 Architectural Render ${i + 119}`,
    caption: `Render ${i + 119}`,
    category: 'render' as const
  })),
  // 117-118 (2 images at the end)
  {
    id: 'render-117',
    src: '/assets/render_p117.jpg',
    alt: 'M25 Architectural Render 117',
    caption: 'Render 117',
    category: 'render' as const
  },
  {
    id: 'render-118',
    src: '/assets/render_p118.jpg',
    alt: 'M25 Architectural Render 118',
    caption: 'Render 118',
    category: 'render' as const
  }
]

// Reception & Lobby (12 photos)
export const receptionImages: GalleryImage[] = Array.from({ length: 12 }, (_, i) => ({
  id: `reception-${i + 1}`,
  src: `/assets/reception_p${String(i + 1).padStart(2, '0')}.jpg`,
  alt: `M25 Reception & Lobby ${i + 1}`,
  caption: `Reception & Lobby ${i + 1}`,
  category: 'reception' as const,
}))

// Views (6 photos)
export const viewsImages: GalleryImage[] = Array.from({ length: 6 }, (_, i) => ({
  id: `views-${i + 1}`,
  src: `/assets/views_p${String(i + 1).padStart(2, '0')}.jpg`,
  alt: `M25 Views ${i + 1}`,
  caption: `Views ${i + 1}`,
  category: 'views' as const,
}))

// Private Offices (9 photos)
export const officesImages: GalleryImage[] = Array.from({ length: 9 }, (_, i) => ({
  id: `offices-${i + 1}`,
  src: `/assets/offices_p${String(i + 1).padStart(2, '0')}.jpg`,
  alt: `M25 Private Offices ${i + 1}`,
  caption: `Private Offices ${i + 1}`,
  category: 'offices' as const,
}))

// Co-Working (14 photos)
export const coworkingImages: GalleryImage[] = Array.from({ length: 14 }, (_, i) => ({
  id: `coworking-${i + 1}`,
  src: `/assets/coworking_p${String(i + 1).padStart(2, '0')}.jpg`,
  alt: `M25 Co-Working ${i + 1}`,
  caption: `Co-Working ${i + 1}`,
  category: 'coworking' as const,
}))

// Gym (11 photos)
export const gymImages: GalleryImage[] = Array.from({ length: 11 }, (_, i) => ({
  id: `gym-${i + 1}`,
  src: `/assets/gym_p${String(i + 1).padStart(2, '0')}.jpg`,
  alt: `M25 Gym ${i + 1}`,
  caption: `Gym ${i + 1}`,
  category: 'gym' as const,
}))

// Spa (8 photos)
export const spaImages: GalleryImage[] = Array.from({ length: 8 }, (_, i) => ({
  id: `spa-${i + 1}`,
  src: `/assets/spa_p${String(i + 1).padStart(2, '0')}.jpg`,
  alt: `M25 Spa ${i + 1}`,
  caption: `Spa ${i + 1}`,
  category: 'spa' as const,
}))

// Meeting Rooms (7 photos — Shota Rustaveli + Victor Hugo)
export const meetingImages: GalleryImage[] = Array.from({ length: 7 }, (_, i) => ({
  id: `meeting-${i + 1}`,
  src: `/assets/meeting_p${String(i + 1).padStart(2, '0')}.jpg`,
  alt: `M25 Meeting Rooms ${i + 1}`,
  caption: `Meeting Rooms ${i + 1}`,
  category: 'meeting' as const,
}))

// All gallery images combined
export const allGalleryImages: GalleryImage[] = [
  ...floorPlanImages,
  ...presentationImages,
  ...renderImages,
  ...receptionImages,
  ...viewsImages,
  ...officesImages,
  ...coworkingImages,
  ...gymImages,
  ...spaImages,
  ...meetingImages,
]
