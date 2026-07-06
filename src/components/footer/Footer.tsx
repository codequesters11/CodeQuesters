import Link from 'next/link'
import { Mail, MessageCircle } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  // Social Links mapping with inline SVGs to avoid Lucide package mismatch
  const socialLinks = [
    {
      name: 'WhatsApp',
      href: 'https://chat.whatsapp.com/Drc3SOwUSJiJnV3ZZgQz7I?mode=ac_t',
      icon: (
        <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
        </svg>
      ),
    },
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/codequesters',
      icon: (
        <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
        </svg>
      ),
    },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/company/codequesters/',
      icon: (
        <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
          <rect width="4" height="12" x="2" y="9" />
          <circle cx="4" cy="4" r="2" />
        </svg>
      ),
    },
  ]

  return (
    <footer className="bg-background-secondary border-t border-border mt-auto text-text-secondary">
      <div className="container-max py-16">
        {/* Footer Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 mb-12">
          
          {/* Brand Info (Leftmost, wide span) */}
          <div className="md:col-span-4 flex flex-col justify-between">
            <div>
              <Link href="/" className="flex items-center gap-2 group mb-5 w-fit">
                <img 
                  src="/logo-CQ-tech.png" 
                  alt="CodeQuesters Logo" 
                  className="w-7 h-7 object-contain transition-transform group-hover:scale-105" 
                />
                <span className="font-semibold text-lg text-primary tracking-tight">
                  CodeQuesters
                </span>
              </Link>
              <p className="text-sm leading-relaxed max-w-sm mb-6 text-text-secondary">
                A builder-first ecosystem helping students and creators grow through opportunities, collaboration, innovation, and execution.
              </p>
            </div>
            
            {/* Social Links wrapped in circles */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-text-secondary hover:text-primary hover:border-primary/30 hover:bg-primary-light transition-all duration-300"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Sitemap (Links) */}
          <div className="md:col-span-2">
            <h4 className="font-semibold text-text-primary text-sm mb-5">
              Sitemap
            </h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-primary transition-colors">About</Link></li>
              <li><Link href="/events" className="hover:text-primary transition-colors">Events</Link></li>
              <li><Link href="/community" className="hover:text-primary transition-colors">Stories</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Get Involved */}
          <div className="md:col-span-3">
            <h4 className="font-semibold text-text-primary text-sm mb-5">
              Get Involved
            </h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/partners" className="hover:text-primary transition-colors">Partnerships</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors">Collaborations</Link></li>
              <li><Link href="/events" className="hover:text-primary transition-colors">Workshops</Link></li>
              <li><Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-primary transition-colors">Terms</Link></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="md:col-span-3">
            <h4 className="font-semibold text-text-primary text-sm mb-5">
              Contact
            </h4>
            <div className="space-y-4 text-sm">
              <a
                href="mailto:contact@codequesters.dev"
                className="flex items-center gap-3 hover:text-primary transition-colors group w-fit text-text-secondary"
              >
                <Mail size={16} className="text-text-tertiary group-hover:text-primary transition-colors" />
                <span>contact@codequesters.dev</span>
              </a>
              <a
                href="https://chat.whatsapp.com/Drc3SOwUSJiJnV3ZZgQz7I?mode=ac_t"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:text-primary transition-colors group w-fit text-text-secondary"
              >
                <MessageCircle size={16} className="text-text-tertiary group-hover:text-primary transition-colors" />
                <span>WhatsApp Community</span>
              </a>
            </div>
          </div>

        </div>

        {/* Divider line with brand tint */}
        <div className="border-t border-border my-8" />

        {/* Footer Bottom Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-text-tertiary">
          <div>
            Made with <span className="text-red-500">💖</span> in India
          </div>
          <div className="font-bold text-primary tracking-[0.25em] text-[10px] md:text-xs">
            EXPLORE · LEARN · BUILD
          </div>
          <div>
            © {currentYear} CodeQuesters. All rights reserved.
          </div>
        </div>

      </div>
    </footer>
  )
}
