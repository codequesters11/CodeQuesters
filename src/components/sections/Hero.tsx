'use client'

import { useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const fadingOutRef = useRef(false)
  const fadeAnimRef = useRef<number | null>(null)
  const currentOpacityRef = useRef(0)

  const animateOpacity = (targetOpacity: number, duration: number, callback?: () => void) => {
    if (fadeAnimRef.current) {
      cancelAnimationFrame(fadeAnimRef.current)
    }

    const startTime = performance.now()
    const startOpacity = currentOpacityRef.current

    const animate = (now: number) => {
      const elapsed = now - startTime
      const progress = Math.min(elapsed / duration, 1)
      const newOpacity = startOpacity + (targetOpacity - startOpacity) * progress

      currentOpacityRef.current = newOpacity
      if (videoRef.current) {
        videoRef.current.style.opacity = String(newOpacity)
      }

      if (progress < 1) {
        fadeAnimRef.current = requestAnimationFrame(animate)
      } else {
        fadeAnimRef.current = null
        if (callback) callback()
      }
    }

    fadeAnimRef.current = requestAnimationFrame(animate)
  }

  const handleTimeUpdate = () => {
    const video = videoRef.current
    if (!video || isNaN(video.duration)) return

    const timeRemaining = video.duration - video.currentTime
    if (timeRemaining <= 0.55 && !fadingOutRef.current) {
      fadingOutRef.current = true
      animateOpacity(0, 500)
    }
  }

  const handleEnded = () => {
    const video = videoRef.current
    if (!video) return

    video.style.opacity = '0'
    currentOpacityRef.current = 0

    setTimeout(() => {
      video.currentTime = 0
      video.play().then(() => {
        fadingOutRef.current = false
        animateOpacity(1, 500)
      }).catch(() => {})
    }, 100)
  }

  useEffect(() => {
    const video = videoRef.current
    if (video) {
      video.style.opacity = '0'
      video.play().then(() => {
        animateOpacity(1, 500)
      }).catch(() => {})
    }
    return () => {
      if (fadeAnimRef.current) {
        cancelAnimationFrame(fadeAnimRef.current)
      }
    }
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.3 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: 'easeOut' as const },
    },
  }

  return (
    <section className="min-h-screen bg-black overflow-hidden flex flex-col relative">
      {/* Background Video */}
      <video
        ref={videoRef}
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260328_115001_bcdaa3b4-03de-47e7-ad63-ae3e392c32d4.mp4"
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover translate-y-[17%] pointer-events-none z-0"
        onTimeUpdate={handleTimeUpdate}
        onEnded={handleEnded}
      />

      {/* Cinematic gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/80 pointer-events-none z-[1]" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/30 pointer-events-none z-[1]" />

      {/* Hero content */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-6 py-24 text-center">
        <motion.div
          className="max-w-3xl mx-auto flex flex-col items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Badge */}
          <motion.div variants={itemVariants}>
            <span className="liquid-glass inline-flex items-center gap-2 rounded-full px-5 py-2 text-white/90 text-xs font-medium tracking-wide mb-8">
              🚀 Building India&apos;s next generation of builders
            </span>
          </motion.div>

          {/* Main heading */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-6xl lg:text-7xl text-white mb-6 tracking-tight leading-[1.1]"
            style={{ fontFamily: "var(--font-instrument-serif), serif" }}
          >
            Building the next generation of{' '}
            <span className="text-primary italic">builders</span>.
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="text-white/60 text-base md:text-lg leading-relaxed max-w-xl mb-10 font-normal"
          >
            CodeQuesters helps students learn, build, compete and grow through hackathons, workshops, open-source contributions, mentorship and real-world opportunities.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mb-16"
          >
            <a href="https://chat.whatsapp.com/Drc3SOwUSJiJnV3ZZgQz7I?mode=ac_t" target="_blank" rel="noopener noreferrer" className="liquid-glass rounded-full px-8 py-3.5 text-white font-medium text-sm hover:bg-white/10 transition-all flex items-center justify-center gap-2 cursor-pointer group">
              Join Community
              <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
            </a>
            <a href="/events" className="liquid-glass rounded-full px-8 py-3.5 text-white/80 font-medium text-sm hover:bg-white/5 hover:text-white transition-all flex items-center justify-center cursor-pointer">
              Explore Events
            </a>
          </motion.div>

          {/* Stats row */}
          <motion.div
            variants={itemVariants}
            className="liquid-glass rounded-2xl px-8 py-5 grid grid-cols-2 sm:grid-cols-4 gap-8 w-full max-w-2xl"
          >
            {[
              { number: '2000+', label: 'Builders' },
              { number: '50+', label: 'Events' },
              { number: '74+', label: 'Colleges' },
              { number: '20+', label: 'Partners' },
            ].map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-white">{stat.number}</div>
                <p className="text-xs text-white/50 mt-1 font-medium">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom scroll indicator */}
      <div className="relative z-10 flex justify-center pb-8">
        <motion.div
          className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center p-1.5"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <motion.div
            className="w-1.5 h-1.5 bg-white/60 rounded-full"
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          />
        </motion.div>
      </div>
    </section>
  )
}
