import type { OfficeSize } from '@/types'

export const officeSizes: OfficeSize[] = [
  {
    id: 'compact',
    size: 'up to 60 m²',
    area: '40-60',
    description: 'Tailored for executives or small teams seeking privacy and focus. Includes kitchenette and meeting rooms access.',
    features: [],
    icon: 'Building2',
  },
  {
    id: 'standard',
    size: '60–120 m²',
    area: '60-120',
    description: 'Designed for dynamic teams with multiple workstations, kitchenette, access to meeting rooms and a scenic terrace.',
    features: [],
    icon: 'Users',
  },
  {
    id: 'grand',
    size: 'from 120 m²',
    area: '120+',
    description: 'Full-floor exclusivity for larger enterprises, featuring private amenities, multiple workstations, access to meeting rooms and wellness center.',
    features: [],
    icon: 'Building',
  },
]
