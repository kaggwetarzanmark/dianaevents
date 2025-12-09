"use client"

import { BottomNav } from "@/components/navigation/bottom-nav"

export function AboutPage() {
  return (
    <main className="pb-20 md:pb-0">
      <BottomNav />
      <div className="pt-8 px-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-5xl font-bold mb-6">About Us</h1>

          <div className="mb-12 p-8 rounded-2xl bg-secondary/50">
            <p className="text-lg text-foreground/70 leading-relaxed mb-4">
              Balloon Bliss was founded on the belief that every celebration deserves to be extraordinary. With over 10
              years of experience in event decoration, our team of creative professionals has transformed hundreds of
              venues into magical spaces.
            </p>
            <p className="text-lg text-foreground/70 leading-relaxed">
              We're passionate about bringing joy through beautiful, innovative balloon installations. From intimate
              gatherings to grand celebrations, we treat every project with the same dedication and attention to detail.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="p-6 rounded-2xl bg-card border border-border">
              <h3 className="text-3xl font-bold text-primary mb-2">500+</h3>
              <p className="text-foreground/60">Events Decorated</p>
            </div>
            <div className="p-6 rounded-2xl bg-card border border-border">
              <h3 className="text-3xl font-bold text-accent mb-2">98%</h3>
              <p className="text-foreground/60">Client Satisfaction</p>
            </div>
            <div className="p-6 rounded-2xl bg-card border border-border">
              <h3 className="text-3xl font-bold text-primary mb-2">10+</h3>
              <p className="text-foreground/60">Years Experience</p>
            </div>
          </div>

          <h2 className="text-3xl font-bold mb-6">Our Values</h2>
          <div className="space-y-4">
            <div className="p-6 rounded-2xl bg-secondary/50 border border-border">
              <h3 className="font-semibold text-lg mb-2">Creativity</h3>
              <p className="text-foreground/60">We push boundaries and create unique installations that wow.</p>
            </div>
            <div className="p-6 rounded-2xl bg-secondary/50 border border-border">
              <h3 className="font-semibold text-lg mb-2">Quality</h3>
              <p className="text-foreground/60">
                Premium materials and meticulous attention to detail in every project.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-secondary/50 border border-border">
              <h3 className="font-semibold text-lg mb-2">Reliability</h3>
              <p className="text-foreground/60">On-time delivery and professional service you can count on.</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
