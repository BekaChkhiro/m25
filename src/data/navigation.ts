import type { NavigationItem } from '@/types'

export const navigationItems: NavigationItem[] = [
  { id: 'about', label: 'About', href: '#about' },
  {
    id: 'services',
    label: 'Services',
    href: '#services',
    children: [
      { id: 'offices', label: 'Private Offices', href: '#offices' },
      { id: 'coworking', label: 'Co-Working', href: '#coworking' },
      { id: 'virtual', label: 'Virtual Offices', href: '#virtual' },
      { id: 'meeting-rooms', label: 'Meeting & Conference Rooms', href: '#meeting-rooms' },
    ]
  },
  { id: 'amenities', label: 'Facilities', href: '#amenities' },
  { id: 'gallery', label: 'Gallery', href: '#gallery' },
  { id: 'team', label: 'Team', href: '#team' },
  { id: 'contact', label: 'Contact', href: '#contact' },
]
