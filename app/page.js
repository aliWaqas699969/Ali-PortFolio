import Image from 'next/image'

import HeroSection from './components/HeroSection'
import Navbar from './components/Navbar'
import AboutSection from './components/AboutSection'
import ProjectSection from './components/ProjectSection'
import ContactSection from './components/ContactSection'
import AchivementSection from './components/AchivementSection'
import FooterSection from './components/FooterSection'



export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      <div className="container mt-24 mx-auto px-12 py-4">
        <HeroSection />
        <AchivementSection />
        <AboutSection />
        <ProjectSection />
        <ContactSection />
      </div>
      <FooterSection />
    </main>
  )
}
