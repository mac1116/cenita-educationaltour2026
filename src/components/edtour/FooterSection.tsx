'use client'

import { GraduationCap, Heart, Calendar } from 'lucide-react'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export function FooterSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <footer ref={ref} className="bg-gradient-to-b from-background to-muted/50 border-t border-border">
      <div className="container mx-auto px-6 py-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          {/* Logo/Title */}
          <motion.div 
            initial={{ scale: 0.9 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center gap-3 mb-4"
          >
            <motion.div 
              whileHover={{ rotate: 10, scale: 1.1 }}
              className="w-10 h-10 bg-gradient-to-br from-primary to-teal-600 rounded-xl flex items-center justify-center"
            >
              <GraduationCap className="w-5 h-5 text-white" />
            </motion.div>
            <h3 className="text-xl font-bold text-foreground tracking-tight">Manila EdTour 2026</h3>
          </motion.div>

          <p className="text-muted-foreground mb-2">
            BS Computer Science - University of Mindanao
          </p>

          <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground mb-8">
            <Calendar className="w-4 h-4" />
            <span>Educational Tour • March 3-6, 2026</span>
          </div>

          {/* Divider */}
          <motion.div 
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="w-24 h-1 bg-gradient-to-r from-primary to-teal-600 mx-auto rounded-full mb-8" 
          />

          {/* Made with love */}
          <p className="text-sm text-muted-foreground flex items-center justify-center gap-1 mb-2">
            Made with 
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <Heart className="w-4 h-4 text-red-500 fill-red-500" />
            </motion.span>
            and hope
          </p>

          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} All rights reserved. Thank you for your support.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
