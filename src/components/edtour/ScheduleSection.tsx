'use client'

import { Plane, Building2, Utensils, Hotel, Camera, Sparkles, ShoppingBag } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { motion } from 'framer-motion'

export function ScheduleSection() {
  const schedule = [
    {
      day: 1,
      date: 'March 3, 2026',
      title: 'Arrival & Company Visits',
      activities: [
        { icon: Plane, text: 'Travel from Davao to Manila' },
        { icon: Building2, text: 'Company Visit 1' },
        { icon: Utensils, text: 'Lunch' },
        { icon: Building2, text: 'Company Visit 2' },
        { icon: Utensils, text: 'Dinner' },
        { icon: Hotel, text: 'Hotel Check-in' },
      ]
    },
    {
      day: 2,
      date: 'March 4, 2026',
      title: 'Tech & Culture',
      activities: [
        { icon: Utensils, text: 'Breakfast' },
        { icon: Camera, text: 'Heritage/Cultural Tour' },
        { icon: Utensils, text: 'Lunch' },
        { icon: Building2, text: 'Company Visit 3' },
        { icon: Utensils, text: 'Dinner' },
        { icon: Hotel, text: 'Overnight' },
      ]
    },
    {
      day: 3,
      date: 'March 5, 2026',
      title: 'Fun & Learning',
      activities: [
        { icon: Utensils, text: 'Breakfast' },
        { icon: Building2, text: 'Company Visit 4' },
        { icon: Utensils, text: 'Lunch' },
        { icon: Sparkles, text: 'Enchanted Kingdom Visit' },
        { icon: Utensils, text: 'Dinner' },
        { icon: Hotel, text: 'Overnight' },
      ]
    },
    {
      day: 4,
      date: 'March 6, 2026',
      title: 'Departure',
      activities: [
        { icon: Utensils, text: 'Breakfast' },
        { icon: Hotel, text: 'Hotel Check-out' },
        { icon: Building2, text: 'Company Visit 5' },
        { icon: Utensils, text: 'Lunch' },
        { icon: ShoppingBag, text: 'Free & Easy/Shopping' },
        { icon: Utensils, text: 'Dinner' },
        { icon: Plane, text: 'Travel back to Davao' },
      ]
    },
  ]

  return (
    <section className="py-28 bg-white">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="inline-block text-xs font-semibold text-black/50 tracking-[0.2em] uppercase mb-4">
            Tour Schedule
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-black mb-4 tracking-tight">
            4-Day Itinerary
          </h2>
          <p className="text-lg text-black/50 max-w-2xl mx-auto">
            A carefully planned schedule packed with learning opportunities and professional experiences.
          </p>
        </motion.div>

        {/* Schedule Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {schedule.map((day, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-black/10 hover:border-black bg-white group">
                {/* Day Header */}
                <div className="bg-black p-6 text-white relative overflow-hidden">
                  <div className="text-8xl font-black absolute -top-4 -right-2 text-white/10">
                    {day.day}
                  </div>
                  <p className="text-white/50 text-sm font-medium">Day {day.day}</p>
                  <p className="font-bold text-white/80">{day.date}</p>
                  <h3 className="text-lg font-bold mt-2 relative z-10">{day.title}</h3>
                </div>

                {/* Activities */}
                <div className="p-5">
                  <ul className="space-y-3">
                    {day.activities.map((activity, actIndex) => (
                      <li key={actIndex} className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-black/5 group-hover:bg-black/10 flex items-center justify-center shrink-0 transition-colors">
                          <activity.icon className="w-4 h-4 text-black/50" />
                        </div>
                        <span className="text-sm text-black/70">{activity.text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
