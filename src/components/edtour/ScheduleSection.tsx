'use client'

import { Plane, Building2, Utensils, Hotel, Camera, Sparkles, ShoppingBag } from 'lucide-react'
import { Card } from '@/components/ui/card'

export function ScheduleSection() {
  const schedule = [
    {
      day: 1,
      date: 'March 3, 2026',
      title: 'Arrival and Company Visits',
      color: 'from-blue-500 to-blue-600',
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
      title: 'Tech Exploration & Cultural Immersion',
      color: 'from-purple-500 to-purple-600',
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
      title: 'Fun and Learning Day',
      color: 'from-pink-500 to-pink-600',
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
      title: 'Departure and Farewell',
      color: 'from-emerald-500 to-emerald-600',
      activities: [
        { icon: Utensils, text: 'Breakfast' },
        { icon: Hotel, text: 'Hotel Check-out' },
        { icon: Building2, text: 'Company Visit 5' },
        { icon: Utensils, text: 'Lunch' },
        { icon: ShoppingBag, text: 'Free & Easy/Shopping Time' },
        { icon: Utensils, text: 'Dinner' },
        { icon: Plane, text: 'Travel back to Davao' },
      ]
    },
  ]

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-sm font-semibold text-pink-500 bg-pink-500/10 px-4 py-2 rounded-full mb-4">
            Tour Schedule
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-foreground mb-4">
            4-Day Itinerary
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A carefully planned schedule packed with learning opportunities and professional experiences.
          </p>
        </div>

        {/* Schedule Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {schedule.map((day, index) => (
            <Card 
              key={index} 
              className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-card border border-border"
            >
              {/* Day Header */}
              <div className={`bg-gradient-to-r ${day.color} p-6 text-white relative`}>
                <p className="text-white/80 text-sm font-medium">Day {day.day}</p>
                <p className="font-bold">{day.date}</p>
                <h3 className="text-lg font-bold mt-2">{day.title}</h3>
              </div>

              {/* Activities */}
              <div className="p-4">
                <ul className="space-y-3">
                  {day.activities.map((activity, actIndex) => (
                    <li key={actIndex} className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-muted flex items-center justify-center shrink-0">
                        <activity.icon className="w-4 h-4 text-muted-foreground" />
                      </div>
                      <span className="text-sm text-foreground">{activity.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
