'use client'

import { motion } from 'framer-motion'
import Layout from '@components/shared/Layout'
import { 
  Trophy, 
  Code, 
  Briefcase, 
  Award, 
  ArrowRight, 
  Rocket, 
  Target, 
  Users, 
  BookOpen, 
  School, 
  Compass, 
  Sparkles, 
  Heart, 
  Globe, 
  ChevronRight, 
  ArrowUpRight 
} from 'lucide-react'

export default function AboutPage() {
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

  const milestones = [
    {
      year: '2024',
      title: 'CodeQuesters was started',
      description: 'Launched the first chapter with a mission to bridge the gap between classroom theory and real product code.',
    },
    {
      year: '2025',
      title: 'Workshops & bootcamps launched',
      description: 'Introduced hands-on training sessions in Git, React, and server architectures across multiple campus hubs.',
    },
    {
      year: '2025',
      title: 'First flagship hackathons',
      description: 'Organized national-level hack sprints with direct mentorship from senior industry tech leads.',
    },
    {
      year: '2026',
      title: '2,000+ builders connected',
      description: 'Grew into a vibrant network of active student developers, mentors, and partner organizations.',
    },
    {
      year: '2026',
      title: 'Ecosystem & global expansion',
      description: 'Initiated open source bootcamps, hiring pipelines, and collaborations with international builder hubs.',
    },
  ]

  const metrics = [
    {
      number: '2000+',
      label: 'Builders',
      description: 'Active students collaborating, building, and learning together.',
      icon: <Users className="text-primary w-5 h-5" />,
      accentBorder: 'border-l-primary border-l-4'
    },
    {
      number: '50+',
      label: 'Events & workshops',
      description: 'Practical hackathons, masterclasses, and open source workshops.',
      icon: <BookOpen className="text-accent-blue w-5 h-5" />,
      accentBorder: 'border-l-accent-blue border-l-4'
    },
    {
      number: '74+',
      label: 'Colleges connected',
      description: 'Hubs of campus student communities in various technical programs.',
      icon: <School className="text-accent-amber w-5 h-5" />,
      accentBorder: 'border-l-accent-amber border-l-4'
    },
    {
      number: '20+',
      label: 'Community partners',
      description: 'Industry organizations supporting, hiring, and mentoring builders.',
      icon: <Award className="text-accent-purple w-5 h-5" />,
      accentBorder: 'border-l-accent-purple border-l-4'
    }
  ]

  const values = [
    {
      title: 'Learn',
      description: 'Continuous learning creates opportunities.',
      icon: <BookOpen className="w-5 h-5 text-primary" />,
    },
    {
      title: 'Build',
      description: 'Ideas become valuable through execution.',
      icon: <Code className="w-5 h-5 text-accent-blue" />,
    },
    {
      title: 'Collaborate',
      description: 'Great things are built together.',
      icon: <Users className="w-5 h-5 text-accent-purple" />,
    },
    {
      title: 'Grow',
      description: 'Personal growth creates professional success.',
      icon: <Rocket className="w-5 h-5 text-accent-amber" />,
    },
  ]

  const moments = [
    {
      title: 'Technical workshops',
      desc: 'Focused learning sessions inside labs.',
      class: 'col-span-2 row-span-1 bg-gradient-to-br from-primary/10 to-accent-blue/5 border-l-4 border-l-primary',
      icon: <BookOpen className="w-4 h-4 text-primary" />,
    },
    {
      title: 'Hackathon sprints',
      desc: '36 hours of late-night code execution.',
      class: 'col-span-2 sm:col-span-1 row-span-2 bg-gradient-to-br from-accent-purple/10 to-accent-blue/5 border-l-4 border-l-accent-purple',
      icon: <Trophy className="w-4 h-4 text-accent-purple" />,
    },
    {
      title: 'Community meetups',
      desc: 'Connecting with builders offline.',
      class: 'col-span-2 sm:col-span-1 row-span-1 bg-gradient-to-br from-accent-amber/10 to-accent-amber/5 border-l-4 border-l-accent-amber',
      icon: <Users className="w-4 h-4 text-accent-amber" />,
    },
    {
      title: 'Mentorship reviews',
      desc: 'Code feedback from industry experts.',
      class: 'col-span-2 sm:col-span-1 row-span-1 bg-gradient-to-br from-accent-blue/10 to-primary/5 border-l-4 border-l-accent-blue',
      icon: <Sparkles className="w-4 h-4 text-accent-blue" />,
    },
    {
      title: 'Builder collaborations',
      desc: 'Finding co-founders & launch peers.',
      class: 'col-span-2 row-span-1 bg-gradient-to-br from-background-tertiary to-background-secondary border-l-4 border-l-text-secondary',
      icon: <Compass className="w-4 h-4 text-text-secondary" />,
    },
  ]

  const testimonials = [
    {
      name: 'Omkar Rane',
      role: 'Co-founder, TechStartup Inc.',
      quote: 'Joined a weekend React workshop, met my co-founder on the community channel, and built our MVP at CodeQuest. We recently raised our seed round.',
    },
    {
      name: 'Priyanka Singh',
      role: 'Community Lead & Mentor',
      quote: 'Mentoring new builders has been the most fulfilling part of my journey. Helping others write their first open source PR is incredibly rewarding.',
    },
    {
      name: 'Lakshya Kumar',
      role: 'Open Source Maintainer',
      quote: 'I got my first remote developer internship through a hiring partner introduction here. The community network is genuinely game-changing.',
    },
  ]

  const team = [
    {
      name: 'Amit Sharma',
      role: 'Organizer',
      bio: 'Passionate about scaling developer communities and organizing high-stakes hack sprints.',
    },
    {
      name: 'Neha Patel',
      role: 'Community Lead',
      bio: 'Coordinates university campus chapters and runs developer bootcamps.',
    },
    {
      name: 'Rohan Gupta',
      role: 'Core Maintainer',
      bio: 'Maintains open repositories and runs collaborative developer sprint workshops.',
    },
  ]

  const partnerCategories = [
    {
      title: 'Technology partners',
      logos: [
        { name: 'Vercel', logo: '/partners/Vercel--.svg' },
        { name: 'Stripe', logo: '/partners/Stripe.svg' },
        { name: 'Linear' },
        { name: 'Github', logo: '/partners/Github-Icon.svg' }
      ],
      color: 'group-hover:text-black'
    },
    {
      title: 'Hiring partners',
      logos: [
        { name: 'GreatHire', logo: '/partners/gh.png' },
        { name: 'Devel', logo: '/partners/devrel.png' },
        { name: 'ICS Group', logo: '/partners/ics.png' },
        { name: 'Supervity', logo: '/partners/supervity.png' }
      ],
      color: 'group-hover:text-primary'
    },
    {
      title: 'Community partners',
      logos: [
        { name: 'AI House', logo: '/partners/coworking.png' },
        { name: 'GradSkills', logo: '/partners/grandskills.png' },
        { name: 'Medo', logo: '/partners/medo.png' },
        { name: 'Osen', logo: '/partners/osen.png' }
      ],
      color: 'group-hover:text-accent-blue'
    },
    {
      title: 'University partners',
      logos: [
        { name: 'IIIT Delhi', logo: '/partners/IIIT-Delhi.svg' },
        { name: 'IIT Bombay', logo: '/partners/IIIT-Bombay.svg' },
        { name: 'BITS Pilani', logo: '/partners/BITS-Pilani.svg' },
        { name: 'VIT Chennai' }
      ],
      color: 'group-hover:text-accent-purple'
    }
  ]

  const futureTargets = [
    { text: 'Expanding workshops across 150+ campuses.' },
    { text: 'Growing active builder communities in Tier 2 cities.' },
    { text: 'Launching national hack sprints with ₹10L+ prize pools.' },
    { text: 'Building international developer collaborations.' },
    { text: 'Creating direct-to-hire pipelines for student contributors.' },
  ]

  return (
    <Layout>
      {/* SECTION 1 — PAGE HERO */}
      <section className="section-spacing pt-20 md:pt-28 bg-gradient-to-b from-white via-background-secondary to-white overflow-hidden border-b border-border">
        <div className="container-max text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto flex flex-col items-center"
          >
            <span className="badge mb-5">About CodeQuesters</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] text-text-primary mb-6">
              More than a community. <br />
              <span className="text-primary">A builder ecosystem</span>.
            </h1>
            <p className="text-sm md:text-base text-text-secondary leading-relaxed max-w-xl font-normal">
              CodeQuesters exists to help students move beyond passive learning and start active building. Through hack sprints, code workshops, direct mentorship, and career collaborations, we create the ecosystem where builders grow together.
            </p>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2 — OUR STORY */}
      <section className="section-spacing bg-white border-b border-border">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Col (7 cols): Copywriting */}
            <div className="lg:col-span-7 flex flex-col items-start">
              <span className="badge mb-3">Our roots</span>
              <h2 className="text-3xl font-bold text-text-primary mb-6">
                Why CodeQuesters started
              </h2>
              <div className="space-y-4 text-xs md:text-sm text-text-secondary leading-relaxed font-normal">
                <p>
                  The traditional education system focuses heavily on theories and exams. However, real engineering and product development are learnt through hands-on execution.
                </p>
                <p>
                  CodeQuesters was founded to bridge this gap. We created a collaborative space where students could build real software, participate in sprint hackathons, learn directly from engineering leads, and discover direct hiring opportunities.
                </p>
                <p className="font-semibold text-text-primary border-l-2 border-primary pl-4 py-1 italic">
                  Our mission has always been simple: Help students become builders.
                </p>
              </div>
            </div>

            {/* Right Col (5 cols): Grid visual placeholder */}
            <motion.div 
              className="lg:col-span-5 h-[280px]"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="w-full h-full rounded-lg border border-border bg-gradient-to-br from-primary/10 via-primary-dark/20 to-primary/5 p-6 flex flex-col justify-between group hover:border-primary transition-all duration-300">
                <div className="flex justify-between items-start">
                  <span className="text-[9px] uppercase font-bold tracking-wider text-primary-dark bg-primary-light px-2 py-0.5 rounded">Ecosystem snapshot</span>
                  <Users className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-text-primary mb-1">Collaborative workspace</h4>
                  <p className="text-[11px] text-text-secondary leading-normal">Students building code, debugging APIs, and deploying applications together.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 3 — MISSION & VISION */}
      <section className="section-spacing bg-background-secondary border-b border-border">
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Card 1: Mission */}
            <motion.div 
              className="card-base bg-card p-8 hover:shadow-sm"
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
            >
              <div className="bg-primary-light p-3 rounded-lg border border-primary/10 w-fit mb-5">
                <Target className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-text-primary mb-2">Our mission</h3>
              <p className="text-xs text-text-secondary leading-relaxed font-normal">
                To help students learn, build, collaborate, and grow through hands-on hackathons, technical bootcamps, and real-world career opportunities.
              </p>
            </motion.div>

            {/* Card 2: Vision */}
            <motion.div 
              className="card-base bg-card p-8 hover:shadow-sm"
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
            >
              <div className="bg-accent-blue/10 p-3 rounded-lg border border-accent-blue/10 w-fit mb-5">
                <Rocket className="w-6 h-6 text-accent-blue" />
              </div>
              <h3 className="text-lg font-semibold text-text-primary mb-2">Our vision</h3>
              <p className="text-xs text-text-secondary leading-relaxed font-normal">
                Create one of the most impactful builder ecosystems where students can confidently launch software engineering careers, startup MVPs, and meaningful open-source contributions.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 4 — TIMELINE */}
      <section className="section-spacing bg-white border-b border-border">
        <div className="container-max">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="badge mb-3">Ecosystem milestones</span>
            <h2 className="text-3xl font-bold text-text-primary mb-4">
              The journey so far
            </h2>
          </motion.div>

          {/* Timeline Wrapper */}
          <div className="max-w-3xl mx-auto relative border-l-2 border-border pl-6 md:pl-10 space-y-12 ml-4 md:ml-auto">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                className="relative"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.5 }}
              >
                {/* Bullet node indicator */}
                <div className="absolute -left-[31px] md:-left-[47px] top-1.5 w-4 h-4 rounded-full bg-white border-2 border-primary flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                </div>

                <div className="flex flex-col md:flex-row gap-2 md:gap-8 items-start">
                  <span className="text-sm font-bold text-primary bg-primary-light px-2.5 py-0.5 rounded-md min-w-[50px] text-center">
                    {milestone.year}
                  </span>
                  <div className="flex-1">
                    <h4 className="text-sm font-semibold text-text-primary mb-1">
                      {milestone.title}
                    </h4>
                    <p className="text-xs text-text-secondary leading-relaxed font-normal">
                      {milestone.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5 — IMPACT SECTION */}
      <section className="section-spacing bg-background-secondary border-b border-border">
        <div className="container-max">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="badge mb-3">Community size</span>
            <h2 className="text-3xl font-bold text-text-primary mb-4">
              Growing through community
            </h2>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
          >
            {metrics.map((metric, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`p-6 rounded-r-lg bg-card border border-border border-l-0 ${metric.accentBorder} hover:shadow-md transition-shadow duration-300 flex flex-col justify-between`}
              >
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <span className="text-3xl font-bold text-text-primary tracking-tight">{metric.number}</span>
                    <div className="bg-background-secondary p-2 rounded-md border border-border">
                      {metric.icon}
                    </div>
                  </div>
                  <h4 className="text-sm font-semibold text-text-primary mb-1">{metric.label}</h4>
                  <p className="text-xs text-text-secondary leading-normal">{metric.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* SECTION 6 — CORE VALUES */}
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
            <h2 className="text-3xl font-bold text-text-primary mb-4">
              What we believe
            </h2>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
          >
            {values.map((val, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="card-base bg-card p-6 border border-border hover:border-primary/20 transition-all duration-300"
                whileHover={{ y: -4 }}
              >
                <div className="bg-background-secondary p-2 rounded-md border border-border w-fit mb-4">
                  {val.icon}
                </div>
                <h4 className="text-sm font-semibold text-text-primary mb-1">{val.title}</h4>
                <p className="text-xs text-text-secondary leading-normal font-normal">{val.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* SECTION 7 — COMMUNITY MOMENTS (Masonry Grid) */}
      <section className="section-spacing bg-background-secondary border-b border-border">
        <div className="container-max">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="badge mb-3">Gallery showcase</span>
            <h2 className="text-3xl font-bold text-text-primary mb-4">
              Built by people
            </h2>
            <p className="text-sm text-text-secondary max-w-xl mx-auto leading-relaxed">
              We capture moments of building, teaching, and learning across campus communities.
            </p>
          </motion.div>

          {/* Masonry Layout grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[140px] md:auto-rows-[160px]">
            {moments.map((moment, index) => (
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
            <h2 className="text-3xl font-bold text-text-primary mb-4">
              What builders say
            </h2>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
          >
            {testimonials.map((test, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="card-base bg-card p-6 border border-border hover:border-primary/20 transition-all duration-300 flex flex-col justify-between"
                whileHover={{ y: -4 }}
              >
                <div>
                  <p className="text-xs md:text-sm text-text-primary italic mb-6 leading-relaxed">
                    "{test.quote}"
                  </p>
                </div>
                <div className="flex items-center gap-3 border-t border-border pt-4 mt-auto">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent-blue flex items-center justify-center text-white text-xs font-bold font-sans">
                    {test.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-text-primary">{test.name}</h4>
                    <p className="text-[10px] text-text-secondary font-normal mt-0.5">{test.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* SECTION 9 — LEADERSHIP / TEAM */}
      <section className="section-spacing bg-background-secondary border-b border-border">
        <div className="container-max">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="badge mb-3">Team leads</span>
            <h2 className="text-3xl font-bold text-text-primary mb-4">
              Meet the people behind CodeQuesters
            </h2>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
          >
            {team.map((member, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="card-base bg-card p-6 border border-border hover:border-primary/20 hover:shadow-sm transition-all duration-300 flex flex-col justify-between"
                whileHover={{ y: -4 }}
              >
                <div>
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-accent-purple flex items-center justify-center text-white text-base font-bold font-sans mb-4">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <h4 className="text-sm font-semibold text-text-primary mb-1">{member.name}</h4>
                  <span className="text-[10px] font-semibold text-primary uppercase tracking-wide block mb-3">{member.role}</span>
                  <p className="text-xs text-text-secondary leading-relaxed mb-6 font-normal">
                    {member.bio}
                  </p>
                </div>
                <div className="border-t border-border pt-4 mt-auto">
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] text-primary font-medium hover:underline flex items-center gap-1 w-fit"
                  >
                    Connect on LinkedIn
                    <ArrowUpRight size={13} />
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* SECTION 10 — PARTNER TRUST SECTION */}
      <section className="section-spacing bg-white border-b border-border">
        <div className="container-max">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="badge mb-3">Partner network</span>
            <h2 className="text-3xl font-bold text-text-primary mb-4">
              Supported by amazing organizations
            </h2>
          </motion.div>

          <div className="space-y-12">
            {partnerCategories.map((category, catIdx) => (
              <motion.div
                key={catIdx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: catIdx * 0.1, duration: 0.5 }}
                className="border-b border-border/50 pb-8 last:border-0 last:pb-0"
              >
                <h4 className="text-xs font-semibold text-text-tertiary uppercase tracking-wider mb-6 text-center md:text-left">
                  {category.title}
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {category.logos.map((logo, logoIdx) => (
                    <div
                      key={logoIdx}
                      className="h-16 bg-card rounded-md border border-border flex items-center justify-center cursor-pointer group transition-all duration-300 hover:border-primary/30 hover:shadow-sm px-4"
                    >
                      {logo.logo ? (
                        <img
                          src={logo.logo}
                          alt={logo.name}
                          className="h-8 max-w-full object-contain transition-all duration-300"
                        />
                      ) : (
                        <span className={`font-semibold tracking-wide text-text-secondary transition-all duration-300 ${category.color} text-sm md:text-base`}>
                          {logo.name}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 11 — FUTURE VISION */}
      <section className="section-spacing bg-background-secondary border-b border-border">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left (7 cols): Vision outline */}
            <div className="lg:col-span-7">
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="mb-8"
              >
                <span className="badge mb-3">Our roadmap</span>
                <h2 className="text-3xl font-bold text-text-primary mb-4">
                  What comes next
                </h2>
                <p className="text-xs md:text-sm text-text-secondary leading-relaxed max-w-xl">
                  We are expanding our chapters, improving recruitment pipelines, and building educational opportunities for builders across campuses.
                </p>
              </motion.div>

              {/* Milestones list */}
              <div className="space-y-4">
                {futureTargets.map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    <span className="text-xs md:text-sm text-text-secondary font-medium">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right (5 cols): Roadmap visual outline */}
            <motion.div
              className="lg:col-span-5 h-[260px]"
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="w-full h-full rounded-lg border border-border bg-card p-6 flex flex-col justify-between hover:border-primary/20 duration-300">
                <span className="text-[10px] uppercase font-bold tracking-wider text-accent-blue bg-accent-blue/10 px-2 py-0.5 rounded w-fit">2026/2027 Goals</span>
                <div>
                  <h4 className="text-sm font-semibold text-text-primary mb-1">Ecosystem growth</h4>
                  <p className="text-xs text-text-secondary leading-relaxed">Scaling active hacker chapters, introducing technical mentorship credits, and partnering with international builder organizations.</p>
                </div>
                <div className="border-t border-border pt-4 mt-2">
                  <div className="w-full bg-background-secondary rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full w-3/4" />
                  </div>
                  <span className="text-[10px] text-text-tertiary mt-1 block">75% milestone goals defined</span>
                </div>
              </div>
            </motion.div>
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
              Join the builder movement
            </h2>
            <p className="text-sm md:text-base text-text-secondary mb-8 leading-relaxed font-normal">
              Become part of a growing ecosystem helping students build meaningful careers and projects.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="w-full sm:w-auto btn-primary text-sm py-3 px-8 flex items-center justify-center gap-2">
                Join community
                <ArrowRight size={16} />
              </button>
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
