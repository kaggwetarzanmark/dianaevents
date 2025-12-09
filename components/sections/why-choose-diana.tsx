import { CheckCircle } from "lucide-react"

const reasons = [
  {
    title: "Stress-Free Setup & Takedown",
    description: "We handle everything so you can enjoy your event"
  },
  {
    title: "Premium Quality Rentals",
    description: "Instagram-worthy pieces that photograph beautifully"
  },
 {
    title: "Flexible Packages",
    description: "Mix and match services to fit your vision and budget"
  },
  {
    title: "Same-Day Response",
    description: "Quick quotes so you can plan with confidence"
  }
]

export function WhyChooseDiana() {
  return (
    <section className="py-16 md:py-24 px-4 bg-background">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-block mb-3 text-xs font-semibold text-primary tracking-widest uppercase">
            Why DFW Events Look Better With Diana
          </div>
          <div className="h-1 w-12 bg-accent mx-auto mb-6" />
          <h2 className="text-3xl md:text-5xl font-serif font-semibold mb-3 text-foreground">Premium Event Rentals</h2>
          <p className="text-base md:text-lg text-foreground/60 text-balance max-w-2xl mx-auto font-light">
            Our commitment to excellence sets us apart in the Dallas-Fort Worth area
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {reasons.map((reason, i) => (
            <div key={i} className="flex pr-6 border-l-4 border-primary/50">
              <div className="flex-1 ml-4">
                <h3 className="text-lg font-serif font-semibold mb-1 text-foreground">{reason.title}</h3>
                <p className="text-sm md:text-base text-foreground/60 leading-relaxed font-light">{reason.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
 )
}
