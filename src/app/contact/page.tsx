'use client'

import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Layout from '@components/shared/Layout'
import { 
  User, 
  Mail, 
  Building, 
  Code, 
  Users, 
  MessageSquare, 
  MapPin, 
  Send,
  CheckCircle,
  Menu,
  X,
  ArrowUpRight
} from 'lucide-react'

export default function ContactPage() {
  const pathname = usePathname()
  const [activeTab, setActiveTab] = useState('Collaboration')
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [selectedChips, setSelectedChips] = useState<string[]>([])
  const [scrolled, setScrolled] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    project: '',
    proposal: '',
    message: ''
  })
  
  const [isSubmitted, setIsSubmitted] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  const chipsList = ["Brand", "Hackathons", "Partnership", "Speaker", "Mentoring", "Community", "Sponsor"]
  const tabs = ['Judge', 'Sponsor', 'Collaboration', 'Partnership']

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

  const toggleChip = (chip: string) => {
    setSelectedChips(prev => 
      prev.includes(chip)
        ? prev.filter(c => c !== chip)
        : [...prev, chip]
    )
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        name: '',
        email: '',
        organization: '',
        project: '',
        proposal: '',
        message: ''
      })
    }, 4000)
  }



  // Background Video Native Scrubbing Logic
  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    let previousX = 0
    let targetTime = 0
    let isSeeking = false

    const handleSeeked = () => {
      isSeeking = false
    }

    const handleMouseMove = (e: MouseEvent) => {
      if (window.innerWidth < 1024) return

      const duration = video.duration
      if (!duration || isNaN(duration)) return

      const currentX = e.clientX
      const deltaX = currentX - previousX
      previousX = currentX

      const movementScale = (deltaX / window.innerWidth) * 0.8 * duration
      targetTime = Math.max(0, Math.min(duration, targetTime + movementScale))

      if (!isSeeking) {
        isSeeking = true
        video.currentTime = targetTime
      }
    }

    const initMousePos = (e: MouseEvent) => {
      previousX = e.clientX
      window.removeEventListener('mousemove', initMousePos)
      window.addEventListener('mousemove', handleMouseMove)
    }

    window.addEventListener('mousemove', initMousePos)
    video.addEventListener('seeked', handleSeeked)

    if (window.innerWidth < 1024) {
      video.autoplay = true
      video.play().catch(() => {})
    }

    return () => {
      window.removeEventListener('mousemove', initMousePos)
      window.removeEventListener('mousemove', handleMouseMove)
      video.removeEventListener('seeked', handleSeeked)
    }
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
    <Layout hideNavbar={true}>
      {/* FLOATING GLASS NAVBAR */}
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
          <motion.div 
            whileHover={{ scale: 1.03 }}
            className="hidden sm:block"
          >
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
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-neutral-500 hover:text-primary transition-colors cursor-pointer"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMobileMenuOpen && (
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
                    onClick={() => setIsMobileMenuOpen(false)}
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

      {/* MAIN CONTENT CONTAINER */}
      <section className="relative min-h-screen pt-36 pb-16 px-6 bg-white text-neutral-900 overflow-hidden flex flex-col justify-between">
        
        {/* Subtle radial green glow behind the robot */}
        <div 
          className="absolute pointer-events-none z-0 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(22,163,74,0.12) 0%, rgba(22,163,74,0) 70%)',
            left: '35vw',
            top: '40vh',
            width: '600px',
            height: '600px',
            transform: 'translate(-50%, -50%)'
          }}
        />

        {/* Curved abstract line SVG background */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.03] pointer-events-none z-0" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="black" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
          <path d="M-100,200 C300,100 500,600 900,400 C1200,300 1300,800 1600,600" fill="none" stroke="black" strokeWidth="1.5" strokeDasharray="6,6" />
          <path d="M-50,350 C400,200 600,800 1100,500 C1300,400 1500,900 1800,700" fill="none" stroke="black" strokeWidth="1.5" />
        </svg>

        {/* 2-Column Layout (Text / Form) */}
        <div className="relative z-10 w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center my-auto">
          
          {/* Left Content */}
          <div className="lg:col-span-5 space-y-8 text-left order-1 lg:order-none z-20">
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="flex items-center gap-1.5 text-xs text-primary uppercase tracking-widest font-bold select-none"
              >
                <span>Get in touch</span>
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              </motion.div>

              {/* Large Headline (Fade Up) */}
              <motion.h1 
                className="text-5xl md:text-6xl lg:text-[72px] font-bold leading-[0.95] text-black tracking-tighter select-none"
                style={{ fontFamily: 'var(--font-sans), sans-serif' }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
              >
                We&apos;d love to <br />
                <span className="bg-gradient-to-r from-emerald-500 to-green-600 bg-clip-text text-transparent">hear</span> from you.
              </motion.h1>

              {/* Body Text (22px Muted Gray, max-width 430px) */}
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 1.0, ease: [0.16, 1, 0.3, 1] }}
                className="text-[#5A635A] text-lg md:text-[22px] leading-relaxed font-normal select-none max-w-[430px]"
              >
                Whether you have questions, feedback, ideas, or just want to say hi — drop us a message and we&apos;ll get back to you as soon as possible.
              </motion.p>
            </div>

            {/* Service Chips */}
            <div className="space-y-4 pt-2">
              <div className="flex flex-wrap gap-2.5">
                {chipsList.map((chip) => {
                  const isSelected = selectedChips.includes(chip)
                  return (
                    <motion.button
                      key={chip}
                      onClick={() => toggleChip(chip)}
                      whileHover={{ scale: 1.03 }}
                      className={`px-4 py-2.5 rounded-full text-xs font-semibold select-none border transition-all duration-200 cursor-pointer ${
                        isSelected
                          ? 'bg-primary text-white border-primary shadow-sm'
                          : 'bg-[#FAFBF9] text-neutral-800 border-neutral-200 hover:bg-emerald-50 hover:text-primary hover:border-primary-light'
                      }`}
                    >
                      {chip}
                    </motion.button>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Right Column: Floating Glass Form Card */}
          <div className="lg:col-span-7 flex justify-end w-full order-3 lg:order-none z-20">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -3 }}
              className="w-full bg-white/72 backdrop-blur-[30px] border border-white/80 rounded-[32px] p-6 md:p-8 shadow-[0_30px_80px_rgba(0,0,0,0.08)] relative text-neutral-900 transition-all duration-300"
            >
              
              {isSubmitted && (
                <div className="absolute inset-0 bg-white/95 rounded-[32px] flex flex-col items-center justify-center text-center p-6 z-30">
                  <div className="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center text-[#0f9f60] mb-4 animate-bounce">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-neutral-900 mb-2">Inquiry Submitted!</h3>
                  <p className="text-neutral-500 text-sm max-w-sm">
                    Thank you for reaching out. We will review your proposal for {activeTab} and get back to you shortly.
                  </p>
                </div>
              )}

              <form onSubmit={handleFormSubmit} className="space-y-5">
                {/* Tabs with hover microinteractions */}
                <div className="bg-[#FAFBF9] p-1.5 rounded-2xl border border-neutral-200/80 flex flex-wrap gap-1">
                  {tabs.map(tab => (
                    <motion.button
                      key={tab}
                      type="button"
                      onClick={() => setActiveTab(tab)}
                      whileHover={{ scale: 1.03 }}
                      className={`flex-1 min-w-[70px] text-xs font-semibold py-2.5 px-2 rounded-xl transition-all duration-200 cursor-pointer ${
                        activeTab === tab 
                          ? 'bg-primary text-white shadow-sm' 
                          : 'text-neutral-500 hover:text-neutral-800'
                      }`}
                    >
                      {tab}
                    </motion.button>
                  ))}
                </div>

                {/* Form Fields Row 1 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1.5 text-left">
                    <label className="text-xs font-bold text-neutral-700 block">Your Name *</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-neutral-400">
                        <User size={16} />
                      </div>
                      <input
                        type="text"
                        name="name"
                        required
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full bg-white border border-neutral-200 rounded-xl pl-10 pr-4 py-2.5 text-neutral-800 placeholder:text-neutral-400 text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-1.5 text-left">
                    <label className="text-xs font-bold text-neutral-700 block">Email Address *</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-neutral-400">
                        <Mail size={16} />
                      </div>
                      <input
                        type="email"
                        name="email"
                        required
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full bg-white border border-neutral-200 rounded-xl pl-10 pr-4 py-2.5 text-neutral-800 placeholder:text-neutral-400 text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200"
                      />
                    </div>
                  </div>
                </div>

                {/* Form Fields Row 2 */}
                <div className="space-y-1.5 text-left">
                  <label className="text-xs font-bold text-neutral-700 block">Organization / Affiliation *</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-neutral-400">
                      <Building size={16} />
                    </div>
                    <input
                      type="text"
                      name="organization"
                      required
                      placeholder="Where are you from?"
                      value={formData.organization}
                      onChange={handleInputChange}
                      className="w-full bg-white border border-neutral-200 rounded-xl pl-10 pr-4 py-2.5 text-neutral-800 placeholder:text-neutral-400 text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200"
                    />
                  </div>
                </div>

                {/* Form Fields Row 3 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1.5 text-left">
                    <label className="text-xs font-bold text-neutral-700 block">Project/Community Name *</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-neutral-400">
                        <Code size={16} />
                      </div>
                      <input
                        type="text"
                        name="project"
                        required
                        placeholder="What are you building?"
                        value={formData.project}
                        onChange={handleInputChange}
                        className="w-full bg-white border border-neutral-200 rounded-xl pl-10 pr-4 py-2.5 text-neutral-800 placeholder:text-neutral-400 text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5 text-left">
                    <label className="text-xs font-bold text-neutral-700 block">Proposed Collaboration *</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-neutral-400">
                        <Users size={16} />
                      </div>
                      <input
                        type="text"
                        name="proposal"
                        required
                        placeholder="How can we work together?"
                        value={formData.proposal}
                        onChange={handleInputChange}
                        className="w-full bg-white border border-neutral-200 rounded-xl pl-10 pr-4 py-2.5 text-neutral-800 placeholder:text-neutral-400 text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200"
                      />
                    </div>
                  </div>
                </div>

                {/* Message Field */}
                <div className="space-y-1.5 text-left">
                  <label className="text-xs font-bold text-neutral-700 block">Message *</label>
                  <div className="relative">
                    <div className="absolute top-3.5 left-3.5 pointer-events-none text-neutral-400">
                      <MessageSquare size={16} />
                    </div>
                    <textarea
                      name="message"
                      required
                      rows={4}
                      placeholder="Tell us what you're looking for..."
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full bg-white border border-neutral-200 rounded-xl pl-10 pr-4 py-2.5 text-neutral-800 placeholder:text-neutral-400 text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200 resize-none"
                    />
                  </div>
                </div>

                {/* Submit Button with hover scale microinteraction */}
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.03 }}
                  className="w-full bg-[#0a894f] hover:bg-[#087342] text-white font-semibold py-3.5 px-6 rounded-xl flex items-center justify-center gap-2 cursor-pointer transition-colors duration-200 text-sm shadow-sm"
                >
                  <Send size={15} />
                  Submit Inquiry
                </motion.button>
              </form>
            </motion.div>
          </div>

        </div>

        {/* PREMIUM HORIZONTAL FOOTER STRIP */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          whileHover={{ y: -3 }}
          className="relative z-10 w-full max-w-7xl mx-auto bg-white/72 backdrop-blur-[30px] border border-white/80 rounded-2xl py-4 px-6 shadow-[0_8px_32px_rgba(0,0,0,0.04)] mt-12 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-[#5A635A] transition-all duration-300"
        >
          {/* Location */}
          <div className="flex items-center gap-3">
            <div className="bg-white border border-neutral-200 p-2.5 rounded-full text-primary shadow-sm flex items-center justify-center">
              <MapPin size={16} />
            </div>
            <div className="text-left">
              <span className="font-semibold block text-neutral-900 leading-none mb-1">Based in India</span>
              <span className="text-xs text-[#5A635A] font-normal">Building globally 🌏</span>
            </div>
          </div>

          {/* Social circular icons */}
          <div className="flex items-center gap-3">
            <span className="text-xs font-semibold uppercase tracking-wider select-none text-neutral-900">Follow Us</span>
            <div className="flex gap-2.5">
              {[
                {
                  icon: (
                    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                    </svg>
                  ),
                  href: 'https://chat.whatsapp.com/Drc3SOwUSJiJnV3ZZgQz7I?mode=ac_t',
                  label: 'WhatsApp'
                },
                {
                  icon: (
                    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                    </svg>
                  ),
                  href: 'https://www.instagram.com/codequesters',
                  label: 'Instagram'
                },
                {
                  icon: (
                    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                      <rect width="4" height="12" x="2" y="9" />
                      <circle cx="4" cy="4" r="2" />
                    </svg>
                  ),
                  href: 'https://www.linkedin.com/company/codequesters/',
                  label: 'LinkedIn'
                },
                {
                  icon: (
                    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                      <path d="M9 18c-4.51 2-5-2-7-2" />
                    </svg>
                  ),
                  href: 'https://github.com/codequesters11',
                  label: 'GitHub'
                },
                { 
                  icon: (
                    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                  ), 
                  href: 'https://twitter.com', 
                  label: 'Twitter' 
                }
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  className="bg-white border border-neutral-200 p-2.5 rounded-full text-neutral-500 hover:text-black hover:border-neutral-300 transition-all duration-200 flex items-center justify-center shadow-sm"
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Tagline branding */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full border border-neutral-200 shadow-sm flex items-center justify-center text-[#0f9f60] font-bold text-xs bg-white">
              CQ
            </div>
            <div className="text-xs text-[#5A635A] text-left">
              <span>Empowering builders. Creating impact.</span>
              <br />
              <span className="font-semibold text-neutral-900">
                Code. <span className="text-[#0f9f60]">•</span> Connect. <span className="text-[#0f9f60]">•</span> Conquer.
              </span>
            </div>
          </div>
        </motion.div>

      </section>
    </Layout>
  )
}
