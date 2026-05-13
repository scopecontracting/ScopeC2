import { Quote } from "lucide-react"

const testimonials = [
  {
    quote: "Scope has been clearing our plaza parking lot for three winters now. They show up before our stores open, every single time. Our tenants and customers always have safe access.",
    author: "Robert Alvarez",
    role: "Commercial Building Owner",
  },
  {
    quote: "I used to stress every time it snowed, wondering if I&apos;d make it to work. Now I wake up and my driveway is already cleared. These guys are lifesavers.",
    author: "Linda Patterson",
    role: "Residential Customer",
  },
  {
    quote: "We manage 12 properties and Scope handles snow removal for all of them. Reliable, professional, and they actually answer the phone at 5am when you need them.",
    author: "Michael Torres",
    role: "Property Manager",
  },
]

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 md:py-32 bg-foreground text-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm font-medium uppercase tracking-widest text-background/60 mb-4">
            Testimonials
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-background leading-tight text-balance">
            What our clients say
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative p-8 border border-background/20"
            >
              <Quote className="h-8 w-8 text-background/20 mb-6" />
              <p className="text-background/90 leading-relaxed mb-8">
                {testimonial.quote}
              </p>
              <div>
                <p className="font-medium text-background">{testimonial.author}</p>
                <p className="text-sm text-background/60">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
