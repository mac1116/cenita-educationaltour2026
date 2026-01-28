import { HeroSection } from './components/edtour/HeroSection'
import { AboutSection } from './components/edtour/AboutSection'
import { StudentProfile } from './components/edtour/StudentProfile'
import { ScheduleSection } from './components/edtour/ScheduleSection'
import { DonorsSection } from './components/edtour/DonorsSection'
import { SupportSection } from './components/edtour/SupportSection'
import { ContactSection } from './components/edtour/ContactSection'
import { FooterSection } from './components/edtour/FooterSection'

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="relative" role="main">
        <HeroSection />
        <AboutSection />
        <StudentProfile />
        <ScheduleSection />
        <DonorsSection />
        <SupportSection />
        <ContactSection />
      </main>
      <FooterSection />
    </div>
  )
}
