'use client'

import { Trophy, Medal, Award, Star } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export function DonorsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const topDonors = [
    { rank: 1, name: 'K******Y  S.', amount: 1000, icon: Trophy, color: 'bg-foreground' },
    { rank: 2, name: 'Bank Transfer from BDO Unibank Inc. with account ending in 2368', amount: 350, icon: Medal, color: 'bg-foreground/80' },
    { rank: 3, name: 'BERNARDITA CABATUAN', amount: 200, icon: Award, color: 'bg-foreground/60' },
    { rank: 4, name: 'LO**E J** M.', amount: 1, icon: Star, color: 'bg-muted-foreground' },
  ]

  return (
    <section ref={ref} className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-block text-sm font-semibold text-foreground/60 bg-background px-4 py-2 rounded-full mb-4 border border-border">
              Recognition
            </span>
            <h2 className="text-4xl sm:text-5xl font-black text-foreground mb-4">
              Top Givers
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Honoring our most generous supporters who made this tour possible.
            </p>
          </motion.div>

          {/* Top Donors Table */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="overflow-hidden bg-card border border-border">
              <div className="bg-foreground p-4 text-background text-center">
                <h3 className="text-xl font-bold flex items-center justify-center gap-2">
                  <motion.div animate={{ rotate: [0, 15, -15, 0] }} transition={{ duration: 1, repeat: Infinity, repeatDelay: 2 }}>
                    <Trophy className="w-6 h-6" />
                  </motion.div>
                  Leaderboard
                </h3>
              </div>
              
              <div className="divide-y divide-border">
                {topDonors.map((donor, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                    className={`flex items-center gap-4 p-5 transition-colors hover:bg-muted/50 ${
                      donor.rank === 1 ? 'bg-muted/30' : ''
                    }`}
                  >
                    {/* Rank */}
                    <motion.div 
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className={`w-10 h-10 rounded-full ${donor.color} flex items-center justify-center shadow-lg`}
                    >
                      {donor.rank <= 3 ? (
                        <donor.icon className="w-5 h-5 text-background" />
                      ) : (
                        <span className="text-background font-bold">{donor.rank}</span>
                      )}
                    </motion.div>

                    {/* Name */}
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-foreground truncate">{donor.name}</p>
                      <p className="text-xs text-muted-foreground">Supporter #{donor.rank}</p>
                    </div>

                    {/* Amount */}
                    <div className="text-right shrink-0">
                      <p className={`font-bold ${donor.rank === 1 ? 'text-xl' : ''} text-foreground`}>
                        ₱{donor.amount.toLocaleString()}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
