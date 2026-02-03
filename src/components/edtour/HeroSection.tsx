'use client'

import { Calendar, MapPin, GraduationCap, Heart, Sparkles, Rocket, Star } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'

export function HeroSection() {
  const scrollToSupport = () => {
    document.getElementById('support')?.scrollIntoView({ behavior: 'smooth' })
  }

  // Floating particles configuration
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 4 + 2,
    duration: Math.random() * 3 + 4,
    delay: Math.random() * 2,
  }))

  // Floating icons configuration
  const floatingIcons = [
    { Icon: Rocket, x: '10%', y: '20%', delay: 0, rotate: 45 },
    { Icon: Star, x: '85%', y: '15%', delay: 0.5, rotate: -15 },
    { Icon: Sparkles, x: '15%', y: '70%', delay: 1, rotate: 20 },
    { Icon: GraduationCap, x: '80%', y: '65%', delay: 1.5, rotate: -10 },
  ]

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-teal-950">
      {/* Animated gradient orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute top-20 left-10 w-72 h-72 bg-teal-500/20 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.3, 1],
            x: [0, 30, 0],
            y: [0, -20, 0],
            opacity: [0.2, 0.35, 0.2]
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute top-1/3 right-20 w-80 h-80 bg-cyan-500/15 rounded-full blur-3xl"
          animate={{ 
            scale: [1.2, 1, 1.2],
            x: [0, -40, 0],
            opacity: [0.15, 0.25, 0.15]
          }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-20 right-10 w-96 h-96 bg-amber-500/15 rounded-full blur-3xl"
          animate={{ 
            scale: [1.2, 1, 1.2],
            y: [0, 30, 0],
            opacity: [0.15, 0.25, 0.15]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-1/3 left-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.4, 1],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-slate-700/15 rounded-full blur-3xl" />
      </div>

      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute rounded-full bg-white/30"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: particle.size,
              height: particle.size,
            }}
            animate={{
              y: [-20, 20, -20],
              opacity: [0.2, 0.6, 0.2],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Floating decorative icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {floatingIcons.map(({ Icon, x, y, delay, rotate }, index) => (
          <motion.div
            key={index}
            className="absolute"
            style={{ left: x, top: y }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              opacity: [0.15, 0.3, 0.15],
              y: [-10, 10, -10],
              rotate: [rotate - 5, rotate + 5, rotate - 5],
              scale: 1,
            }}
            transition={{
              opacity: { duration: 3, repeat: Infinity, delay },
              y: { duration: 4, repeat: Infinity, delay, ease: "easeInOut" },
              rotate: { duration: 5, repeat: Infinity, delay },
              scale: { duration: 0.5, delay },
            }}
          >
            <Icon className="w-8 h-8 md:w-12 md:h-12 text-white/20" />
          </motion.div>
        ))}
      </div>

      {/* Animated grid pattern */}
      <motion.div 
        className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px]"
        animate={{ 
          backgroundPosition: ['0px 0px', '60px 60px'],
        }}
        transition={{ 
          duration: 20, 
          repeat: Infinity, 
          ease: "linear" 
        }}
      />

      {/* Radial spotlight effect */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(15,23,42,0.4)_70%)]" />

      <div className="container mx-auto px-6 relative z-10 pt-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Animated sparkle above badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, type: "spring", stiffness: 200 }}
            className="flex justify-center mb-2"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="w-6 h-6 text-amber-400" />
            </motion.div>
          </motion.div>

          {/* Badge with glow effect */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative inline-flex items-center gap-2 mb-4"
          >
            <motion.div
              className="absolute inset-0 bg-teal-500/20 rounded-xl blur-xl"
              animate={{ opacity: [0.5, 0.8, 0.5], scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <div className="relative inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl px-4 py-2">
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <GraduationCap className="w-5 h-5 text-teal-400" />
              </motion.div>
              <span className="text-sm font-bold tracking-wide text-teal-200 uppercase">BS Computer Science - University of Mindanao</span>
            </div>
          </motion.div>

          {/* Main heading with enhanced animation */}
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight mb-4 tracking-tight"
          >
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Help Me Pursue My
            </motion.span>
            <motion.span 
              className="block bg-gradient-to-r from-teal-400 via-cyan-300 to-amber-400 bg-clip-text text-transparent relative"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.5, type: "spring" }}
            >
              <motion.span
                animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                style={{ backgroundSize: '200% auto' }}
                className="bg-gradient-to-r from-teal-400 via-cyan-300 to-amber-400 bg-clip-text text-transparent"
              >
                Educational Tour
              </motion.span>
            </motion.span>
          </motion.h1>

          {/* Description with staggered word animation feel */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto mb-6 leading-relaxed"
          >
            I'm seeking financial support for an educational tour to Manila's top tech companies—an opportunity to learn from industry professionals and prepare for my future career in Computer Science.
          </motion.p>

          {/* Enhanced tour info badges */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex flex-wrap justify-center gap-3 mb-6"
          >
            <motion.div 
              whileHover={{ scale: 1.08, y: -3 }}
              whileTap={{ scale: 0.98 }}
              className="group relative flex items-center gap-2 bg-slate-800/60 backdrop-blur-md rounded-xl px-4 py-3 border border-slate-700/50 cursor-pointer overflow-hidden"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-amber-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"
              />
              <motion.div
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="relative"
              >
                <Calendar className="w-6 h-6 text-amber-400" />
              </motion.div>
              <div className="relative">
                <span className="text-xs text-slate-400 uppercase tracking-wider block">Tour Date</span>
                <span className="text-white font-bold text-lg">March 3-6, 2026</span>
              </div>
            </motion.div>
            
            <motion.div 
              whileHover={{ scale: 1.08, y: -3 }}
              whileTap={{ scale: 0.98 }}
              className="group relative flex items-center gap-2 bg-slate-800/60 backdrop-blur-md rounded-xl px-4 py-3 border border-slate-700/50 cursor-pointer overflow-hidden"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-teal-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"
              />
              <motion.div
                animate={{ y: [0, -3, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="relative"
              >
                <MapPin className="w-6 h-6 text-teal-400" />
              </motion.div>
              <div className="relative">
                <span className="text-xs text-slate-400 uppercase tracking-wider block">Destination</span>
                <span className="text-white font-bold text-lg">Manila, Philippines</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Enhanced CTA Button with multiple effects */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="relative inline-block"
          >
            {/* Animated rings behind button */}
            <motion.div
              className="absolute inset-0 -m-4 rounded-2xl border-2 border-teal-500/30"
              animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <motion.div
              className="absolute inset-0 -m-8 rounded-3xl border border-teal-500/20"
              animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0, 0.3] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
            />
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button 
                onClick={scrollToSupport}
                size="lg"
                className="relative bg-gradient-to-r from-teal-500 via-teal-600 to-cyan-600 hover:from-teal-400 hover:via-teal-500 hover:to-cyan-500 text-white font-bold px-8 py-5 text-base rounded-xl shadow-2xl shadow-teal-500/30 transition-all duration-300 overflow-hidden group"
              >
                {/* Button shine effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full"
                  animate={{ translateX: ['-100%', '100%'] }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                />
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="mr-3"
                >
                  <Heart className="w-5 h-5" fill="currentColor" />
                </motion.div>
                <span className="relative z-10">Support My Journey</span>
              </Button>
            </motion.div>
          </motion.div>

          {/* Scroll indicator - positioned above the wave */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="mt-6 flex flex-col items-center gap-2"
          >
            <span className="text-xs text-slate-400 uppercase tracking-widest">Scroll</span>
            <motion.div
              className="w-6 h-10 rounded-full border-2 border-slate-500 flex justify-center pt-2"
            >
              <motion.div
                animate={{ y: [0, 12, 0], opacity: [1, 0.3, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-1.5 h-1.5 bg-teal-400 rounded-full"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Static wavy curve divider */}
      <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-[0]">
        <svg 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none" 
          className="relative block w-full h-[80px] md:h-[120px]"
        >
          <path 
            d="M0,0 C300,100 900,100 1200,0 L1200,120 L0,120 Z" 
            className="fill-background"
          />
        </svg>
      </div>
    </section>
  )
}
