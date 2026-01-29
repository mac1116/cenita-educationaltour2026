import { HeroSection } from './components/edtour/HeroSection'
import { AboutSection } from './components/edtour/AboutSection'
import { StudentProfile } from './components/edtour/StudentProfile'
import CountdownTimerAltAnimation from './components/edtour/CountdownTimerAltAnimation'
import { ScheduleSection } from './components/edtour/ScheduleSection'
import { DonorsSection } from './components/edtour/DonorsSection'
import { SupportSection } from './components/edtour/SupportSection'
import { ContactSection } from './components/edtour/ContactSection'
import { FooterSection } from './components/edtour/FooterSection'

export default function App() {
  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-hidden">
      {/* Revised Background: No Blur, just smooth Radial Gradients */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        {/* Base Layer */}
        <div className="absolute inset-0 bg-white dark:bg-slate-950" />
        
        {/* Crisp Indigo/Purple Accent (Top Right) */}
        <div 
          className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] opacity-20 dark:opacity-30"
          style={{
            background: 'radial-gradient(circle, rgba(99,102,241,0.8) 0%, rgba(99,102,241,0) 70%)',
            animation: 'pulse 10s ease-in-out infinite'
          }}
        />

        {/* Crisp Blue Accent (Bottom Left) */}
        <div 
          className="absolute bottom-[-10%] left-[-5%] w-[800px] h-[800px] opacity-15 dark:opacity-20"
          style={{
            background: 'radial-gradient(circle, rgba(59,130,246,0.6) 0%, rgba(59,130,246,0) 75%)',
            animation: 'pulse 15s ease-in-out infinite 2s'
          }}
        />

        {/* Subtle Tech Grid overlay for texture */}
        <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] dark:bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:32px_32px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)] opacity-30" />
      </div>

      <main className="relative z-0" role="main">
        <HeroSection />
        <div className="relative">
          <AboutSection />
          <StudentProfile />
          <CountdownTimerAltAnimation />
          <ScheduleSection />
          <DonorsSection />
          <SupportSection />
          <ContactSection />
        </div>
      </main>
      <FooterSection />
    </div>
  )
}