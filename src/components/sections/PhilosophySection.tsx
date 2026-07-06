'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export default function PhilosophySection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="bg-black py-28 md:py-40 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto" ref={ref}>
        {/* Heading */}
        <motion.h2
          className="text-5xl md:text-7xl lg:text-8xl text-white tracking-tight mb-16 md:mb-24 lowercase first-letter:uppercase"
          style={{ fontFamily: 'var(--font-instrument-serif), serif' }}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          Mission{' '}
          <em className="italic text-white/40">×</em>{' '}
          vision
        </motion.h2>

        {/* Two-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {/* Left: Video */}
          <motion.div
            className="rounded-3xl overflow-hidden aspect-[4/3]"
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          >
            <video
              src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260307_083826_e938b29f-a43a-41ec-a153-3d4730578ab8.mp4"
              muted
              autoPlay
              loop
              playsInline
              preload="auto"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Right: Text blocks */}
          <motion.div
            className="flex flex-col justify-center"
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
          >
            {/* Block 1 */}
            <div className="mb-10">
              <span className="text-white/40 text-xs tracking-widest uppercase mb-4 block">
                Our mission
              </span>
              <p className="text-white/70 text-base md:text-lg leading-relaxed">
                Every meaningful breakthrough begins at the intersection of disciplined learning and hands-on building. CodeQuesters operates at that crossroads, turning bold student ideas into tangible products that solve real problems and launch real careers.
              </p>
            </div>

            {/* Divider */}
            <div className="w-full h-px bg-white/10 mb-10" />

            {/* Block 2 */}
            <div>
              <span className="text-white/40 text-xs tracking-widest uppercase mb-4 block">
                Our vision
              </span>
              <p className="text-white/70 text-base md:text-lg leading-relaxed">
                We believe that the best builders emerge when curiosity meets conviction. Our ecosystem is designed to uncover hidden talent and translate it into impactful open-source contributions, successful hack sprint MVPs, and thriving engineering careers.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
