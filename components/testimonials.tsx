import { Quote } from "lucide-react"

const testimonials = [
  {
    quote: "Scope has been clearing our plaza parking lot for three winters now. They show up before our stores open, every single time. Our tenants and customers always have safe access.",
    author: "Robert Alvarez",
    role: "Commercial Building Owner",
  },
  {
    quote: "I used to stress every time it snowed, wondering if I would make it to work. Now I wake up and my driveway is already cleared. These guys are lifesavers.",
    author: "Linda Patterson",
    role: "Residential Customer",
  },
  {
    quote: "We manage 12 properties and Scope handles snow removal for all of them. Reliable, professional, and they actually answer the phone at 5am when you need them.",
    author: "Michael Torres",
    role: "Property Manager",
  },
  {
    quote: "After that big dump in January, our entire condo complex was cleared by 6am. The residents were amazed. Scope is the only company we trust with our winter maintenance.",
    author: "Karen Summers",
    role: "Condo Board President",
  },
  {
    quote: "Running a medical clinic means patients need safe access no matter the weather. Scope understands that and treats our lot like a priority every single storm.",
    author: "Dr. James Chen",
    role: "Clinic Owner",
  },
  {
    quote: "Five years with Scope and not a single complaint from our warehouse staff about the parking lot. They are consistent, fast, and always professional.",
    author: "Trevor Williams",
    role: "Warehouse Operations Manager",
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

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
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
