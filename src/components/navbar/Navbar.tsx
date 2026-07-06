'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Events', href: '/events' },
    { label: 'Community', href: '/community' },
    { label: 'Builders', href: '/builders' },
    { label: 'Partners', href: '/partners' },
    { label: 'Contact', href: '/contact' },
  ]

  return (
    <nav className={`sticky top-0 z-50 w-full min-h-[64px] flex items-center px-4 md:px-8 border-b transition-all duration-300 ${
      scrolled 
        ? 'bg-white/80 backdrop-blur-md border-border shadow-sm' 
        : 'bg-white border-transparent'
    }`}>
      <div className="container-max w-full">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <img 
              src="/logo-CQ-tech.png" 
              alt="CodeQuesters Logo" 
              className="w-8 h-8 object-contain transition-transform group-hover:scale-105" 
            />
            <span className="font-semibold text-lg text-primary tracking-tight">
              CodeQuesters
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm transition-colors duration-200 ${
                    isActive
                      ? 'text-primary font-semibold'
                      : 'text-text-secondary hover:text-primary font-normal'
                  }`}
                >
                  {link.label}
                </Link>
              )
            })}
          </div>

          {/* CTA Button */}
          <button className="btn-primary py-2 px-5 text-sm hidden sm:inline-flex">
            Join Community
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-text-secondary hover:text-primary transition-colors cursor-pointer"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden pt-4 pb-6 border-t border-border mt-2 space-y-3 animate-fade-in">
            {navLinks.map((link) => {
              const isActive = pathname === link.href
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`block py-2 text-base transition-colors ${
                    isActive
                      ? 'text-primary font-semibold'
                      : 'text-text-secondary hover:text-primary'
                  }`}
                >
                  {link.label}
                </Link>
              )
            })}
            <button className="btn-primary w-full mt-4 py-3 text-sm">
              Join Community
            </button>
          </div>
        )}
      </div>
    </nav>
  )
}
