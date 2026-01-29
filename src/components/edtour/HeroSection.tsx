'use client'

import { Calendar, MapPin, GraduationCap, Heart, TrendingUp } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

// Shared fundraising data
const FUNDRAISING_DATA = {
  totalRaised: 1551,
  goal: 24800
}

export function HeroSection() {
  const [animatedTotal, setAnimatedTotal] = useState(0)
  const [animatedPercentage, setAnimatedPercentage] = useState(0)

  const { totalRaised, goal } = FUNDRAISING_DATA
  const percentage = Math.min((totalRaised / goal) * 100, 100)

  useEffect(() => {
    const duration = 2000
    const steps = 60
    const stepTime = duration / steps
    let step = 0

    const interval = setInterval(() => {
      step++
      const progress = step / steps
      const easeOut = 1 - Math.pow(1 - progress, 3)
      setAnimatedTotal(Math.round(totalRaised * easeOut))
      setAnimatedPercentage(percentage * easeOut)
      if (step >= steps) clearInterval(interval)
    }, stepTime)

    return () => clearInterval(interval)
  }, [totalRaised, percentage])

  const scrollToSupport = () => {
    document.getElementById('support')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute top-20 left-10 w-72 h-72 bg-white/5 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.05, 0.1, 0.05]
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-20 right-10 w-96 h-96 bg-white/5 rounded-full blur-3xl"
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.05, 0.1, 0.05]
          }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />
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
            <GraduationCap className="w-4 h-4 text-white/80" />
            <span className="text-sm font-medium text-white/80">BS Computer Science - University of Mindanao</span>
          </motion.div>

          {/* Main heading */}
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-4xl sm:text-5xl lg:text-7xl font-black text-white leading-tight mb-6"
          >
            Help Me Pursue My
            <span className="block text-white">
              Educational Tour
            </span>
          </motion.h1>

          {/* Progress Bar - Right after heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="max-w-2xl mx-auto mb-8 bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
          >
            <div className="flex items-center justify-between mb-3">
              <div className="text-left">
                <p className="text-xs text-white/60 uppercase tracking-wide">Current</p>
                <p className="text-2xl font-black text-white">₱{animatedTotal.toLocaleString()}</p>
              </div>
              <div className="flex items-center gap-2 text-emerald-400">
                <TrendingUp className="w-5 h-5" />
                <span className="font-bold text-lg">{animatedPercentage.toFixed(1)}%</span>
              </div>
              <div className="text-right">
                <p className="text-xs text-white/60 uppercase tracking-wide">Goal</p>
                <p className="text-2xl font-black text-white">₱{goal.toLocaleString()}</p>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="relative h-4 bg-white/10 rounded-full overflow-hidden">
              <motion.div 
                className="absolute inset-y-0 left-0 bg-gradient-to-r from-white to-white/80 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${percentage}%` }}
                transition={{ duration: 1.5, ease: "easeOut", delay: 0.8 }}
              />
            </div>

            <p className="text-center text-sm text-white/60 mt-3">
              ₱{(goal - totalRaised).toLocaleString()} more to reach the goal
            </p>
          </motion.div>

          {/* Description */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg sm:text-xl text-white/70 max-w-2xl mx-auto mb-8 leading-relaxed"
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
              <Calendar className="w-5 h-5 text-white/80" />
              <span className="text-white font-medium">March 3-6, 2026</span>
            </motion.div>
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-5 py-3 border border-white/10"
            >
              <MapPin className="w-5 h-5 text-white/80" />
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
              className="bg-white text-slate-900 hover:bg-white/90 font-bold px-10 py-6 text-lg rounded-full shadow-2xl transition-all duration-300 hover:scale-105"
            >
              <Heart className="w-5 h-5 mr-2" />
              Support My Journey
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  )
}

export { FUNDRAISING_DATA }
