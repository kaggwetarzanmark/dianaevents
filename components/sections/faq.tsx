const faqs = [
  {
    question: "How far in advance should I book?",
    answer: "We recommend booking 2-3 months in advance for peak season (spring and fall), but we can sometimes accommodate last-minute requests with our expedited service."
  },
  {
    question: "Do you deliver to all DFW cities?",
    answer: "Yes! We serve Dallas, Fort Worth, Plano, Frisco, McKinney, Arlington, Irving, Grand Prairie, Carrollton, Denton, and all surrounding areas in Texas."
  },
  {
    question: "What if I need to change my event date?",
    answer: "We offer flexible rescheduling options. Please contact us as soon as possible to discuss available dates and any potential adjustments to your package."
  },
  {
    question: "Can I customize the balloon colors to match my theme?",
    answer: "Absolutely! We offer custom color matching for all our balloon decor to perfectly coordinate with your event theme and color scheme."
  },
  {
    question: "What's included in setup and delivery?",
    answer: "Our service includes professional setup, styling, and takedown of all rentals. Delivery and setup times are coordinated with your event schedule."
  },
  {
    question: "Do you work with outdoor venues in Texas heat?",
    answer: "Yes, we have specialized equipment and techniques to ensure your rentals look perfect even in Texas weather conditions."
  },
  {
    question: "Are your rentals cleaned/sanitized between events?",
    answer: "Yes, all our rentals undergo thorough cleaning and sanitization between events to ensure the highest standards of hygiene and quality."
  }
]

export function FAQ() {
  return (
    <section className="py-16 md:py-24 px-4 bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-block mb-3 text-xs font-semibold text-primary tracking-widest uppercase">
            Frequently Asked Questions
          </div>
          <div className="h-1 w-12 bg-accent mx-auto mb-6" />
          <h2 className="text-3xl md:text-5xl font-serif font-semibold mb-3 text-foreground">Everything You Need to Know</h2>
          <p className="text-base md:text-lg text-foreground/60 text-balance max-w-2xl mx-auto font-light">
            Addressing common questions about our services and process
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="border border-border rounded-sm p-4">
              <h3 className="text-lg font-semibold text-foreground mb-2">{faq.question}</h3>
              <p className="text-sm md:text-base text-foreground/70">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
