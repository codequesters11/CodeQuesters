import Link from 'next/link'
import { Mail, MessageCircle } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-card border-t border-border mt-auto">
      <div className="container-max py-16">
        {/* Footer Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 mb-12">
          {/* Brand Info */}
          <div className="col-span-2 md:col-span-1">
            <h3 className="font-semibold text-lg mb-4 text-text-primary">
              CodeQuesters
            </h3>
            <p className="text-text-secondary text-sm leading-relaxed max-w-xs">
              Building the next generation of builders through real-world opportunities, collaboration, and execution.
            </p>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-semibold mb-4 text-text-primary text-xs uppercase tracking-wider">
              Company
            </h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/" className="text-text-secondary hover:text-primary transition-colors">Home</Link></li>
              <li><Link href="/about" className="text-text-secondary hover:text-primary transition-colors">About</Link></li>
              <li><Link href="/partners" className="text-text-secondary hover:text-primary transition-colors">Partners</Link></li>
              <li><Link href="/contact" className="text-text-secondary hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Community Links */}
          <div>
            <h4 className="font-semibold mb-4 text-text-primary text-xs uppercase tracking-wider">
              Community
            </h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/community" className="text-text-secondary hover:text-primary transition-colors">Join Us</Link></li>
              <li><Link href="/builders" className="text-text-secondary hover:text-primary transition-colors">Builders</Link></li>
            </ul>
          </div>

          {/* Programs Links */}
          <div>
            <h4 className="font-semibold mb-4 text-text-primary text-xs uppercase tracking-wider">
              Programs
            </h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/events?type=hackathon" className="text-text-secondary hover:text-primary transition-colors">Hackathons</Link></li>
              <li><Link href="/events?type=workshop" className="text-text-secondary hover:text-primary transition-colors">Workshops</Link></li>
              <li><Link href="/events?type=open-source" className="text-text-secondary hover:text-primary transition-colors">Open Source</Link></li>
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h4 className="font-semibold mb-4 text-text-primary text-xs uppercase tracking-wider">
              Resources
            </h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/brand" className="text-text-secondary hover:text-primary transition-colors">Brand Guidelines</Link></li>
              <li><Link href="/code-of-conduct" className="text-text-secondary hover:text-primary transition-colors">Code of Conduct</Link></li>
              <li><Link href="/faq" className="text-text-secondary hover:text-primary transition-colors">FAQ</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border pt-8 mt-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex flex-col gap-1 text-center sm:text-left">
              <p className="text-text-primary text-sm font-medium">
                © CodeQuesters 2026
              </p>
              <p className="text-text-tertiary text-xs">
                Built with ❤️ for builders.
              </p>
            </div>
            <div className="flex items-center gap-4">
              <a
                href="mailto:hello@codequesters.dev"
                className="text-text-tertiary hover:text-primary transition-colors"
                aria-label="Mail Link"
              >
                <Mail size={18} />
              </a>
              <a
                href="https://whatsapp.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-tertiary hover:text-primary transition-colors"
                aria-label="WhatsApp Link"
              >
                <MessageCircle size={18} />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-tertiary hover:text-primary transition-colors"
                aria-label="GitHub Link"
              >
                <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-tertiary hover:text-primary transition-colors"
                aria-label="LinkedIn Link"
              >
                <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
