import React from 'react'
import Hero from './components/Hero'
import WaitlistForm from './components/WaitlistForm'
import AppMockup from './components/AppMockup'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'
import { BackgroundBeams } from './components/ui/BackgroundBeams'

function App() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#0a1628]">
      {/* Background beams effect */}
      <BackgroundBeams className="absolute inset-0 z-0" />
      
      {/* Content */}
      <div className="relative z-10">
        <Hero />
        <WaitlistForm />
        <AppMockup />
        <Testimonials />
        <Footer />
      </div>
    </div>
  )
}

export default App

