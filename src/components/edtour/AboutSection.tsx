'use client'

import { Plane, Hotel, Utensils, Ticket, Package, Building2, Users, Lightbulb, Briefcase } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const inclusions = [
    { icon: Plane, title: 'Transportation', desc: 'Round-trip travel and local transfers' },
    { icon: Hotel, title: 'Accommodation', desc: '3 nights hotel stay' },
    { icon: Utensils, title: 'Meals', desc: 'Breakfast, lunch & dinner' },
    { icon: Ticket, title: 'Entrance Fees', desc: 'All venue admission costs' },
    { icon: Package, title: 'Other Expenses', desc: 'Tour-related necessities' },
  ]

  const benefits = [
    { 
      icon: Building2, 
      title: 'Tech Company Visits', 
      desc: 'Tour leading technology companies in Manila and learn about real-world IT operations and innovations.' 
    },
    { 
      icon: Users, 
      title: 'Professional Networking', 
      desc: 'Connect with industry professionals and gain insights into career opportunities in the tech field.' 
    },
    { 
      icon: Lightbulb, 
      title: 'Hands-on Learning', 
      desc: 'Experience practical applications of classroom knowledge through workshops and demonstrations.' 
    },
    { 
      icon: Briefcase, 
      title: 'Career Preparation', 
      desc: 'Prepare for future employment by understanding industry standards and professional practices.' 
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  }

  return (
    <section ref={ref} className="py-24 bg-background relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-sm font-bold text-primary bg-primary/10 px-4 py-2 rounded-lg mb-4 uppercase tracking-wide">
            About This Opportunity
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-foreground mb-6 tracking-tight">
            Educational Tour to Manila
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Our department is organizing a transformative educational tour to expose 3rd-year BS Computer Science students to the professional IT industry in the Philippines' capital.
          </p>
        </motion.div>

        {/* Tour Description Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Card className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900/50 dark:to-slate-800/50 border border-border p-8 mb-16 max-w-4xl mx-auto shadow-sm hover:shadow-md transition-shadow duration-300">
            <p className="text-muted-foreground leading-relaxed text-center text-base">
              The educational tour will be held in Manila for a duration of <strong className="text-foreground font-semibold">four days and three nights</strong>. The total cost amounts to <strong className="text-primary font-semibold">Twenty Four Thousand Eight Hundred Pesos (₱24,800.00)</strong> per participant, which will cover transportation, accommodation, meals, entrance fees, and other tour related expenses necessary for the successful conduct of the activity.
            </p>
          </Card>
        </motion.div>

        {/* What's Included */}
        <div className="mb-20">
          <motion.h3 
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-2xl font-bold text-center mb-10 tracking-tight"
          >
            What's Included in <span className="text-primary">₱24,800.00</span>?
          </motion.h3>
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4"
          >
            {inclusions.map((item, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card 
                  className="p-6 text-center hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 hover:-translate-y-1 bg-card border border-border group"
                >
                  <div className="w-14 h-14 mx-auto mb-4 bg-gradient-to-br from-primary to-teal-600 rounded-xl flex items-center justify-center shadow-md shadow-primary/20 group-hover:shadow-lg group-hover:shadow-primary/30 transition-shadow">
                    <item.icon className="w-7 h-7 text-white" />
                  </div>
                  <h4 className="font-semibold text-foreground mb-1">{item.title}</h4>
                  <p className="text-sm text-muted-foreground leading-snug">{item.desc}</p>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Benefits */}
        <div>
          <motion.h3 
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-2xl font-bold text-center mb-10 tracking-tight"
          >
            Why This Tour Matters
          </motion.h3>
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto"
          >
            {benefits.map((benefit, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card 
                  className="p-6 flex gap-4 hover:shadow-lg hover:shadow-amber-500/5 transition-all duration-300 hover:-translate-y-1 bg-card border border-border group"
                >
                  <div className="w-12 h-12 shrink-0 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl flex items-center justify-center shadow-md shadow-amber-500/20 group-hover:shadow-lg group-hover:shadow-amber-500/30 transition-shadow">
                    <benefit.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">{benefit.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{benefit.desc}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
