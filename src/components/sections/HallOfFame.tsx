'use client'

import { motion } from 'framer-motion'
import { Trophy, Code, Briefcase, Award, ArrowRight } from 'lucide-react'

export default function HallOfFame() {
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

  const leaders = [
    {
      title: 'Hackathon winners',
      description: 'Celebrating builders who build MVPs under tight timelines and secure top positions in national hack sprints.',
      icon: <Trophy className="w-5 h-5 text-accent-amber" />,
      tag: 'Podium Finishes'
    },
    {
      title: 'Open source contributors',
      description: 'Highlighting developers who merged core code, maintained public repositories, and supported peer libraries.',
      icon: <Code className="w-5 h-5 text-primary" />,
      tag: '50+ Core PRs Merged'
    },
    {
      title: 'Internship achievers',
      description: 'Recognizing builders who transitioned program experiences into full-time engineering and product roles.',
      icon: <Briefcase className="w-5 h-5 text-accent-blue" />,
      tag: '30+ Industry Matches'
    },
    {
      title: 'Community leaders',
      description: 'Honoring student leads, mentors, and speakers who run campus bootcamps and guide peer coders.',
      icon: <Award className="w-5 h-5 text-accent-purple" />,
      tag: '12+ Active Chapters'
    }
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
          <span className="badge mb-3">Honors & recognition</span>
          <h2 className="text-3xl font-bold text-text-primary mb-4">
            Recognizing builders who lead
          </h2>
          <p className="text-sm md:text-base text-text-secondary max-w-xl mx-auto leading-relaxed">
            Honoring members of our ecosystem who continuously push the boundaries of software engineering and peer leadership.
          </p>
        </motion.div>

        {/* 4 Cards Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {leaders.map((leader, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="card-base bg-card border border-border p-6 hover:border-primary/20 hover:shadow-sm duration-300 flex flex-col justify-between"
              whileHover={{ y: -4 }}
            >
              <div>
                <div className="flex justify-between items-start mb-4">
                  <span className="text-[10px] font-semibold text-text-secondary bg-background-secondary border border-border px-2 py-0.5 rounded">
                    {leader.tag}
                  </span>
                  <div className="bg-background-secondary p-1.5 rounded border border-border">
                    {leader.icon}
                  </div>
                </div>
                <h4 className="text-sm font-semibold text-text-primary mb-2 capitalize">{leader.title}</h4>
                <p className="text-xs text-text-secondary leading-relaxed font-normal">{leader.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Center CTA Button */}
        <div className="text-center">
          <button className="btn-secondary py-3 px-8 text-sm group">
            View Hall of Fame
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </section>
  )
}
