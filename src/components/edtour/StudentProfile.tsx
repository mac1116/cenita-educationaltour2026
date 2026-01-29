'use client'

import { MapPin, BookOpen, Quote } from 'lucide-react'
import { Card } from '@/components/ui/card'
import profilePic from '@/assets/mac.jpg'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export function StudentProfile() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-24 bg-muted/30 relative overflow-hidden">
      {/* Background decoration */}
      <motion.div 
        animate={{ scale: [1, 1.1, 1], opacity: [0.02, 0.05, 0.02] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute top-0 right-0 w-96 h-96 bg-foreground/5 rounded-full blur-3xl" 
      />
      <motion.div 
        animate={{ scale: [1.1, 1, 1.1], opacity: [0.02, 0.05, 0.02] }}
        transition={{ duration: 7, repeat: Infinity }}
        className="absolute bottom-0 left-0 w-96 h-96 bg-foreground/5 rounded-full blur-3xl" 
      />

      <div className="container mx-auto px-6 relative">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col items-center gap-12">
            {/* Profile Image */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.7, type: "spring" }}
              className="relative w-full flex justify-center"
            >
              <div className="aspect-square max-w-xs relative">
                {/* Decorative rings */}
                <motion.div 
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 bg-foreground/10 rounded-3xl rotate-6" 
                />
                <motion.div 
                  animate={{ rotate: -360 }}
                  transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 bg-foreground/10 rounded-3xl -rotate-3" 
                />
                
                {/* Main image container */}
                <div className="relative bg-foreground rounded-3xl p-1">
                  <div className="bg-background rounded-3xl aspect-square flex items-center justify-center overflow-hidden">
                    <img
                      src={profilePic}
                      alt="Mheil Andrei N. Cenita"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Profile Info */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="w-full text-center"
            >
              <span className="inline-block text-sm font-semibold text-foreground/60 bg-background px-4 py-2 rounded-full mb-4 border border-border">
                Meet the Student
              </span>
              
              <h2 className="text-4xl font-black text-foreground mb-6">
                About Me
              </h2>

              {/* Info cards */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="mb-8 flex flex-row items-stretch justify-center flex-wrap gap-4"
              >
                <motion.div whileHover={{ scale: 1.03, y: -5 }} className="flex-1 max-w-xs">
                  <Card className="p-6 flex flex-col items-center gap-4 bg-card border border-border h-full">
                    <div className="w-12 h-12 bg-muted rounded-xl flex items-center justify-center">
                      <BookOpen className="w-6 h-6 text-foreground" />
                    </div>
                    <div className="text-center">
                      <p className="text-xs text-muted-foreground uppercase tracking-wide">University</p>
                      <p className="font-semibold text-foreground">University of Mindanao</p>
                    </div>
                  </Card>
                </motion.div>

                <motion.div whileHover={{ scale: 1.03, y: -5 }} className="flex-1 max-w-xs">
                  <Card className="p-6 flex flex-col items-center gap-4 bg-card border border-border h-full">
                    <div className="w-12 h-12 bg-muted rounded-xl flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-foreground" />
                    </div>
                    <div className="text-center">
                      <p className="text-xs text-muted-foreground uppercase tracking-wide">Location</p>
                      <p className="font-semibold text-foreground">Davao City, Philippines</p>
                    </div>
                  </Card>
                </motion.div>
              </motion.div>

              {/* Story */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <Card className="p-8 bg-card border border-border relative text-left">
                  <Quote className="absolute top-6 right-6 w-8 h-8 text-muted-foreground/20" />
                  <h4 className="font-bold text-foreground mb-4 text-lg">My Story</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    As a 3rd-year BS Computer Science student at the University of Mindanao, I am passionate about technology and eager to learn from industry professionals. This educational tour represents a once-in-a-lifetime opportunity to bridge the gap between academic learning and real-world application.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mt-4">
                    I am humbly seeking financial assistance to help cover transportation, accommodation, meals, and other expenses for this tour. Any contribution, no matter how small, would bring me one step closer to this dream. <strong className="text-foreground">Your support means the world to me</strong> and will help shape my future in the IT industry.
                  </p>
                </Card>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
