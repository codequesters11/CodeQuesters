'use client'

import { motion } from 'framer-motion'

export default function TrustedBy() {
  const categories = [
    {
      title: 'Technology partners',
      logos: [
        { name: 'Vercel', color: 'group-hover:text-black dark:group-hover:text-white' },
        { name: 'Stripe', color: 'group-hover:text-[#635BFF]' },
        { name: 'Linear', color: 'group-hover:text-[#5E6AD2]' },
        { name: 'Github', color: 'group-hover:text-black dark:group-hover:text-white' },
      ],
    },
    {
      title: 'Hiring partners',
      logos: [
        { name: 'GreatHire', color: 'group-hover:text-primary' },
        { name: 'Devel', color: 'group-hover:text-accent-blue' },
        { name: 'ICS Group', color: 'group-hover:text-accent-purple' },
        { name: 'TechStartup', color: 'group-hover:text-accent-amber' },
      ],
    },
    {
      title: 'Community partners',
      logos: [
        { name: 'AI House', color: 'group-hover:text-black dark:group-hover:text-white' },
        { name: 'GradSkills', color: 'group-hover:text-primary-dark' },
        { name: 'BuildSpace', color: 'group-hover:text-[#FF5C00]' },
        { name: 'DevFolio', color: 'group-hover:text-[#3770FF]' },
      ],
    },
    {
      title: 'University partners',
      logos: [
        { name: 'IIIT Delhi', color: 'group-hover:text-accent-blue' },
        { name: 'IIT Bombay', color: 'group-hover:text-accent-purple' },
        { name: 'BITS Pilani', color: 'group-hover:text-accent-amber' },
        { name: 'VIT Chennai', color: 'group-hover:text-primary' },
      ],
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
          <span className="badge mb-3">Partnerships</span>
          <h2 className="text-3xl font-bold text-text-primary">
            Trusted by builders, communities & organizations
          </h2>
        </motion.div>

        {/* Stacked Categories */}
        <div className="space-y-12">
          {categories.map((category, catIdx) => (
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
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-6">
                {category.logos.map((logo, logoIdx) => (
                  <div
                    key={logoIdx}
                    className="h-16 bg-card rounded-md border border-border flex items-center justify-center cursor-pointer group transition-all duration-300 hover:border-primary/30 hover:shadow-sm"
                  >
                    <span className={`font-semibold tracking-wide text-text-secondary/60 grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300 ${logo.color} text-sm md:text-base`}>
                      {logo.name}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
