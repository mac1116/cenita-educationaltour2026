'use client'

import { Trophy, Medal, Award, TrendingUp, Target } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { motion, useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'

export function DonorsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [animatedTotal, setAnimatedTotal] = useState(0)
  const [animatedPercentage, setAnimatedPercentage] = useState(0)

  const topDonors = [
    { rank: 1, name: 'Bank Transfer from Coins.ph (DCPay) with account ending in 1**7.', amount: 5209 },
    { rank: 2, name: 'Bank Transfer from Philippine National Bank (PNB) with account ending in 8**5', amount: 1000 },
    { rank: 3, name: 'N****N L***Z', amount: 1000 },
    { rank: 4, name: 'Bank Transfer from BPI/VIBE by BPI with account ending in 8**6', amount: 1000 },
    { rank: 5, name: 'H***Y A**D', amount: 3000 },
    { rank: 6, name: 'K******Y  S.', amount: 1000 },
    { rank: 7, name: 'M** GI*A O', amount: 800 },
    { rank: 8, name: 'SU****E G.', amount: 500 },
    { rank: 9, name: 'R****N A**B', amount: 500 },
    { rank: 10, name: 'A******E M.', amount: 500 },
    { rank: 11, name: 'Bank Transfer from BDO Unibank Inc. with account ending in 2**8', amount: 350 },
    { rank: 12, name: 'B********A C******N', amount: 200 },
    { rank: 13, name: 'KE**N JO*N A.', amount: 10 },
    { rank: 14, name: 'RO***T JH*N A.', amount: 5 },
    { rank: 15, name: 'LO**E J** M.', amount: 1 },
  ]

  const getRankStyle = (rank: number) => {
    if (rank === 1) return 'from-yellow-400 to-amber-500'
    if (rank === 2) return 'from-gray-300 to-gray-400'
    if (rank === 3) return 'from-amber-600 to-amber-700'
    const colors = ['from-slate-500 to-slate-600', 'from-blue-500 to-blue-600', 'from-teal-500 to-teal-600', 'from-indigo-500 to-indigo-600', 'from-emerald-500 to-emerald-600', 'from-violet-500 to-violet-600']
    return colors[(rank - 4) % colors.length]
  }

  const totalRaised = topDonors.reduce((sum, donor) => sum + donor.amount, 0)
  const goal = 24800
  const percentage = Math.min((totalRaised / goal) * 100, 100)

  useEffect(() => {
    if (isInView) {
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
    }
  }, [isInView, totalRaised, percentage])

  return (
    <section ref={ref} className="py-24 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-sm font-bold text-amber-600 bg-amber-500/10 px-4 py-2 rounded-lg mb-4 uppercase tracking-wide">
            Recognition
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-foreground mb-4 tracking-tight">
            Top Givers
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Honoring our most generous supporters who made this tour possible.
          </p>
        </motion.div>

        {/* Fundraising Goal Progress */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Card className="max-w-3xl mx-auto mb-16 p-8 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900/50 dark:to-slate-800/50 border border-border shadow-lg shadow-primary/5">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <motion.div 
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="w-12 h-12 bg-gradient-to-br from-primary to-teal-600 rounded-xl flex items-center justify-center"
                >
                  <Target className="w-6 h-6 text-white" />
                </motion.div>
                <div>
                  <p className="text-sm text-muted-foreground uppercase tracking-wide font-medium">Total Raised</p>
                  <p className="text-3xl font-black text-primary">₱{animatedTotal.toLocaleString()}</p>
                </div>
              </div>
              <div className="text-right">
                <div className="flex items-center gap-2 text-primary">
                  <TrendingUp className="w-5 h-5" />
                  <span className="font-bold">{animatedPercentage.toFixed(1)}%</span>
                </div>
                <p className="text-sm text-muted-foreground">of ₱{goal.toLocaleString()} goal</p>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="relative h-6 bg-muted rounded-lg overflow-hidden mb-4">
              <motion.div 
                className="absolute inset-y-0 left-0 bg-gradient-to-r from-primary via-teal-500 to-cyan-500 rounded-lg"
                initial={{ width: 0 }}
                animate={isInView ? { width: `${percentage}%` } : {}}
                transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-xs font-bold text-foreground drop-shadow">
                  ₱{animatedTotal.toLocaleString()} raised
                </span>
              </div>
            </div>

            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">₱0</span>
              <span className="font-bold text-foreground">₱{(goal - totalRaised).toLocaleString()} to go!</span>
              <span className="text-muted-foreground">₱{goal.toLocaleString()}</span>
            </div>
          </Card>
        </motion.div>

        {/* Top Donors Table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Card className="max-w-2xl mx-auto overflow-hidden bg-card border border-border shadow-lg shadow-amber-500/5">
            <div className="bg-gradient-to-r from-amber-500 to-amber-600 p-5 text-white text-center">
              <h3 className="text-xl font-semibold flex items-center justify-center gap-3 tracking-tight">
                <Trophy className="w-6 h-6" />
                Leaderboard
              </h3>
            </div>
            
            <div className="divide-y divide-border">
              {topDonors.map((donor, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                  whileHover={{ backgroundColor: 'rgba(var(--muted), 0.5)' }}
                  className={`flex items-center gap-4 p-4 transition-colors ${
                    donor.rank === 1 ? 'bg-amber-50 dark:bg-amber-950/20' : ''
                  }`}
                >
                  {/* Rank */}
                  <motion.div 
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className={`w-10 h-10 rounded-lg bg-gradient-to-br ${getRankStyle(donor.rank)} flex items-center justify-center shadow-lg`}
                  >
                    {donor.rank === 1 ? (
                      <Trophy className="w-5 h-5 text-white" />
                    ) : donor.rank === 2 ? (
                      <Medal className="w-5 h-5 text-white" />
                    ) : donor.rank === 3 ? (
                      <Award className="w-5 h-5 text-white" />
                    ) : (
                      <span className="text-white font-bold">{donor.rank}</span>
                    )}
                  </motion.div>

                  {/* Name */}
                  <div className="flex-1">
                    <p className="font-semibold text-foreground">{donor.name}</p>
                    <p className="text-xs text-muted-foreground">Supporter #{donor.rank}</p>
                  </div>

                  {/* Amount */}
                  <div className="text-right">
                    <p className={`font-bold ${donor.rank === 1 ? 'text-xl text-amber-600' : 'text-foreground'}`}>
                      ₱{donor.amount.toLocaleString()}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
