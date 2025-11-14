import type { TeamMember } from '@/types'

export const teamMembers: TeamMember[] = [
  {
    id: '1',
    name: 'David Kiknadze',
    role: 'Director',
    bio: "As CEO, David Kiknadze drives M25's vision with strong leadership, building strategic partnerships and shaping a dynamic environment where businesses thrive.",
    email: 'david@m25.ge',
    image: '/david-kiknadze.png',
    roleKey: 'teamRoles.director',
    bioKey: 'teamBios.david'
  },
  {
    id: '2',
    name: 'Mariam Grdzelishvili',
    role: 'Director and Head of Finance',
    bio: "Responsible for shaping the company's financial strategy and ensuring sustainable growth. She combines strategic vision with strong analytical expertise to drive performance and long-term value.",
    email: 'mariam@m25.ge',
    image: '/mariam-grdzelishvili.png',
    roleKey: 'teamRoles.directorFinance',
    bioKey: 'teamBios.mariam'
  },
  {
    id: '3',
    name: 'Nina Gibbons',
    role: 'Property Manager',
    bio: "Your primary contact for all leasing enquiries. She ensures every detail from viewing to contracting is managed with a personal, precise, and professional approach.",
    email: 'nina@m25.ge',
    image: '/nina-gibbons.png',
    roleKey: 'teamRoles.propertyManager',
    bioKey: 'teamBios.nina'
  },
  {
    id: '4',
    name: 'Ani Mazanishvili',
    role: 'Head of Sales & Marketing',
    bio: 'Responsible for the commercial strategy and brand development of M25 Business Center, Ani Mazanishvili builds and strengthens enduring relationships with our valued partners.',
    email: 'ani@m25.ge',
    image: '/ani-mazanishvili.png',
    roleKey: 'teamRoles.headSalesMarketing',
    bioKey: 'teamBios.ani'
  },
  {
    id: '5',
    name: 'Jeremy Guilbert',
    role: 'Technical Manager',
    bio: 'Jeremy Guilbert ensures that every technical and operational aspect of the M25 Business Center runs flawlessly for our clients.',
    email: 'jeremy@m25.ge',
    image: '/assets/team/jeremy.jpg',
    roleKey: 'teamRoles.technicalManager',
    bioKey: 'teamBios.jeremy'
  },
  {
    id: '6',
    name: 'Julietta Shushanian',
    role: 'Chief Accountant',
    bio: 'Julietta Shushanian oversees financial operations of M25 Business Center, ensuring accuracy, transparency, and efficiency across every transaction.',
    email: 'julietta@m25.ge',
    image: '/Julietta-Shushanian.png',
    roleKey: 'teamRoles.chiefAccountant',
    bioKey: 'teamBios.julietta'
  },
]
