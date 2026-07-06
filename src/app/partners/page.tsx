'use client'

import { motion } from 'framer-motion'
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
  Rocket,
  ChevronRight
} from 'lucide-react'

export default function PartnersPage() {
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

  const categories = [
    { title: 'Community partners', desc: 'Developer organizations and student chapters hosting weekend mixer sprints.', count: '10 Partners', icon: <Users className="w-5 h-5 text-primary" /> },
    { title: 'Technology partners', desc: 'Platforms offering infrastructure grants, code sandboxes, and API credits.', count: '4 Partners', icon: <Code2 className="w-5 h-5 text-accent-blue" /> },
    { title: 'Hiring partners', desc: 'Startups and hiring agencies sourcing technical talent from hack sprint winners.', count: '8 Partners', icon: <Briefcase className="w-5 h-5 text-accent-purple" /> },
    { title: 'University partners', desc: 'Engineering campuses hosting chapters, workshops, and lab bootcamps.', count: '12 Campuses', icon: <Landmark className="w-5 h-5 text-accent-amber" /> },
    { title: 'Event partners', desc: 'Organizations co-running sittings, panel discussions, and GSoC reviews.', count: '6 Partners', icon: <Calendar className="w-5 h-5 text-primary" /> },
  ]

  const featured = [
    { org: 'Vercel', logo: '/partners/Vercel--.svg', type: 'Technology Partner', desc: 'Providing Next.js static deployment credits and code templates for hackathon squads.', impact: '150+ student projects hosted statically.', link: 'https://vercel.com' },
    { org: 'Stripe', logo: '/partners/Stripe.svg', type: 'Technology Partner', desc: 'Supporting builders with sandbox payment API testing keys and checkout integration guides.', impact: '50+ payment engines integrated.', link: 'https://stripe.com' },
  ]

  const communityPartners = [
    { name: 'AI House', logo: '/partners/coworking.png', desc: 'Co-hosting offline keynotes, system design panels, and weekend developer mixers.', contribution: 'Venue & mentorship support' },
    { name: 'BuildSpace', desc: 'Collaborating on student builder circles and providing progress track frameworks.', contribution: 'Ideation resources' },
    { name: 'DevFolio', logo: '/partners/Devfolio.svg', desc: 'Integrating project submission pipelines and visual leaderboards for national sittings.', contribution: 'Sponsorship portal' },
    { name: 'GradSkills', logo: '/partners/grandskills.png', desc: 'Curating developer roadmap guides and running university campus chapters.', contribution: 'Learning modules' },
    { name: 'Supervity', logo: '/partners/supervity.png', desc: 'Running AI agent workshops, tool building bootcamps, and providing platform licenses.', contribution: 'Workshop sponsorship & API tooling' },
    { name: 'Osen', logo: '/partners/osen.png', desc: 'Open-source software enablement programs and mentorship for college students.', contribution: 'Open source guides' },
  ]

  const techPartners = [
    { name: 'GitHub', logo: '/partners/Github-Icon.svg', platform: 'Developer platform', details: 'Free organization workspace access and credits for open repository maintainers.' },
    { name: 'Vercel', logo: '/partners/Vercel--.svg', platform: 'Static deployments', details: 'Static hosting plans and compiler resources for campus chapter codebases.' },
    { name: 'Stripe', logo: '/partners/Stripe.svg', platform: 'Sandbox payment APIs', details: 'Sandbox testing tokens and payment check systems for startup developers.' },
    { name: 'Linear', platform: 'Issue tracker', details: 'Developer tracking frameworks and planning panels for collaborative teams.' },
  ]

  const hiringPartners = [
    { name: 'GreatHire', logo: '/partners/gh.png', role: 'Direct recruitment', opp: '12+ Jobs shared', impact: 'Direct referral matches' },
    { name: 'Devel', logo: '/partners/devrel.png', role: 'Startup Gigs', opp: '15+ Gigs shared', impact: 'Freelance dev matches' },
    { name: 'ICS Group', logo: '/partners/ics.png', role: 'Talent sourcing', opp: '8+ Roles shared', impact: 'Assessments screening' },
    { name: 'TechStartup Inc', role: 'Early placements', opp: '5+ Internships', impact: '2 VIT interns hired' },
    { name: 'Medo', logo: '/partners/medo.png', role: 'Healthtech placements', opp: '4+ Roles shared', impact: 'Internship matches' },
    { name: 'Rocket', logo: '/partners/rocket.png', role: 'Fast-track hire', opp: '7+ Jobs shared', impact: 'Direct interviews' },
  ]

  const universityPartners = [
    { name: 'IIIT Delhi Campus', logo: '/partners/IIIT-Delhi.svg', loc: 'Delhi NCR', type: 'Flagship Partner', events: '5 Sprints Conducted', reach: '400+ Students' },
    { name: 'IIT Bombay Hub', logo: '/partners/IIIT-Bombay.svg', loc: 'Mumbai', type: 'Workshop Hub', events: '3 Sprints Conducted', reach: '250+ Students' },
    { name: 'BITS Pilani chapter', logo: '/partners/BITS-Pilani.svg', loc: 'Goa', type: 'Chapter Node', events: '4 Sprints Conducted', reach: '300+ Students' },
  ]

  const caseStudies = [
    { org: 'BITS Pilani Chapter', challenge: 'Low student engagement with open repositories and git sittings.', collaboration: 'Launched a 4-week Git bootcamp and open source sprint in BITS campus labs.', results: '50+ contributors successfully merged PRs in shared developer packages.' },
    { org: 'GreatHire Agency', challenge: 'Finding student applicants with verified proof-of-work profiles.', collaboration: 'Shared pre-screened resume decks and winning projects from CodeQuest 2025.', results: '5 student placements secured with tech startups in under 30 days.' },
  ]

  const testimonials = [
    { quote: 'CodeQuesters is the fastest-growing developer network we build with. The engineering focus is unparalleled.', author: 'Amit Sharma', org: 'Partner lead, GreatHire' },
    { quote: 'Supporting student hack sprints with payment APIs has shown us the amazing speed at which members build.', author: 'Neha Patel', org: 'Developer Advocate, Vercel' },
  ]

  const benefits = [
    { title: 'Builder Access', desc: 'Direct access to verified student developers and hackathon winners.', icon: <Users className="w-5 h-5 text-primary" /> },
    { title: 'Community Reach', desc: 'Expand visibility across 74+ engineering chapters in India.', icon: <Globe className="w-5 h-5 text-accent-blue" /> },
    { title: 'Brand Visibility', desc: 'Present your platform API tools directly inside student dev circles.', icon: <Award className="w-5 h-5 text-accent-purple" /> },
    { title: 'Event Collaboration', desc: 'Co-run webinars, panel discussions, and campus mixers.', icon: <Calendar className="w-5 h-5 text-accent-amber" /> },
    { title: 'Talent Discovery', desc: 'Source pre-screened engineering candidates who write clean code.', icon: <Briefcase className="w-5 h-5 text-primary" /> },
    { title: 'Ecosystem Growth', desc: 'Support the next generation of engineers building real software.', icon: <Sparkles className="w-5 h-5 text-accent-blue" /> },
  ]

  const steps = [
    { step: '1', title: 'Connect', desc: 'Initial discussion on alignment, chapters, and resources.' },
    { step: '2', title: 'Plan', desc: 'Define goals, target college reach, and program structure.' },
    { step: '3', title: 'Collaborate', desc: 'Host mixers, sittings, workshops, or hack sprints.' },
    { step: '4', title: 'Create impact', desc: 'Review student project code and placement metrics.' },
    { step: '5', title: 'Grow together', desc: 'Scale chapters and build long term relationships.' },
  ]

  const gallery = [
    { title: 'Flagship mixers', desc: 'Co-running weekend sprints and panels.', class: 'col-span-2 row-span-2 bg-gradient-to-br from-primary/10 to-accent-blue/5 border-l-4 border-l-primary', icon: <Users className="w-5 h-5 text-primary" /> },
    { title: 'Signing meetups', desc: 'Setting chapter guidelines inside college hubs.', class: 'col-span-2 sm:col-span-1 row-span-1 bg-gradient-to-br from-accent-blue/10 to-accent-blue/5 border-l-4 border-l-accent-blue', icon: <Landmark className="w-4 h-4 text-accent-blue" /> },
    { title: 'Developer bootcamps', desc: 'Coordinating workshops inside university labs.', class: 'col-span-2 sm:col-span-1 row-span-2 bg-gradient-to-br from-accent-amber/15 to-accent-amber/5 border-l-4 border-l-accent-amber', icon: <Laptop className="w-4 h-4 text-accent-amber" /> },
    { title: 'VC pitch panels', desc: 'Reviewing hackathon MVPs with startup partners.', class: 'col-span-2 sm:col-span-1 row-span-2 bg-gradient-to-br from-accent-purple/10 to-accent-purple/5 border-l-4 border-l-accent-purple', icon: <Rocket className="w-4 h-4 text-accent-purple" /> },
    { title: 'Chapter mixer sittings', desc: 'Connecting students offline over coffee.', class: 'col-span-2 row-span-1 bg-gradient-to-br from-background-tertiary to-background-secondary border-l-4 border-l-text-secondary', icon: <Compass className="w-4 h-4 text-text-secondary" /> },
  ]

  return (
    <Layout>
      {/* HERO SECTION — ECOSYSTEM NETWORK */}
      <section className="relative min-h-[600px] flex items-center justify-center bg-white border-b border-border overflow-hidden py-20">
        {/* Node Network Visual Background SVG Overlay */}
        <div className="absolute inset-0 opacity-[0.15] select-none pointer-events-none">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            {/* Connected Node Lines */}
            <line x1="15%" y1="20%" x2="40%" y2="35%" stroke="#0066ff" strokeWidth="1.5" />
            <line x1="40%" y1="35%" x2="65%" y2="20%" stroke="#0066ff" strokeWidth="1.5" />
            <line x1="40%" y1="35%" x2="45%" y2="75%" stroke="#0066ff" strokeWidth="1.5" />
            <line x1="65%" y1="20%" x2="85%" y2="55%" stroke="#0066ff" strokeWidth="1.5" />
            <line x1="45%" y1="75%" x2="15%" y2="60%" stroke="#0066ff" strokeWidth="1.5" />
            <line x1="15%" y1="60%" x2="15%" y2="20%" stroke="#0066ff" strokeWidth="1.5" />
          </svg>
          {/* Node Circles */}
          <div className="absolute top-[17%] left-[12%] bg-primary-light border border-primary/20 rounded-full px-3 py-1 text-[9px] font-bold text-primary">VC Node</div>
          <div className="absolute top-[32%] left-[37%] bg-accent-blue/10 border border-accent-blue/20 rounded-full px-3 py-1 text-[9px] font-bold text-accent-blue">ST Node</div>
          <div className="absolute top-[17%] left-[62%] bg-accent-purple/10 border border-accent-purple/20 rounded-full px-3 py-1 text-[9px] font-bold text-accent-purple">LN Node</div>
          <div className="absolute top-[52%] left-[81%] bg-accent-amber/10 border border-accent-amber/20 rounded-full px-3 py-1 text-[9px] font-bold text-accent-amber">GH Node</div>
          <div className="absolute top-[72%] left-[42%] bg-primary-light border border-primary/20 rounded-full px-3 py-1 text-[9px] font-bold text-primary">AH Node</div>
          <div className="absolute top-[57%] left-[12%] bg-background-tertiary border border-border rounded-full px-3 py-1 text-[9px] font-bold text-text-secondary">BS Node</div>
        </div>

        {/* Hero Content Overlay */}
        <div className="container-max relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl mx-auto flex flex-col items-center"
          >
            <span className="badge mb-5">Ecosystem network map</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] text-text-primary mb-6">
              Building together.
            </h1>
            <p className="text-sm md:text-base text-text-secondary leading-relaxed max-w-xl mb-8 font-normal">
              CodeQuesters collaborates with organizations, communities, startups and institutions to create opportunities for builders.
            </p>

            {/* Metrics Row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 border-t border-b border-border py-5 mb-8 w-full">
              <div>
                <span className="text-lg md:text-xl font-bold text-text-primary block">20+</span>
                <span className="text-[9px] text-text-secondary mt-0.5 block">Partners active</span>
              </div>
              <div>
                <span className="text-lg md:text-xl font-bold text-text-primary block">74+</span>
                <span className="text-[9px] text-text-secondary mt-0.5 block">Colleges connected</span>
              </div>
              <div>
                <span className="text-lg md:text-xl font-bold text-text-primary block">50+</span>
                <span className="text-[9px] text-text-secondary mt-0.5 block">Events organized</span>
              </div>
              <div>
                <span className="text-lg md:text-xl font-bold text-text-primary block">2000+</span>
                <span className="text-[9px] text-text-secondary mt-0.5 block">Builders impacted</span>
              </div>
            </div>

            <button className="btn-primary py-3 px-8 text-sm">
              Become a partner
              <ArrowRight size={16} />
            </button>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2 — PARTNER IMPACT */}
      <section className="section-spacing bg-white border-b border-border">
        <div className="container-max">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="badge mb-3">Joint growth</span>
            <h2 className="text-3xl font-bold text-text-primary">
              Collaboration that creates impact
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 bg-card border border-border rounded-lg text-center hover:shadow-sm transition-shadow">
              <span className="text-3xl font-bold text-primary block mb-1">20+</span>
              <h4 className="text-xs font-semibold text-text-primary mb-1">Partner organizations</h4>
            </div>
            <div className="p-6 bg-card border border-border rounded-lg text-center hover:shadow-sm transition-shadow">
              <span className="text-3xl font-bold text-primary block mb-1">50+</span>
              <h4 className="text-xs font-semibold text-text-primary mb-1">Joint initiatives</h4>
            </div>
            <div className="p-6 bg-card border border-border rounded-lg text-center hover:shadow-sm transition-shadow">
              <span className="text-3xl font-bold text-primary block mb-1">2000+</span>
              <h4 className="text-xs font-semibold text-text-primary mb-1">Builders reached</h4>
            </div>
            <div className="p-6 bg-card border border-border rounded-lg text-center hover:shadow-sm transition-shadow">
              <span className="text-3xl font-bold text-primary block mb-1">74+</span>
              <h4 className="text-xs font-semibold text-text-primary mb-1">Colleges connected</h4>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 — PARTNER CATEGORIES */}
      <section className="section-spacing bg-background-secondary border-b border-border">
        <div className="container-max">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="badge mb-3">Partner categories</span>
            <h2 className="text-3xl font-bold text-text-primary">
              Our partner ecosystem
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {categories.map((cat, idx) => (
              <div key={idx} className="card-base bg-card border border-border p-5 hover:border-primary/20 transition-all duration-300 flex flex-col justify-between" hover-translate="y-1">
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <div className="bg-background-secondary p-2 rounded-md border border-border">
                      {cat.icon}
                    </div>
                    <span className="text-[9px] text-text-tertiary bg-background-secondary border border-border px-2 py-0.5 rounded font-semibold text-center">
                      {cat.count}
                    </span>
                  </div>
                  <h4 className="text-xs font-semibold text-text-primary mb-2 capitalize leading-snug">{cat.title}</h4>
                  <p className="text-[10px] text-text-secondary leading-normal font-normal">{cat.desc}</p>
                </div>
                <button className="text-[10px] font-semibold text-primary hover:underline flex items-center gap-0.5 mt-4 w-fit">
                  Explore partners
                  <ChevronRight size={12} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4 — FEATURED PARTNERS */}
      <section className="section-spacing bg-white border-b border-border">
        <div className="container-max">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="badge mb-3">Flagship showcase</span>
            <h2 className="text-3xl font-bold text-text-primary">
              Organizations we build with
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featured.map((item, idx) => (
              <div key={idx} className="card-base bg-card p-6 border border-border flex flex-col justify-between hover:border-primary/25 duration-300">
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <span className="text-[9px] uppercase font-bold tracking-wider text-primary bg-primary-light px-2 py-0.5 rounded">
                      {item.type}
                    </span>
                    <span className="text-xs font-bold text-text-primary">{item.org}</span>
                  </div>
                  <h3 className="text-sm font-semibold text-text-primary mb-2">Partnering with {item.org}</h3>
                  <p className="text-xs text-text-secondary leading-relaxed font-normal mb-5">{item.desc}</p>
                  
                  <div className="bg-background-secondary border border-border/60 rounded px-3 py-1.5 w-fit">
                    <span className="text-[9px] text-text-tertiary block font-semibold uppercase tracking-wider">Impact Created</span>
                    <span className="text-xs font-semibold text-text-primary mt-0.5 block">{item.impact}</span>
                  </div>
                </div>
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[11px] font-semibold text-primary hover:underline flex items-center gap-1 mt-6 w-fit"
                >
                  Visit organization website
                  <ArrowUpRight size={12} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5 — COMMUNITY PARTNERS */}
      <section className="section-spacing bg-background-secondary border-b border-border">
        <div className="container-max">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="badge mb-3">Community nodes</span>
            <h2 className="text-3xl font-bold text-text-primary">
              Community partners
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {communityPartners.map((item, idx) => (
              <div key={idx} className="card-base bg-card p-6 border border-border hover:border-primary/20 transition-all duration-300 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    {item.logo && (
                      <div className="w-8 h-8 rounded border border-border flex items-center justify-center p-1 bg-white">
                        <img src={item.logo} alt={item.name} className="w-full h-full object-contain" />
                      </div>
                    )}
                    <h4 className="text-sm font-semibold text-text-primary">{item.name}</h4>
                  </div>
                  <p className="text-xs text-text-secondary leading-normal mb-4 font-normal">{item.desc}</p>
                </div>
                <div className="border-t border-border pt-4 mt-auto">
                  <span className="text-[9px] uppercase tracking-wider text-text-tertiary block font-semibold">Contribution</span>
                  <span className="text-xs font-semibold text-text-primary mt-0.5 block">{item.contribution}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6 — TECHNOLOGY PARTNERS */}
      <section className="section-spacing bg-white border-b border-border">
        <div className="container-max">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="badge mb-3">Tooling API</span>
            <h2 className="text-3xl font-bold text-text-primary">
              Technology partners
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {techPartners.map((item, idx) => (
              <div key={idx} className="card-base bg-card p-6 border border-border hover:border-primary/20 transition-all duration-300 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <div className="flex items-center gap-3">
                      {item.logo && (
                        <div className="w-8 h-8 rounded border border-border flex items-center justify-center p-1 bg-white">
                          <img src={item.logo} alt={item.name} className="w-full h-full object-contain" />
                        </div>
                      )}
                      <h4 className="text-sm font-semibold text-text-primary">{item.name}</h4>
                    </div>
                    <span className="text-[9px] font-semibold text-accent-blue bg-accent-blue/10 px-2 py-0.5 rounded">{item.platform}</span>
                  </div>
                  <p className="text-xs text-text-secondary leading-relaxed font-normal">{item.details}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7 — HIRING PARTNERS */}
      <section className="section-spacing bg-background-secondary border-b border-border">
        <div className="container-max">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="badge mb-3">Hiring pipelines</span>
            <h2 className="text-3xl font-bold text-text-primary">
              Creating opportunities
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {hiringPartners.map((item, idx) => (
              <div key={idx} className="card-base bg-card p-6 border border-border hover:border-primary/25 duration-300 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <span className="text-[9px] uppercase font-bold tracking-wider text-accent-purple bg-accent-purple/10 px-2 py-0.5 rounded">
                      {item.opp}
                    </span>
                    <div className="flex items-center gap-2">
                      {item.logo && (
                        <div className="w-6 h-6 rounded border border-border flex items-center justify-center p-0.5 bg-white">
                          <img src={item.logo} alt={item.name} className="w-full h-full object-contain" />
                        </div>
                      )}
                      <span className="text-xs font-bold text-text-primary">{item.name}</span>
                    </div>
                  </div>
                  <h4 className="text-xs font-semibold text-text-primary mb-1">{item.role}</h4>
                  <p className="text-[10px] text-text-secondary leading-normal font-normal mb-5">Access talent pool listings and interview scheduling.</p>
                </div>
                <div className="border-t border-border pt-4 mt-auto">
                  <span className="text-[9px] uppercase tracking-wider text-text-tertiary block font-semibold font-sans">Placement Impact</span>
                  <span className="text-xs font-semibold text-text-primary mt-0.5 block">{item.impact}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 8 — UNIVERSITY PARTNERS */}
      <section className="section-spacing bg-white border-b border-border">
        <div className="container-max">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="badge mb-3">Campus chapters</span>
            <h2 className="text-3xl font-bold text-text-primary">
              Connecting campuses
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {universityPartners.map((item, idx) => (
              <div key={idx} className="card-base bg-card p-6 border border-border hover:border-primary/20 transition-all duration-300 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <span className="text-[9px] uppercase font-bold tracking-wider text-accent-amber bg-accent-amber/10 px-2 py-0.5 rounded">
                      {item.type}
                    </span>
                    <span className="text-xs font-semibold text-text-secondary flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-primary" />
                      {item.loc}
                    </span>
                  </div>
                  <div className="flex items-center gap-3 mb-2">
                    {item.logo && (
                      <div className="w-8 h-8 rounded border border-border flex items-center justify-center p-1 bg-white">
                        <img src={item.logo} alt={item.name} className="w-full h-full object-contain" />
                      </div>
                    )}
                    <h3 className="text-sm font-semibold text-text-primary">{item.name}</h3>
                  </div>
                  <p className="text-xs text-text-secondary leading-normal font-normal mb-4">{item.events}</p>
                </div>
                <div className="border-t border-border pt-4 mt-auto">
                  <span className="text-[9px] uppercase tracking-wider text-text-tertiary block font-semibold font-sans">Chapter Reach</span>
                  <span className="text-xs font-semibold text-text-primary mt-0.5 block">{item.reach}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 9 — SUCCESS STORIES */}
      <section className="section-spacing bg-background-secondary border-b border-border">
        <div className="container-max">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="badge mb-3">Case logs</span>
            <h2 className="text-3xl font-bold text-text-primary">
              Partnership success stories
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {caseStudies.map((study, idx) => (
              <div key={idx} className="card-base bg-card p-6 border border-border flex flex-col justify-between hover:border-primary/25 duration-300">
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <h4 className="text-sm font-bold text-text-primary">{study.org}</h4>
                    <span className="text-[9px] uppercase font-bold tracking-wider text-primary bg-primary-light px-2.5 py-1 rounded">Case study</span>
                  </div>
                  <div className="space-y-3 mb-6 text-xs font-normal text-text-secondary">
                    <div>
                      <span className="font-semibold text-text-primary block mb-0.5">Challenge:</span>
                      {study.challenge}
                    </div>
                    <div>
                      <span className="font-semibold text-text-primary block mb-0.5">Collaboration:</span>
                      {study.collaboration}
                    </div>
                  </div>
                </div>
                <div className="border-t border-border pt-4 mt-auto">
                  <span className="text-[9px] uppercase tracking-wider text-text-tertiary block font-semibold">Results achieved</span>
                  <span className="text-xs font-semibold text-primary mt-0.5 block">{study.results}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 10 — PARTNER TESTIMONIALS */}
      <section className="section-spacing bg-white border-b border-border">
        <div className="container-max">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="badge mb-3">Partner feedback</span>
            <h2 className="text-3xl font-bold text-text-primary">
              What our partners say
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((test, idx) => (
              <div key={idx} className="card-base bg-card p-6 border border-border hover:border-primary/20 transition-all duration-300 flex flex-col justify-between">
                <p className="text-xs md:text-sm text-text-primary italic mb-6 leading-relaxed">
                  "{test.quote}"
                </p>
                <div className="flex items-center gap-3 border-t border-border pt-4 mt-auto">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent-blue flex items-center justify-center text-white text-xs font-bold font-sans">
                    {test.author.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-text-primary">{test.author}</h4>
                    <span className="text-[10px] text-text-tertiary font-semibold block">{test.org}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 11 — WHY PARTNER WITH CODEQUESTERS */}
      <section className="section-spacing bg-background-secondary border-b border-border">
        <div className="container-max">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="badge mb-3">Partner benefits</span>
            <h2 className="text-3xl font-bold text-text-primary">
              Why organizations partner with us
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, idx) => (
              <div key={idx} className="card-base bg-card border border-border p-6 hover:border-primary/20 transition-all duration-300 flex items-start gap-4">
                <div className="bg-background-secondary p-2.5 rounded-md border border-border w-fit">
                  {benefit.icon}
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-text-primary mb-1">{benefit.title}</h4>
                  <p className="text-xs text-text-secondary leading-normal font-normal">{benefit.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 12 — PARTNERSHIP PROCESS */}
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
              How we collaborate
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {steps.map((step, idx) => (
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

      {/* SECTION 13 — PARTNER GALLERY */}
      <section className="section-spacing bg-background-secondary border-b border-border">
        <div className="container-max">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="badge mb-3">Initiative gallery</span>
            <h2 className="text-3xl font-bold text-text-primary">
              Building together
            </h2>
          </motion.div>

          {/* Masonry gallery */}
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

      {/* SECTION 14 — BECOME A PARTNER CTA */}
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
              Let's build something meaningful together.
            </h2>
            <p className="text-sm md:text-base text-text-secondary mb-8 leading-relaxed font-normal">
              Join a growing ecosystem helping builders learn, build and grow through collaboration.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="w-full sm:w-auto btn-primary text-sm py-3 px-8 flex items-center justify-center gap-2">
                Become a partner
                <ArrowRight size={16} />
              </button>
              <button className="w-full sm:w-auto btn-secondary text-sm py-3 px-8 flex items-center justify-center gap-2">
                Schedule a discussion
              </button>
              <button className="w-full sm:w-auto btn-outline text-sm py-3 px-8 flex items-center justify-center gap-2">
                Contact us
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  )
}
