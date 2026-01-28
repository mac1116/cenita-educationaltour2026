'use client'

import { Mail, Phone, MessageCircle } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { motion } from 'framer-motion'

export function ContactSection() {
  const contacts = [
    {
      icon: Mail,
      title: 'Email',
      value: 'cenitamheil@gmail.com',
      href: 'mailto:cenitamheil@gmail.com',
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '09165715798',
      href: 'tel:09165715798',
    },
    {
      icon: MessageCircle,
      title: 'Messenger',
      value: 'Mheil Andrei Cenita',
      href: 'https://m.me/',
    },
  ]

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
            Get In Touch
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-4 tracking-tight">
            Have Questions?
          </h2>
          <p className="text-lg text-white/40 max-w-2xl mx-auto">
            I would be happy to provide more information about the educational tour.
          </p>
        </motion.div>

        {/* Contact Cards */}
        <div className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
          {contacts.map((contact, index) => (
            <motion.a
              key={index}
              href={contact.href}
              target={contact.title === 'Messenger' ? '_blank' : undefined}
              rel={contact.title === 'Messenger' ? 'noopener noreferrer' : undefined}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="p-6 text-center hover:bg-white hover:text-black transition-all duration-300 bg-white/5 border-white/10 group cursor-pointer">
                <div className="w-14 h-14 mx-auto mb-4 bg-white group-hover:bg-black rounded-xl flex items-center justify-center transition-colors">
                  <contact.icon className="w-6 h-6 text-black group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-bold text-white group-hover:text-black mb-2 transition-colors">{contact.title}</h3>
                <p className="text-sm text-white/50 group-hover:text-black/60 break-all transition-colors">{contact.value}</p>
              </Card>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
