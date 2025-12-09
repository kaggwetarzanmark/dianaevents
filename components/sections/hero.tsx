"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Star, ArrowRight, Sparkles } from "lucide-react"

export function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background Image with elegant overlay */}
      <div className="absolute inset-0">
        <img
          src="/balloon-event-backdrop-luxury-celebration.jpg"
          alt="Elegant balloon decoration for luxury events"
          className="h-full w-full object-cover"
        />
        {/* Sophisticated gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/80" />
      </div>

      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-float" />
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col lg:flex-row items-center justify-between px-6 lg:px-12 py-24">
        {/* Left content */}
        <div className="flex-1 max-w-2xl text-left">
          {/* Top badge */}
          <div
            className={`mb-8 inline-flex items-center gap-2 rounded-full border-accent/30 bg-accent/10 px-5 py-2.5 backdrop-blur-sm transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
            }`}
          >
            <Sparkles className="h-4 w-4 text-accent" />
            <span className="text-sm font-medium text-white tracking-wide drop-shadow-lg">
              DFW's Premier Event Design Studio
            </span>
          </div>

          {/* Main heading */}
          <h1
            className={`mb-8 text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl transition-all duration-700 delay-100 z-20 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <span className="block text-balance drop-shadow-2xl">Transform Your</span>
            <span className="block text-balance drop-shadow-2xl">Celebration Into an</span>
            <span className="relative inline-block mt-2 drop-shadow-2xl">
              <span className="text-accent">Unforgettable</span>
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 8" fill="none">
                <path
                  d="M2 6C50 2 150 2 198 6"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  className="text-accent/60"
                />
              </svg>
            </span>
            <span className="block text-balance drop-shadow-2xl">Experience</span>
          </h1>

          {/* Subheading */}
          <p
            className={`mb-10 max-w-xl text-lg leading-relaxed text-white/90 transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            DFW's premier event rental company bringing your vision to life with stunning balloon décor,
            interactive photo experiences, and luxury rentals that make every moment Instagram-worthy.
          </p>

          {/* CTA Buttons */}
          <div
            className={`mb-12 flex flex-col items-start gap-4 sm:flex-row transition-all duration-700 delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <Button
              size="lg"
              className="group h-14 px-8 text-base font-semibold bg-white text-black shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:bg-white/90"
            >
              See Our Services
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button
              size="lg"
              className="group h-14 px-8 text-base font-semibold border-2 border-white/30 bg-transparent text-white transition-all duration-300 hover:border-white/60 hover:bg-white/10"
            >
              Get Your Free Quote
            </Button>
          </div>

          {/* Trust signals - redesigned */}
          <div
            className={`flex flex-row items-center justify-center gap-4 sm:gap-8 transition-all duration-700 delay-500 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            {/* Events hosted */}
            <div className="flex items-center gap-1">
              <span className="text-lg font-bold text-white">500+</span>
              <span className="text-[10px] text-white/70">DFW Events</span>
            </div>

            {/* Client satisfaction */}
            <div className="flex items-center gap-1">
              <span className="text-lg font-bold text-white">98%</span>
              <span className="text-[10px] text-white/70">Satisfaction</span>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-1">
              <span className="text-lg font-bold text-white">5.0</span>
              <div className="flex gap-0.5">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="h-2.5 w-2.5 fill-white text-white" />
                ))}
              </div>
              <span className="text-[10px] text-white/70">Rating</span>
            </div>
          </div>
        </div>

        {/* Right side - Floating card accent */}
        <div
          className={`hidden lg:flex flex-col items-end gap-6 mt-12 lg:mt-0 transition-all duration-1000 delay-700 ${
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
          }`}
        >
          {/* Testimonial card */}
          <div className="relative w-80 p-6 rounded-3xl bg-card/95 backdrop-blur-md border border-border shadow-2xl animate-float">
            <div className="absolute -top-3 -right-3 w-12 h-12 rounded-full bg-accent flex items-center justify-center shadow-lg">
              <Star className="h-5 w-5 fill-accent-foreground text-accent-foreground" />
            </div>
            <div className="flex gap-1 mb-3">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} className="h-4 w-4 fill-accent text-accent" />
              ))}
            </div>
            <p className="text-card-foreground/90 text-sm leading-relaxed mb-4 italic">
              &ldquo;Absolutely stunning! They transformed our venue into a magical wonderland. Every guest was blown
              away!&rdquo;
            </p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                <span className="text-sm font-semibold text-secondary-foreground">SM</span>
              </div>
              <div>
                <p className="text-sm font-semibold text-card-foreground">Sarah M.</p>
                <p className="text-xs text-muted-foreground">Wedding Client</p>
              </div>
            </div>
          </div>

          {/* Stats badge */}
          <div
            className="px-6 py-4 rounded-2xl bg-accent/90 backdrop-blur-sm shadow-xl animate-float"
            style={{ animationDelay: "1s" }}
          >
            <p className="text-accent-foreground font-semibold text-sm">Booked This Month</p>
            <p className="text-accent-foreground/80 text-2xl font-bold">24 Events</p>
          </div>
        </div>
      </div>

      {/* Bottom decorative line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent" />
    </section>
  )
}
