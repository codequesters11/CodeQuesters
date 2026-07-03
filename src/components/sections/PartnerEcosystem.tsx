'use client'

import { motion } from 'framer-motion'
import { Landmark, Briefcase, Code2, Users2 } from 'lucide-react'

export default function PartnerEcosystem() {
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

  const categories = [
    {
      title: 'Community partners',
      description: 'Collaborating with student clubs and developer groups across India to run hackathons and spread coding resources.',
      details: 'Bootcamps, workshops, shared resources.',
      icon: <Users2 className="w-5 h-5 text-primary" />,
    },
    {
      title: 'Technology partners',
      description: 'Providing student grants, API credits, developer tools, and deployment credits to power student MVPs.',
      details: 'Tooling credits, workspace licenses, sandbox access.',
      icon: <Code2 className="w-5 h-5 text-accent-blue" />,
    },
    {
      title: 'Hiring partners',
      description: 'Direct recruitment access to our pre-screened talent pool of builders, hackathon winners, and core contributors.',
      details: 'Talent sourcing pipeline, resume books, mock assessments.',
      icon: <Briefcase className="w-5 h-5 text-accent-purple" />,
    },
    {
      title: 'University partners',
      description: 'Working with engineering campuses to run technical workshops, student bootcamps, and developer clubs.',
      details: 'Campus bootcamps, student chapter setup, hack sprints.',
      icon: <Landmark className="w-5 h-5 text-accent-amber" />,
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
          <span className="badge mb-3">Global network</span>
          <h2 className="text-3xl font-bold text-text-primary mb-4">
            Building together
          </h2>
          <p className="text-sm md:text-base text-text-secondary max-w-xl mx-auto leading-relaxed">
            Collaborating with organizations to unlock infrastructure credits, educational resources, and direct career paths for students.
          </p>
        </motion.div>

        {/* Categories Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {categories.map((category, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="card-base bg-card p-6 border border-border hover:border-primary/20 hover:shadow-sm duration-300 flex gap-5 items-start"
              whileHover={{ y: -4 }}
            >
              <div className="bg-background-secondary p-3 rounded-lg border border-border w-fit">
                {category.icon}
              </div>
              <div className="flex-1">
                <h3 className="text-base font-semibold text-text-primary mb-2 capitalize">
                  {category.title}
                </h3>
                <p className="text-xs text-text-secondary leading-relaxed mb-4 font-normal">
                  {category.description}
                </p>
                <div className="bg-background-secondary border border-border/60 rounded px-3 py-1.5 w-fit">
                  <span className="text-[10px] text-text-tertiary block font-semibold uppercase tracking-wider">Includes</span>
                  <span className="text-xs font-semibold text-text-primary mt-0.5 block">{category.details}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
