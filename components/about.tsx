import Image from "next/image"
import { Check } from "lucide-react"

const values = [
  "Reliable service you can count on",
  "Clear communication every step of the way",
  "Always on schedule, rain or shine",
  "Fully licensed and insured",
  "Commercial and residential expertise",
  "Satisfaction guaranteed",
]

export function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/5] relative overflow-hidden bg-muted">
              <Image
                src="/images/about-snow-crew.jpg"
                alt="Our crew operating snow removal equipment"
                fill
                className="object-cover"
              />
            </div>
            {/* Floating card */}
            <div className="absolute -bottom-6 -right-6 md:bottom-8 md:-right-8 bg-foreground text-background p-6 md:p-8 max-w-[200px] md:max-w-[240px]">
              <p className="font-serif text-4xl md:text-5xl mb-2">24/7</p>
              <p className="text-sm text-background/80">Emergency snow removal when you need it most</p>
            </div>
          </div>

          {/* Content */}
          <div>
            <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground mb-4">
              About Us
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground leading-tight mb-6 text-balance">
              Two guys, big machines, bigger results
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed mb-8">
              <p>
                For over 10 years, Scope General Contracting has kept commercial 
                properties running and looking their best throughout the region. What 
                started as two guys with a passion for hard work has grown into a 
                trusted partner for businesses and property managers.
              </p>
              <p>
                From retail plazas and office parks to residential homes, we bring 
                the same commercial-grade equipment and professional approach to every 
                job. Big parking lot or small driveway, we show up on time and get 
                it done right.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-3">
              {values.map((value) => (
                <div key={value} className="flex items-center gap-3">
                  <div className="h-5 w-5 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                    <Check className="h-3 w-3 text-foreground" />
                  </div>
                  <span className="text-sm text-foreground">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
