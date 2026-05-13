import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

const projects = [
  {
    title: "Complete Backyard Landscaping",
    category: "Landscaping",
    image: "/images/project-landscaping.jpg",
    description: "Full backyard transformation with lush lawn, flower beds, and decorative stone edging.",
  },
  {
    title: "Residential Snow Clearing",
    category: "Snow Removal",
    image: "/images/project-driveway-clear.jpg",
    description: "Reliable driveway and sidewalk clearing keeping properties safe and accessible all winter.",
  },
  {
    title: "Cedar Privacy Fence",
    category: "Fence Installation",
    image: "/images/project-fence.jpg",
    description: "Custom-built cedar privacy fence providing security and curb appeal for the property.",
  },
]

export function Projects() {
  return (
    <section id="projects" className="py-24 md:py-32 bg-secondary/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground mb-4">
              Featured Projects
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground leading-tight text-balance">
              Craftsmanship that speaks for itself
            </h2>
          </div>
          <Link
            href="#contact"
            className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-accent transition-colors"
          >
            View All Projects
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div key={project.title} className="group cursor-pointer">
              <div className="relative aspect-[4/5] overflow-hidden bg-muted mb-4">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-colors duration-300" />
                <div className="absolute top-4 right-4 h-10 w-10 rounded-full bg-background/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ArrowUpRight className="h-4 w-4 text-foreground" />
                </div>
              </div>
              <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground mb-2">
                {project.category}
              </p>
              <h3 className="text-xl font-medium text-foreground mb-2">
                {project.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {project.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
