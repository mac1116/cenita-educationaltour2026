'use client'

import { Heart, Smartphone, CreditCard, Copy, Check, Building } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { useState } from 'react'
import { motion } from 'framer-motion'

export function SupportSection() {
  const [copiedField, setCopiedField] = useState<string | null>(null)

  const copyToClipboard = (text: string, field: string) => {
    navigator.clipboard.writeText(text)
    setCopiedField(field)
    setTimeout(() => setCopiedField(null), 2000)
  }

  const paymentMethods = [
    {
      title: 'GCash',
      icon: Smartphone,
      accountName: 'Mheil Andrei Cenita',
      accountNumber: '0916 571 5798',
    },
    {
      title: 'Maya',
      icon: Smartphone,
      accountName: 'Mheil Andrei Cenita',
      accountNumber: '0916 571 5798',
    },
    {
      title: 'Security Bank',
      icon: Building,
      accountName: 'Mheil Andrei Cenita',
      accountNumber: '0000 0000 0000',
    },
  ]

  return (
    <section id="support" className="py-28 bg-white relative overflow-hidden">
      {/* Subtle decoration */}
      <div className="absolute top-0 left-0 w-full h-1 bg-black" />

      <div className="container mx-auto px-6 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center w-20 h-20 bg-black rounded-full mb-8">
            <Heart className="w-10 h-10 text-white" />
          </div>
          <span className="block text-xs font-semibold text-black/50 tracking-[0.2em] uppercase mb-4">
            Support My Journey
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-black mb-4 tracking-tight">
            Your Generosity Matters
          </h2>
          <p className="text-lg text-black/50 max-w-2xl mx-auto">
            Every contribution brings me closer to this life-changing opportunity. Thank you for believing in my dreams.
          </p>
        </motion.div>

        {/* Payment Methods */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
          {paymentMethods.map((method, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden border-2 border-black/10 hover:border-black transition-all duration-300 bg-white group">
                {/* Header */}
                <div className="bg-black p-5 text-white">
                  <h3 className="text-lg font-bold flex items-center gap-2">
                    <method.icon className="w-5 h-5" />
                    {method.title}
                  </h3>
                </div>

                <div className="p-6">
                  {/* QR Code Placeholder */}
                  <div className="aspect-square max-w-40 mx-auto mb-6 bg-black/5 rounded-2xl p-4 group-hover:bg-black/10 transition-colors">
                    <div className="w-full h-full bg-white rounded-xl flex items-center justify-center border-2 border-dashed border-black/20">
                      <div className="text-center">
                        <CreditCard className="w-10 h-10 text-black/30 mx-auto mb-2" />
                        <p className="text-xs text-black/40 font-medium">QR Code</p>
                      </div>
                    </div>
                  </div>

                  {/* Account Details */}
                  <div className="space-y-4">
                    <div>
                      <p className="text-xs text-black/40 mb-1 uppercase tracking-wider">Account Name</p>
                      <p className="font-semibold text-black">{method.accountName}</p>
                    </div>

                    <div>
                      <p className="text-xs text-black/40 mb-1 uppercase tracking-wider">Account Number</p>
                      <div className="flex items-center gap-2">
                        <p className="font-mono font-bold text-lg text-black">{method.accountNumber}</p>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => copyToClipboard(method.accountNumber.replace(/\s/g, ''), `${method.title}-number`)}
                          className="h-8 w-8 p-0 hover:bg-black hover:text-white transition-colors"
                        >
                          {copiedField === `${method.title}-number` ? (
                            <Check className="w-4 h-4 text-green-600" />
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
          ))}
        </div>

        {/* Thank you message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center"
        >
          <Card className="inline-block bg-black text-white border-0 px-8 py-4">
            <p className="text-lg font-medium">
              Thank you for your support! 🖤
            </p>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
