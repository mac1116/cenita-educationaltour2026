'use client'

import { Calendar, MapPin, GraduationCap, Heart } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'

export function HeroSection() {
  const scrollToSupport = () => {
    document.getElementById('support')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-teal-950">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute top-20 left-10 w-72 h-72 bg-teal-500/15 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.15, 0.25, 0.15]
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-20 right-10 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl"
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-slate-700/20 rounded-full blur-3xl" />
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg px-4 py-2 mb-8"
          >
            <GraduationCap className="w-4 h-4 text-teal-400" />
            <span className="text-sm font-semibold tracking-wide text-teal-200 uppercase">BS Computer Science - University of Mindanao</span>
          </motion.div>

          {/* Main heading */}
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-4xl sm:text-5xl lg:text-7xl font-black text-white leading-tight mb-6 tracking-tight"
          >
            Help Me Pursue My
            <motion.span 
              className="block bg-gradient-to-r from-teal-400 via-cyan-400 to-amber-400 bg-clip-text text-transparent"
              animate={{ backgroundPosition: ['0%', '100%', '0%'] }}
              transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
              style={{ backgroundSize: '200% auto' }}
            >
              Educational Tour
            </motion.span>
          </motion.h1>

          {/* Description */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto mb-8 leading-relaxed"
          >
            I'm seeking financial support for an educational tour to Manila's top tech companies—an opportunity to learn from industry professionals and prepare for my future career in Computer Science.
          </motion.p>

          {/* Tour info badges */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap justify-center gap-4 mb-10"
          >
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2 bg-slate-800/50 backdrop-blur-sm rounded-lg px-5 py-3 border border-slate-700"
            >
              <Calendar className="w-5 h-5 text-amber-400" />
              <span className="text-white font-semibold">March 3-6, 2026</span>
            </motion.div>
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2 bg-slate-800/50 backdrop-blur-sm rounded-lg px-5 py-3 border border-slate-700"
            >
              <MapPin className="w-5 h-5 text-teal-400" />
              <span className="text-white font-semibold">Manila, Philippines</span>
            </motion.div>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Button 
              onClick={scrollToSupport}
              size="lg"
              className="bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white font-bold px-10 py-6 text-lg rounded-lg shadow-2xl shadow-teal-500/20 transition-all duration-300 hover:scale-105 hover:shadow-teal-500/30"
            >
              <Heart className="w-5 h-5 mr-2" />
              Support My Journey
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Wavy curve divider */}
      <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-[0]">
        <svg 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none" 
          className="relative block w-full h-[60px] md:h-[120px]"
        >
          <path 
            d="M0,0 C300,120 900,120 1200,0 L1200,120 L0,120 Z" 
            className="fill-background"
          />
        </svg>
      </div>
    </section>
  )
}
