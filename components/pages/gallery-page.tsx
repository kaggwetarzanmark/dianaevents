"use client"

import { BottomNav } from "@/components/navigation/bottom-nav"

export function GalleryPage() {
  return (
    <main className="pb-20 md:pb-0">
      <BottomNav />
      <div className="pt-8 px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl font-bold mb-4">Gallery</h1>
          <p className="text-foreground/60 text-lg mb-12">
            Explore our complete portfolio of stunning balloon installations
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {Array.from({ length: 12 }).map((_, i) => (
              <div
                key={i}
                className="group relative overflow-hidden rounded-2xl aspect-square bg-gradient-to-br from-primary/20 to-accent/20 hover:from-primary/30 hover:to-accent/30 transition-all duration-300 cursor-pointer"
              >
                <div className="absolute inset-0 flex items-end justify-end p-6">
                  <div className="text-right">
                    <h3 className="text-lg font-bold text-white">Project {i + 1}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}
