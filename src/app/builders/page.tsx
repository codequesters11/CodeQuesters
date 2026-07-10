'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import Layout from '@components/shared/Layout'
import { 
  Trophy, 
  Code, 
  Briefcase, 
  Award, 
  ArrowRight, 
  ArrowUpRight, 
  Rocket, 
  Sparkles, 
  Laptop, 
  Globe, 
  MapPin, 
  ShieldCheck, 
  Compass, 
  Heart, 
  Search, 
  MessageSquare, 
  Calendar, 
  ChevronRight, 
  GitBranch, 
  Cpu 
} from 'lucide-react'

export default function BuildersPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [activeTab, setActiveTab] = useState('All')

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

  // Hero Background Node Wall (Dynamic mosaic placeholders)
  const heroWall = [
    { name: 'Omkar Rane', tag: 'Startup Founder', info: 'BITS Pilani' },
    { name: 'Priyanka Singh', tag: 'Backend Developer', info: 'VIT Chennai' },
    { name: 'Lakshya Kumar', tag: 'API Security', info: 'IIIT Delhi' },
    { name: 'Neha Patel', tag: 'OS Maintainer', info: 'DTU Delhi' },
    { name: 'Amit Sharma', tag: 'Hackathon Winner', info: 'NSUT Delhi' },
    { name: 'Rohan Gupta', tag: 'Community Lead', info: 'IIT Bombay' },
    { name: 'Riya Sen', tag: 'RSC Speaker', info: 'IGDTUW Delhi' },
    { name: 'Kunal Shah', tag: 'Product Lead', info: 'BITS Goa' },
  ]

  const growthTimeline = [
    { step: 'Discover', desc: 'Find CodeQuesters and join active channels.' },
    { step: 'Learn', desc: 'Attend developer bootcamps and workshops.' },
    { step: 'Build', desc: 'Pair up with peers to build functional code.' },
    { step: 'Compete', desc: 'Participate in weekend sprints and hackathons.' },
    { step: 'Contribute', desc: 'Submit pull requests and maintain repositories.' },
    { step: 'Lead', desc: 'Become campus leads and coordinate bootcamps.' },
    { step: 'Get recognized', desc: 'Earn legacy podium listing on the Legacy Wall.' },
  ]

  const categories = [
    { title: 'Hackathon winners', count: '12 Builders', icon: <Trophy className="w-5 h-5 text-accent-amber" /> },
    { title: 'Startup founders', count: '4 Teams', icon: <Rocket className="w-5 h-5 text-accent-purple" /> },
    { title: 'Open source contributors', count: '24 Builders', icon: <Code className="w-5 h-5 text-accent-blue" /> },
    { title: 'Internship achievers', count: '30 Hired', icon: <Briefcase className="w-5 h-5 text-primary" /> },
    { title: 'Speakers', count: '8 Keynotes', icon: <Sparkles className="w-5 h-5 text-accent-amber" /> },
    { title: 'Community leaders', count: '15 Leaders', icon: <Award className="w-5 h-5 text-primary" /> },
  ]

  const successStories = [
    { name: 'Omkar Rane', tag: 'Startup Founder', role: 'BITS Pilani', desc: 'Built a visual developer proxy during CodeQuest hack sprints and co-founded an API security startup.', icon: '🏆' },
    { name: 'Priyanka Singh', tag: 'Backend Developer', role: 'VIT Chennai', desc: 'Participated in core workshops, built project dashboards, and got referred for a remote full-time internship.', icon: '💻' },
    { name: 'Neha Patel', tag: 'OS Maintainer', role: 'DTU Delhi', desc: 'Merged 15+ core PRs into open compiler frameworks. Now runs GSoC bootcamps across campus chapters.', icon: '🚀' },
    { name: 'Amit Sharma', tag: 'Hackathon Winner', role: 'NSUT Delhi', desc: 'Designed a rust-based middleware engine. Won the primary prize at CodeQuest 2025 flagship event.', icon: '🔥' },
    { name: 'Rohan Gupta', tag: 'Community Lead', role: 'IIT Bombay', desc: 'Coordinates university campus chapters and runs developer bootcamps inside college labs.', icon: '🤝' },
    { name: 'Riya Sen', tag: 'Workshop Speaker', role: 'IGDTUW Delhi', desc: 'Shared React Server Component data workflows at our developer AMAs, guiding 200+ students.', icon: '✨' },
  ]

  const contributors = [
    { name: 'Neha Patel', college: 'DTU Delhi', contribution: 'Developed core visual resets and client shell scripts used across 12 chapters.', projects: ['Tailwind-V4 Resets', 'ClientShell Utilities'], impact: 'Merged 15+ Core PRs' },
    { name: 'Rohan Gupta', college: 'IIT Bombay', contribution: 'Built middleware security checks and API rate limiter plugins for open server projects.', projects: ['RateLimiter Proxy', 'GSoC dashboard'], impact: 'Merged 10+ Core PRs' },
  ]

  const achievers = [
    { name: 'Priyanka Singh', college: 'VIT Chennai', company: 'TechStartup Inc.', role: 'Backend Engineer', story: 'Landed backend role after contributing to community repositories and clearing mock compiler rounds.', badge: 'VIT Chapter Lead' },
    { name: 'Kunal Shah', college: 'BITS Pilani', company: 'Devel', role: 'Frontend Engineer', story: 'Won CodeQuest 2025 and got referred directly for a full-time frontend engineering role.', badge: 'Ecosystem Placement' },
  ]

  const founders = [
    { name: 'Omkar Rane', startup: 'API Shield', stage: 'Pre-Seed Stage', achievement: 'Raised ₹15L pre-seed funding and hired 2 VIT developers.', story: 'Built API Shield MVP during CodeQuest hack sprints, matched with BITS co-founders, and got seed funding.' },
    { name: 'Lakshya Kumar', startup: 'CoderAuth', stage: 'Beta Testing', achievement: 'Acquired 100+ early developer signups.', story: 'Paired up with co-founder during mixer, built rust-auth core, and currently testing with chapter hubs.' },
  ]

  const leaders = [
    { name: 'Amit Sharma', role: 'NSUT Chapter Lead', contribution: 'Grew active campus membership to 300+ students and hosted 5 weekend hackathons.', years: '2024-2025', impact: '300+ Members Active' },
    { name: 'Neha Patel', role: 'DTU Chapter Coordinator', contribution: 'Coordinated open source sittings and hosted 12 developer bootcamps in college labs.', years: '2025-2026', impact: '12 Bootcamps Hosted' },
  ]

  const mentors = [
    { name: 'Neha Patel', role: 'Lead Instructor', org: 'GradSkills', contribution: 'Guides system design panels and mentors weekend hack sprint developers.' },
    { name: 'Rohan Gupta', role: 'Developer Advocate', org: 'Vercel', contribution: 'Runs masterclasses on server rendering and hydration boundary optimizations.' },
  ]

  const timeline = [
    { year: '2024', milestones: 'Started campus chapters. First 10 recognized developers listed on Legacy Wall.' },
    { year: '2025', milestones: 'Organized national CodeQuest event. 30+ winners and core contributors honored.' },
    { year: '2026', milestones: 'Initiated open source bootcamps. 50+ recognized builders and internship achievers.' },
  ]

  const masonryTestimonials = [
    { quote: 'Met my co-founder at a CodeQuesters mixer. We built our MVP in 36 hours.', author: 'Omkar Rane', label: 'BITS Pilani', size: 'col-span-2 row-span-1 bg-gradient-to-br from-primary/10 to-accent-blue/5 border-l-4 border-l-primary' },
    { quote: 'The workshops taught me how to write post-css variables and debug production code.', author: 'Priyanka Singh', label: 'VIT Chennai', size: 'col-span-2 sm:col-span-1 row-span-1 bg-gradient-to-br from-accent-purple/10 to-accent-blue/5 border-l-4 border-l-accent-purple' },
    { quote: 'Landed my remote developer role through a direct referral from a hired mentor.', author: 'Lakshya Kumar', label: 'IIIT Delhi', size: 'col-span-2 sm:col-span-1 row-span-2 bg-gradient-to-br from-accent-amber/15 to-accent-amber/5 border-l-4 border-l-accent-amber' },
    { quote: 'We went from zero open-source experience to maintaining public components.', author: 'Neha Patel', label: 'DTU Delhi', size: 'col-span-2 sm:col-span-1 row-span-2 bg-gradient-to-br from-accent-blue/10 to-primary/5 border-l-4 border-l-accent-blue' },
    { quote: 'Mentoring new builders and organizing bootcamps helped me grow as a lead.', author: 'Rohan Gupta', label: 'IIT Bombay', size: 'col-span-2 row-span-1 bg-gradient-to-br from-background-tertiary to-background-secondary border-l-4 border-l-text-secondary' },
  ]

  const directorySubset = [
    { name: 'Omkar Rane', skill: 'React / Next.js', role: 'Startup Founder', achievement: 'Raised Pre-Seed', initial: 'OR' },
    { name: 'Priyanka Singh', skill: 'Node.js / Express', role: 'Backend Engineer', achievement: 'VIT Chapter Lead', initial: 'PS' },
    { name: 'Lakshya Kumar', skill: 'Rust / System Design', role: 'Security Founder', achievement: 'Raised ₹15L', initial: 'LK' },
    { name: 'Neha Patel', skill: 'PostCSS / Tailwind v4', role: 'OS Contributor', achievement: '15+ PRs Merged', initial: 'NP' },
  ]

  const badges = [
    { title: 'Hackathon winner', desc: 'Podium finisher in weekend sprints.' },
    { title: 'Community leader', desc: 'Chapter organizer guiding peer coders.' },
    { title: 'Ecosystem mentor', desc: 'Industry lead hosting workshops.' },
    { title: 'Keynote speaker', desc: 'Advocate sharing system designs.' },
    { title: 'OS contributor', desc: 'Developer merging public PRs.' },
    { title: 'Startup founder', desc: 'Hacker launching funded MVPs.' },
    { title: 'Internship achiever', desc: 'Builder hired via referral pipelines.' },
    { title: 'Top builder', desc: 'Core developer maintaining libraries.' },
  ]

  const nominationSteps = [
    { step: '1', title: 'Participate', desc: 'Join workshops, bootcamps, and campus mixers.' },
    { step: '2', title: 'Build', desc: 'Form team circles and build developer products.' },
    { step: '3', title: 'Contribute', desc: 'Submit code pull requests to repositories.' },
    { step: '4', title: 'Create impact', desc: 'Win hackathons or establish college chapters.' },
    { step: '5', title: 'Get recognized', desc: 'Earn legacy podium listing on the Legacy Wall.' },
  ]

  // Filter Logic simulator
  const filteredDirectory = directorySubset.filter(b => {
    const matchesSearch = b.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          b.skill.toLowerCase().includes(searchQuery.toLowerCase())
    if (activeTab === 'All') return matchesSearch
    return b.role === activeTab && matchesSearch
  })

  return (
    <Layout>
      {/* HERO SECTION — BUILDER WALL */}
      <section className="relative min-h-[600px] flex items-center justify-center bg-white border-b border-border overflow-hidden py-20">
        {/* Dynamic Builder Wall in Background */}
        <div className="absolute inset-0 grid grid-cols-2 md:grid-cols-4 gap-4 p-6 opacity-20 select-none pointer-events-none">
          {heroWall.map((b, idx) => (
            <div key={idx} className="bg-card border border-border p-4 rounded-lg flex flex-col justify-between h-[120px]">
              <div>
                <span className="text-[9px] uppercase tracking-wider text-primary font-bold">{b.tag}</span>
                <h4 className="text-xs font-semibold text-text-primary mt-1">{b.name}</h4>
              </div>
              <span className="text-[9px] text-text-secondary">{b.info}</span>
            </div>
          ))}
        </div>

        {/* Hero Content Overlay */}
        <div className="container-max relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl mx-auto flex flex-col items-center"
          >
            <span className="badge mb-5">Legacy directory</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] text-text-primary mb-6">
              Built by builders.
            </h1>
            <p className="text-sm md:text-base text-text-secondary leading-relaxed max-w-xl mb-8 font-normal">
              Every builder has a story. Explore the journeys, achievements and contributions of people who have grown through the CodeQuesters ecosystem.
            </p>

            {/* Metrics Row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 border-t border-b border-border py-5 mb-8 w-full">
              <div>
                <span className="text-xl md:text-2xl font-bold text-text-primary block">2000+</span>
                <span className="text-[9px] text-text-secondary mt-0.5 block">Builders</span>
              </div>
              <div>
                <span className="text-xl md:text-2xl font-bold text-text-primary block">100+</span>
                <span className="text-[9px] text-text-secondary mt-0.5 block">Achievements</span>
              </div>
              <div>
                <span className="text-xl md:text-2xl font-bold text-text-primary block">50+</span>
                <span className="text-[9px] text-text-secondary mt-0.5 block">Contributors</span>
              </div>
              <div>
                <span className="text-xl md:text-2xl font-bold text-text-primary block">20+</span>
                <span className="text-[9px] text-text-secondary mt-0.5 block">Leaders</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full sm:w-auto">
              <button className="w-full sm:w-auto btn-primary py-3 px-8 text-sm">
                Explore builders
                <ArrowRight size={16} />
              </button>
              <a 
                href="https://chat.whatsapp.com/Drc3SOwUSJiJnV3ZZgQz7I?mode=ac_t" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-full sm:w-auto btn-secondary py-3 px-8 text-sm flex items-center justify-center"
              >
                Join community
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2 — FEATURED BUILDER */}
      <section className="section-spacing bg-white border-b border-border">
        <div className="container-max">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="badge mb-3">Cover story</span>
            <h2 className="text-3xl font-bold text-text-primary">
              Builder of the month
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left (5 cols): Photo visual */}
            <div className="lg:col-span-5 h-[280px]">
              <div className="w-full h-full rounded-lg border border-border bg-gradient-to-br from-primary/10 via-primary-dark/20 to-primary/5 p-6 flex flex-col justify-between group hover:border-primary transition-all duration-300">
                <div className="flex justify-between items-start">
                  <span className="text-[9px] uppercase font-bold tracking-wider text-primary-dark bg-primary-light px-2 py-0.5 rounded">Featured case</span>
                  <Trophy className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-text-primary mb-1">Amit Sharma</h4>
                  <p className="text-[10px] text-text-secondary leading-normal">NSUT Delhi | Hackathon Winner to Chapter Lead</p>
                </div>
              </div>
            </div>

            {/* Right (7 cols): Text copy */}
            <div className="lg:col-span-7 flex flex-col items-start text-left">
              <h3 className="text-xl font-bold text-text-primary mb-2">Amit Sharma</h3>
              <span className="text-[10px] font-semibold text-text-tertiary uppercase tracking-wider block mb-4">NSUT Delhi | 12 Months Journey</span>

              <div className="grid grid-cols-2 gap-4 border-t border-b border-border py-4 mb-6 w-full text-xs font-normal text-text-secondary">
                <div>
                  <span className="font-semibold text-text-primary block mb-0.5">Journey path:</span>
                  Joined workshops, won CodeQuest, and scaled the NSUT college chapter node.
                </div>
                <div>
                  <span className="font-semibold text-text-primary block mb-0.5">Major achievements:</span>
                  Won ₹1,00,000 cash prize, guided 300+ students in Git bootcamps.
                </div>
              </div>

              <p className="text-xs md:text-sm text-text-secondary leading-relaxed font-normal mb-4">
                "The focus on building real code is what makes CodeQuesters stand out. I went from reading tutorials to deployment, finding teammates, and finally mentoring campus peers."
              </p>

              <p className="font-semibold text-text-primary border-l-2 border-primary pl-4 py-0.5 italic text-xs md:text-sm">
                "Great things are built when developers obsess over code rather than grades."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 — BUILDER JOURNEY ROADMAP */}
      <section className="section-spacing bg-background-secondary border-b border-border">
        <div className="container-max">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="badge mb-3">Progress milestones</span>
            <h2 className="text-3xl font-bold text-text-primary">
              How builders grow
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-7 gap-4">
            {growthTimeline.map((step, idx) => (
              <div key={idx} className="card-base bg-card border border-border p-5 hover:border-primary/20 duration-300 text-center flex flex-col justify-between">
                <div>
                  <span className="text-sm font-bold text-primary block mb-2">{idx + 1}</span>
                  <h4 className="text-xs font-semibold text-text-primary mb-1">{step.step}</h4>
                  <p className="text-[9px] text-text-secondary leading-normal font-normal">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4 — HALL OF ACHIEVEMENTS */}
      <section className="section-spacing bg-white border-b border-border">
        <div className="container-max">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="badge mb-3">Milestones</span>
            <h2 className="text-3xl font-bold text-text-primary">
              Celebrating impact
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-6 gap-4">
            {categories.map((cat, idx) => (
              <div key={idx} className="card-base bg-card border border-border p-4 hover:border-primary/20 transition-all duration-300 flex flex-col justify-between cursor-pointer" hover-translate="y-1">
                <div className="bg-background-secondary p-2 rounded-md border border-border w-fit mb-4">
                  {cat.icon}
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-text-primary mb-1 capitalize leading-snug">{cat.title}</h4>
                  <span className="text-[10px] text-text-tertiary block font-normal">{cat.count}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5 — SUCCESS STORIES */}
      <section className="section-spacing bg-background-secondary border-b border-border">
        <div className="container-max">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="badge mb-3">Transformation sittings</span>
            <h2 className="text-3xl font-bold text-text-primary">
              Builder stories
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {successStories.map((story, idx) => (
              <div key={idx} className="card-base bg-card p-6 border border-border flex flex-col justify-between hover:border-primary/25 duration-300">
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <span className="text-[9px] uppercase font-bold tracking-wider text-primary bg-primary-light px-2 py-0.5 rounded">
                      {story.tag}
                    </span>
                    <span className="text-base">{story.icon}</span>
                  </div>
                  <h3 className="text-sm font-semibold text-text-primary mb-1">{story.name}</h3>
                  <span className="text-[10px] text-text-tertiary block font-semibold mb-3 uppercase tracking-wide">{story.role}</span>
                  <p className="text-xs text-text-secondary leading-relaxed font-normal mb-5">{story.desc}</p>
                </div>
                <button className="text-[11px] font-semibold text-primary hover:underline flex items-center gap-1 mt-auto w-fit">
                  Read story
                  <ArrowRight size={12} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6 — HACKATHON WINNERS */}
      <section className="section-spacing bg-white border-b border-border">
        <div className="container-max">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="badge mb-3">Winners podium</span>
            <h2 className="text-3xl font-bold text-text-primary">
              Hackathon champions
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {contributors.map((contrib, idx) => (
              <div key={idx} className="card-base bg-card p-6 border border-border flex flex-col justify-between hover:border-primary/20 transition-all duration-300">
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <span className="text-[9px] uppercase font-bold tracking-wider text-accent-blue bg-accent-blue/10 px-2 py-0.5 rounded">
                      {contrib.impact}
                    </span>
                    <span className="text-[10px] text-text-tertiary font-normal">{contrib.college}</span>
                  </div>
                  <h3 className="text-sm font-semibold text-text-primary mb-2">{contrib.name}</h3>
                  <p className="text-xs text-text-secondary leading-relaxed font-normal mb-4">{contrib.contribution}</p>
                </div>
                <button className="text-[11px] font-semibold text-primary hover:underline flex items-center gap-1 mt-auto w-fit">
                  View project code
                  <ArrowUpRight size={12} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7 — OPEN SOURCE CONTRIBUTORS */}
      <section className="section-spacing bg-background-secondary border-b border-border">
        <div className="container-max">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="badge mb-3">Public code</span>
            <h2 className="text-3xl font-bold text-text-primary">
              Builders who contribute beyond the classroom
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {contributors.map((contrib, idx) => (
              <div key={idx} className="card-base bg-card p-6 border border-border flex flex-col justify-between hover:border-primary/20 transition-all duration-300">
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <span className="text-[9px] uppercase font-bold tracking-wider text-accent-blue bg-accent-blue/10 px-2 py-0.5 rounded">
                      GitHub contributor
                    </span>
                    <span className="text-[10px] text-text-tertiary font-normal">{contrib.college}</span>
                  </div>
                  <h3 className="text-sm font-semibold text-text-primary mb-2">{contrib.name}</h3>
                  <p className="text-xs text-text-secondary leading-relaxed font-normal mb-4">{contrib.contribution}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4 border-t border-border pt-4">
                    {contrib.projects.map((p, pIdx) => (
                      <span key={pIdx} className="text-[9px] font-medium text-text-secondary bg-background-tertiary px-2 py-0.5 rounded">
                        {p}
                      </span>
                    ))}
                  </div>
                </div>
                <button className="text-[11px] font-semibold text-primary hover:underline flex items-center gap-1 mt-auto w-fit">
                  GitHub profile
                  <ArrowUpRight size={12} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 8 — INTERNSHIP & CAREER ACHIEVERS */}
      <section className="section-spacing bg-white border-b border-border">
        <div className="container-max">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="badge mb-3">Careers</span>
            <h2 className="text-3xl font-bold text-text-primary">
              From learning to career growth
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {achievers.map((ach, idx) => (
              <div key={idx} className="card-base bg-card p-6 border border-border flex flex-col justify-between hover:border-primary/20 transition-all duration-300">
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <span className="text-[9px] uppercase font-bold tracking-wider text-primary bg-primary-light px-2 py-0.5 rounded">
                      {ach.badge}
                    </span>
                    <span className="text-xs font-semibold text-text-tertiary">{ach.company}</span>
                  </div>
                  <h3 className="text-sm font-semibold text-text-primary mb-1">{ach.name}</h3>
                  <span className="text-[10px] text-text-tertiary block font-semibold mb-3 uppercase tracking-wide">{ach.role}</span>
                  <p className="text-xs text-text-secondary leading-relaxed font-normal mb-5">{ach.story}</p>
                </div>
                <button className="text-[11px] font-semibold text-primary hover:underline flex items-center gap-1 mt-auto w-fit">
                  Read story
                  <ArrowRight size={12} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 9 — STARTUP FOUNDERS */}
      <section className="section-spacing bg-background-secondary border-b border-border">
        <div className="container-max">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="badge mb-3">Founders</span>
            <h2 className="text-3xl font-bold text-text-primary">
              Builders who started something
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {founders.map((f, idx) => (
              <div key={idx} className="card-base bg-card p-6 border border-border flex flex-col justify-between hover:border-primary/25 duration-300">
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <span className="text-[9px] uppercase font-bold tracking-wider text-primary bg-primary-light px-2 py-0.5 rounded">
                      {f.stage}
                    </span>
                    <span className="text-xs font-semibold text-text-tertiary">{f.startup}</span>
                  </div>
                  <h3 className="text-sm font-semibold text-text-primary mb-1">{f.name}</h3>
                  <span className="text-[10px] text-text-tertiary block font-semibold mb-3 uppercase tracking-wide">{f.achievement}</span>
                  <p className="text-xs text-text-secondary leading-relaxed font-normal mb-5">{f.story}</p>
                </div>
                <button className="text-[11px] font-semibold text-primary hover:underline flex items-center gap-1 mt-auto w-fit">
                  Founder profile
                  <ArrowRight size={12} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 10 — COMMUNITY LEADERS */}
      <section className="section-spacing bg-white border-b border-border">
        <div className="container-max">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="badge mb-3">Leaders</span>
            <h2 className="text-3xl font-bold text-text-primary">
              Builders who lead
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {leaders.map((lead, idx) => (
              <div key={idx} className="card-base bg-card p-6 border border-border flex flex-col justify-between hover:border-primary/20 transition-all duration-300">
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <span className="text-[9px] uppercase font-bold tracking-wider text-accent-purple bg-accent-purple/10 px-2 py-0.5 rounded">
                      {lead.impact}
                    </span>
                    <span className="text-[10px] text-text-tertiary font-semibold">{lead.years}</span>
                  </div>
                  <h3 className="text-sm font-semibold text-text-primary mb-1">{lead.name}</h3>
                  <span className="text-[10px] text-primary block font-semibold mb-3 uppercase tracking-wide">{lead.role}</span>
                  <p className="text-xs text-text-secondary leading-relaxed font-normal mb-5">{lead.contribution}</p>
                </div>
                <button className="text-[11px] font-semibold text-primary hover:underline flex items-center gap-1 mt-auto w-fit">
                  Read leadership logs
                  <ArrowRight size={12} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 11 — SPEAKERS & MENTORS */}
      <section className="section-spacing bg-background-secondary border-b border-border">
        <div className="container-max">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="badge mb-3">Mentors</span>
            <h2 className="text-3xl font-bold text-text-primary">
              Sharing knowledge with the community
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {mentors.map((m, idx) => (
              <div key={idx} className="card-base bg-card p-6 border border-border flex flex-col justify-between hover:border-primary/20 transition-all duration-300">
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <span className="text-[9px] uppercase font-bold tracking-wider text-accent-blue bg-accent-blue/10 px-2 py-0.5 rounded">
                      Mentorship
                    </span>
                    <span className="text-xs font-semibold text-text-tertiary">{m.org}</span>
                  </div>
                  <h3 className="text-sm font-semibold text-text-primary mb-1">{m.name}</h3>
                  <span className="text-[10px] text-primary block font-semibold mb-3 uppercase tracking-wide">{m.role}</span>
                  <p className="text-xs text-text-secondary leading-relaxed font-normal mb-5">{m.contribution}</p>
                </div>
                <button className="text-[11px] font-semibold text-primary hover:underline flex items-center gap-1 mt-auto w-fit">
                  View speaker bio
                  <ArrowRight size={12} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 12 — RECOGNITION TIMELINE */}
      <section className="section-spacing bg-white border-b border-border">
        <div className="container-max">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="badge mb-3">Ecosystem history</span>
            <h2 className="text-3xl font-bold text-text-primary">
              Recognition through the years
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {timeline.map((item, idx) => (
              <div key={idx} className="card-base bg-card border border-border p-6 hover:border-primary/20 duration-300 relative flex flex-col justify-between">
                <div>
                  <span className="text-sm font-bold text-primary block mb-2">{item.year}</span>
                  <p className="text-xs text-text-secondary leading-relaxed font-normal">{item.milestones}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 13 — TESTIMONIAL WALL */}
      <section className="section-spacing bg-background-secondary border-b border-border">
        <div className="container-max">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="badge mb-3">Ecosystem voices</span>
            <h2 className="text-3xl font-bold text-text-primary">
              Voices from builders
            </h2>
          </motion.div>

          {/* Testimonial wall masonry */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[140px] md:auto-rows-[160px]">
            {masonryTestimonials.map((moment, index) => (
              <motion.div
                key={index}
                className={`rounded-lg border border-border p-5 flex flex-col justify-between hover:border-primary/20 hover:shadow-sm duration-300 group cursor-pointer ${moment.size}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.5 }}
                whileHover={{ y: -4 }}
              >
                <div>
                  <p className="text-[11px] md:text-xs text-text-primary italic leading-relaxed font-normal">
                    "{moment.quote}"
                  </p>
                </div>
                <div className="flex justify-between items-center border-t border-border/60 pt-2 mt-auto text-[9px] font-semibold text-text-secondary">
                  <span>{moment.author}</span>
                  <span className="text-text-tertiary font-normal">{moment.label}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 14 — BUILDER DIRECTORY PREVIEW */}
      <section className="section-spacing bg-white border-b border-border">
        <div className="container-max">
          <motion.div
            className="text-center mb-10"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="badge mb-3">Ecosystem directory</span>
            <h2 className="text-3xl font-bold text-text-primary mb-4">
              Meet the ecosystem
            </h2>
          </motion.div>

          {/* Directory Filter / Search bar */}
          <div className="max-w-xl mx-auto mb-10 flex flex-col sm:flex-row gap-4 items-center">
            <div className="relative w-full">
              <Search className="absolute left-3 top-3 w-4 h-4 text-text-tertiary" />
              <input 
                type="text" 
                placeholder="Search builders by name or skill..." 
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded border border-border text-xs bg-background-secondary"
              />
            </div>
            
            <div className="flex gap-2">
              {['All', 'Startup Founder', 'Backend Engineer', 'OS Contributor'].map(tab => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`text-xs font-semibold px-4 py-2.5 rounded border transition-colors ${
                    activeTab === tab 
                      ? 'bg-primary border-primary text-white' 
                      : 'bg-card border-border text-text-secondary hover:text-primary'
                  }`}
                >
                  {tab === 'All' ? 'All Roles' : tab.split(' ')[0]}
                </button>
              ))}
            </div>
          </div>

          {/* Search Result display subset */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {filteredDirectory.length > 0 ? (
              filteredDirectory.map((b, idx) => (
                <div key={idx} className="card-base bg-card p-5 border border-border flex flex-col justify-between hover:border-primary/20 duration-300">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent-blue flex items-center justify-center text-white text-xs font-bold font-sans">
                      {b.initial}
                    </div>
                    <div>
                      <h4 className="text-xs font-semibold text-text-primary">{b.name}</h4>
                      <span className="text-[10px] text-text-tertiary font-semibold block">{b.role}</span>
                    </div>
                  </div>
                  <div className="border-t border-border/65 pt-3 mt-2 text-[10px] font-normal text-text-secondary space-y-1">
                    <div><span className="font-semibold text-text-primary">Skills:</span> {b.skill}</div>
                    <div><span className="font-semibold text-text-primary">Achievement:</span> {b.achievement}</div>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-full text-center py-10 text-xs font-normal text-text-tertiary">
                No builders found matching your search.
              </div>
            )}
          </div>

          <div className="text-center">
            <button className="btn-secondary py-3 px-8 text-sm">
              View all builders
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* SECTION 15 — RECOGNITION BADGES */}
      <section className="section-spacing bg-background-secondary border-b border-border">
        <div className="container-max">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="badge mb-3">Badges list</span>
            <h2 className="text-3xl font-bold text-text-primary">
              Achievement badges
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {badges.map((badge, idx) => (
              <div key={idx} className="card-base bg-card border border-border p-5 hover:border-primary/20 duration-300 text-center flex flex-col justify-between">
                <div>
                  <span className="text-base mb-2 block">🏅</span>
                  <h4 className="text-xs font-semibold text-text-primary mb-1 capitalize leading-snug">{badge.title}</h4>
                  <p className="text-[9px] text-text-secondary leading-normal font-normal">{badge.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 16 — NOMINATION PROCESS */}
      <section className="section-spacing bg-white border-b border-border">
        <div className="container-max">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="badge mb-3">Workflow</span>
            <h2 className="text-3xl font-bold text-text-primary">
              How builders get recognized
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {nominationSteps.map((step, idx) => (
              <div key={idx} className="card-base bg-card border border-border p-5 hover:border-primary/20 duration-300 text-center flex flex-col justify-between">
                <div>
                  <span className="text-sm font-bold text-primary bg-primary-light px-2.5 py-0.5 rounded w-fit mx-auto block mb-3">Step {step.step}</span>
                  <h4 className="text-xs font-semibold text-text-primary mb-1 capitalize">{step.title}</h4>
                  <p className="text-[10px] text-text-secondary leading-normal font-normal">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 17 — COMMUNITY IMPACT */}
      <section className="section-spacing bg-background-secondary border-b border-border">
        <div className="container-max">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="badge mb-3">Ecosystem size</span>
            <h2 className="text-3xl font-bold text-text-primary">
              A community built by builders
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Story text */}
            <div className="lg:col-span-7">
              <p className="text-xs md:text-sm text-text-secondary leading-relaxed font-normal mb-4">
                We measure our success by the code pushed and chapters launched. In under two years, we have built a collaborative community across 74 campuses.
              </p>
              <p className="text-xs md:text-sm text-text-secondary leading-relaxed font-normal">
                By focusing strictly on software execution and peer feedback, we have helped student teams secure startup capital, transition into full-time roles, and contribute core code to open projects.
              </p>
            </div>
            {/* Stats list */}
            <div className="lg:col-span-5 grid grid-cols-2 gap-6 bg-card border border-border p-6 rounded-lg">
              <div>
                <span className="text-xl md:text-2xl font-bold text-primary block mb-1">2000+</span>
                <span className="text-xs font-semibold text-text-primary">Builders connected</span>
              </div>
              <div>
                <span className="text-xl md:text-2xl font-bold text-primary block mb-1">50+</span>
                <span className="text-xs font-semibold text-text-primary">Events organized</span>
              </div>
              <div>
                <span className="text-xl md:text-2xl font-bold text-primary block mb-1">74+</span>
                <span className="text-xs font-semibold text-text-primary">Colleges joined</span>
              </div>
              <div>
                <span className="text-xl md:text-2xl font-bold text-primary block mb-1">20+</span>
                <span className="text-xs font-semibold text-text-primary">Partners active</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 18 — FINAL CTA */}
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
              Your story could be next.
            </h2>
            <p className="text-sm md:text-base text-text-secondary mb-8 leading-relaxed font-normal">
              Join a growing ecosystem where builders learn, build, contribute and create impact.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a 
                href="https://chat.whatsapp.com/Drc3SOwUSJiJnV3ZZgQz7I?mode=ac_t" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-full sm:w-auto btn-primary text-sm py-3 px-8 flex items-center justify-center gap-2"
              >
                Join community
                <ArrowRight size={16} />
              </a>
              <a href="/events" className="w-full sm:w-auto btn-secondary text-sm py-3 px-8 flex items-center justify-center gap-2">
                Explore events
              </a>
              <button className="w-full sm:w-auto btn-outline text-sm py-3 px-8 flex items-center justify-center gap-2">
                Share your story
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  )
}
