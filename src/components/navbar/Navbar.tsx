'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ArrowUpRight } from 'lucide-react'

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
    <motion.header
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-6 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] max-w-7xl z-50 transition-all duration-300 rounded-full px-6 py-3 border ${
        scrolled
          ? 'bg-white/72 backdrop-blur-[30px] border-white/80 shadow-[0_8px_32px_rgba(0,0,0,0.06)]'
          : 'bg-white/90 backdrop-blur-[10px] border-neutral-200/50 shadow-sm'
      }`}
    >
      <div className="flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <img
            src="/logo-CQ-tech.png"
            alt="CodeQuesters Logo"
            className="w-7 h-7 object-contain transition-transform group-hover:scale-105"
          />
          <span className="font-semibold text-base text-primary tracking-tight">
            CodeQuesters
          </span>
        </Link>

        {/* Desktop Nav links */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.href
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-xs font-medium uppercase tracking-wider transition-colors duration-200 ${
                  isActive
                    ? 'text-primary font-semibold'
                    : 'text-neutral-500 hover:text-primary font-normal'
                }`}
              >
                {link.label}
              </Link>
            )
          })}
        </nav>

        {/* CTA with microinteraction */}
        <motion.div whileHover={{ scale: 1.03 }} className="hidden sm:block">
          <a
            href="https://chat.whatsapp.com/Drc3SOwUSJiJnV3ZZgQz7I?mode=ac_t"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary hover:bg-primary-dark text-white font-semibold py-2 px-5 rounded-full text-xs flex items-center gap-1 shadow-sm transition-colors cursor-pointer"
          >
            <span>Join Community</span>
            <ArrowUpRight size={14} />
          </a>
        </motion.div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 text-neutral-500 hover:text-primary transition-colors cursor-pointer"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="lg:hidden pt-4 pb-6 border-t border-neutral-100 mt-3 space-y-2 flex flex-col"
          >
            {navLinks.map((link) => {
              const isActive = pathname === link.href
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`block py-2 px-4 text-sm rounded-lg transition-colors ${
                    isActive
                      ? 'bg-primary-light text-primary font-semibold'
                      : 'text-neutral-600 hover:bg-neutral-50'
                  }`}
                >
                  {link.label}
                </Link>
              )
            })}
            <a
              href="https://chat.whatsapp.com/Drc3SOwUSJiJnV3ZZgQz7I?mode=ac_t"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-full text-center py-2.5 rounded-lg text-xs"
            >
              Join Community
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
