'use client'

import { GraduationCap, Heart, Calendar } from 'lucide-react'

export function FooterSection() {
  return (
    <footer className="bg-white border-t-4 border-black">
      <div className="container mx-auto px-6 py-12">
        <div className="text-center">
          {/* Logo/Title */}
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center">
              <GraduationCap className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl font-black text-black">Manila EdTour 2026</h3>
          </div>

          <p className="text-black/50 mb-2 font-medium">
            BS Computer Science • University of Mindanao
          </p>

          <div className="flex items-center justify-center gap-2 text-sm text-black/40 mb-8">
            <Calendar className="w-4 h-4" />
            <span>Educational Tour • March 3-6, 2026</span>
          </div>

          {/* Divider */}
          <div className="w-24 h-1 bg-black mx-auto mb-8" />

          {/* Made with love */}
          <p className="text-sm text-black/50 flex items-center justify-center gap-1 mb-2">
            Made with <Heart className="w-4 h-4 text-black fill-black" /> and hope
          </p>

          <p className="text-xs text-black/40">
            © {new Date().getFullYear()} All rights reserved. Thank you for your support.
          </p>
        </div>
      </div>
    </footer>
  )
}
