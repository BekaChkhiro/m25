import type { Amenity } from '@/types'

export const amenities: Amenity[] = [
  {
    id: 'cafe',
    title: 'Café',
    description: 'A stylish ground-floor café offering a relaxed and healthy dining experience.',
    size: '120 m²',
    capacity: '40 seats',
  },
  {
    id: 'restaurant',
    title: 'Restaurant',
    description: 'An elegant top-floor venue for executive dinners and networking events.',
    size: '180 m²',
    capacity: '60 seats',
  },
  {
    id: 'gym',
    title: 'Gym',
    description: 'A premium fitness space equipped for high-performance workouts.',
    size: '200 m²',
    capacity: '20 persons',
  },
  {
    id: 'spa',
    title: 'Spa',
    description: 'A calm retreat to rejuvenate & restore balance.',
    size: '150 m²',
    capacity: '15 persons',
  },
  {
    id: 'yoga',
    title: 'Yoga Studio',
    description: 'Designed for mindfulness & holistic well-being.',
    size: '100 m²',
    capacity: '15 persons',
  },
]
