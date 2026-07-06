'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import Layout from '@components/shared/Layout'
import { 
  Calendar, 
  MapPin, 
  Users, 
  ArrowRight, 
  ArrowUpRight,
  Trophy, 
  GraduationCap, 
  Cpu, 
  GitBranch, 
  Coffee, 
  Briefcase, 
  Flame, 
  Sparkles, 
  Plus, 
  Minus 
} from 'lucide-react'

export default function EventsPage() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    if (activeFaq === index) {
      setActiveFaq(null)
    } else {
      setActiveFaq(index)
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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

  const stats = [
    { number: '50+', label: 'Events & workshops', desc: 'Practical sprints, hackathons, and masterclasses.' },
    { number: '2000+', label: 'Builders impacted', desc: 'Active student developers writing production code.' },
    { number: '74+', label: 'Colleges reached', desc: 'Engineering campuses with active student chapters.' },
    { number: '20+', label: 'Community partners', desc: 'Organizations mentoring and sponsoring builders.' },
  ]

  const upcoming = [
    {
      type: 'Hackathon',
      title: 'CodeQuest 2026',
      desc: 'Our flagship 36-hour sprint where builders team up, design architecture, write backend engines, and pitch MVPs to VCs.',
      date: 'Aug 14-16, 2026',
      location: 'IIIT Delhi Campus',
      bannerGrad: 'from-primary/20 via-primary-dark/20 to-primary/5',
      badgeText: 'National Sprint',
    },
    {
      type: 'Workshop',
      title: 'React Server Components deep-dive',
      desc: 'Learn data-fetching, static optimization, streaming, and hydration boundaries directly from startup engineering leads.',
      date: 'Sept 5, 2026',
      location: 'Virtual Masterclass',
      bannerGrad: 'from-accent-blue/20 via-accent-blue/10 to-accent-blue/5',
      badgeText: 'Advanced Class',
    },
    {
      type: 'Meetup',
      title: 'Delhi builder campus mixer',
      desc: 'Connect offline with 150+ coders. Form teams for upcoming sprints, review pull requests, and discuss tech stacks over coffee.',
      date: 'Sept 22, 2026',
      location: 'IIT Delhi Hub',
      bannerGrad: 'from-accent-purple/20 via-accent-purple/10 to-accent-purple/5',
      badgeText: 'Peer Networking',
    },
  ]

  const past = [
    {
      title: 'Compete & Win: Summer Internship Challenge 2026',
      date: 'May 31, 2026 - 9:00 AM – 5:00 PM IST',
      location: 'CS Coworking Spaces, Raidurg, Hyderabad + Virtual',
      by: 'GradSkills × CodeQuesters',
      status: 'Ended',
      image: '/events/summership-2026.jpg',
      tags: ['Internship', 'AI'],
    },
    {
      title: 'GitHub to Income: Building Real Opportunities Through Open Source',
      date: 'May 30, 2026 - 5:00 PM – 7:00 PM IST',
      location: 'Virtual',
      by: 'CodeQuesters × CDN IGNOU',
      status: 'Ended',
      image: '/events/github_speaker_post.jpg',
      tags: ['GitHub', 'Open Source'],
    },
    {
      title: 'CODEQUEST 2026 — GenAI Hackathon',
      date: 'Apr 12, 2026',
      location: 'Hybrid',
      by: 'CodeQuesters',
      status: 'Ended',
      image: '/events/CodeQuest-2026.jpg',
      tags: ['GenAI', 'Hackathon'],
    },
    {
      title: 'Supervity Workshop — Build Your First AI Agent LIVE!',
      date: 'Apr 2, 2026 - 7:00 PM – 9:00 PM IST',
      location: 'Virtual',
      by: 'CodeQuesters',
      status: 'Ended',
      image: '/events/supervity-workshop.png',
      tags: ['AI Agents', 'No-Code'],
    },
  ]

  const gallery = [
    { title: 'Hackathon sprints', desc: 'Late night collaboration & debugging.', class: 'col-span-2 row-span-2 bg-gradient-to-br from-primary/10 to-accent-blue/5 border-l-4 border-l-primary', icon: <Flame className="w-5 h-5 text-primary" /> },
    { title: 'Technical workshops', desc: 'Hands-on training inside labs.', class: 'col-span-2 sm:col-span-1 row-span-1 bg-gradient-to-br from-accent-blue/10 to-accent-blue/5 border-l-4 border-l-accent-blue', icon: <GraduationCap className="w-4 h-4 text-accent-blue" /> },
    { title: 'Winner moments', desc: 'Teams celebrating cash prize milestones.', class: 'col-span-2 sm:col-span-1 row-span-2 bg-gradient-to-br from-accent-amber/15 to-accent-amber/5 border-l-4 border-l-accent-amber', icon: <Trophy className="w-4 h-4 text-accent-amber" /> },
    { title: 'Peer networking', desc: 'Connecting developers over ideas.', class: 'col-span-2 sm:col-span-1 row-span-2 bg-gradient-to-br from-accent-purple/10 to-accent-purple/5 border-l-4 border-l-accent-purple', icon: <Users className="w-4 h-4 text-accent-purple" /> },
    { title: 'Mentorship review', desc: 'Direct code architecture feedback.', class: 'col-span-2 row-span-1 bg-gradient-to-br from-background-tertiary to-background-secondary border-l-4 border-l-text-secondary', icon: <Sparkles className="w-4 h-4 text-text-secondary" /> },
  ]

  const winners = [
    { name: 'Amit Sharma', role: 'Winner, CodeQuest 2025', story: 'Built an API developer debugger utility. Mentors helped refine the deployment flow, and they pitched to VC partners.', icon: '🏆' },
    { name: 'Neha Patel', role: 'Top Contributor, Open Source Bootcamps', story: 'Merged 10+ core PRs into open developer tools. Now leads workshop sittings and guides campus chapters.', icon: '💻' },
    { name: 'Rohan Gupta', role: 'Builder of the Month', story: 'Designed clean documentation for peer developers, simplifying GSoC registration steps for 300+ students.', icon: '🚀' },
  ]

  const categories = [
    { title: 'Hackathons', desc: 'Pushed code under weekend timelines, collaborating on MVPs, and pitching prototypes to VC panels.', icon: <Trophy className="w-5 h-5 text-accent-amber" /> },
    { title: 'Workshops', desc: 'Hands-on masterclasses covering developer tools, rust compiler logic, backend systems, and UI tokens.', icon: <GraduationCap className="w-5 h-5 text-primary" /> },
    { title: 'AI & technology', desc: 'Building LLM pipelines, autonomous agents, vector databases, and debugging API layers.', icon: <Cpu className="w-5 h-5 text-accent-blue" /> },
    { title: 'Open source', desc: 'Contributing code directly to shared packages, reviewing pull requests, and maintaining repositories.', icon: <GitBranch className="w-5 h-5 text-accent-purple" /> },
    { title: 'Community meetups', desc: 'Peer coffee sessions, student chapter mixers, and panel discussions on developer career routes.', icon: <Users className="w-5 h-5 text-primary" /> },
    { title: 'Career events', desc: 'Direct recruiting, interview prep workshops, mock compiler tests, and resume reviews with partners.', icon: <Briefcase className="w-5 h-5 text-accent-blue" /> },
  ]

  const testimonials = [
    { name: 'Dev Patel', role: 'CodeQuest Attendee', quote: 'The weekend hack sprint was intense. We built a visual debugger and the live mentor feedback helped us solve deployment bottlenecks.' },
    { name: 'Riya Sen', role: 'Workshop Attendee', quote: 'RSC masterclass was incredibly detailed. Learned more about streaming, hydration limits, and layout shifts than online courses.' },
    { name: 'Kunal Shah', role: 'Mixer Attendee', quote: 'Met my co-founder at the Delhi builder mixer. We paired up for CodeQuest, built our MVP, and got hired as full-time interns.' },
  ]

  const partnerLogos = [
    { cat: 'Technology partners', names: ['Vercel', 'Stripe', 'Linear', 'Github'], color: 'group-hover:text-black' },
    { cat: 'Hiring partners', names: ['GreatHire', 'Devel', 'ICS Group', 'TechStartup'], color: 'group-hover:text-primary' },
    { cat: 'Community partners', names: ['AI House', 'GradSkills', 'BuildSpace', 'DevFolio'], color: 'group-hover:text-accent-blue' },
  ]

  const faqs = [
    { q: 'How do I register?', a: 'You can register directly through the Explore Events button on the upcoming event card. Some flagship hack sprints require application screening.' },
    { q: 'Are events free?', a: 'Yes, all CodeQuesters developer workshops, meetups, and sprint hackathons are 100% free for students.' },
    { q: 'Who can participate?', a: 'Any student currently enrolled in engineering, design, or technical courses can participate.' },
    { q: 'Do I need experience?', a: 'No, we run workshops specifically designed for beginners, alongside high-stakes hackathons for experienced developers.' },
    { q: 'Will certificates be provided?', a: 'Yes, participants receive technical proof-of-work completion certificates and GitHub profile badges.' },
    { q: 'Can beginners join?', a: 'Absolutely. We pair beginners with mentors and run coding bootcamps before major hackathons.' },
  ]

  return (
    <Layout>
      {/* SECTION 1 — PAGE HERO */}
      <section className="section-spacing pt-20 md:pt-28 bg-gradient-to-b from-white via-background-secondary to-white overflow-hidden border-b border-border">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Col (7 cols): Header copy */}
            <div className="lg:col-span-7 flex flex-col items-start">
              <span className="badge mb-3">Events</span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] text-text-primary mb-6">
                Where builders learn, build & connect
              </h1>
              <p className="text-sm md:text-base text-text-secondary leading-relaxed max-w-xl mb-8 font-normal">
                Explore workshops, hackathons, meetups, competitions and experiences designed to help builders grow.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                <button className="btn-primary py-3 px-8 text-sm">
                  Explore upcoming events
                  <ArrowRight size={16} />
                </button>
                <button className="btn-secondary py-3 px-8 text-sm">
                  View past events
                </button>
              </div>
            </div>

            {/* Right Col (5 cols): Grid Collage placeholder */}
            <div className="lg:col-span-5 h-[320px] relative">
              <div className="grid grid-cols-2 gap-3 h-full">
                <div className="rounded-lg border border-border bg-gradient-to-br from-primary/15 via-primary-dark/20 to-primary/5 p-4 flex flex-col justify-end group hover:border-primary transition-all duration-300">
                  <span className="text-[9px] uppercase font-bold tracking-wider text-primary-dark bg-primary-light px-2 py-0.5 rounded w-fit mb-2">Hack sprint</span>
                  <h4 className="text-xs font-semibold text-text-primary">Collaborative hacking</h4>
                </div>
                <div className="grid grid-rows-2 gap-3">
                  <div className="rounded-lg border border-border bg-gradient-to-br from-accent-blue/15 to-accent-blue/5 p-3 flex flex-col justify-end group hover:border-primary transition-all duration-300">
                    <h4 className="text-xs font-semibold text-text-primary">Mentor panels</h4>
                  </div>
                  <div className="rounded-lg border border-border bg-gradient-to-br from-accent-amber/15 to-accent-amber/5 p-3 flex flex-col justify-end group hover:border-primary transition-all duration-300">
                    <h4 className="text-xs font-semibold text-text-primary">Winner awards</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 — EVENT IMPACT */}
      <section className="section-spacing bg-white border-b border-border">
        <div className="container-max">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="badge mb-3">Impact metrics</span>
            <h2 className="text-3xl font-bold text-text-primary">
              A growing event ecosystem
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, idx) => (
              <div key={idx} className="p-6 bg-card border border-border rounded-lg text-center hover:shadow-sm transition-shadow">
                <span className="text-3xl font-bold text-primary block mb-1">{stat.number}</span>
                <h4 className="text-xs font-semibold text-text-primary mb-1">{stat.label}</h4>
                <p className="text-[10px] text-text-secondary leading-relaxed font-normal">{stat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3 — FEATURED EVENT */}
      <section className="section-spacing bg-background-secondary border-b border-border">
        <div className="container-max">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="badge mb-3">Flagship program</span>
            <h2 className="text-3xl font-bold text-text-primary">
              Featured event
            </h2>
          </motion.div>

          {/* Featured Event Card layout */}
          <div className="card-base p-0 overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-0 border border-border bg-card">
            {/* Banner Left (5 cols) */}
            <div className="lg:col-span-5 min-h-[240px] bg-gradient-to-br from-primary via-primary-dark to-accent-blue p-8 flex flex-col justify-between text-white relative">
              <span className="self-start text-[10px] uppercase font-bold tracking-wider text-primary bg-white px-2.5 py-1 rounded shadow-sm">
                Featured
              </span>
              <div>
                <span className="text-white/80 text-xs font-semibold uppercase tracking-wider block mb-1">CodeQuest 2026</span>
                <h3 className="text-2xl font-bold leading-tight">National builder hack sprint</h3>
              </div>
            </div>

            {/* Details Right (7 cols) */}
            <div className="lg:col-span-7 p-6 md:p-8 flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start mb-4">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-primary bg-primary-light px-2 py-0.5 rounded">Hacker sprint</span>
                  <span className="text-xs text-text-secondary font-medium">1,200+ applied</span>
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-text-primary mb-3">CodeQuest 2026</h3>
                <p className="text-xs md:text-sm text-text-secondary leading-relaxed mb-6 font-normal">
                  Our core national 36-hour hack sprint where builders team up to compile backend code, deploy services, and pitch MVP models to engineering partners.
                </p>

                {/* Metadata Row */}
                <div className="grid grid-cols-3 gap-4 border-t border-b border-border py-4 mb-6 text-xs font-normal text-text-secondary">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-primary" />
                    <span>August 14-16, 2026</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-primary" />
                    <span>IIIT Delhi Campus</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-primary" />
                    <span>400+ Hacking Live</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 items-center">
                <button className="btn-primary py-2.5 px-6 text-sm">
                  Register for hack sprint
                  <ArrowRight size={16} />
                </button>
                <button className="btn-outline py-2.5 px-6 text-sm">
                  View guidelines
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4 — UPCOMING EVENTS */}
      <section className="section-spacing bg-white border-b border-border">
        <div className="container-max">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="badge mb-3">Next sessions</span>
            <h2 className="text-3xl font-bold text-text-primary">
              Upcoming events
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {upcoming.map((event, idx) => (
              <div key={idx} className="card-base p-0 overflow-hidden border border-border bg-card flex flex-col justify-between hover:-translate-y-1 hover:shadow-sm duration-300">
                {/* Event banner visual */}
                <div className={`h-36 bg-gradient-to-br ${event.bannerGrad} p-6 flex flex-col justify-between border-b border-border`}>
                  <span className="self-start text-[9px] uppercase font-bold tracking-wider text-text-primary bg-white px-2 py-0.5 rounded shadow-sm">
                    {event.badgeText}
                  </span>
                  <span className="text-xs font-semibold text-text-secondary capitalize">{event.type}</span>
                </div>
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div className="mb-6">
                    <h3 className="text-base font-semibold text-text-primary mb-2">{event.title}</h3>
                    <p className="text-xs text-text-secondary leading-relaxed font-normal">{event.desc}</p>
                  </div>
                  <div>
                    <div className="border-t border-border/60 py-3 text-xs font-normal text-text-secondary space-y-1.5 mb-4">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-3.5 h-3.5 text-primary" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-3.5 h-3.5 text-primary" />
                        <span>{event.location}</span>
                      </div>
                    </div>
                    <button className="w-full btn-primary text-xs py-2">
                      Register now
                      <ArrowRight size={14} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5 — PAST EVENTS */}
      <section className="section-spacing bg-[#030604] border-b border-neutral-900 text-neutral-300">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-between mb-12"
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full border border-primary/30 flex items-center justify-center text-primary">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-white lowercase first-letter:uppercase">
                Past events
              </h2>
              <span className="bg-[#10b981]/15 text-[#10b981] border border-[#10b981]/20 rounded-full px-3 py-0.5 text-xs font-semibold">
                4 completed
              </span>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {past.map((event, idx) => (
              <div 
                key={idx} 
                className="bg-[#080d0a] border border-neutral-900 rounded-lg overflow-hidden flex flex-col justify-between hover:border-primary/35 transition-all duration-300 shadow-sm hover:shadow-md"
              >
                {/* Poster container */}
                <div className="relative w-full aspect-[4/5] bg-neutral-950 overflow-hidden border-b border-neutral-900">
                  <img 
                    src={event.image} 
                    alt={event.title} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-103" 
                  />
                  {/* Floating Completed Badge */}
                  <div className="absolute top-3 left-3 flex items-center gap-1.5 bg-emerald-500/90 text-white text-[10px] font-bold px-2.5 py-1 rounded backdrop-blur-sm shadow-sm">
                    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                      <polyline points="22 4 12 14.01 9 11.01" />
                    </svg>
                    <span>Completed</span>
                  </div>
                  {/* Floating Tags */}
                  <div className="absolute top-3 right-3 flex items-center gap-1.5">
                    {event.tags.map((tag, tIdx) => (
                      <span 
                        key={tIdx} 
                        className="bg-black/65 text-white text-[10px] font-semibold px-2.5 py-1 rounded backdrop-blur-sm border border-neutral-800/40"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Content details */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-base font-bold text-white mb-4 line-clamp-2 leading-snug">
                      {event.title}
                    </h3>
                    <div className="space-y-2.5 mb-6 text-xs text-neutral-400 font-normal">
                      <div className="flex items-start gap-2.5">
                        <Calendar size={14} className="text-primary mt-0.5 shrink-0" />
                        <span className="leading-normal">{event.date}</span>
                      </div>
                      <div className="flex items-start gap-2.5">
                        <MapPin size={14} className="text-primary mt-0.5 shrink-0" />
                        <span className="leading-normal">{event.location}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between border-t border-neutral-900/60 pt-4 mt-auto text-[11px] text-neutral-500 font-normal">
                    <span>
                      By <strong className="text-neutral-300 font-medium">{event.by}</strong>
                    </span>
                    <span className="bg-neutral-900 border border-neutral-800/50 text-neutral-400 px-2 py-0.5 rounded font-medium">
                      {event.status}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6 — EVENT GALLERY */}
      <section className="section-spacing bg-white border-b border-border">
        <div className="container-max">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="badge mb-3">Moments in code</span>
            <h2 className="text-3xl font-bold text-text-primary mb-4">
              Moments from our events
            </h2>
            <p className="text-sm text-text-secondary max-w-xl mx-auto leading-relaxed">
              We capture moments of building, teaching, and learning across campus communities.
            </p>
          </motion.div>

          {/* Masonry gallery visual */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[140px] md:auto-rows-[160px]">
            {gallery.map((moment, index) => (
              <motion.div
                key={index}
                className={`rounded-lg border border-border p-5 flex flex-col justify-between hover:border-primary/20 hover:shadow-sm duration-300 group cursor-pointer ${moment.class}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.5 }}
                whileHover={{ y: -4 }}
              >
                <div className="flex justify-between items-start">
                  <span className="text-xs uppercase font-bold tracking-wider text-text-primary/75 group-hover:text-primary transition-colors">
                    {moment.title}
                  </span>
                  <div className="bg-white p-1.5 rounded-md border border-border">
                    {moment.icon}
                  </div>
                </div>
                <p className="text-[10px] md:text-xs text-text-secondary leading-relaxed font-normal">
                  {moment.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7 — WINNERS SHOWCASE */}
      <section className="section-spacing bg-background-secondary border-b border-border">
        <div className="container-max">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="badge mb-3">Honors list</span>
            <h2 className="text-3xl font-bold text-text-primary mb-4">
              Celebrating builders
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {winners.map((winner, idx) => (
              <div key={idx} className="card-base bg-card p-6 border border-border flex flex-col justify-between hover:border-primary/25 duration-300">
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent-blue flex items-center justify-center text-white text-base">
                      {winner.icon}
                    </div>
                    <span className="text-[9px] uppercase font-bold tracking-wider text-primary bg-primary-light px-2 py-0.5 rounded">
                      Top ranking
                    </span>
                  </div>
                  <h3 className="text-sm font-semibold text-text-primary mb-1">{winner.name}</h3>
                  <span className="text-[10px] font-semibold text-text-tertiary block mb-3 uppercase tracking-wide">{winner.role}</span>
                  <p className="text-xs text-text-secondary leading-relaxed font-normal mb-5">{winner.story}</p>
                </div>
                <button className="text-[11px] font-semibold text-primary hover:underline flex items-center gap-1 mt-auto w-fit">
                  Read developer journey
                  <ArrowRight size={12} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 8 — EVENT CATEGORIES */}
      <section className="section-spacing bg-white border-b border-border">
        <div className="container-max">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="badge mb-3">Domain tracks</span>
            <h2 className="text-3xl font-bold text-text-primary mb-4">
              Experiences for every builder
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((cat, idx) => (
              <div key={idx} className="card-base bg-card border border-border p-6 hover:border-primary/20 transition-all duration-300 flex items-start gap-4">
                <div className="bg-background-secondary p-2.5 rounded-md border border-border w-fit">
                  {cat.icon}
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-text-primary mb-1">{cat.title}</h4>
                  <p className="text-xs text-text-secondary leading-normal font-normal">{cat.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 9 — TESTIMONIALS */}
      <section className="section-spacing bg-background-secondary border-b border-border">
        <div className="container-max">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="badge mb-3">Participant feedback</span>
            <h2 className="text-3xl font-bold text-text-primary mb-4">
              What participants say
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((test, idx) => (
              <div key={idx} className="card-base bg-card p-6 border border-border hover:border-primary/25 duration-300 flex flex-col justify-between">
                <p className="text-xs md:text-sm text-text-primary italic mb-6 leading-relaxed">
                  "{test.quote}"
                </p>
                <div className="flex items-center gap-3 border-t border-border pt-4 mt-auto">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-accent-blue flex items-center justify-center text-white text-[10px] font-bold">
                    {test.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-text-primary">{test.name}</h4>
                    <span className="text-[9px] text-text-tertiary font-semibold block">{test.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 10 — PARTNER EVENTS */}
      <section className="section-spacing bg-white border-b border-border">
        <div className="container-max">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="badge mb-3">Powering events</span>
            <h2 className="text-3xl font-bold text-text-primary mb-4">
              Events powered by partnerships
            </h2>
          </motion.div>

          <div className="space-y-8">
            {partnerLogos.map((category, catIdx) => (
              <div key={catIdx} className="border-b border-border/50 pb-6 last:border-0 last:pb-0">
                <h4 className="text-[10px] font-semibold text-text-tertiary uppercase tracking-wider mb-4">
                  {category.cat}
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {category.names.map((name, logoIdx) => (
                    <div
                      key={logoIdx}
                      className="h-14 bg-card rounded border border-border flex items-center justify-center cursor-pointer group hover:border-primary/20 transition-all duration-300"
                    >
                      <span className={`font-semibold tracking-wide text-text-secondary/60 grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300 ${category.color} text-xs md:text-sm`}>
                        {name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 11 — FAQ */}
      <section className="section-spacing bg-background-secondary border-b border-border">
        <div className="container-max">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="badge mb-3">FAQ</span>
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

      {/* SECTION 12 — CTA */}
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
              Ready for your next event?
            </h2>
            <p className="text-sm md:text-base text-text-secondary mb-8 leading-relaxed font-normal">
              Join workshops, hackathons and experiences designed to help you become a better builder.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="w-full sm:w-auto btn-primary text-sm py-3 px-8 flex items-center justify-center gap-2">
                Explore events
                <ArrowRight size={16} />
              </button>
              <button className="w-full sm:w-auto btn-secondary text-sm py-3 px-8 flex items-center justify-center gap-2">
                Join community
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  )
}
