import type { NavigationItem } from '@/types'

export const navigationItems: NavigationItem[] = [
  { id: 'about', label: 'About', href: '#about', translationKey: 'nav.about' },
  {
    id: 'services',
    label: 'Services',
    href: '#services',
    translationKey: 'nav.services',
    children: [
      { id: 'offices', label: 'Private Offices', href: '#offices', translationKey: 'nav.offices' },
      { id: 'coworking', label: 'Co-Working', href: '#coworking', translationKey: 'nav.coworking' },
      { id: 'virtual', label: 'Virtual Offices', href: '#virtual', translationKey: 'nav.virtual' },
      { id: 'meeting-rooms', label: 'Meeting & Conference Rooms', href: '#meeting-rooms', translationKey: 'nav.meetingRooms' },
    ]
  },
  { id: 'amenities', label: 'Facilities', href: '#amenities', translationKey: 'nav.amenities' },
  { id: 'gallery', label: 'Gallery', href: '#gallery', translationKey: 'nav.gallery' },
  { id: 'team', label: 'Team', href: '#team', translationKey: 'nav.team' },
  { id: 'contact', label: 'Contact', href: '#contact', translationKey: 'nav.contact' },
]
