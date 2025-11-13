import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
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
import './i18n/config'
import './index.css'

function App() {
  const { i18n } = useTranslation()

  // Update html lang attribute when language changes
  useEffect(() => {
    document.documentElement.lang = i18n.language
  }, [i18n.language])

  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Offices />
      <CoWorking />
      <VirtualOffice />
      <MeetingRooms />
      <Amenities />
      <Gallery />
      <Team />
      <Contact />
      <Footer />
      <SocialMediaWidget />
    </div>
  )
}

export default App
