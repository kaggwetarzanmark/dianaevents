"use client"

import { BottomNav } from "@/components/navigation/bottom-nav"
import { Mail, Phone, MapPin } from "lucide-react"

export function ContactPage() {
  return (
    <main className="pb-20 md:pb-0">
      <BottomNav />
      <div className="pt-8 px-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-5xl font-bold mb-4">Get in Touch</h1>
          <p className="text-foreground/60 text-lg mb-12">
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="p-6 rounded-2xl bg-card border border-border">
              <Phone className="text-primary mb-4" size={28} />
              <h3 className="font-semibold mb-2">Phone</h3>
              <p className="text-foreground/60">(555) 123-4567</p>
            </div>
            <div className="p-6 rounded-2xl bg-card border border-border">
              <Mail className="text-accent mb-4" size={28} />
              <h3 className="font-semibold mb-2">Email</h3>
              <p className="text-foreground/60">hello@balloonbliss.com</p>
            </div>
            <div className="p-6 rounded-2xl bg-card border border-border">
              <MapPin className="text-primary mb-4" size={28} />
              <h3 className="font-semibold mb-2">Location</h3>
              <p className="text-foreground/60">Serving the tri-state area</p>
            </div>
          </div>

          <div className="p-8 rounded-2xl bg-secondary/50 border border-border">
            <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Name</label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full px-4 py-2 rounded-lg border border-border bg-card text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full px-4 py-2 rounded-lg border border-border bg-card text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  placeholder="Tell us about your event..."
                  rows={5}
                  className="w-full px-4 py-2 rounded-lg border border-border bg-card text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <button className="w-full px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors duration-200">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  )
}
