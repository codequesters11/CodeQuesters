'use client'

import { motion } from 'framer-motion'
import LogoLoop from '@components/shared/LogoLoop'

export default function TrustedBy() {
  const categories = [
    {
      title: 'Technology partners',
      logos: [
        { name: 'Vercel', logo: '/partners/Vercel--.svg', color: 'group-hover:text-black dark:group-hover:text-white' },
        { name: 'Stripe', logo: '/partners/Stripe.svg', color: 'group-hover:text-[#635BFF]' },
        { name: 'Linear', color: 'group-hover:text-[#5E6AD2]' },
        { name: 'Github', logo: '/partners/Github-Icon.svg', color: 'group-hover:text-black dark:group-hover:text-white' },
      ],
    },
    {
      title: 'Hiring partners',
      logos: [
        { name: 'GreatHire', logo: '/partners/gh.png', color: 'group-hover:text-primary' },
        { name: 'Devel', logo: '/partners/devrel.png', color: 'group-hover:text-accent-blue' },
        { name: 'ICS Group', logo: '/partners/ics.png', color: 'group-hover:text-accent-purple' },
        { name: 'Supervity', logo: '/partners/supervity.png', color: 'group-hover:text-accent-purple' },
      ],
    },
    {
      title: 'Community partners',
      logos: [
        { name: 'AI House', logo: '/partners/coworking.png', color: 'group-hover:text-black dark:group-hover:text-white' },
        { name: 'GradSkills', logo: '/partners/grandskills.png', color: 'group-hover:text-primary-dark' },
        { name: 'Medo', logo: '/partners/medo.png', color: 'group-hover:text-[#FF5C00]' },
        { name: 'Osen', logo: '/partners/osen.png', color: 'group-hover:text-[#3770FF]' },
      ],
    },
    {
      title: 'University partners',
      logos: [
        { name: 'IIIT Delhi', logo: '/partners/IIIT-Delhi.svg', color: 'group-hover:text-accent-blue' },
        { name: 'IIT Bombay', logo: '/partners/IIIT-Bombay.svg', color: 'group-hover:text-accent-purple' },
        { name: 'BITS Pilani', logo: '/partners/BITS-Pilani.svg', color: 'group-hover:text-accent-amber' },
        { name: 'VIT Chennai', color: 'group-hover:text-primary' },
      ],
    },
  ]

  return (
    <section className="section-spacing bg-background-secondary border-t border-border overflow-hidden">
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
              <LogoLoop 
                items={category.logos} 
                direction={catIdx % 2 === 0 ? 'left' : 'right'} 
                speed={20 + catIdx * 3} 
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
