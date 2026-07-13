'use client'

import { motion } from 'framer-motion'
import { Camera, Users, Trophy, Lightbulb, Coffee, Flame } from 'lucide-react'

export default function Highlights() {
  const moments = [
    {
      title: 'Hacking sprint action',
      description: '36 hours of focused execution, collaboration, and building.',
      icon: <Flame className="w-5 h-5 text-primary" />,
      class: 'col-span-2 row-span-2 bg-black border-l-4 border-l-primary relative overflow-hidden',
      video: '/events/builders_discussing.MOV',
    },
    {
      title: 'Mentor reviews',
      description: 'Getting feedback directly from senior experts.',
      icon: <Lightbulb className="w-4 h-4 text-accent-purple" />,
      class: 'col-span-2 sm:col-span-1 row-span-1 bg-black border-l-4 border-l-accent-purple relative overflow-hidden',
      video: '/events/mentors_discussing_1.MOV',
    },
    {
      title: 'Winner celebrations',
      description: 'The excitement of building something that wins.',
      icon: <Trophy className="w-4 h-4 text-accent-amber" />,
      class: 'col-span-2 sm:col-span-1 row-span-2 bg-black border-l-4 border-l-accent-amber relative overflow-hidden',
      image: '/events/1st_winner.JPG',
    },
    {
      title: 'Keynote stage',
      description: 'Successful founders sharing lessons on hackathons and the market.',
      icon: <Users className="w-4 h-4 text-accent-blue" />,
      class: 'col-span-2 sm:col-span-1 row-span-2 bg-black border-l-4 border-l-accent-blue relative overflow-hidden',
      video: '/events/IMG_8143.MOV',
    },
    {
      title: 'Late night brainstorming',
      description: 'Connecting over pizza, caffeine, and code architecture details.',
      icon: <Coffee className="w-4 h-4 text-text-secondary" />,
      class: 'col-span-2 row-span-1 bg-black border-l-4 border-l-text-secondary relative overflow-hidden',
      image: '/events/IMG_8404.jpg',
    },
    {
      title: 'Closing group photos',
      description: 'Memories of a weekend full of engineering and learning.',
      icon: <Camera className="w-4 h-4 text-primary" />,
      class: 'col-span-2 sm:col-span-1 row-span-1 bg-black border-l-4 border-l-primary relative overflow-hidden',
      image: '/events/IMG_5835.jpg',
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
              {moment.video && (
                <>
                  <video
                    src={moment.video}
                    muted
                    autoPlay
                    loop
                    playsInline
                    preload="auto"
                    className="absolute inset-0 w-full h-full object-cover opacity-60 z-0 transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20 z-5 pointer-events-none" />
                </>
              )}

              {moment.image && (
                <>
                  <div 
                    className="absolute inset-0 w-full h-full bg-cover bg-center opacity-70 z-0 transition-transform duration-700 group-hover:scale-105"
                    style={{ backgroundImage: `url('${moment.image}')` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20 z-5 pointer-events-none" />
                </>
              )}

              <div className="flex justify-between items-start relative z-10">
                <span className={`text-xs uppercase font-bold tracking-wider transition-colors ${
                  moment.video || moment.image 
                    ? 'text-white/90 group-hover:text-white' 
                    : 'text-text-primary/75 group-hover:text-primary'
                }`}>
                  {moment.title}
                </span>
                <div className={`p-1.5 rounded-md border ${
                  moment.video || moment.image 
                    ? 'bg-black/40 border-white/10 text-white' 
                    : 'bg-white border-border text-text-secondary'
                }`}>
                  {moment.icon}
                </div>
              </div>
              <p className={`text-[11px] md:text-xs leading-relaxed font-normal relative z-10 ${
                moment.video || moment.image 
                  ? 'text-white/80' 
                  : 'text-text-secondary'
              }`}>
                {moment.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
