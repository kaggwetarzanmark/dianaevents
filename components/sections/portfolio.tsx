export function Portfolio() {
  const items = Array.from({ length: 6 }, (_, i) => ({
    id: i + 1,
    title: `${["Wedding Reception", "Anniversary Gala", "Corporate Event", "Engagement Party", "Birthday Celebration", "Grand Opening"][i]}`,
    category: ["Wedding", "Anniversary", "Corporate", "Engagement", "Birthday", "Grand Opening"][i],
  }))

  return (
    <section className="py-20 md:py-32 px-6 bg-secondary/40">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block mb-4 text-sm font-semibold text-primary tracking-widest uppercase">Our Work</div>
          <div className="h-1 w-16 bg-accent mx-auto mb-8" />
          <h2 className="text-4xl md:text-5xl font-serif font-semibold mb-4 text-foreground">Featured Installations</h2>
          <p className="text-lg text-foreground/60 text-balance max-w-2xl mx-auto font-light">
            A curated collection of our most elegant balloon creations
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {items.map((item) => (
            <div
              key={item.id}
              className="group relative overflow-hidden aspect-square bg-card border border-border hover:border-primary/30 transition-all duration-300 cursor-pointer hover:shadow-lg"
            >
              <div className="absolute inset-0 bg-primary/5 flex flex-col items-end justify-end p-6">
                <div className="text-right">
                  <span className="inline-block px-3 py-1 border border-primary/30 text-primary text-xs font-semibold mb-3">
                    {item.category}
                  </span>
                  <h3 className="text-lg font-serif font-semibold text-foreground">{item.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="px-8 py-3 rounded-sm border-2 border-primary text-primary font-semibold hover:bg-primary/5 shadow-sm hover:shadow-md transition-all duration-300">
            View Complete Gallery
          </button>
        </div>
      </div>
    </section>
  )
}
