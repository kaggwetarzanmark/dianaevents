"use client"

import { BottomNav } from "@/components/navigation/bottom-nav"
import { Hero } from "@/components/sections/hero"
import { WhatWeOffer } from "@/components/sections/what-we-offer"
import { SocialProof } from "@/components/sections/social-proof"
import { ServiceArea } from "@/components/sections/service-area"
import { WhyChooseDiana } from "@/components/sections/why-choose-diana"
import { FAQ } from "@/components/sections/faq"
import { Footer } from "@/components/sections/footer"

export function HomePage() {
  return (
    <main className="pb-20 md:pb-0">
      <BottomNav />
      <Hero />
      <WhatWeOffer />
      <SocialProof />
      <ServiceArea />
      <WhyChooseDiana />
      <FAQ />
      <Footer />
    </main>
 )
}
