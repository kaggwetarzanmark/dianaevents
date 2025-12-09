import { Star } from "lucide-react"

const testimonials = [
  {
    quote: "Diana transformed our daughter's quinceañera into a magical wonderland. The balloon arch was absolutely breathtaking!",
    author: "Maria R., Plano",
  },
  {
    quote: "The 360 photo booth was the hit of our corporate event. Professional, on-time, and amazing quality!",
    author: "James T., Fort Worth",
  }
]

export function SocialProof() {
  return (
    <section className="py-16 md:py-24 px-4 bg-accent/5">
      <div className="max-w-5xl mx-auto text-center">
        <div className="inline-block mb-3 text-xs font-semibold text-primary tracking-widest uppercase">
          Trusted by 500+ DFW Event Hosts
        </div>
        <div className="h-1 w-12 bg-accent mx-auto mb-8" />
        
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, i) => (
            <div key={i} className="bg-background p-6 border-border rounded-sm">
              <div className="flex mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-primary fill-primary" />
                ))}
              </div>
              <p className="text-foreground/80 text-base italic mb-4">"{testimonial.quote}"</p>
              <p className="text-foreground/60 font-light text-sm">{testimonial.author}</p>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  )
}
