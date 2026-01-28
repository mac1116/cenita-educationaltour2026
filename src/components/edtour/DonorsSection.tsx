'use client'

import { Trophy, Medal, Award, Star, TrendingUp, Target } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { motion } from 'framer-motion'

export function DonorsSection() {
  const topDonors = [
    { rank: 1, name: 'A**Y GA**E A.', amount: 2000 },
    { rank: 2, name: 'J***E S.', amount: 500 },
    { rank: 3, name: 'R** AL*****E J.', amount: 9 },
    { rank: 4, name: 'KE**N JO*N A.', amount: 6 },
    { rank: 5, name: 'R*****O F.', amount: 5 },
  ]

  const totalRaised = topDonors.reduce((sum, donor) => sum + donor.amount, 0)
  const goal = 24800
  const percentage = Math.min((totalRaised / goal) * 100, 100)

  const getRankIcon = (rank: number) => {
    if (rank === 1) return Trophy
    if (rank === 2) return Medal
    if (rank === 3) return Award
    return Star
  }

  return (
    <section className="py-28 bg-black">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-xs font-semibold text-white/50 tracking-[0.2em] uppercase mb-4">
            Recognition
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-4 tracking-tight">
            Top Givers
          </h2>
          <p className="text-lg text-white/40 max-w-2xl mx-auto">
            Honoring our most generous supporters who made this tour possible.
          </p>
        </motion.div>

        {/* Fundraising Goal Progress */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <Card className="max-w-3xl mx-auto mb-16 p-8 bg-white border-0">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-black rounded-2xl flex items-center justify-center">
                  <Target className="w-7 h-7 text-white" />
                </div>
                <div>
                  <p className="text-sm text-black/50 font-medium">Fundraising Goal</p>
                  <p className="text-3xl font-black text-black">₱{goal.toLocaleString()}</p>
                </div>
              </div>
              <div className="text-right">
                <div className="flex items-center gap-2 text-black">
                  <TrendingUp className="w-5 h-5" />
                  <span className="text-2xl font-black">{percentage.toFixed(1)}%</span>
                </div>
                <p className="text-sm text-black/50">of goal reached</p>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="relative h-8 bg-black/10 rounded-full overflow-hidden mb-4">
              <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: `${percentage}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.3 }}
                className="absolute inset-y-0 left-0 bg-black rounded-full"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-sm font-bold text-black/70">
                  ₱{totalRaised.toLocaleString()} raised
                </span>
              </div>
            </div>

            <div className="flex justify-between text-sm text-black/50">
              <span>₱0</span>
              <span className="font-semibold text-black">₱{(goal - totalRaised).toLocaleString()} to go!</span>
              <span>₱{goal.toLocaleString()}</span>
            </div>
          </Card>
        </motion.div>

        {/* Top Donors Table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Card className="max-w-2xl mx-auto overflow-hidden bg-white/5 border-white/10 backdrop-blur">
            <div className="bg-white p-5 text-black text-center">
              <h3 className="text-xl font-black flex items-center justify-center gap-2">
                <Trophy className="w-6 h-6" />
                Leaderboard
              </h3>
            </div>
            
            <div className="divide-y divide-white/10">
              {topDonors.map((donor, index) => {
                const RankIcon = getRankIcon(donor.rank)
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                    className={`flex items-center gap-4 p-5 hover:bg-white/5 transition-colors ${
                      donor.rank === 1 ? 'bg-white/10' : ''
                    }`}
                  >
                    {/* Rank */}
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                      donor.rank === 1 ? 'bg-white text-black' : 
                      donor.rank === 2 ? 'bg-white/30 text-white' : 
                      donor.rank === 3 ? 'bg-white/20 text-white' : 
                      'bg-white/10 text-white/70'
                    }`}>
                      {donor.rank <= 3 ? (
                        <RankIcon className="w-5 h-5" />
                      ) : (
                        <span className="font-bold">{donor.rank}</span>
                      )}
                    </div>

                    {/* Name */}
                    <div className="flex-1">
                      <p className="font-semibold text-white">{donor.name}</p>
                      <p className="text-xs text-white/40">Supporter #{donor.rank}</p>
                    </div>

                    {/* Amount */}
                    <div className="text-right">
                      <p className={`font-black ${donor.rank === 1 ? 'text-2xl text-white' : 'text-lg text-white/80'}`}>
                        ₱{donor.amount.toLocaleString()}
                      </p>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
