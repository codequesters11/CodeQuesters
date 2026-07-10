'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import Layout from '@components/shared/Layout'
import EcosystemMap from '@components/sections/EcosystemMap'
import { 
  Users, 
  BookOpen, 
  School, 
  Award, 
  Briefcase, 
  Flame, 
  MessageSquare, 
  Target, 
  Rocket, 
  Compass, 
  Sparkles, 
  ArrowRight, 
  MessageCircle, 
  Plus, 
  Minus, 
  Laptop, 
  Globe, 
  Send 
} from 'lucide-react'

export default function CommunityPage() {
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

  const stats = [
    { number: '2000+', label: 'Builders', desc: 'Active student developers writing code together.' },
    { number: '50+', label: 'Events & workshops', desc: 'Practical bootcamps and collaborative hackathons.' },
    { number: '74+', label: 'Colleges connected', desc: 'Active campus student chapters.' },
    { number: '20+', label: 'Community partners', desc: 'Companies offering mentorship and sponsorships.' },
    { number: '100+', label: 'Opportunities shared', desc: 'Internships, referrals, and developer projects.' },
  ]

  const insideCards = [
    { title: 'Learning', desc: 'Workshops, training sessions, and peer developer bootcamps.', icon: <BookOpen className="w-5 h-5 text-primary" /> },
    { title: 'Collaboration', desc: 'Form team circles for hackathons and find co-founders for startup MVPs.', icon: <Compass className="w-5 h-5 text-accent-blue" /> },
    { title: 'Hackathons', desc: 'Compete in high-stakes sprints and win cash rewards.', icon: <Flame className="w-5 h-5 text-accent-amber" /> },
    { title: 'Mentorship', desc: 'Direct code reviews and AMA panels with senior engineering leads.', icon: <Sparkles className="w-5 h-5 text-accent-purple" /> },
    { title: 'Opportunities', desc: 'Receive direct job postings, internship matches, and referral leads.', icon: <Briefcase className="w-5 h-5 text-primary" /> },
    { title: 'Networking', desc: 'Connect with startup founders, open source developers, and campus leads.', icon: <Users className="w-5 h-5 text-accent-blue" /> },
  ]

  const channels = [
    {
      title: 'WhatsApp community',
      desc: 'Active channels for campus announcements, mixer registrations, and rapid chat alerts.',
      count: '1,800+ Members',
      icon: <MessageCircle className="w-5 h-5 text-[#25D366]" />,
      actionText: 'Join WhatsApp',
      href: 'https://whatsapp.com/channel/0029VbAjqOJFXUuja0h4G00j',
    },
    {
      title: 'Discord community',
      desc: 'Our developer hub for debugging code, system reviews, and open source sprints.',
      count: '2,500+ Members',
      icon: <MessageSquare className="w-5 h-5 text-[#5865F2]" />,
      actionText: 'Join Discord',
      href: '#',
    },
    {
      title: 'LinkedIn community',
      desc: 'Follow community project updates, winner announcements, and partner features.',
      count: '1,200+ Followers',
      icon: <Globe className="w-5 h-5 text-[#0A66C2]" />,
      actionText: 'Follow Page',
      href: 'https://www.linkedin.com/company/codequesters',
    },
    {
      title: 'Telegram community',
      desc: 'Subscribe to the announcements list for workshop resources and slides.',
      count: '900+ Subscribers',
      icon: <Send className="w-5 h-5 text-[#0088cc]" />,
      actionText: 'Subscribe Channel',
      href: '#',
    },
  ]

  const benefits = [
    {
      title: 'Access to opportunities',
      desc: 'Learn about paid internships, freelance contracts, and startup developer roles shared directly by our partners.',
      bannerGrad: 'from-primary/10 via-primary-dark/20 to-primary/5',
    },
    {
      title: 'Learn from experts',
      desc: 'Join weekly AMAs, hands-on technical masterclasses, and code architecture review sessions led by senior engineers.',
      bannerGrad: 'from-accent-blue/15 to-accent-blue/5',
    },
    {
      title: 'Build with others',
      desc: 'Form teams for weekend hackathons, match with product managers, or find co-founders to build functional MVPs.',
      bannerGrad: 'from-accent-purple/15 to-accent-purple/5',
    },
    {
      title: 'Participate in events',
      desc: 'Get exclusive early-bird invites to national hack sprints, campus mixer meetups, and code sprints.',
      bannerGrad: 'from-accent-amber/15 to-accent-amber/5',
    },
    {
      title: 'Gain visibility',
      desc: 'Showcase your code milestones to hiring partners and earn podium listings in the national Hall of Fame.',
      bannerGrad: 'from-primary/10 to-accent-blue/10',
    },
    {
      title: 'Grow your network',
      desc: 'Build long-lasting connections with ambitious student developers, mentors, and founders across engineering colleges.',
      bannerGrad: 'from-background-tertiary to-background-secondary',
    },
  ]

  const gallery = [
    { title: 'Hackathon sprints', desc: 'Late night collaboration & debugging.', class: 'col-span-2 row-span-2 bg-gradient-to-br from-primary/10 to-accent-blue/5 border-l-4 border-l-primary', icon: <Flame className="w-5 h-5 text-primary" /> },
    { title: 'Technical workshops', desc: 'Hands-on training inside labs.', class: 'col-span-2 sm:col-span-1 row-span-1 bg-gradient-to-br from-accent-blue/10 to-accent-blue/5 border-l-4 border-l-accent-blue', icon: <BookOpen className="w-4 h-4 text-accent-blue" /> },
    { title: 'Mentorship reviews', desc: 'Direct code reviews by industry experts.', class: 'col-span-2 sm:col-span-1 row-span-2 bg-gradient-to-br from-accent-amber/15 to-accent-amber/5 border-l-4 border-l-accent-amber', icon: <Sparkles className="w-4 h-4 text-accent-amber" /> },
    { title: 'Community meetups', desc: 'Offline mixer mixers across chapters.', class: 'col-span-2 sm:col-span-1 row-span-2 bg-gradient-to-br from-accent-purple/10 to-accent-purple/5 border-l-4 border-l-accent-purple', icon: <Users className="w-4 h-4 text-accent-purple" /> },
    { title: 'Winner celebrations', desc: 'Teams celebrating cash prize milestones.', class: 'col-span-2 row-span-1 bg-gradient-to-br from-background-tertiary to-background-secondary border-l-4 border-l-text-secondary', icon: <Award className="w-4 h-4 text-text-secondary" /> },
  ]

  const journeys = [
    { name: 'Omkar Rane', role: 'Hackathon Winner', details: 'Built a visual developer proxy. Met his co-founder at CodeQuest, launched MVP, and raised pre-seed seed round.', tag: 'Startup Founder' },
    { name: 'Priyanka Singh', role: 'Internship Achiever', details: 'Participated in backend bootcamps, contributed to community projects, and landed a backend role at TechStartup.', tag: 'Backend Engineer' },
    { name: 'Lakshya Kumar', role: 'OS Contributor', details: 'Learned git in our open sprints. Merged 20+ PRs in core developer libraries and secured a full-time remote role.', tag: 'Core Maintainer' },
  ]

  const testimonials = [
    { name: 'Dev Patel', role: 'Frontend Engineer', quote: 'Finding teammates who are as obsessed with clean code as me was difficult. CodeQuesters solved that in the first week.', duration: 'Member for 1 year' },
    { name: 'Riya Sen', role: 'AI Developer', quote: 'The peer review sessions on the Discord channel helped me refactor my server database routes completely.', duration: 'Member for 6 months' },
    { name: 'Kunal Shah', role: 'Product Lead', quote: 'I run campus meetups because guiding new builders and helping them write code feels incredibly rewarding.', duration: 'Member for 1.5 years' },
    { name: 'Aditi Verma', role: 'OS Maintainer', quote: 'Got direct access to partner recruiters. The hiring referral pipeline is fast and completely frictionless.', duration: 'Member for 8 months' },
  ]

  const opportunities = [
    { type: 'Internships', desc: 'Direct-to-interview pipelines with hiring startup partners.' },
    { type: 'Hackathons', desc: 'Collaborate and build applications with total prize pools of ₹3,00,000.' },
    { type: 'Competitions', desc: 'Showcase compiler skills and earn recognition in developer leaderboards.' },
    { type: 'Open source', desc: 'Contribute to packages used by engineering teams globally.' },
    { type: 'Workshops', desc: 'Hands-on learning sessions led by senior devs covering Next.js, Rust, and AI.' },
    { type: 'Startup gigs', desc: 'Freelance dev contracts and founder matching for early-stage MVPs.' },
  ]

  const values = [
    { title: 'Learn', desc: 'Continuous learning creates opportunities.', icon: <BookOpen className="w-5 h-5 text-primary" /> },
    { title: 'Build', desc: 'Ideas become valuable through execution.', icon: <Laptop className="w-5 h-5 text-accent-blue" /> },
    { title: 'Collaborate', desc: 'Great things are built together.', icon: <Users className="w-5 h-5 text-accent-purple" /> },
    { title: 'Grow', desc: 'Personal growth creates professional success.', icon: <Rocket className="w-5 h-5 text-accent-amber" /> },
  ]

  const faqs = [
    { q: 'Who can join?', a: 'Any student developer, creator, designer, or builder enrolled in technical or engineering courses can join.' },
    { q: 'Is it free?', a: 'Yes. Joining the CodeQuesters community channels, bootcamps, and hack sprints is 100% free.' },
    { q: 'Do beginners fit in?', a: 'Absolutely. We host bootcamps specifically designed to guide beginners from basic Git commands to deployment.' },
    { q: 'How active is the community?', a: 'Extremely active. We have daily technical threads, virtual coding sessions, and offline chapter mixer meetups.' },
    { q: 'Are opportunities shared regularly?', a: 'Yes, our partners post internships, project referrals, and developer gigs weekly in our community channels.' },
    { q: 'How can I contribute?', a: 'You can contribute by helping peers debug code, contributing to open repositories, or organizing campus chapter workshops.' },
  ]

  return (
    <Layout>
      {/* SECTION 1 — PAGE HERO */}
      <section className="section-spacing pt-20 md:pt-28 bg-gradient-to-b from-white via-background-secondary to-white overflow-hidden border-b border-border">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Col (7 cols): Header */}
            <div className="lg:col-span-7 flex flex-col items-start text-left">
              <span className="badge mb-3">Community</span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] text-text-primary mb-6">
                Build better together.
              </h1>
              <p className="text-sm md:text-base text-text-secondary leading-relaxed max-w-xl mb-8 font-normal">
                Join a growing ecosystem of builders, developers, creators and students who learn, collaborate and grow through shared experiences and opportunities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                <a 
                  href="https://chat.whatsapp.com/Drc3SOwUSJiJnV3ZZgQz7I?mode=ac_t" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn-primary py-3 px-8 text-sm flex items-center justify-center gap-2"
                >
                  Join community
                  <ArrowRight size={16} />
                </a>
                <button className="btn-secondary py-3 px-8 text-sm">
                  Explore events
                </button>
              </div>
            </div>

            {/* Right Col (5 cols): Grid Collage visual */}
            <div className="lg:col-span-5 h-[320px] relative">
              <div className="grid grid-cols-2 gap-3 h-full">
                <div className="rounded-lg border border-border bg-gradient-to-br from-primary/15 via-primary-dark/20 to-primary/5 p-4 flex flex-col justify-end group hover:border-primary transition-all duration-300">
                  <span className="text-[9px] uppercase font-bold tracking-wider text-primary-dark bg-primary-light px-2 py-0.5 rounded w-fit mb-2">Hacking stage</span>
                  <h4 className="text-xs font-semibold text-text-primary">Sprint collaboration</h4>
                </div>
                <div className="grid grid-rows-2 gap-3">
                  <div className="rounded-lg border border-border bg-gradient-to-br from-accent-blue/15 to-accent-blue/5 p-3 flex flex-col justify-end group hover:border-primary transition-all duration-300">
                    <h4 className="text-xs font-semibold text-text-primary">Peer training</h4>
                  </div>
                  <div className="rounded-lg border border-border bg-gradient-to-br from-accent-amber/15 to-accent-amber/5 p-3 flex flex-col justify-end group hover:border-primary transition-all duration-300">
                    <h4 className="text-xs font-semibold text-text-primary">Chapter meetups</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 — COMMUNITY IMPACT */}
      <section className="section-spacing bg-white border-b border-border">
        <div className="container-max">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="badge mb-3">Community impact</span>
            <h2 className="text-3xl font-bold text-text-primary">
              A community built around growth
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-5 gap-6">
            {stats.map((stat, idx) => (
              <div key={idx} className="p-5 bg-card border border-border rounded-lg text-center hover:shadow-sm transition-shadow">
                <span className="text-2xl md:text-3xl font-bold text-primary block mb-1">{stat.number}</span>
                <h4 className="text-xs font-semibold text-text-primary mb-1">{stat.label}</h4>
                <p className="text-[9px] text-text-secondary leading-normal font-normal">{stat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3 — WHAT HAPPENS INSIDE (Interactive Ecosystem Map) */}
      <EcosystemMap />

      {/* SECTION 4 — COMMUNITY CHANNELS */}
      <section className="section-spacing bg-white border-b border-border">
        <div className="container-max">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="badge mb-3">Join links</span>
            <h2 className="text-3xl font-bold text-text-primary">
              Choose how you want to connect
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {channels.map((chan, idx) => (
              <a
                key={idx}
                href={chan.href}
                target={chan.href.startsWith('http') ? '_blank' : undefined}
                rel={chan.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="card-base bg-card border border-border p-6 hover:border-primary/20 transition-all duration-300 flex flex-col justify-between cursor-pointer group"
                hover-translate="y-1"
              >
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <div className="bg-background-secondary p-2 rounded-md border border-border group-hover:border-primary/30 transition-colors">
                      {chan.icon}
                    </div>
                    <span className="text-[10px] text-text-secondary bg-background-secondary border border-border px-2 py-0.5 rounded font-semibold">
                      {chan.count}
                    </span>
                  </div>
                  <h4 className="text-sm font-semibold text-text-primary mb-2 capitalize">{chan.title}</h4>
                  <p className="text-xs text-text-secondary leading-relaxed mb-6 font-normal">{chan.desc}</p>
                </div>
                <span className="w-full btn-primary text-xs py-2 group-hover:brightness-110">
                  {chan.actionText}
                  <ArrowRight size={14} />
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5 — COMMUNITY BENEFITS */}
      <section className="section-spacing bg-background-secondary border-b border-border">
        <div className="container-max">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="badge mb-3">Benefits</span>
            <h2 className="text-3xl font-bold text-text-primary">
              Why builders join CodeQuesters
            </h2>
          </motion.div>

          {/* Alternating Content Blocks */}
          <div className="space-y-16">
            {benefits.map((benefit, idx) => {
              const isEven = idx % 2 === 0
              return (
                <div key={idx} className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center border-b border-border/50 pb-12 last:border-0 last:pb-0">
                  {/* Text Column */}
                  <div className={`lg:col-span-7 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                    <h3 className="text-lg font-bold text-text-primary mb-3 capitalize">{benefit.title}</h3>
                    <p className="text-xs md:text-sm text-text-secondary leading-relaxed font-normal">{benefit.desc}</p>
                  </div>

                  {/* Graphic Column */}
                  <div className={`lg:col-span-5 h-[200px] ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                    <div className={`w-full h-full rounded-lg border border-border bg-gradient-to-br ${benefit.bannerGrad} p-6 flex flex-col justify-end group hover:border-primary transition-all duration-300`}>
                      <span className="text-[10px] uppercase font-bold tracking-wider text-text-primary/75 bg-white px-2 py-0.5 rounded w-fit">Benefit focus</span>
                      <h4 className="text-xs font-semibold text-text-primary mt-2 capitalize">{benefit.title}</h4>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* SECTION 6 — COMMUNITY GALLERY */}
      <section className="section-spacing bg-white border-b border-border">
        <div className="container-max">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="badge mb-3">Snapshots</span>
            <h2 className="text-3xl font-bold text-text-primary mb-4">
              Community in action
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

      {/* SECTION 7 — MEMBER JOURNEYS */}
      <section className="section-spacing bg-background-secondary border-b border-border">
        <div className="container-max">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="badge mb-3">Success stories</span>
            <h2 className="text-3xl font-bold text-text-primary">
              Builder journeys
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {journeys.map((j, idx) => (
              <div key={idx} className="card-base bg-card p-6 border border-border flex flex-col justify-between hover:border-primary/25 duration-300">
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent-blue flex items-center justify-center text-white text-xs font-bold font-sans">
                      {j.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <span className="text-[9px] uppercase font-bold tracking-wider text-primary bg-primary-light px-2 py-0.5 rounded">
                      {j.tag}
                    </span>
                  </div>
                  <h3 className="text-sm font-semibold text-text-primary mb-1">{j.name}</h3>
                  <span className="text-[10px] text-text-tertiary block font-semibold mb-3 uppercase tracking-wide">{j.role}</span>
                  <p className="text-xs text-text-secondary leading-relaxed font-normal mb-5">{j.details}</p>
                </div>
                <button className="text-[11px] font-semibold text-primary hover:underline flex items-center gap-1 mt-auto w-fit">
                  Read case study
                  <ArrowRight size={12} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 8 — TESTIMONIALS */}
      <section className="section-spacing bg-white border-b border-border">
        <div className="container-max">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="badge mb-3">Feedback</span>
            <h2 className="text-3xl font-bold text-text-primary">
              Voices from the community
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {testimonials.map((test, idx) => (
              <div key={idx} className="card-base bg-card p-5 border border-border hover:border-primary/20 duration-300 flex flex-col justify-between">
                <p className="text-[11px] md:text-xs text-text-primary italic mb-6 leading-relaxed">
                  "{test.quote}"
                </p>
                <div className="flex items-center gap-3 border-t border-border pt-4 mt-auto">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-accent-blue flex items-center justify-center text-white text-[9px] font-bold">
                    {test.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <h4 className="text-[11px] font-semibold text-text-primary">{test.name}</h4>
                    <span className="text-[9px] text-text-tertiary block font-semibold">{test.role}</span>
                    <span className="text-[9px] text-primary font-medium mt-0.5 block">{test.duration}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 9 — OPPORTUNITIES SHARED */}
      <section className="section-spacing bg-background-secondary border-b border-border">
        <div className="container-max">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="badge mb-3">Shared opportunities</span>
            <h2 className="text-3xl font-bold text-text-primary">
              Opportunities shared every month
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {opportunities.map((opp, idx) => (
              <div key={idx} className="card-base bg-card border border-border p-6 hover:border-primary/20 duration-300 flex items-start gap-4">
                <div className="bg-background-secondary p-2.5 rounded-md border border-border w-fit">
                  <Briefcase className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-text-primary mb-1">{opp.type}</h4>
                  <p className="text-xs text-text-secondary leading-normal font-normal">{opp.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 10 — COMMUNITY VALUES */}
      <section className="section-spacing bg-white border-b border-border">
        <div className="container-max">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="badge mb-3">Our beliefs</span>
            <h2 className="text-3xl font-bold text-text-primary">
              What we believe
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((val, idx) => (
              <div key={idx} className="card-base bg-card p-6 border border-border hover:border-primary/20 duration-300">
                <div className="bg-background-secondary p-2.5 rounded-md border border-border w-fit mb-4">
                  {val.icon}
                </div>
                <h4 className="text-sm font-semibold text-text-primary mb-1">{val.title}</h4>
                <p className="text-xs text-text-secondary leading-normal font-normal">{val.desc}</p>
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
            <span className="badge mb-3">FAQs</span>
            <h2 className="text-3xl font-bold text-text-primary">
              Community FAQs
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

      {/* SECTION 12 — JOIN COMMUNITY CTA */}
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
              Your builder journey starts here.
            </h2>
            <p className="text-sm md:text-base text-text-secondary mb-8 leading-relaxed font-normal">
              Join thousands of builders learning, collaborating and growing together.
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
              <button className="w-full sm:w-auto btn-secondary text-sm py-3 px-8 flex items-center justify-center gap-2">
                Explore events
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  )
}
