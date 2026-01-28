'use client'

import { GraduationCap, Heart, Calendar } from 'lucide-react'

export function FooterSection() {
  return (
    <footer className="bg-gradient-to-b from-background to-muted/50 border-t border-border">
      <div className="container mx-auto px-6 py-12">
        <div className="text-center">
          {/* Logo/Title */}
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
              <GraduationCap className="w-5 h-5 text-white" />
            </div>
            <h3 className="text-xl font-bold text-foreground">Manila EdTour 2026</h3>
          </div>

          <p className="text-muted-foreground mb-2">
            BS Computer Science - University of Mindanao
          </p>

          <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground mb-8">
            <Calendar className="w-4 h-4" />
            <span>Educational Tour • March 3-6, 2026</span>
          </div>

          {/* Divider */}
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full mb-8" />

          {/* Made with love */}
          <p className="text-sm text-muted-foreground flex items-center justify-center gap-1 mb-2">
            Made with <Heart className="w-4 h-4 text-red-500 fill-red-500" /> and hope
          </p>

          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} All rights reserved. Thank you for your support.
          </p>
        </div>
      </div>
    </footer>
  )
}
