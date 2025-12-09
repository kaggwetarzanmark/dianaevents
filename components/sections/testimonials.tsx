import { Quote } from "lucide-react"

const testimonials = [
  {
    name: "Sarah & James",
    role: "Wedding Couple",
    text: "They transformed our vision into reality. Every detail was perfect, and our guests couldn't stop talking about the décor.",
    rating: 5,
  },
  {
    name: "Victoria Chen",
    role: "Corporate Director",
    text: "Sophisticated, professional, and exceptionally creative. They elevated our gala beyond expectations.",
    rating: 5,
  },
  {
    name: "Emma Richardson",
    role: "Event Coordinator",
    text: "A true partner in creating memorable events. Their attention to elegance and detail is unmatched.",
    rating: 5,
  },
]

export function Testimonials() {
  return (
    <section className="py-20 md:py-32 px-6 bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block mb-4 text-sm font-semibold text-primary tracking-widest uppercase">
            Testimonials
          </div>
          <div className="h-1 w-16 bg-accent mx-auto mb-8" />
          <h2 className="text-4xl md:text-5xl font-serif font-semibold mb-4 text-foreground">Client Stories</h2>
          <p className="text-lg text-foreground/60 text-balance">Words from our cherished clients</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, i) => (
            <div key={i} className="p-8 border border-border hover:border-primary/30 transition-all duration-300">
              <Quote className="w-8 h-8 text-accent/20 mb-4" />
              <p className="text-foreground/70 mb-6 leading-relaxed italic font-light">"{testimonial.text}"</p>
              <div className="pt-6 border-t border-border">
                <p className="font-serif font-semibold text-foreground">{testimonial.name}</p>
                <p className="text-sm text-foreground/60 font-light">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
