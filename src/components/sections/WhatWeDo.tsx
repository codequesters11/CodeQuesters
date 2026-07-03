'use client'

import { motion } from 'framer-motion'
import { Trophy, BookOpen, GitBranch, Cpu, Users, Briefcase } from 'lucide-react'

export default function WhatWeDo() {
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

  const pillars = [
    {
      icon: <Trophy className="text-primary w-6 h-6" />,
      title: 'Hackathons',
      description: 'Compete and build real solutions in high-energy weekend hack sprints.',
    },
    {
      icon: <BookOpen className="text-accent-blue w-6 h-6" />,
      title: 'Workshops',
      description: 'Learn directly from industry experts in hands-on developer masterclasses.',
    },
    {
      icon: <GitBranch className="text-accent-purple w-6 h-6" />,
      title: 'Open source',
      description: 'Contribute, collaborate, and build code used by thousands around the world.',
    },
    {
      icon: <Cpu className="text-accent-amber w-6 h-6" />,
      title: 'AI & technology',
      description: 'Explore emerging technologies, build agents, LLMs, and scale web backends.',
    },
    {
      icon: <Users className="text-primary w-6 h-6" />,
      title: 'Community',
      description: 'Connect, team up, and grow with ambitious student builders across campuses.',
    },
    {
      icon: <Briefcase className="text-accent-blue w-6 h-6" />,
      title: 'Opportunities',
      description: 'Access tailored internships, freelance gigs, and direct startup job matching.',
    },
  ]

  return (
    <section className="section-spacing bg-white border-t border-border">
      <div className="container-max">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="badge mb-3">Our ecosystem</span>
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
            Everything you need to grow as a builder
          </h2>
          <p className="text-sm md:text-base text-text-secondary max-w-xl mx-auto leading-relaxed">
            From technical learning and peer collaboration to launching your code, we provide the platform and mentorship you need.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {pillars.map((pillar, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="card-base group hover:-translate-y-1 hover:shadow-sm"
              transition={{ duration: 0.2 }}
            >
              <div className="bg-background-secondary p-3 rounded-lg border border-border w-fit mb-5 group-hover:border-primary/20 transition-colors">
                {pillar.icon}
              </div>
              <h3 className="text-base font-semibold text-text-primary mb-2 group-hover:text-primary transition-colors duration-200">
                {pillar.title}
              </h3>
              <p className="text-xs text-text-secondary leading-relaxed">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
