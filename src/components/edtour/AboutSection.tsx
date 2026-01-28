'use client'

import { Plane, Hotel, Utensils, Ticket, Package, Building2, Users, Lightbulb, Briefcase } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { motion } from 'framer-motion'

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.6 }
}

const staggerContainer = {
  initial: {},
  whileInView: { transition: { staggerChildren: 0.1 } },
  viewport: { once: true }
}

export function AboutSection() {
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
      desc: 'Tour leading technology companies in Manila and learn about real-world IT operations.' 
    },
    { 
      icon: Users, 
      title: 'Professional Networking', 
      desc: 'Connect with industry professionals and gain insights into career opportunities.' 
    },
    { 
      icon: Lightbulb, 
      title: 'Hands-on Learning', 
      desc: 'Experience practical applications through workshops and demonstrations.' 
    },
    { 
      icon: Briefcase, 
      title: 'Career Preparation', 
      desc: 'Understand industry standards and professional practices.' 
    },
  ]

  return (
    <section className="py-28 bg-white relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div {...fadeInUp} className="text-center mb-20">
          <span className="inline-block text-xs font-semibold text-black/50 tracking-[0.2em] uppercase mb-4">
            About This Opportunity
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-black mb-6 tracking-tight">
            Educational Tour to Manila
          </h2>
          <p className="text-lg text-black/50 max-w-3xl mx-auto leading-relaxed">
            Our department is organizing a transformative educational tour to expose 3rd-year BS Computer Science students to the professional IT industry.
          </p>
        </motion.div>

        {/* Tour Description Card */}
        <motion.div {...fadeInUp}>
          <Card className="bg-black text-white border-0 p-10 mb-20 max-w-4xl mx-auto">
            <p className="text-white/70 leading-relaxed text-center text-lg">
              The educational tour will be held in Manila for <span className="text-white font-semibold">four days and three nights</span>. The total cost amounts to <span className="text-white font-semibold">₱24,800.00</span> per participant, covering transportation, accommodation, meals, entrance fees, and all tour-related expenses.
            </p>
          </Card>
        </motion.div>

        {/* What's Included */}
        <div className="mb-24">
          <motion.h3 {...fadeInUp} className="text-2xl font-bold text-center mb-12 text-black">
            What's Included in <span className="border-b-4 border-black">₱24,800.00</span>
          </motion.h3>
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4"
          >
            {inclusions.map((item, index) => (
              <motion.div
                key={index}
                variants={{
                  initial: { opacity: 0, y: 30 },
                  whileInView: { opacity: 1, y: 0 }
                }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="p-6 text-center hover:bg-black hover:text-white transition-all duration-300 group border-2 border-black/10 hover:border-black bg-white">
                  <div className="w-14 h-14 mx-auto mb-4 bg-black group-hover:bg-white rounded-full flex items-center justify-center transition-colors">
                    <item.icon className="w-6 h-6 text-white group-hover:text-black transition-colors" />
                  </div>
                  <h4 className="font-bold mb-2">{item.title}</h4>
                  <p className="text-sm opacity-60">{item.desc}</p>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Benefits */}
        <div>
          <motion.h3 {...fadeInUp} className="text-2xl font-bold text-center mb-12 text-black">
            Why This Tour Matters
          </motion.h3>
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto"
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                variants={{
                  initial: { opacity: 0, x: index % 2 === 0 ? -30 : 30 },
                  whileInView: { opacity: 1, x: 0 }
                }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="p-6 flex gap-4 border-2 border-black/10 hover:border-black transition-all duration-300 bg-white group">
                  <div className="w-12 h-12 shrink-0 bg-black rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <benefit.icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-black mb-2">{benefit.title}</h4>
                    <p className="text-sm text-black/50 leading-relaxed">{benefit.desc}</p>
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
