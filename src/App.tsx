import { Navigation } from '@components/layout/Navigation'
import { Footer } from '@components/layout/Footer'
import { Hero } from '@components/sections/Hero'
import { About } from '@components/sections/About'
import { Offices } from '@components/sections/Offices'
import { CoWorking } from '@components/sections/CoWorking'
import { MeetingRooms } from '@components/sections/MeetingRooms'
import { VirtualOffice } from '@components/sections/VirtualOffice'
import { Amenities } from '@components/sections/Amenities'
import { Team } from '@components/sections/Team'
import { Gallery } from '@components/sections/Gallery'
import { Contact } from '@components/sections/Contact'
import { SocialMediaWidget } from '@components/ui'
import './index.css'

function App() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Offices />
      <CoWorking />
      <MeetingRooms />
      <VirtualOffice />
      <Amenities />
      <Team />
      <Gallery />
      <Contact />
      <Footer />
      <SocialMediaWidget />
    </div>
  )
}

export default App
