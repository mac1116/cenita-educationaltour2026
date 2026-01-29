'use client'

import { Calendar, MapPin, GraduationCap, Heart } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'

export function HeroSection() {
  const scrollToSupport = () => {
    document.getElementById('support')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-950 via-indigo-950 to-purple-950">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.3, 0.2]
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.35, 0.2]
          }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-3xl" />
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8"
          >
            <GraduationCap className="w-4 h-4 text-blue-400" />
            <span className="text-sm font-medium text-blue-200">BS Computer Science - University of Mindanao</span>
          </motion.div>

          {/* Main heading */}
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-4xl sm:text-5xl lg:text-7xl font-black text-white leading-tight mb-6"
          >
            Help Me Pursue My
            <motion.span 
              className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
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
            className="text-lg sm:text-xl text-blue-100/80 max-w-2xl mx-auto mb-8 leading-relaxed"
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
              className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-5 py-3 border border-white/10"
            >
              <Calendar className="w-5 h-5 text-purple-400" />
              <span className="text-white font-medium">March 3-6, 2026</span>
            </motion.div>
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-5 py-3 border border-white/10"
            >
              <MapPin className="w-5 h-5 text-pink-400" />
              <span className="text-white font-medium">Manila, Philippines</span>
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
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold px-10 py-6 text-lg rounded-full shadow-2xl shadow-purple-500/30 transition-all duration-300 hover:scale-105 hover:shadow-purple-500/50"
            >
              <Heart className="w-5 h-5 mr-2" />
              Support My Journey
            </Button>
          </motion.div>
        </div>
      </div>

      {/* --- FLIPPED SYMMETRICAL CURVE DIVIDER --- */}
<div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-[0]">
  <svg 
    viewBox="0 0 1200 120" 
    preserveAspectRatio="none" 
    className="relative block w-full h-[60px] md:h-[120px]"
  >
    {/* Flipped Hill Shape (The Valley) */}
    <path 
      d="M0,0 C300,120 900,120 1200,0 L1200,120 L0,120 Z" 
      className="fill-white"
    />
  </svg>
</div>
    </section>
    
  )
}
