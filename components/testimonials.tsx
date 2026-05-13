import { Quote } from "lucide-react"

const testimonials = [
  {
    quote: "Scope transformed our outdated kitchen into a stunning modern space. The attention to detail and professionalism of their team was outstanding from start to finish.",
    author: "Sarah Mitchell",
    role: "Homeowner, Kitchen Renovation",
  },
  {
    quote: "We&apos;ve worked with Scope on multiple commercial projects. Their ability to deliver on time and within budget while maintaining exceptional quality is unmatched.",
    author: "David Chen",
    role: "Property Developer",
  },
  {
    quote: "The team made our whole-home renovation seamless. They communicated every step of the way and the results exceeded our wildest expectations.",
    author: "Jennifer & Mark Thompson",
    role: "Homeowners, Full Renovation",
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
