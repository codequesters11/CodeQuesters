'use client'

import { motion } from 'framer-motion'
import Layout from '@components/shared/Layout'
import AboutHero from '@components/sections/AboutHero'
import PhilosophySection from '@components/sections/PhilosophySection'
import { 
  Code, 
  Rocket, 
  Users, 
  BookOpen, 
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

  const futureTargets = [
    { text: 'Expanding workshops across 150+ campuses.' },
    { text: 'Growing active builder communities in Tier 2 cities.' },
    { text: 'Launching national hack sprints with ₹10L+ prize pools.' },
    { text: 'Building international developer collaborations.' },
    { text: 'Creating direct-to-hire pipelines for student contributors.' },
  ]

  return (
    <Layout>
      {/* SECTION 1 — CINEMATIC ABOUT HERO */}
      <AboutHero />

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

      {/* SECTION 3 — CINEMATIC MISSION × VISION */}
      <PhilosophySection />

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

      {/* SECTION 5 — CORE VALUES */}
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

      {/* SECTION 6 — TESTIMONIALS */}
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

      {/* SECTION 7 — LEADERSHIP / TEAM */}
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

      {/* SECTION 8 — FUTURE VISION */}
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
    </Layout>
  )
}
