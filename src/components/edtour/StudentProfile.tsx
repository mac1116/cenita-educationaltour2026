'use client'

import { GraduationCap, MapPin, BookOpen, Quote } from 'lucide-react'
import { Card } from '@/components/ui/card'

export function StudentProfile() {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Profile Image */}
            <div className="relative">
              <div className="aspect-square max-w-md mx-auto relative">
                {/* Decorative rings */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl rotate-6 opacity-20" />
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500 rounded-3xl -rotate-3 opacity-20" />
                
                {/* Main image container */}
                <div className="relative bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl p-1">
                  <div className="bg-muted rounded-3xl aspect-square flex items-center justify-center">
                    <div className="text-center p-8">
                      <div className="w-32 h-32 mx-auto mb-4 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center">
                        <GraduationCap className="w-16 h-16 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-foreground">Mheil Andrei N. Cenita</h3>
                      <p className="text-muted-foreground">3rd Year - BS Computer Science</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Profile Info */}
            <div>
              <span className="inline-block text-sm font-semibold text-purple-500 bg-purple-500/10 px-4 py-2 rounded-full mb-4">
                Meet the Student
              </span>
              
              <h2 className="text-4xl font-black text-foreground mb-6">
                About Me
              </h2>

              {/* Info cards */}
              <div className="space-y-4 mb-8">
                <Card className="p-4 flex items-center gap-4 bg-card border border-border">
                  <div className="w-10 h-10 bg-blue-500/10 rounded-xl flex items-center justify-center">
                    <BookOpen className="w-5 h-5 text-blue-500" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">University</p>
                    <p className="font-semibold text-foreground">University of Mindanao</p>
                    <p className="text-sm text-muted-foreground">College of Computing Education</p>
                  </div>
                </Card>

                <Card className="p-4 flex items-center gap-4 bg-card border border-border">
                  <div className="w-10 h-10 bg-purple-500/10 rounded-xl flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-purple-500" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Location</p>
                    <p className="font-semibold text-foreground">Davao City, Philippines</p>
                  </div>
                </Card>
              </div>

              {/* Story */}
              <Card className="p-6 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/30 dark:to-purple-950/30 border-0 relative">
                <Quote className="absolute top-4 right-4 w-8 h-8 text-blue-500/20" />
                <h4 className="font-bold text-foreground mb-3">My Story</h4>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  As a 3rd-year BS Computer Science student at the University of Mindanao, I am passionate about technology and eager to learn from industry professionals. This educational tour represents a once-in-a-lifetime opportunity to bridge the gap between academic learning and real-world application.
                </p>
                <p className="text-muted-foreground leading-relaxed text-sm mt-3">
                  I am humbly seeking financial assistance to help cover transportation, accommodation, meals, and other expenses for this tour. Any contribution, no matter how small, would bring me one step closer to this dream. <strong className="text-foreground">Your support means the world to me</strong> and will help shape my future in the IT industry.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
