import { motion } from 'framer-motion'

const particles = Array.from({ length: 30 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 100,
  size: Math.random() * 4 + 2,
  duration: Math.random() * 5 + 4,
  delay: Math.random() * 4,
}))

const glowOrbs = [
  { x: '10%', y: '15%', size: 300, color: 'bg-teal-500/8', duration: 8 },
  { x: '80%', y: '35%', size: 400, color: 'bg-cyan-500/6', duration: 10 },
  { x: '20%', y: '55%', size: 350, color: 'bg-amber-500/6', duration: 9 },
  { x: '70%', y: '75%', size: 300, color: 'bg-purple-500/5', duration: 7 },
  { x: '50%', y: '90%', size: 450, color: 'bg-teal-500/5', duration: 11 },
]

export function BackgroundEffects() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Floating glow orbs */}
      {glowOrbs.map((orb, i) => (
        <motion.div
          key={`orb-${i}`}
          className={`absolute rounded-full ${orb.color} blur-3xl`}
          style={{
            left: orb.x,
            top: orb.y,
            width: orb.size,
            height: orb.size,
          }}
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: orb.duration,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}

      {/* Floating micro-particles */}
      {particles.map((p) => (
        <motion.div
          key={`p-${p.id}`}
          className="absolute rounded-full bg-primary/15 dark:bg-primary/10"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
          }}
          animate={{
            y: [-15, 15, -15],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  )
}
