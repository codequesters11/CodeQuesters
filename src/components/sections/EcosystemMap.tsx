'use client'

import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { BookOpen, Compass, Flame, Users, Sparkles, Briefcase, ArrowRight, HelpCircle } from 'lucide-react'
import Link from 'next/link'

interface EcosystemNode {
  title: string
  desc: string
  icon: React.ReactNode
  stats: { label: string; value: string }[]
  ctaText: string
  ctaHref: string
  detailedDesc: string
}

export default function EcosystemMap() {
  const [isOpen, setIsOpen] = useState(false)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [screenSize, setScreenSize] = useState<'desktop' | 'tablet' | 'mobile'>('desktop')
  const [isCompresed, setIsCompressed] = useState(false)
  
  // Center coordinates of the container (relative to container boundaries)
  const [containerCenter, setContainerCenter] = useState({ x: 350, y: 350 })
  const containerRef = useRef<HTMLDivElement>(null)

  // Track screen size for responsive coordinates
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth
      if (width < 768) {
        setScreenSize('mobile')
      } else if (width < 1024) {
        setScreenSize('tablet')
      } else {
        setScreenSize('desktop')
      }

      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect()
        setContainerCenter({
          x: rect.width / 2,
          y: screenSize === 'mobile' ? 140 : rect.height / 2
        })
      }
    }
    
    handleResize()
    window.addEventListener('resize', handleResize)
    // Double trigger to ensure rect sizes are settled
    setTimeout(handleResize, 100)

    return () => window.removeEventListener('resize', handleResize)
  }, [screenSize])

  const nodes: EcosystemNode[] = [
    {
      title: 'Learning',
      desc: 'Workshops, bootcamps and technical sessions.',
      icon: <BookOpen className="w-5 h-5 text-primary" />,
      detailedDesc: 'Deep dive into real-world software engineering with live masterclasses, workshops, and cohort-based bootcamps.',
      stats: [
        { label: 'Bootcamps completed', value: '30+' },
        { label: 'Hours learning', value: '5000+' },
        { label: 'Certs issued', value: '1200+' }
      ],
      ctaText: 'Explore Events',
      ctaHref: '/events'
    },
    {
      title: 'Hackathons',
      desc: 'Compete, build and solve real-world problems.',
      icon: <Flame className="w-5 h-5 text-accent-amber" />,
      detailedDesc: 'Build fast, solve challenging problems, compete on team projects, and win high-stakes sprints.',
      stats: [
        { label: 'Hackathons organized', value: '50+' },
        { label: 'Prizes won', value: '₹5L+' },
        { label: 'Participants', value: '1000+' }
      ],
      ctaText: 'Explore Events',
      ctaHref: '/events'
    },
    {
      title: 'Mentorship',
      desc: 'Receive guidance from experienced engineers.',
      icon: <Sparkles className="w-5 h-5 text-accent-purple" />,
      detailedDesc: 'Receive direction, project feedback, and portfolio guidance directly from experienced engineers.',
      stats: [
        { label: 'Mentorship sessions', value: '1-on-1' },
        { label: 'Senior guides', value: '20+' },
        { label: 'Code reviews', value: '100+' }
      ],
      ctaText: 'Meet Mentors',
      ctaHref: '/about'
    },
    {
      title: 'Networking',
      desc: 'Meet builders, founders and mentors.',
      icon: <Users className="w-5 h-5 text-accent-blue" />,
      detailedDesc: 'Connect with developers, technical leads, startup founders, and mentors to build lifelong relationships.',
      stats: [
        { label: 'Student mixers', value: '500+' },
        { label: 'Startup mixers', value: '10+' },
        { label: 'College chapters', value: '30+' }
      ],
      ctaText: 'Join Community',
      ctaHref: '/community'
    },
    {
      title: 'Collaboration',
      desc: 'Find teammates and open-source contributors.',
      icon: <Compass className="w-5 h-5 text-emerald-500" />,
      detailedDesc: 'Find teammates for hackathons, open-source maintainers, and study circles to create impact.',
      stats: [
        { label: 'Projects built', value: '100+' },
        { label: 'OS repositories', value: '20+' },
        { label: 'Team matches', value: '400+' }
      ],
      ctaText: 'Meet Builders',
      ctaHref: '/builders'
    },
    {
      title: 'Opportunities',
      desc: 'Internships, referrals and startup opportunities.',
      icon: <Briefcase className="w-5 h-5 text-primary" />,
      detailedDesc: 'Access early-stage startup contracts, remote internships, developer referrals, and full-time hiring pipelines.',
      stats: [
        { label: 'Job referrals', value: '80+' },
        { label: 'Hiring partners', value: '30+' },
        { label: 'Total stipends', value: '₹15L+' }
      ],
      ctaText: 'View Partners',
      ctaHref: '/partners'
    }
  ]

  // Relative coordinate mapping based on index and viewport sizing
  const getCoordinates = (index: number) => {
    if (screenSize === 'mobile') {
      // Stack vertically below the center node (which stays at center-top)
      return { x: 0, y: 150 + index * 105 }
    }
    if (screenSize === 'tablet') {
      const coords = [
        { x: -210, y: -150 }, // Learning
        { x: 210, y: -150 },  // Hackathons
        { x: -250, y: 0 },    // Mentorship
        { x: 250, y: 0 },     // Networking
        { x: -210, y: 150 },  // Collaboration
        { x: 210, y: 150 },   // Opportunities
      ]
      return coords[index]
    }
    // Desktop coordinates
    const coords = [
      { x: -300, y: -190 }, // Learning
      { x: 300, y: -190 },  // Hackathons
      { x: -360, y: 0 },    // Mentorship
      { x: 360, y: 0 },     // Networking
      { x: -300, y: 190 },  // Collaboration
      { x: 300, y: 190 },   // Opportunities
    ]
    return coords[index]
  }

  // Handle Hub click compression and pulsing animations
  const handleHubClick = () => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect()
      setContainerCenter({
        x: rect.width / 2,
        y: screenSize === 'mobile' ? 140 : rect.height / 2
      })
    }
    setIsCompressed(true)
    setTimeout(() => setIsCompressed(false), 200)
    setIsOpen(!isOpen)
  }

  // Measure after layout settles on mount
  useEffect(() => {
    const timer = setTimeout(() => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect()
        setContainerCenter({
          x: rect.width / 2,
          y: window.innerWidth < 768 ? 140 : rect.height / 2
        })
      }
    }, 500)
    return () => clearTimeout(timer)
  }, [screenSize])

  return (
    <section className="section-spacing bg-white border-b border-border overflow-hidden select-none relative py-16 md:py-24">
      {/* Background radial overlays */}
      <div className="absolute inset-0 bg-radial from-primary/5 via-transparent to-transparent pointer-events-none z-0" />
      
      <div className="container-max max-w-[1400px] mx-auto px-4 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <span className="badge mb-3">Community Ecosystem</span>
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-3">
            What happens inside the community
          </h2>
          <p className="text-xs md:text-sm text-text-secondary leading-relaxed font-light">
            Click the central hub to explore everything waiting for you inside CodeQuesters.
          </p>
        </div>

        {/* Immersive Sandbox Map Container */}
        <div 
          ref={containerRef}
          className={`relative w-full border border-neutral-100/80 bg-neutral-50/30 rounded-3xl transition-all duration-700 ${
            screenSize === 'mobile' 
              ? isOpen ? 'min-h-[820px]' : 'min-h-[300px]' 
              : 'min-h-[660px]'
          } flex items-center justify-center`}
        >
          {/* SVG Connection Lines Overlay */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
            {isOpen && nodes.map((_, index) => {
              const { x, y } = getCoordinates(index)
              const startX = containerCenter.x
              const startY = containerCenter.y
              const endX = startX + x
              const endY = startY + y
              const lineLength = Math.sqrt(x * x + y * y)
              const isHovered = hoveredIndex === index
              const isAnyHovered = hoveredIndex !== null

              return (
                <g key={index}>
                  {/* Glowing draw-in path */}
                  <motion.path
                    d={`M ${startX} ${startY} L ${endX} ${endY}`}
                    stroke={isHovered ? '#10B981' : '#10B981'}
                    strokeWidth={isHovered ? 1.75 : 1}
                    strokeOpacity={isHovered ? 0.45 : isAnyHovered ? 0.05 : 0.15}
                    initial={{ strokeDasharray: lineLength, strokeDashoffset: lineLength }}
                    animate={{ strokeDashoffset: 0 }}
                    exit={{ strokeDashoffset: lineLength }}
                    transition={{ 
                      type: 'spring', 
                      stiffness: 100, 
                      damping: 20, 
                      delay: index * 0.08 
                    }}
                  />

                  {/* Flowing animated light particle along the path */}
                  {!isAnyHovered && (
                    <motion.circle
                      r="2.5"
                      fill="#10B981"
                      animate={{
                        cx: [startX, endX],
                        cy: [startY, endY],
                        opacity: [0, 1, 1, 0]
                      }}
                      transition={{
                        duration: 3.5,
                        repeat: Infinity,
                        ease: 'linear',
                        delay: index * 0.15 + 0.8
                      }}
                    />
                  )}
                </g>
              )
            })}
          </svg>

          {/* 1. Orbiting particles (before click) */}
          <AnimatePresence>
            {!isOpen && (
              <div className="absolute pointer-events-none z-10 flex items-center justify-center">
                {Array.from({ length: 6 }).map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute"
                    style={{
                      width: 6,
                      height: 6,
                    }}
                    animate={{ 
                      rotate: 360,
                    }}
                    transition={{ 
                      duration: 18 + i * 2, 
                      ease: 'linear', 
                      repeat: Infinity 
                    }}
                  >
                    <div 
                      className="w-1.5 h-1.5 rounded-full bg-emerald-400/80 shadow-[0_0_6px_#34d399]"
                      style={{
                        transform: `translateY(${110 + i * 6}px)`
                      }}
                    />
                  </motion.div>
                ))}
              </div>
            )}
          </AnimatePresence>

          {/* 2. Interactive Ecosystem Center Node */}
          <div 
            className="absolute z-30"
            style={{ 
              left: containerCenter.x, 
              top: containerCenter.y,
              transform: 'translate(-50%, -50%)'
            }}
          >
            {/* Click Expand Pulse Wave */}
            {isCompresed && (
              <motion.div 
                initial={{ scale: 0.8, opacity: 0.5 }}
                animate={{ scale: 2.2, opacity: 0 }}
                transition={{ duration: 0.65, ease: 'easeOut' }}
                className="absolute inset-0 rounded-full bg-emerald-500/20 border border-emerald-500/30 pointer-events-none"
              />
            )}

            {/* Dotted Orbiting Outer Ring */}
            <motion.div
              animate={{ rotate: isOpen ? 180 : 360 }}
              transition={{ duration: 35, ease: 'linear', repeat: Infinity }}
              className={`absolute inset-[-14px] rounded-full border border-dashed border-emerald-500/20 pointer-events-none ${
                isOpen ? 'scale-110 opacity-40' : 'scale-100 opacity-100'
              } transition-all duration-700`}
            />

            {/* Hub Card */}
            <motion.div
              whileHover={{ scale: 1.04 }}
              animate={{ 
                scale: isCompresed ? 0.93 : 1,
                y: [0, -3, 0]
              }}
              transition={{
                y: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
                scale: { type: 'spring', stiffness: 200, damping: 10 }
              }}
              onClick={handleHubClick}
              className="w-[180px] h-[180px] md:w-[200px] md:h-[200px] rounded-full bg-white border border-emerald-500/15 shadow-[0_8px_30px_rgb(0,0,0,0.04),inset_0_2px_4px_rgba(255,255,255,0.8)] flex flex-col items-center justify-center p-6 text-center cursor-pointer pointer-events-auto select-none"
            >
              {/* 3D CodeQuesters Logo Container */}
              <div className="relative mb-2 w-14 h-14 flex items-center justify-center">
                {/* Ambient Glow */}
                <div className="absolute inset-0 bg-emerald-500/10 rounded-full blur-md animate-pulse" />
                
                {/* Rotating Tech Ring */}
                <motion.div 
                  animate={{ rotate: -360 }}
                  transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
                  className="absolute inset-0 border border-emerald-500/20 rounded-full border-dashed p-1"
                />

                {/* Floating 3D Logo */}
                <motion.img 
                  src="/logo-CQ-tech.png" 
                  alt="CodeQuesters 3D Logo" 
                  className="w-10 h-10 object-contain drop-shadow-[0_6px_12px_rgba(16,185,129,0.3)] relative z-10"
                  animate={{ 
                    y: [0, -3, 0],
                    rotateY: [0, 15, -15, 0],
                    rotateX: [0, -10, 10, 0]
                  }}
                  transition={{ 
                    y: { duration: 3.5, repeat: Infinity, ease: 'easeInOut' },
                    rotateY: { duration: 7, repeat: Infinity, ease: 'easeInOut' },
                    rotateX: { duration: 6, repeat: Infinity, ease: 'easeInOut' }
                  }}
                />
              </div>

              <h4 className="text-xs font-semibold text-text-primary tracking-tight">CodeQuesters Hub</h4>
              <p className="text-[9px] text-text-secondary mt-1 max-w-[120px] leading-relaxed">
                {isOpen ? 'Click to collapse' : 'Click to unfold'}
              </p>
            </motion.div>
          </div>

          {/* 3. Outer Ecosystem Nodes */}
          {nodes.map((node, index) => {
            const { x, y } = getCoordinates(index)
            const isHovered = hoveredIndex === index
            const isAnyHovered = hoveredIndex !== null
            const offsetCoords = getCoordinates(index)

            return (
              <motion.div
                key={index}
                initial={{ x: 0, y: 0, scale: 0, opacity: 0, filter: 'blur(10px)' }}
                animate={
                  isOpen 
                    ? { x: offsetCoords.x, y: offsetCoords.y, scale: 1, opacity: 1, filter: 'blur(0px)' } 
                    : { x: 0, y: 0, scale: 0, opacity: 0, filter: 'blur(10px)' }
                }
                transition={{
                  type: 'spring',
                  stiffness: 140,
                  damping: 18,
                  delay: isOpen ? index * 0.08 : (5 - index) * 0.04
                }}
                className="absolute z-20 pointer-events-auto"
                style={{
                  left: `calc(${containerCenter.x}px - 100px)`,
                  top: `calc(${containerCenter.y}px - 45px)`,
                }}
              >
                <motion.div
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  whileHover={{ scale: 1.06, y: -4 }}
                  animate={{
                    opacity: isAnyHovered && !isHovered ? 0.35 : 1
                  }}
                  className={`w-[200px] min-h-[90px] rounded-2xl bg-white border ${
                    isHovered ? 'border-primary shadow-lg shadow-emerald-500/5' : 'border-neutral-100 shadow-sm shadow-black/5'
                  } p-4 flex gap-3 transition-colors duration-300 relative`}
                >
                  <div className="bg-neutral-50/80 border border-neutral-100 p-2 rounded-lg h-fit flex items-center justify-center shrink-0">
                    {node.icon}
                  </div>
                  <div className="text-left flex flex-col justify-center">
                    <h4 className="text-xs font-semibold text-text-primary">{node.title}</h4>
                    <p className="text-[10px] text-text-secondary leading-relaxed mt-0.5 font-light">{node.desc}</p>
                  </div>
                </motion.div>

                {/* Floating Information Panel on Hover (Desktop/Tablet) */}
                <AnimatePresence>
                  {isHovered && screenSize !== 'mobile' && (
                    <motion.div
                      initial={{ opacity: 0, y: 15, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ type: 'spring', damping: 18, stiffness: 120 }}
                      className={`absolute w-[260px] bg-white/95 backdrop-blur-md border border-neutral-100/90 rounded-2xl shadow-xl p-5 text-left z-40`}
                      style={{
                        top: '105%',
                        left: x > 0 ? '-30px' : '-30px',
                      }}
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <div className="bg-primary/5 border border-primary/10 p-1.5 rounded-md">
                          {node.icon}
                        </div>
                        <h4 className="text-sm font-bold text-text-primary">{node.title}</h4>
                      </div>
                      
                      <p className="text-[11px] text-text-secondary leading-relaxed font-normal mb-3">
                        {node.detailedDesc}
                      </p>

                      {/* Stat Metrics Grid */}
                      <div className="grid grid-cols-3 gap-2 border-t border-neutral-100 pt-3 mb-4">
                        {node.stats.map((stat, sIdx) => (
                          <div key={sIdx} className="text-center">
                            <span className="block text-[11px] font-bold text-primary">{stat.value}</span>
                            <span className="block text-[8px] text-text-tertiary font-light mt-0.5 leading-none">{stat.label}</span>
                          </div>
                        ))}
                      </div>

                      {/* CTA Button */}
                      <Link 
                        href={node.ctaHref}
                        className="w-full btn-primary py-2 rounded-lg text-[10px] font-semibold flex items-center justify-center gap-1.5 transition-transform hover:scale-102 cursor-pointer"
                      >
                        {node.ctaText}
                        <ArrowRight size={12} />
                      </Link>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
