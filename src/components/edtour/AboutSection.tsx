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
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-block text-sm font-semibold text-foreground/60 bg-muted px-4 py-2 rounded-full mb-4 border border-border">
              About This Opportunity
            </span>
            <h2 className="text-4xl sm:text-5xl font-black text-foreground mb-6">
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
            <Card className="bg-muted/50 border border-border p-8 mb-16">
              <p className="text-muted-foreground leading-relaxed text-center">
                The educational tour will be held in Manila for a duration of <strong className="text-foreground">four days and three nights</strong>. The total cost amounts to <strong className="text-foreground">Twenty Four Thousand Eight Hundred Pesos (₱24,800.00)</strong> per participant, which will cover transportation, accommodation, meals, entrance fees, and other tour related expenses necessary for the successful conduct of the activity.
              </p>
            </Card>
          </motion.div>

          {/* What's Included */}
          <div className="mb-20">
            <motion.h3 
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-2xl font-bold text-center mb-10"
            >
              What's Included in <span className="text-foreground">₱24,800.00</span>?
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
                    className="p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-2 bg-card border border-border group h-full"
                  >
                    <motion.div 
                      whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                      transition={{ duration: 0.4 }}
                      className="w-14 h-14 mx-auto mb-4 bg-foreground rounded-2xl flex items-center justify-center"
                    >
                      <item.icon className="w-7 h-7 text-background" />
                    </motion.div>
                    <h4 className="font-bold text-foreground mb-2">{item.title}</h4>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
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
              className="text-2xl font-bold text-center mb-10"
            >
              Why This Tour Matters
            </motion.h3>
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="grid sm:grid-cols-2 gap-6"
            >
              {benefits.map((benefit, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <Card 
                    className="p-6 flex gap-4 hover:shadow-lg transition-all duration-300 bg-card border border-border group h-full"
                  >
                    <motion.div 
                      whileHover={{ scale: 1.15, rotate: 5 }}
                      className="w-12 h-12 shrink-0 bg-foreground rounded-xl flex items-center justify-center"
                    >
                      <benefit.icon className="w-6 h-6 text-background" />
                    </motion.div>
                    <div>
                      <h4 className="font-bold text-foreground mb-2">{benefit.title}</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">{benefit.desc}</p>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
