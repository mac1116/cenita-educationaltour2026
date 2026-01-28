'use client'

import { Trophy, Medal, Award, Star, TrendingUp, Target } from 'lucide-react'
import { Card } from '@/components/ui/card'

export function DonorsSection() {
  const topDonors = [
    { rank: 1, name: 'A**Y GA**E A.', amount: 2000, icon: Trophy, color: 'from-yellow-400 to-amber-500' },
    { rank: 2, name: 'J***E S.', amount: 500, icon: Medal, color: 'from-gray-300 to-gray-400' },
    { rank: 3, name: 'R** AL*****E J.', amount: 9, icon: Award, color: 'from-amber-600 to-amber-700' },
    { rank: 4, name: 'KE**N JO*N A.', amount: 6, icon: Star, color: 'from-blue-400 to-blue-500' },
    { rank: 5, name: 'R*****O F.', amount: 5, icon: Star, color: 'from-purple-400 to-purple-500' },
  ]

  const totalRaised = topDonors.reduce((sum, donor) => sum + donor.amount, 0)
  const goal = 24800
  const percentage = Math.min((totalRaised / goal) * 100, 100)

  return (
    <section className="py-24 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-sm font-semibold text-amber-500 bg-amber-500/10 px-4 py-2 rounded-full mb-4">
            Recognition
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-foreground mb-4">
            Top Givers
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Honoring our most generous supporters who made this tour possible.
          </p>
        </div>

        {/* Fundraising Goal Progress */}
        <Card className="max-w-3xl mx-auto mb-16 p-8 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/50 dark:to-purple-950/50 border-0">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                <Target className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Fundraising Goal</p>
                <p className="text-2xl font-black text-foreground">₱{goal.toLocaleString()}</p>
              </div>
            </div>
            <div className="text-right">
              <div className="flex items-center gap-2 text-emerald-500">
                <TrendingUp className="w-5 h-5" />
                <span className="font-bold">{percentage.toFixed(1)}%</span>
              </div>
              <p className="text-sm text-muted-foreground">of goal reached</p>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="relative h-6 bg-muted rounded-full overflow-hidden mb-4">
            <div 
              className="absolute inset-y-0 left-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full transition-all duration-1000 ease-out"
              style={{ width: `${percentage}%` }}
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-xs font-bold text-foreground drop-shadow">
                ₱{totalRaised.toLocaleString()} raised
              </span>
            </div>
          </div>

          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">₱0</span>
            <span className="font-semibold text-foreground">₱{(goal - totalRaised).toLocaleString()} to go!</span>
            <span className="text-muted-foreground">₱{goal.toLocaleString()}</span>
          </div>
        </Card>

        {/* Top Donors Table */}
        <Card className="max-w-2xl mx-auto overflow-hidden bg-card border border-border">
          <div className="bg-gradient-to-r from-amber-500 to-orange-500 p-4 text-white text-center">
            <h3 className="text-xl font-bold flex items-center justify-center gap-2">
              <Trophy className="w-6 h-6" />
              Leaderboard
            </h3>
          </div>
          
          <div className="divide-y divide-border">
            {topDonors.map((donor, index) => (
              <div 
                key={index}
                className={`flex items-center gap-4 p-4 hover:bg-muted/50 transition-colors ${
                  donor.rank === 1 ? 'bg-amber-50 dark:bg-amber-950/20' : ''
                }`}
              >
                {/* Rank */}
                <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${donor.color} flex items-center justify-center shadow-lg`}>
                  {donor.rank <= 3 ? (
                    <donor.icon className="w-5 h-5 text-white" />
                  ) : (
                    <span className="text-white font-bold">{donor.rank}</span>
                  )}
                </div>

                {/* Name */}
                <div className="flex-1">
                  <p className="font-semibold text-foreground">{donor.name}</p>
                  <p className="text-xs text-muted-foreground">Supporter #{donor.rank}</p>
                </div>

                {/* Amount */}
                <div className="text-right">
                  <p className={`font-bold ${donor.rank === 1 ? 'text-xl text-amber-500' : 'text-foreground'}`}>
                    ₱{donor.amount.toLocaleString()}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </section>
  )
}
