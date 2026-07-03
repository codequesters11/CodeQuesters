'use client'

import { motion } from 'framer-motion'
import { Camera, Users, Trophy, Lightbulb, Coffee, Flame } from 'lucide-react'

export default function Highlights() {
  const moments = [
    {
      title: 'Hacking sprint action',
      description: '36 hours of focused execution, collaboration, and building.',
      icon: <Flame className="w-5 h-5 text-primary" />,
      class: 'col-span-2 row-span-2 bg-gradient-to-br from-primary/10 to-accent-blue/5 border-l-4 border-l-primary',
    },
    {
      title: 'Mentor reviews',
      description: 'Getting feedback directly from senior experts.',
      icon: <Lightbulb className="w-4 h-4 text-accent-purple" />,
      class: 'col-span-2 sm:col-span-1 row-span-1 bg-gradient-to-br from-accent-purple/10 to-accent-blue/5 border-l-4 border-l-accent-purple',
    },
    {
      title: 'Winner celebrations',
      description: 'The excitement of building something that wins.',
      icon: <Trophy className="w-4 h-4 text-accent-amber" />,
      class: 'col-span-2 sm:col-span-1 row-span-2 bg-gradient-to-br from-accent-amber/10 to-accent-amber/5 border-l-4 border-l-accent-amber',
    },
    {
      title: 'Keynote stage',
      description: 'Successful founders sharing their lessons.',
      icon: <Users className="w-4 h-4 text-accent-blue" />,
      class: 'col-span-2 sm:col-span-1 row-span-2 bg-gradient-to-br from-accent-blue/10 to-primary/5 border-l-4 border-l-accent-blue',
    },
    {
      title: 'Late night brainstorming',
      description: 'Connecting over pizza, caffeine, and code architecture details.',
      icon: <Coffee className="w-4 h-4 text-text-secondary" />,
      class: 'col-span-2 row-span-1 bg-gradient-to-br from-background-tertiary to-background-secondary border-l-4 border-l-text-secondary',
    },
    {
      title: 'Closing group photos',
      description: 'Memories of a weekend full of engineering and learning.',
      icon: <Camera className="w-4 h-4 text-primary" />,
      class: 'col-span-2 sm:col-span-1 row-span-1 bg-gradient-to-br from-primary/10 to-accent-purple/15 border-l-4 border-l-primary',
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
          <span className="badge mb-3">Community moments</span>
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
            Moments from the community
          </h2>
          <p className="text-sm md:text-base text-text-secondary max-w-xl mx-auto leading-relaxed">
            Something exciting is happening here. Take a look at the energy from our recent campus builders events.
          </p>
        </motion.div>

        {/* Masonry Layout */}
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
              <p className="text-[11px] md:text-xs text-text-secondary leading-relaxed font-normal">
                {moment.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
