'use client'

import { Mail, Phone, MessageCircle, Send } from 'lucide-react'
import { Card } from '@/components/ui/card'

export function ContactSection() {
  const contacts = [
    {
      icon: Mail,
      title: 'Email',
      value: 'cenitamheil@gmail.com',
      href: 'mailto:cenitamheil@gmail.com',
      color: 'from-red-500 to-pink-500',
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '09165715798',
      href: 'tel:09165715798',
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: MessageCircle,
      title: 'Messenger',
      value: 'Mheil Andrei Cenita',
      href: 'https://www.facebook.com/mheilandrei.cenita',
      color: 'from-blue-500 to-indigo-500',
    },
  ]

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-sm font-semibold text-emerald-500 bg-emerald-500/10 px-4 py-2 rounded-full mb-4">
            Get In Touch
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-foreground mb-4">
            Have Questions?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I would be happy to provide more information about the educational tour or answer any questions you may have.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
          {contacts.map((contact, index) => (
            <a
              key={index}
              href={contact.href}
              target={contact.title === 'Messenger' ? '_blank' : undefined}
              rel={contact.title === 'Messenger' ? 'noopener noreferrer' : undefined}
            >
              <Card className="p-6 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-card border border-border group cursor-pointer">
                <div className={`w-14 h-14 mx-auto mb-4 bg-gradient-to-br ${contact.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg`}>
                  <contact.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-bold text-foreground mb-2">{contact.title}</h3>
                <p className="text-sm text-muted-foreground break-all">{contact.value}</p>
              </Card>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
