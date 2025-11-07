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

// All gallery images combined
export const allGalleryImages: GalleryImage[] = [
  ...floorPlanImages,
  ...presentationImages,
  ...renderImages,
]
