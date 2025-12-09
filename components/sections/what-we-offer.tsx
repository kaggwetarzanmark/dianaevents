"use client"

import { ArrowRight } from "lucide-react"

interface ServiceCard {
 id: number
  title: string
  description: string
  image: string
  query: string
}

const services: ServiceCard[] = [
  {
    id: 1,
    title: "Balloon Décor",
    description: "Custom designs from elegant arches to show-stopping installations",
    image: "/elegant-balloon-arch-decoration-for-event.jpg",
    query: "elegant balloon arch decoration for event",
  },
  {
    id: 2,
    title: "360 Photo Booth",
    description: "Interactive experiences your guests will love sharing",
    image: "/modern-360-photo-booth-setup-at-event.jpg",
    query: "modern 360 photo booth setup at event",
  },
  {
    id: 3,
    title: "Telephone Booths",
    description: "Vintage charm meets modern photo ops",
    image: "/vintage-telephone-booth-prop-for-events.jpg",
    query: "vintage telephone booth prop for events",
  },
  {
    id: 4,
    title: "Champagne Cart & Wall",
    description: "Sophisticated service displays for upscale events",
    image: "/elegant-champagne-cart-display.jpg",
    query: "elegant champagne cart display",
  },
  {
    id: 5,
    title: "Flower Wall",
    description: "Lush backdrops that elevate any space",
    image: "/luxury-flower-wall-backdrop-arrangement.jpg",
    query: "luxury flower wall backdrop arrangement",
  },
  {
    id: 6,
    title: "Cotton Candy Pop",
    description: "Sweet treats that double as stunning décor",
    image: "/colorful-cotton-candy-station-display.jpg",
    query: "colorful cotton candy station display",
  },
]

export function WhatWeOffer() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground mb-3">
            <span className="text-pretty">What We Offer</span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">Complete event solutions for every occasion</p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-2">
          {services.map((service) => (
            <div
              key={service.id}
              className="group bg-card rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col h-full"
            >
              {/* Image Container */}
              <div className="relative h-48 overflow-hidden bg-muted">
                <img
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-30" />
              </div>

              {/* Content */}
              <div className="p-4 flex-grow">
                <div className="flex items-start justify-between gap-3 mb-2">
                  <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <ArrowRight className="w-4 h-4 text-primary opacity-0 group-hover:opacity-100 transition-all duration-300 flex-shrink-0 mt-1" />
                </div>
                <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">{service.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <button className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-sm border-2 border-transparent hover:border-primary/30 transition-all duration-300 hover:bg-primary/90 gap-2 text-base h-14">
            Explore All Services
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  )
}
