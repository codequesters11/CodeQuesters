'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { ArrowUpRight } from 'lucide-react'

export default function ServicesVideo() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const services = [
    {
      tag: 'Compete',
      title: 'Hackathons & sprints',
      description:
        'Weekend hack sprints where builders team up, architect solutions, write production code, and pitch MVPs to industry mentors and hiring partners.',
      video:
        'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260314_131748_f2ca2a28-fed7-44c8-b9a9-bd9acdd5ec31.mp4',
    },
    {
      tag: 'Learn',
      title: 'Workshops & bootcamps',
      description:
        'Hands-on masterclasses covering Git workflows, React architecture, AI pipelines, and backend systems — taught by startup engineers and open source maintainers.',
      video:
        'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260324_151826_c7218672-6e92-402c-9e45-f1e0f454bdc4.mp4',
    },
  ]

  return (
    <section className="bg-black py-28 md:py-40 px-6 overflow-hidden relative">
      {/* Subtle radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.02)_0%,_transparent_60%)] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative" ref={ref}>
        {/* Header row */}
        <motion.div
          className="flex items-end justify-between mb-12 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <h2
            className="text-3xl md:text-5xl text-white tracking-tight lowercase first-letter:uppercase"
            style={{ fontFamily: 'var(--font-instrument-serif), serif' }}
          >
            What we do
          </h2>
          <span className="text-white/40 text-sm hidden md:block">
            Our programs
          </span>
        </motion.div>

        {/* Two-card grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              className="liquid-glass rounded-3xl overflow-hidden group cursor-pointer"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.8,
                delay: idx * 0.15,
                ease: 'easeOut',
              }}
            >
              {/* Video area */}
              <div className="aspect-video relative overflow-hidden">
                <video
                  src={service.video}
                  muted
                  autoPlay
                  loop
                  playsInline
                  preload="auto"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
              </div>

              {/* Card body */}
              <div className="p-6 md:p-8">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-white/40 text-xs tracking-widest uppercase font-medium">
                    {service.tag}
                  </span>
                  <div className="liquid-glass rounded-full p-2 text-white/60 group-hover:text-white transition-colors">
                    <ArrowUpRight size={16} />
                  </div>
                </div>
                <h3
                  className="text-white text-xl md:text-2xl mb-3 tracking-tight lowercase first-letter:uppercase"
                  style={{
                    fontFamily: 'var(--font-instrument-serif), serif',
                  }}
                >
                  {service.title}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
