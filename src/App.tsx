import { Navigation } from '@components/layout/Navigation'
import { Footer } from '@components/layout/Footer'
import { Hero } from '@components/sections/Hero'
import { About } from '@components/sections/About'
import { Offices } from '@components/sections/Offices'
import { CoWorking } from '@components/sections/CoWorking'
import { VirtualOffice } from '@components/sections/VirtualOffice'
import { Amenities } from '@components/sections/Amenities'
import { Gallery } from '@components/sections/Gallery'
import { Contact } from '@components/sections/Contact'
import './index.css'

function App() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Offices />
      <CoWorking />
      <VirtualOffice />
      <Amenities />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
