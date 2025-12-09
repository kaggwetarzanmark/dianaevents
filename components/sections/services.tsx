import { Heart, Camera, Candy, Sparkles, Wine, Flower } from "lucide-react"

const services = [
  {
    icon: Heart,
    title: "Balloon Decor",
    description: "Custom balloon arrangements for weddings, birthdays, and special occasions in Kampala",
  },
  {
    icon: Camera,
    title: "Photo Booths & 360 Photography",
    description: "Interactive photo booths and 360 photography for capturing memorable moments",
  },
  {
    icon: Candy,
    title: "Cotton Candy & Treat Stations",
    description: "Cotton candy machines and trick-or-treat stations for kids' parties and events",
  },
  {
    icon: Sparkles,
    title: "Flower & Champagne Walls",
    description: "Elegant flower walls and champagne displays for sophisticated events",
  },
  {
    icon: Wine,
    title: "Champagne Carts",
    description: "Mobile champagne service for your special celebrations",
  },
 {
    icon: Flower,
    title: "Custom Event Decor",
    description: "Complete event decoration packages tailored to your vision",
  },
]

export function Services() {
  return (
    <section className="py-20 md:py-32 px-6 bg-background">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block mb-4 text-sm font-semibold text-primary tracking-widest uppercase">
            Our Services
          </div>
          <div className="h-1 w-16 bg-accent mx-auto mb-8" />
          <h2 className="text-4xl md:text-5xl font-serif font-semibold mb-4 text-foreground">Premium Event Rentals</h2>
          <p className="text-lg text-foreground/60 text-balance max-w-2xl mx-auto font-light">
            Diana Event Rentals offers complete event decoration solutions in Kampala
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, i) => {
            const Icon = service.icon
            return (
              <div
                key={i}
                className="p-8 border border-border hover:border-primary/30 transition-all duration-300 cursor-pointer hover:shadow-md"
              >
                <div className="w-12 h-12 rounded-sm bg-accent/10 flex items-center justify-center mb-6">
                  <Icon className="text-primary" size={24} />
                </div>
                <h3 className="text-xl font-serif font-semibold mb-3 text-foreground">{service.title}</h3>
                <p className="text-foreground/60 leading-relaxed font-light">{service.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
