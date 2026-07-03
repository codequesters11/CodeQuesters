'use client'

import { motion } from 'framer-motion'
import { Award, Users, BookOpen, School } from 'lucide-react'

export default function Impact() {
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
          <span className="badge mb-3">Impact metrics</span>
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
            Impact that speaks
          </h2>
          <p className="text-sm md:text-base text-text-secondary max-w-xl mx-auto leading-relaxed">
            A growing ecosystem helping builders unlock opportunities.
          </p>
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
              className={`p-6 rounded-r-lg bg-card border border-border border-l-0 ${metric.accentBorder} hover:-translate-y-1 hover:shadow-md hover:border-primary/45 transition-all duration-300 flex flex-col justify-between`}
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
  )
}
