'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export default function FeaturedVideo() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="bg-black pt-6 md:pt-10 pb-20 md:pb-32 px-6 overflow-hidden">
      {/* Subtle radial gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(255,255,255,0.03)_0%,_transparent_70%)] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative" ref={ref}>
        <motion.div
          className="rounded-3xl overflow-hidden aspect-video relative"
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: 'easeOut' }}
        >
          {/* Video */}
          <video
            src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260402_054547_9875cfc5-155a-4229-8ec8-b7ba7125cbf8.mp4"
            muted
            autoPlay
            loop
            playsInline
            preload="auto"
            className="w-full h-full object-cover"
          />

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

          {/* Bottom overlay content */}
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 flex flex-col md:flex-row items-end md:items-end justify-between gap-6">
            {/* Liquid glass info card */}
            <div className="liquid-glass rounded-2xl p-6 md:p-8 max-w-md">
              <span className="text-white/50 text-xs tracking-widest uppercase mb-3 block">
                Our approach
              </span>
              <p className="text-white text-sm md:text-base leading-relaxed">
                We believe in the power of hands-on building. Every hackathon starts with a problem, and every solution opens a new door to real-world engineering opportunities.
              </p>
            </div>

            {/* Explore button */}
            <motion.a
              href="/events"
              className="liquid-glass rounded-full px-8 py-3 text-white text-sm font-medium hover:bg-white/5 transition-colors shrink-0"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Explore more
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
