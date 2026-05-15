import Link from "next/link"
import Image from "next/image"

const navigation = {
  services: [
    { name: "Lawn Care", href: "#services" },
    { name: "Snow Removal", href: "#services" },
    { name: "Landscaping", href: "#services" },
    { name: "Fence Installation", href: "#services" },
  ],
  company: [
    { name: "About Us", href: "#about" },
    { name: "Our Projects", href: "#projects" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ],
  social: [
    { name: "LinkedIn", href: "#" },
    { name: "Instagram", href: "#" },
    { name: "Facebook", href: "#" },
  ],
}

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 lg:gap-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="mb-4">
              <Image
                src="/images/scope-logo.png"
                alt="Scope General Contracting"
                width={160}
                height={48}
                className="h-14 w-auto"
              />
            </div>
            <p className="text-xs sm:text-sm text-background/60 leading-relaxed max-w-xs">
              Keeping Edmonton properties maintained year-round with reliable lawn care and snow removal services.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-medium text-background mb-4">Services</h3>
            <ul className="space-y-3">
              {navigation.services.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-background/60 hover:text-background transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-medium text-background mb-4">Company</h3>
            <ul className="space-y-3">
              {navigation.company.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-background/60 hover:text-background transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-sm font-medium text-background mb-4">Connect</h3>
            <ul className="space-y-3">
              {navigation.social.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-background/60 hover:text-background transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-background/60">
            © {new Date().getFullYear()} Scope General Contracting. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="#" className="text-sm text-background/60 hover:text-background transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-sm text-background/60 hover:text-background transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
