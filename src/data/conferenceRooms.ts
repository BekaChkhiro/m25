import type { ConferenceRoom } from '@/types'

export const conferenceRooms: ConferenceRoom[] = [
  {
    id: 'shota-rustaveli',
    name: 'Shota Rustaveli',
    seats: 48,
    description: 'Our largest conference room, perfect for company-wide meetings, presentations, and large gatherings.',
    icon: 'Users',
  },
  {
    id: 'napoleon-bonaparte',
    name: 'Napoleon Bonaparte',
    seats: 10,
    description: 'An intimate space designed for board meetings, team sessions, and executive gatherings.',
    icon: 'Briefcase',
  },
  {
    id: 'vakhtang-gorgasali',
    name: 'Vakhtang Gorgasali',
    seats: 6,
    description: 'A private setting for small group meetings, interviews, and confidential discussions.',
    icon: 'Users',
  },
  {
    id: 'victor-hugo',
    name: 'Victor Hugo',
    seats: 6,
    description: 'Ideal for focused team discussions, project planning, and creative brainstorming.',
    icon: 'Users',
  },
]
