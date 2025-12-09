"use client"

import { BottomNav } from "@/components/navigation/bottom-nav"
import { Sparkles, Heart, Gift, Zap, Briefcase, Users } from "lucide-react"

const services = [
  {
    icon: Sparkles,
    title: "Custom Installations",
    description:
      "Bespoke balloon installations tailored to your vision, theme, and color preferences. From simple elegant setups to complex artistic creations.",
    price: "Starting at $299",
  },
  {
    icon: Heart,
    title: "Wedding Décor",
    description:
      "Romantic and elegant balloon arrangements for your special day. Arches, centerpieces, and ceremony backdrops.",
    price: "Starting at $499",
  },
  {
    icon: Gift,
    title: "Corporate Events",
    description:
      "Professional setups for conferences, product launches, and celebrations. Brand-aligned and sophisticated.",
    price: "Starting at $349",
  },
  {
    icon: Zap,
    title: "Rush Orders",
    description: "Fast-track decorations for last-minute events and surprises. Available within 24 hours.",
    price: "Add 25%",
  },
  {
    icon: Briefcase,
    title: "Balloon Bouquets",
    description:
      "Perfect for office deliveries, gifts, and small celebrations. Custom arrangements with premium balloons.",
    price: "Starting at $45",
  },
  {
    icon: Users,
    title: "Event Planning",
    description: "Complete party planning with balloon décor. We handle everything from concept to execution.",
    price: "Custom Quote",
  },
]

export function ServicesPage() {
  return (
    <main className="pb-20 md:pb-0">
      <BottomNav />
      <div className="pt-8 px-6">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-foreground/60 text-lg mb-12">
            Whatever your celebration, we have the perfect balloon solution
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, i) => {
              const Icon = service.icon
              return (
                <div
                  key={i}
                  className="group p-8 rounded-2xl bg-card border border-border hover:border-accent/50 hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-14 h-14 rounded-lg bg-primary/10 group-hover:bg-accent/10 flex items-center justify-center mb-4 transition-colors duration-300">
                    <Icon className="text-primary group-hover:text-accent transition-colors duration-300" size={28} />
                  </div>
                  <h3 className="text-2xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-foreground/60 mb-4 leading-relaxed">{service.description}</p>
                  <p className="text-primary font-semibold">{service.price}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </main>
  )
}
