import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-mowing.jpg"
          alt="Professional landscaper mowing a lawn"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-foreground/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 py-32 pt-40">
        <div className="max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-widest text-background/70 mb-6">
            Commercial & Residential Property Services
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-background leading-tight text-balance">
            Keeping businesses and homes running smoothly
          </h1>
          <p className="mt-6 text-lg text-background/80 max-w-xl leading-relaxed">
            From parking lot snow clearing to residential lawn care, we deliver 
            professional property maintenance for commercial and residential clients. 
            Reliable scheduling, heavy-duty equipment, and results you can count on.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Button size="lg" variant="secondary" asChild>
              <Link href="#contact" className="gap-2">
                Get a Free Quote
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-background/30 text-background hover:bg-background/10 hover:text-background" asChild>
              <Link href="#projects">
                View Our Work
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="absolute bottom-0 left-0 right-0 z-10 bg-background/95 backdrop-blur-sm border-t border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-6">
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <p className="font-serif text-3xl md:text-4xl text-foreground">10+</p>
              <p className="text-sm text-muted-foreground mt-1">Years Experience</p>
            </div>
            <div className="text-center">
              <p className="font-serif text-3xl md:text-4xl text-foreground">100+</p>
              <p className="text-sm text-muted-foreground mt-1">Commercial Contracts</p>
            </div>
            <div className="text-center">
              <p className="font-serif text-3xl md:text-4xl text-foreground">98%</p>
              <p className="text-sm text-muted-foreground mt-1">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
