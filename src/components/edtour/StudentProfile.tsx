'use client'

import { GraduationCap, MapPin, BookOpen, Quote } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { motion } from 'framer-motion'

export function StudentProfile() {
  return (
    <section className="py-28 bg-black relative overflow-hidden">
      {/* Subtle pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px]" />

      <div className="container mx-auto px-6 relative">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Profile Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative order-2 lg:order-1"
            >
              <div className="aspect-square max-w-sm mx-auto relative">
                {/* Decorative frame */}
                <div className="absolute -inset-4 border-2 border-white/20 rounded-3xl" />
                <div className="absolute -inset-8 border border-white/10 rounded-3xl" />
                
                {/* Main image container */}
                <div className="relative bg-white/10 backdrop-blur rounded-2xl aspect-square flex items-center justify-center overflow-hidden">
                  {/* Replace this with actual photo */}
                  <div className="text-center p-8">
                    <div className="w-40 h-40 mx-auto mb-6 bg-white/10 rounded-full flex items-center justify-center border-2 border-white/20">
                      <GraduationCap className="w-20 h-20 text-white/50" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">Mheil Andrei N. Cenita</h3>
                    <p className="text-white/50 mt-2">3rd Year • BS Computer Science</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Profile Info */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="order-1 lg:order-2"
            >
              <span className="inline-block text-xs font-semibold text-white/50 tracking-[0.2em] uppercase mb-4">
                Meet the Student
              </span>
              
              <h2 className="text-4xl lg:text-5xl font-black text-white mb-8 tracking-tight">
                About Me
              </h2>

              {/* Info cards */}
              <div className="space-y-4 mb-8">
                <Card className="p-5 flex items-center gap-4 bg-white/5 border-white/10 backdrop-blur">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                    <BookOpen className="w-5 h-5 text-white/70" />
                  </div>
                  <div>
                    <p className="text-sm text-white/40">University</p>
                    <p className="font-semibold text-white">University of Mindanao</p>
                    <p className="text-sm text-white/40">College of Computing Education</p>
                  </div>
                </Card>

                <Card className="p-5 flex items-center gap-4 bg-white/5 border-white/10 backdrop-blur">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-white/70" />
                  </div>
                  <div>
                    <p className="text-sm text-white/40">Location</p>
                    <p className="font-semibold text-white">Davao City, Philippines</p>
                  </div>
                </Card>
              </div>

              {/* Story */}
              <Card className="p-6 bg-white border-0 relative">
                <Quote className="absolute top-4 right-4 w-10 h-10 text-black/5" />
                <h4 className="font-bold text-black mb-3">My Story</h4>
                <p className="text-black/60 leading-relaxed text-sm">
                  As a 3rd-year BS Computer Science student at the University of Mindanao, I am passionate about technology and eager to learn from industry professionals. This educational tour represents a once-in-a-lifetime opportunity to bridge the gap between academic learning and real-world application.
                </p>
                <p className="text-black/60 leading-relaxed text-sm mt-3">
                  I am humbly seeking financial assistance to help cover expenses for this tour. Any contribution, no matter how small, would bring me one step closer to this dream. <span className="text-black font-semibold">Your support means the world to me.</span>
                </p>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
