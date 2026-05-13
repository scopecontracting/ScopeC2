import { TreePine, Snowflake, Fence, Leaf, Scissors, Sun } from "lucide-react"

const services = [
  {
    icon: Scissors,
    number: "01",
    title: "Commercial Lawn Care",
    description: "Professional grounds maintenance for office parks, retail centers, and HOAs. Residential services also available.",
  },
  {
    icon: Snowflake,
    number: "02",
    title: "Commercial Snow Removal",
    description: "24/7 commercial snow plowing for parking lots, driveways, and walkways. Keep your business accessible all winter.",
  },
  {
    icon: TreePine,
    number: "03",
    title: "Commercial Landscaping",
    description: "Professional landscape design and installation for businesses, plus residential projects of all sizes.",
  },
  {
    icon: Fence,
    number: "04",
    title: "Fence Installation",
    description: "Commercial security fencing, perimeter fences, and residential privacy fences built to last.",
  },
  {
    icon: Leaf,
    number: "05",
    title: "Seasonal Cleanup",
    description: "Spring and fall cleanup for commercial properties and residences. Leaf removal, debris clearing, and more.",
  },
  {
    icon: Sun,
    number: "06",
    title: "Property Maintenance",
    description: "Full-service contracts for property managers, businesses, and homeowners. One call handles it all.",
  },
]

export function Services() {
  return (
    <section id="services" className="py-24 md:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-2xl mb-16">
          <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground mb-4">
            Our Services
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground leading-tight text-balance">
            Commercial-grade service for properties of all sizes
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.number}
              className="group p-8 border border-border bg-card hover:bg-secondary/50 transition-colors duration-300"
            >
              <div className="flex items-start justify-between mb-6">
                <service.icon className="h-8 w-8 text-foreground" strokeWidth={1.5} />
                <span className="font-serif text-4xl text-muted-foreground/30 group-hover:text-accent transition-colors">
                  {service.number}
                </span>
              </div>
              <h3 className="text-xl font-medium text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
