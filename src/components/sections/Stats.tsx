'use client'

import { motion } from 'framer-motion'
import { communityStats } from '@data/stats'

export default function Stats() {
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

  // Border and text styling arrays for left-border accent layout
  const borderStyles = [
    'border-l-primary border-l-4',
    'border-l-accent-blue border-l-4',
    'border-l-accent-amber border-l-4',
    'border-l-accent-purple border-l-4',
  ]

  const textStyles = [
    'text-primary',
    'text-accent-blue',
    'text-accent-amber',
    'text-accent-purple',
  ]

  return (
    <section className="section-spacing bg-background border-t border-border">
      <div className="container-max">
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {communityStats.map((stat, index) => {
            const borderClass = borderStyles[index % borderStyles.length]
            const textClass = textStyles[index % textStyles.length]

            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`p-6 rounded-r-lg bg-card border border-border border-l-0 ${borderClass} hover:shadow-md transition-shadow duration-300`}
              >
                <div className={`text-3xl font-bold ${textClass} mb-1`}>
                  {stat.number}
                </div>
                <h4 className="text-sm font-semibold text-text-primary mb-1">
                  {stat.label}
                </h4>
                <p className="text-xs text-text-secondary leading-normal">
                  {stat.description}
                </p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
