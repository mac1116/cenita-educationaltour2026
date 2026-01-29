'use client'

import { Heart, Smartphone, Copy, Check } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { useState, useRef } from 'react'
import gcashQr from '@/assets/gcash.jpg'
import maribankQr from '@/assets/maribank.jpg'
import { motion, useInView } from 'framer-motion'

export function SupportSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [copiedField, setCopiedField] = useState<string | null>(null)

  const copyToClipboard = (text: string, field: string) => {
    navigator.clipboard.writeText(text)
    setCopiedField(field)
    setTimeout(() => setCopiedField(null), 2000)
  }

  const paymentMethods = [
    {
      title: 'GCash',
      color: 'from-blue-400 to-blue-600',
      accountName: 'Mheil Andrei Cenita',
      accountNumber: '09165715798',
      qrImage: gcashQr,
    },
    {
      title: 'Maribank',
      color: 'from-orange-500 to-red-600',
      accountName: 'Mheil Andrei Cenita',
      accountNumber: '18098069431',
      qrImage: maribankQr,
    },
  ]

  return (
    <section ref={ref} id="support" className="py-24 bg-gradient-to-b from-background to-blue-950/20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          animate={{ x: [0, 20, 0], y: [0, -20, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-1/4 -left-32 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" 
        />
        <motion.div 
          animate={{ x: [0, -20, 0], y: [0, 20, 0] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute bottom-1/4 -right-32 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" 
        />
      </div>

      <div className="container mx-auto px-6 relative">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div 
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-pink-500 to-red-500 rounded-full mb-6 shadow-lg shadow-pink-500/30"
          >
            <Heart className="w-8 h-8 text-white" />
          </motion.div>
          <span className="block text-sm font-semibold text-pink-500 mb-4">
            Support My Journey
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-foreground mb-4">
            Your Generosity Truly Matters
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Every contribution, no matter how big, brings me closer to this life-changing opportunity. Thank you for believing in my dreams.
          </p>
        </motion.div>

        {/* Payment Methods */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
          {paymentMethods.map((method, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <motion.div whileHover={{ y: -5 }}>
                <Card className="overflow-hidden bg-card border border-border hover:shadow-xl transition-all duration-300">
                  {/* Header */}
                  <div className={`bg-gradient-to-r ${method.color} p-4 text-white`}>
                    <h3 className="text-xl font-bold flex items-center gap-2">
                      <Smartphone className="w-5 h-5" />
                      {method.title} Donation
                    </h3>
                  </div>

                  <div className="p-6">
                    {/* QR Code (larger) */}
                    <motion.div 
                      whileHover={{ scale: 1.02 }}
                      className="aspect-square max-w-md mx-auto mb-6 bg-white rounded-2xl p-4 shadow-inner overflow-hidden"
                    >
                      <img
                        src={method.qrImage}
                        alt={`${method.title} QR Code`}
                        className="w-full h-full object-contain rounded-lg bg-white"
                      />
                    </motion.div>

                    {/* Account Details */}
                    <div className="space-y-4">
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">Account Name</p>
                        <p className="font-semibold text-foreground">{method.accountName}</p>
                      </div>

                      <div>
                        <p className="text-sm text-muted-foreground mb-1">Account Number</p>
                        <div className="flex items-center gap-2">
                          <p className="font-mono font-bold text-lg text-foreground">{method.accountNumber}</p>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => copyToClipboard(method.accountNumber.replace(/\s/g, ''), `${method.title}-number`)}
                            className="h-8 w-8 p-0"
                          >
                            {copiedField === `${method.title}-number` ? (
                              <Check className="w-4 h-4 text-green-500" />
                            ) : (
                              <Copy className="w-4 h-4" />
                            )}
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Thank you message */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center"
        >
          <Card className="inline-block bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 border-0 p-6">
            <motion.p 
              animate={{ scale: [1, 1.02, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-lg text-foreground font-medium"
            >
              Thank you for your support! 💙
            </motion.p>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
