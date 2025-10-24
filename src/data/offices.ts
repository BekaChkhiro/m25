import type { OfficeSize } from '@/types'

export const officeSizes: OfficeSize[] = [
  {
    id: 'compact',
    size: '40–60 m²',
    area: '40-60',
    description: 'Private suites ready for compact teams or executive offices.',
    features: ['Private entrance', 'Veranda access', 'Kitchenette', 'Meeting room access'],
  },
  {
    id: 'standard',
    size: '70–120 m²',
    area: '70-120',
    description: 'Spacious layouts perfect for growing teams and collaborative work.',
    features: ['Multiple workstations', 'Conference room', 'Private bathrooms', 'Flexible layouts'],
  },
  {
    id: 'premium',
    size: '130–200+ m²',
    area: '130-200',
    description: 'Full-floor options for established companies needing maximum space.',
    features: ['Entire floor access', 'Custom layouts', 'Multiple meeting rooms', 'Private amenities'],
  },
]
