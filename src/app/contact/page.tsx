'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import Layout from '@components/shared/Layout'
import { 
  Users, 
  Code2, 
  Briefcase, 
  Landmark, 
  Calendar, 
  ArrowRight, 
  ArrowUpRight, 
  Trophy, 
  Award, 
  Sparkles, 
  Laptop, 
  Globe, 
  MapPin, 
  ShieldCheck, 
  Compass, 
  Heart, 
  MessageSquare, 
  Mail, 
  Video, 
  CheckCircle, 
  Plus, 
  Minus,
  ChevronRight
} from 'lucide-react'

export default function ContactPage() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null)
  
  // Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    org: '',
    linkedin: '',
    purpose: '',
    message: ''
  })
  
  const [formErrors, setFormErrors] = useState<Record<string, string>>({})
  const [isSubmitted, setIsSubmitted] = useState(false)

  const toggleFaq = (index: number) => {
    if (activeFaq === index) {
      setActiveFaq(null)
    } else {
      setActiveFaq(index)
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    if (formErrors[name]) {
      setFormErrors(prev => {
        const next = { ...prev }
        delete next[name]
        return next
      })
    }
  }

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Simple Validation
    const errors: Record<string, string> = {}
    if (!formData.name.trim()) errors.name = 'Full name is required.'
    if (!formData.email.trim()) {
      errors.email = 'Email address is required.'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Please provide a valid email.'
    }
    if (!formData.purpose) errors.purpose = 'Please select a purpose.'
    if (!formData.message.trim()) errors.message = 'Message is required.'

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors)
      return
    }

    setIsSubmitted(true)
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' as const },
    },
  }

  // Hero Background Nodes
  const floatingCards = [
    { title: 'Partnerships', x: '10%', y: '18%', label: 'Collaboration' },
    { title: 'Community', x: '12%', y: '58%', label: 'Join Builders' },
    { title: 'Events', x: '38%', y: '74%', label: 'Register Up' },
    { title: 'Speaking', x: '82%', y: '18%', label: 'Keynote' },
    { title: 'Hiring', x: '80%', y: '56%', label: 'Pipeline' },
    { title: 'Collaboration', x: '45%', y: '16%', label: 'Joint Growth' },
  ]

  const purposes = [
    { title: 'Join community', desc: 'For students, coders, and ambitious builders looking to connect.', cta: 'Join Us', icon: <Users className="w-5 h-5 text-primary" /> },
    { title: 'Partner with us', desc: 'For organizations, developer groups, and technical startups.', cta: 'Collaborate', icon: <Code2 className="w-5 h-5 text-accent-blue" /> },
    { title: 'Sponsor events', desc: 'For companies and sponsors supporting hackathons and bootcamps.', cta: 'Support', icon: <Trophy className="w-5 h-5 text-accent-amber" /> },
    { title: 'University chapter', desc: 'Bring CodeQuesters workshops and clubs to your engineering campus.', cta: 'Bring Chapter', icon: <Landmark className="w-5 h-5 text-accent-purple" /> },
    { title: 'Become a speaker', desc: 'For staff engineers and founders looking to host developer AMAs.', cta: 'Share Lessons', icon: <Sparkles className="w-5 h-5 text-primary" /> },
    { title: 'Volunteer with us', desc: 'Help manage campus chapters, review code, or design slides.', cta: 'Apply', icon: <Heart className="w-5 h-5 text-accent-blue" /> },
  ]

  const quickContacts = [
    { name: 'WhatsApp community', desc: 'Announcement channels & mixers.', cta: 'Join WhatsApp', icon: <MessageSquare className="w-5 h-5 text-[#25D366]" />, href: 'https://whatsapp.com/channel/0029VbAjqOJFXUuja0h4G00j' },
    { name: 'Discord community', desc: 'Code debugging & Git branches.', cta: 'Join Discord', icon: <MessageSquare className="w-5 h-5 text-[#5865F2]" />, href: '#' },
    { name: 'LinkedIn page', desc: 'Project updates & hiring matches.', cta: 'Follow Page', icon: <Globe className="w-5 h-5 text-[#0A66C2]" />, href: 'https://www.linkedin.com/company/codequesters' },
    { name: 'Email support', desc: 'Send general business inquiries.', cta: 'Send Email', icon: <Mail className="w-5 h-5 text-primary" />, href: 'mailto:hello@codequesters.dev' },
    { name: 'Instagram profile', desc: 'Offline sittings & group highlights.', cta: 'Follow Instagram', icon: <Sparkles className="w-5 h-5 text-accent-amber" />, href: 'https://www.instagram.com/codequesters' },
    { name: 'YouTube channel', desc: 'Bootcamp tutorials & speakers.', cta: 'Subscribe Channel', icon: <Video className="w-5 h-5 text-[#FF0000]" />, href: 'https://youtube.com/@code_questers?si=oqZMtOfXWaj2u-QA' },
  ]

  const partnerTypes = [
    { name: 'Community partnerships', outcomes: 'Shared mixer events and developer guides.', benefits: 'Extended reach across campus developer groups.' },
    { name: 'Technology partnerships', desc: 'API grants, sandbox tooling, and developer workspace credits.', outcomes: 'Student credits for backend applications.', benefits: 'Ecosystem adoption.' },
    { name: 'Hiring partnerships', outcomes: 'Direct access to pre-screened hack sprint code portfolios.', benefits: 'Fast talent matching pipeline.' },
    { name: 'University chapters', outcomes: 'In-person workshops, GSoC panels, and lab sprints.', benefits: 'Campus credit opportunities.' },
  ]

  const sponsorBenefits = [
    { type: 'Brand Visibility', desc: 'Prominent logo nodes on event banners, websites, and community slides.' },
    { type: 'Community Reach', desc: 'Present developer tools directly to 2,000+ active student coders.' },
    { type: 'Event Presence', desc: 'Keynote opening slots and presentation opportunities at flagship hack sprints.' },
    { type: 'Talent Access', desc: 'Resume books, pre-screened builder details, and offline campus interviews.' },
    { type: 'Lead Generation', desc: 'Acquire early developer signups for tool sandbox pipelines.' },
  ]

  const universityBenefits = [
    { type: 'Workshops', desc: 'Hands-on developer bootcamps inside engineering college computer labs.' },
    { type: 'Hackathons', desc: 'Weekend hack sprints with structured prize pools and direct VC panels.' },
    { type: 'Ambassador programs', desc: 'Guidance and chapter credits for campus ambassador developers.' },
    { type: 'AI sittings', desc: 'Bootcamps covering LLM deployment, backend logic, and compiler tools.' },
  ]

  const speakers = [
    { role: 'Guest speaker', desc: 'Share industry milestones, product design lessons, or git advice.' },
    { role: 'Workshop trainer', desc: 'Run detailed 2-hour compiler, payment API, or server bootcamps.' },
    { role: 'Hackathon judge', desc: 'Review student prototype code and pitch presentations at sittings.' },
    { role: 'Community advisor', desc: 'Coordinate with organizers to guide chapter progression goals.' },
  ]

  const support = [
    { title: 'Community access', queue: '24h wait time', desc: 'For issues with WhatsApp chat channels or Discord invites.' },
    { title: 'Event questions', queue: '12h wait time', desc: 'For screening details, team sizing, and location maps.' },
    { title: 'Registration help', queue: '6h wait time', desc: 'For issues with code sandbox portals or submissions.' },
    { title: 'Partnership support', queue: '24h wait time', desc: 'For technology integration or signing sittings queries.' },
  ]

  const faqs = [
    { q: 'How do I join?', a: 'You can join instantly through the quick WhatsApp or Discord channels listed in Section 3.' },
    { q: 'Is CodeQuesters free?', a: 'Yes. Joining channels, workshops, sittings, and hackathons is 100% free for students.' },
    { q: 'How can my company partner?', a: 'You can submit an inquiry through the contact form or select the Partner With Us purpose card.' },
    { q: 'Can my college collaborate?', a: 'Yes. Campus chapters can be requested by university leads or students through the form.' },
    { q: 'How do I become a speaker?', a: 'Select the Speaking Opportunity option in the contact form purpose dropdown to submit your details.' },
    { q: 'How long does it take to get a response?', a: 'We typically review and respond to inquiries within 24 to 48 hours.' },
  ]

  const globalStats = [
    { number: '10+', label: 'Indian States', desc: 'Builders connected across major campus regions.' },
    { number: '74+', label: 'Universities', desc: 'Active engineering clubs and student chapter nodes.' },
    { number: '20+', label: 'Partner Hubs', desc: 'Collaborating technology and hiring platforms.' },
    { number: '2000+', label: 'Reach', desc: 'Active student developers writing code in the ecosystem.' },
  ]

  return (
    <Layout>
      {/* HERO SECTION — LET'S START A CONVERSATION */}
      <section className="relative min-h-[600px] flex items-center justify-center bg-white border-b border-border overflow-hidden py-20">
        {/* Surrounding Floating Cards in Background */}
        <div className="absolute inset-0 opacity-[0.22] select-none pointer-events-none">
          {floatingCards.map((card, idx) => (
            <div 
              key={idx} 
              className="absolute bg-card border border-border p-3 rounded-lg hidden md:block"
              style={{ top: card.y, left: card.x }}
            >
              <span className="text-[9px] uppercase tracking-wider text-primary font-bold">{card.label}</span>
              <h4 className="text-xs font-semibold text-text-primary mt-0.5">{card.title}</h4>
            </div>
          ))}
        </div>

        {/* Center Content */}
        <div className="container-max relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl mx-auto flex flex-col items-center"
          >
            <span className="badge mb-5">Conversation space</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] text-text-primary mb-6">
              Let's build something together.
            </h1>
            <p className="text-sm md:text-base text-text-secondary leading-relaxed max-w-xl mb-8 font-normal">
              Whether you're a student, organization, university, community, startup or sponsor, we'd love to hear from you.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6 w-full sm:w-auto">
              <a href="#contact-form" className="w-full sm:w-auto btn-primary text-sm py-3 px-8 flex items-center justify-center gap-2">
                Contact us
                <ArrowRight size={16} />
              </a>
              <button className="w-full sm:w-auto btn-secondary text-sm py-3 px-8 flex items-center justify-center gap-2">
                Join community
              </button>
            </div>
            
            <span className="text-[10px] text-text-tertiary font-semibold uppercase tracking-wider">
              We typically respond within 24–48 hours.
            </span>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2 — HOW CAN WE HELP? */}
      <section className="section-spacing bg-white border-b border-border">
        <div className="container-max">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="badge mb-3">Gateway options</span>
            <h2 className="text-3xl font-bold text-text-primary">
              Choose your purpose
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {purposes.map((purpose, idx) => (
              <div key={idx} className="card-base bg-card border border-border p-6 hover:border-primary/20 transition-all duration-300 flex flex-col justify-between" hover-translate="y-1">
                <div>
                  <div className="bg-background-secondary p-2.5 rounded-md border border-border w-fit mb-4">
                    {purpose.icon}
                  </div>
                  <h4 className="text-sm font-semibold text-text-primary mb-2 capitalize">{purpose.title}</h4>
                  <p className="text-xs text-text-secondary leading-relaxed mb-6 font-normal">{purpose.desc}</p>
                </div>
                <button className="w-full btn-primary text-xs py-2">
                  {purpose.cta}
                  <ArrowRight size={14} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3 — QUICK CONTACT OPTIONS */}
      <section className="section-spacing bg-background-secondary border-b border-border">
        <div className="container-max">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="badge mb-3">Rapid channels</span>
            <h2 className="text-3xl font-bold text-text-primary">
              Connect instantly
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-6 gap-4">
            {quickContacts.map((contact, idx) => (
              <a
                key={idx}
                href={contact.href}
                target={contact.href.startsWith('http') ? '_blank' : undefined}
                rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="card-base bg-card border border-border p-4 hover:border-primary/20 transition-all duration-300 flex flex-col justify-between text-center cursor-pointer group"
                hover-translate="y-1"
              >
                <div className="flex flex-col items-center">
                  <div className="bg-background-secondary p-2 rounded-md border border-border mb-3 w-fit group-hover:border-primary/30 transition-colors">
                    {contact.icon}
                  </div>
                  <h4 className="text-xs font-semibold text-text-primary mb-1 capitalize leading-snug">{contact.name}</h4>
                  <p className="text-[10px] text-text-secondary leading-normal font-normal mb-4">{contact.desc}</p>
                </div>
                <span className="text-[10px] font-semibold text-primary group-hover:underline flex items-center justify-center gap-0.5 mt-auto">
                  {contact.cta}
                  <ChevronRight size={12} />
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4 — CONTACT FORM HUB */}
      <section id="contact-form" className="section-spacing bg-white border-b border-border">
        <div className="container-max">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="badge mb-3">Form hub</span>
            <h2 className="text-3xl font-bold text-text-primary">
              Send us a message
            </h2>
          </motion.div>

          {/* Form Container */}
          <div className="max-w-xl mx-auto card-base bg-card border border-border p-6 md:p-8">
            {isSubmitted ? (
              <div className="text-center py-8 animate-fade-in">
                <div className="w-12 h-12 bg-primary-light border border-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-text-primary mb-2">Message sent successfully</h3>
                <p className="text-xs text-text-secondary max-w-sm mx-auto leading-relaxed">
                  Thank you for reaching out. A community organizer will review your inquiry and connect with you within 24–48 hours.
                </p>
                <button 
                  onClick={() => {
                    setIsSubmitted(false)
                    setFormData({ name: '', email: '', phone: '', org: '', linkedin: '', purpose: '', message: '' })
                  }}
                  className="btn-secondary text-xs py-2 px-6 mt-6"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-text-primary mb-1">Full name *</label>
                    <input 
                      type="text" 
                      name="name" 
                      value={formData.name}
                      onChange={handleInputChange}
                      className={`w-full p-2.5 rounded border ${formErrors.name ? 'border-red-500' : 'border-border'} text-xs bg-background-secondary`}
                      placeholder="e.g. Lakshya Kumar"
                    />
                    {formErrors.name && <span className="text-[10px] text-red-500 mt-1 block">{formErrors.name}</span>}
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-text-primary mb-1">Email address *</label>
                    <input 
                      type="email" 
                      name="email" 
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`w-full p-2.5 rounded border ${formErrors.email ? 'border-red-500' : 'border-border'} text-xs bg-background-secondary`}
                      placeholder="hello@codequesters.dev"
                    />
                    {formErrors.email && <span className="text-[10px] text-red-500 mt-1 block">{formErrors.email}</span>}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-text-primary mb-1">Phone number</label>
                    <input 
                      type="text" 
                      name="phone" 
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full p-2.5 rounded border border-border text-xs bg-background-secondary"
                      placeholder="Optional"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-text-primary mb-1">Organization</label>
                    <input 
                      type="text" 
                      name="org" 
                      value={formData.org}
                      onChange={handleInputChange}
                      className="w-full p-2.5 rounded border border-border text-xs bg-background-secondary"
                      placeholder="e.g. VIT University / GreatHire"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-text-primary mb-1">LinkedIn profile link</label>
                  <input 
                    type="text" 
                    name="linkedin" 
                    value={formData.linkedin}
                    onChange={handleInputChange}
                    className="w-full p-2.5 rounded border border-border text-xs bg-background-secondary"
                    placeholder="https://linkedin.com/in/username"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-text-primary mb-1">Purpose drop down *</label>
                  <select 
                    name="purpose"
                    value={formData.purpose}
                    onChange={handleInputChange}
                    className={`w-full p-2.5 rounded border ${formErrors.purpose ? 'border-red-500' : 'border-border'} text-xs bg-background-secondary text-text-primary`}
                  >
                    <option value="">Select an option</option>
                    <option value="Community Join">Community Join</option>
                    <option value="Partnership">Partnership Inquiry</option>
                    <option value="Sponsorship">Sponsorship Opportunity</option>
                    <option value="University Collaboration">University Collaboration</option>
                    <option value="Speaking Opportunity">Speaking Opportunity</option>
                    <option value="Volunteer">Volunteer Application</option>
                    <option value="General Inquiry">General Inquiry</option>
                  </select>
                  {formErrors.purpose && <span className="text-[10px] text-red-500 mt-1 block">{formErrors.purpose}</span>}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-text-primary mb-1">Message *</label>
                  <textarea 
                    name="message" 
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    className={`w-full p-2.5 rounded border ${formErrors.message ? 'border-red-500' : 'border-border'} text-xs bg-background-secondary`}
                    placeholder="Describe how we can help you..."
                  />
                  {formErrors.message && <span className="text-[10px] text-red-500 mt-1 block">{formErrors.message}</span>}
                </div>

                <button type="submit" className="w-full btn-primary py-3 text-xs">
                  Submit message inquiry
                  <ArrowRight size={14} />
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* SECTION 5 — PARTNERSHIP INQUIRIES */}
      <section className="section-spacing bg-background-secondary border-b border-border">
        <div className="container-max">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="badge mb-3">Partner details</span>
            <h2 className="text-3xl font-bold text-text-primary">
              Partner with CodeQuesters
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {partnerTypes.map((item, idx) => (
              <div key={idx} className="card-base bg-card p-6 border border-border flex flex-col justify-between hover:border-primary/20 transition-all duration-300">
                <div>
                  <h4 className="text-sm font-semibold text-text-primary mb-3 capitalize">{item.name}</h4>
                  <div className="space-y-3 mb-6 text-xs font-normal text-text-secondary">
                    <div>
                      <span className="font-semibold text-text-primary block">Expected outcomes</span>
                      {item.outcomes}
                    </div>
                  </div>
                </div>
                <div className="border-t border-border pt-4 mt-auto">
                  <span className="text-[9px] uppercase tracking-wider text-text-tertiary block font-semibold">Benefits</span>
                  <span className="text-xs font-semibold text-text-primary mt-0.5 block">{item.benefits}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6 — SPONSORSHIP OPPORTUNITIES */}
      <section className="section-spacing bg-white border-b border-border">
        <div className="container-max">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="badge mb-3">Sponsorships</span>
            <h2 className="text-3xl font-bold text-text-primary">
              Support builder growth
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-12">
            {sponsorBenefits.map((item, idx) => (
              <div key={idx} className="card-base bg-card border border-border p-5 hover:border-primary/20 duration-300 text-center">
                <h4 className="text-xs font-semibold text-text-primary mb-2">{item.type}</h4>
                <p className="text-[10px] text-text-secondary leading-normal font-normal">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button className="btn-secondary py-3 px-8 text-sm">
              Request sponsorship deck
              <ArrowUpRight size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* SECTION 7 — UNIVERSITY COLLABORATIONS */}
      <section className="section-spacing bg-background-secondary border-b border-border">
        <div className="container-max">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="badge mb-3">University Chapters</span>
            <h2 className="text-3xl font-bold text-text-primary">
              Bring opportunities to your campus
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {universityBenefits.map((item, idx) => (
              <div key={idx} className="card-base bg-card border border-border p-5 hover:border-primary/20 duration-300 text-center">
                <h4 className="text-xs font-semibold text-text-primary mb-2 capitalize">{item.type}</h4>
                <p className="text-[10px] text-text-secondary leading-normal font-normal">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button className="btn-secondary py-3 px-8 text-sm">
              Schedule discussion
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* SECTION 8 — SPEAKER & MENTOR NETWORK */}
      <section className="section-spacing bg-white border-b border-border">
        <div className="container-max">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="badge mb-3">Keynote experts</span>
            <h2 className="text-3xl font-bold text-text-primary">
              Share your experience
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {speakers.map((item, idx) => (
              <div key={idx} className="card-base bg-card border border-border p-5 hover:border-primary/20 duration-300 text-center">
                <h4 className="text-xs font-semibold text-text-primary mb-2 capitalize">{item.role}</h4>
                <p className="text-[10px] text-text-secondary leading-normal font-normal">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button className="btn-secondary py-3 px-8 text-sm">
              Become a speaker
              <ArrowUpRight size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* SECTION 9 — COMMUNITY SUPPORT */}
      <section className="section-spacing bg-background-secondary border-b border-border">
        <div className="container-max">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="badge mb-3">Queues</span>
            <h2 className="text-3xl font-bold text-text-primary">
              Need help?
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {support.map((item, idx) => (
              <div key={idx} className="card-base bg-card border border-border p-5 hover:border-primary/20 duration-300 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <h4 className="text-xs font-semibold text-text-primary capitalize">{item.title}</h4>
                    <span className="text-[9px] font-semibold text-primary bg-primary-light px-2 py-0.5 rounded">{item.queue}</span>
                  </div>
                  <p className="text-[10px] text-text-secondary leading-relaxed font-normal">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 10 — FAQ */}
      <section className="section-spacing bg-white border-b border-border">
        <div className="container-max">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="badge mb-3">FAQs</span>
            <h2 className="text-3xl font-bold text-text-primary">
              Frequently asked questions
            </h2>
          </motion.div>

          <div className="max-w-2xl mx-auto space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = activeFaq === idx
              return (
                <div 
                  key={idx} 
                  className="bg-card border border-border rounded-lg overflow-hidden transition-all duration-300"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full p-5 flex items-center justify-between text-left cursor-pointer hover:bg-background-secondary transition-colors"
                  >
                    <span className="text-xs md:text-sm font-semibold text-text-primary">{faq.q}</span>
                    {isOpen ? <Minus size={16} className="text-primary" /> : <Plus size={16} className="text-primary" />}
                  </button>
                  {isOpen && (
                    <div className="p-5 pt-0 border-t border-border/50 bg-card text-[11px] md:text-xs text-text-secondary leading-relaxed font-normal animate-fade-in">
                      {faq.a}
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* SECTION 11 — GLOBAL PRESENCE */}
      <section className="section-spacing bg-background-secondary border-b border-border">
        <div className="container-max">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="badge mb-3">Global node reach</span>
            <h2 className="text-3xl font-bold text-text-primary">
              Building across communities
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            {globalStats.map((stat, idx) => (
              <div key={idx} className="card-base bg-card border border-border p-6 hover:shadow-sm">
                <span className="text-3xl font-bold text-primary block mb-1">{stat.number}</span>
                <h4 className="text-xs font-semibold text-text-primary mb-1">{stat.label}</h4>
                <p className="text-[10px] text-text-secondary leading-normal font-normal">{stat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 12 — FINAL CTA */}
      <section className="section-spacing bg-white relative overflow-hidden">
        {/* Subtle background blur accents */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent-blue/5 rounded-full blur-3xl" />

        <div className="container-max relative z-10">
          <motion.div
            className="text-center max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
              Every great collaboration starts with a conversation.
            </h2>
            <p className="text-sm md:text-base text-text-secondary mb-8 leading-relaxed font-normal">
              Let's explore how we can create opportunities together.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="w-full sm:w-auto btn-primary text-sm py-3 px-8 flex items-center justify-center gap-2">
                Contact us
                <ArrowRight size={16} />
              </button>
              <button className="w-full sm:w-auto btn-secondary text-sm py-3 px-8 flex items-center justify-center gap-2">
                Join community
              </button>
              <button className="w-full sm:w-auto btn-outline text-sm py-3 px-8 flex items-center justify-center gap-2">
                Partner with us
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  )
}
