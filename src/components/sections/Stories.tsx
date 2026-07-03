'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight, GraduationCap, Code, Rocket, ArrowRight } from 'lucide-react'

export default function Stories() {
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

  const smallStories = [
    {
      name: 'Omkar Rane',
      role: 'Co-founder, TechStartup Inc.',
      transformation: 'Attendee → Series A Co-founder',
      path: 'Joined a weekend React workshop, met his co-founder on our WhatsApp channel, built an MVP at CodeQuest, and recently raised a Series A seed round.',
      impact: 'Raised Series A seed funding',
      icon: <Rocket className="w-4 h-4 text-accent-blue" />,
    },
    {
      name: 'Priyanka Singh',
      role: 'Community Lead & Mentor',
      transformation: 'Novice Student → Technical Mentor',
      path: 'Started with zero open-source experience. Contributed to our open repositories, became a workshop speaker, and now runs technical bootcamps mentoring 100+ new coders.',
      impact: 'Mentoring 100+ campus builders',
      icon: <GraduationCap className="w-4 h-4 text-accent-purple" />,
    },
    {
      name: 'Lakshya Kumar',
      role: 'Open Source Maintainer',
      transformation: 'Campus Student → Core Contributor',
      path: 'Learnt Git in our open-source bootcamp. Began contributing to major repositories, got recognized as a top contributor, and secured a remote full-time internship.',
      impact: 'Merged 24+ PRs in core libraries',
      icon: <Code className="w-4 h-4 text-primary" />,
    },
  ]

  return (
    <section className="section-spacing bg-background-secondary border-t border-border">
      <div className="container-max">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="badge mb-3">Transformation journeys</span>
          <h2 className="text-3xl font-bold text-text-primary mb-2">
            Builder stories
          </h2>
          <p className="text-sm text-text-secondary">
            Real people. Real journeys.
          </p>
        </motion.div>

        {/* Large Featured Story Card */}
        <motion.div
          className="card-base p-6 md:p-8 border border-border bg-card mb-8 hover:border-primary/20 duration-300 shadow-sm"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Col (4 cols): Profile Details */}
            <div className="lg:col-span-4 flex items-center gap-4 border-b lg:border-b-0 lg:border-r border-border pb-6 lg:pb-0 lg:pr-8">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent-blue flex items-center justify-center text-white text-xl font-bold font-sans">
                LK
              </div>
              <div>
                <span className="text-[10px] uppercase font-bold tracking-wider text-primary bg-primary-light px-2 py-0.5 rounded">Featured journey</span>
                <h3 className="text-lg font-bold text-text-primary mt-1">Lakshya Kumar</h3>
                <p className="text-xs text-text-secondary">Hackathon Winner → Startup Founder</p>
              </div>
            </div>

            {/* Right Col (8 cols): Transformation & Path */}
            <div className="lg:col-span-8 flex flex-col justify-between h-full">
              <div>
                <span className="text-xs font-semibold text-primary uppercase tracking-wide">The Transformation</span>
                <p className="text-sm md:text-base text-text-primary italic mt-2 mb-4 leading-relaxed">
                  "I went from zero coding project experience to co-founding an API security startup in under 6 months. CodeQuesters helped me find co-founders, provided code mentorship, and gave us the platform to pitch our hackathon MVP to investors."
                </p>
              </div>
              <div className="flex flex-wrap gap-4 items-center justify-between border-t border-border pt-4 mt-2">
                <div className="text-xs text-text-secondary leading-normal">
                  <span className="font-semibold text-text-primary block">Major Achievement</span>
                  Founded Security MVP & raised pre-seed funding.
                </div>
                <div className="flex items-center gap-1.5 text-primary text-xs font-medium cursor-pointer hover:underline">
                  Read full case study
                  <ArrowUpRight size={14} />
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* 3 Smaller Transition Story Cards Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {smallStories.map((story, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="card-base bg-card p-6 border border-border hover:border-primary/20 hover:shadow-sm transition-all duration-300 flex flex-col justify-between"
              whileHover={{ y: -4 }}
            >
              <div>
                <div className="flex justify-between items-start mb-4">
                  <span className="text-[10px] font-semibold text-primary-dark bg-primary-light px-2 py-0.5 rounded">
                    {story.transformation}
                  </span>
                  <div className="bg-background-secondary p-1.5 rounded border border-border">
                    {story.icon}
                  </div>
                </div>
                <h4 className="text-sm font-semibold text-text-primary mb-1">{story.name}</h4>
                <p className="text-xs text-text-secondary mb-4 leading-normal">{story.role}</p>
                <p className="text-xs text-text-secondary leading-relaxed mb-6 font-normal">
                  {story.path}
                </p>
              </div>
              <div className="border-t border-border pt-4 mt-auto">
                <span className="text-[9px] uppercase tracking-wider text-text-tertiary block font-semibold">Impact</span>
                <span className="text-xs font-semibold text-text-primary block mt-0.5">{story.impact}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
