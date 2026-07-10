'use client'

import React, { useState, useRef } from 'react'
import { motion, useMotionValue, useTransform, useSpring, AnimatePresence } from 'framer-motion'
import { Plus, X, Award, Briefcase, Heart } from 'lucide-react'

interface Founder {
  name: string
  role: string
  bio: string
  image: string
  skills: string[]
  stats: { label: string; value: string }[]
  linkedin: string
  github?: string
  color: string
  imagePosition?: string
}

// 3D Tilt Card Component
function TiltCard({ founder, onClick }: { founder: Founder; onClick: () => void }) {
  const cardRef = useRef<HTMLDivElement>(null)
  
  // Motion values for tracking cursor position relative to card center
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  // Spring animations for smooth tilt transitions
  const springConfig = { damping: 25, stiffness: 200 }
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [10, -10]), springConfig)
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-10, 10]), springConfig)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const width = rect.width
    const height = rect.height
    const mouseX = e.clientX - rect.left - width / 2
    const mouseY = e.clientY - rect.top - height / 2
    
    // Normalize values between -0.5 and 0.5
    x.set(mouseX / width)
    y.set(mouseY / height)

    // Set custom variables for radial spotlight glows
    cardRef.current.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`)
    cardRef.current.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
      whileHover={{ y: -6 }}
      className="group relative h-[380px] w-full rounded-3xl bg-white border border-neutral-100/90 shadow-sm shadow-black/5 hover:border-primary/25 hover:shadow-lg transition-all duration-300 overflow-hidden cursor-pointer select-none"
    >
      {/* 3D Depth Card spotlight glow */}
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-0"
        style={{
          background: 'radial-gradient(350px circle at var(--mouse-x, 0px) var(--mouse-y, 0px), rgba(16,185,129,0.06), transparent 80%)'
        }}
      />

      {/* Card Body Container */}
      <div className="relative z-10 p-6 flex flex-col justify-between h-full w-full" style={{ transform: 'translateZ(20px)' }}>
        
        {/* Founder Portrait Frame */}
        <div className="relative w-full h-[200px] rounded-2xl overflow-hidden bg-neutral-50 border border-neutral-100/80 mb-4 select-none">
          <img 
            src={founder.image} 
            alt={founder.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
            style={{ objectPosition: founder.imagePosition || 'center' }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
          
          {/* Quick Stats Overlay Pill */}
          <div className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full border border-neutral-100 text-[9px] font-semibold text-text-primary shadow-sm flex items-center gap-1.5">
            <Plus size={10} className="text-primary animate-pulse" />
            <span>View Details</span>
          </div>
        </div>

        {/* Info Area */}
        <div className="text-left" style={{ transform: 'translateZ(10px)' }}>
          <span className="text-[9px] font-bold text-primary uppercase tracking-wider mb-1 block">
            {founder.role}
          </span>
          <h3 className="text-lg font-bold text-text-primary tracking-tight">
            {founder.name}
          </h3>
          <p className="text-[11px] text-text-secondary mt-1.5 leading-relaxed font-light line-clamp-2">
            {founder.bio}
          </p>
        </div>

        {/* Skill Tags */}
        <div className="flex flex-wrap gap-1.5 mt-3 border-t border-neutral-100/60 pt-4" style={{ transform: 'translateZ(5px)' }}>
          {founder.skills.slice(0, 2).map((skill, idx) => (
            <span 
              key={idx} 
              className="text-[9px] font-medium text-text-secondary bg-neutral-50 px-2.5 py-0.5 rounded border border-neutral-100/50"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default function InteractiveTeam() {
  const [selectedFounder, setSelectedFounder] = useState<Founder | null>(null)

  const founders: Founder[] = [
    {
      name: 'Rishik Goud Talla',
      role: 'Co-Founder & Organizer',
      bio: 'Passionate about scaling developer communities, establishing corporate sponsorships, and organizing high-stakes hack sprints.',
      image: '/founder-amit.png',
      skills: ['Community Growth', 'Event Operations', 'Sponsorships', 'Partnerships'],
      stats: [
        { label: 'Events Organized', value: '50+' },
        { label: 'Campuses Reached', value: '150+' },
        { label: 'Sponsorship Pool', value: '₹10L+' }
      ],
      linkedin: 'https://www.linkedin.com/in/rishik-goud-talla/',
      color: 'from-emerald-500/20 to-teal-500/10',
      imagePosition: 'center 22%'
    },
    {
      name: 'Mehul Agarwal',
      role: 'Co-Founder & Community Lead',
      bio: 'Coordinates university campus chapters, builds mentor networks, and directs developer bootcamps.',
      image: '/founder-neha.png',
      skills: ['Student Engagement', 'Bootcamps', 'Chapter Scaling', 'Mentorship Ops'],
      stats: [
        { label: 'Campus Chapters', value: '30+' },
        { label: 'Active Students', value: '5000+' },
        { label: 'Mentor Matching', value: '100+' }
      ],
      linkedin: 'https://www.linkedin.com/in/mehulagarwal17/',
      color: 'from-accent-blue/15 to-primary/5',
      imagePosition: 'center 20%'
    },
    {
      name: 'Prabhu Chaturvedi',
      role: 'Co-Founder & Core Maintainer',
      bio: 'Maintains open source repositories, leads server-side compiler sprints, and directs developer workshop curriculums.',
      image: '/founder-rohan.png',
      skills: ['Next.js / React', 'System Architecture', 'Go / Rust', 'Open Source'],
      stats: [
        { label: 'PRs Merged', value: '120+' },
        { label: 'Repositories', value: '20+' },
        { label: 'Curriculums', value: '15+' }
      ],
      linkedin: 'https://www.linkedin.com/in/prabhuchaturvedi0904/',
      github: 'https://github.com',
      color: 'from-accent-purple/15 to-accent-blue/5',
      imagePosition: 'center 20%'
    }
  ]

  return (
    <section className="section-spacing bg-background-secondary border-b border-border py-16 md:py-24 relative select-none">
      <div className="container-max">
        
        {/* Section Header */}
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <span className="badge mb-3">Founders</span>
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-3">
            Meet the Founders
          </h2>
          <p className="text-xs md:text-sm text-text-secondary leading-relaxed font-light">
            Hover over cards for 3D perspective tilts, or click to unfold their contributions and tech stats.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {founders.map((founder, idx) => (
            <TiltCard 
              key={idx} 
              founder={founder} 
              onClick={() => setSelectedFounder(founder)} 
            />
          ))}
        </div>

      </div>

      {/* Expanded Founder Biography Modal */}
      <AnimatePresence>
        {selectedFounder && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop Overlay */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedFounder(null)}
              className="absolute inset-0 bg-neutral-950/40 backdrop-blur-md"
            />

            {/* Modal Box */}
            <motion.div 
              initial={{ scale: 0.95, y: 15, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, y: 15, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="relative w-full max-w-2xl bg-white border border-neutral-100 rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row z-10"
            >
              {/* Close Button */}
              <button 
                onClick={() => setSelectedFounder(null)}
                className="absolute top-4 right-4 bg-white/80 hover:bg-neutral-100 text-text-secondary p-1.5 rounded-full border border-neutral-100 transition-colors z-20 cursor-pointer"
              >
                <X size={16} />
              </button>

              {/* Left Column: Image & Badges */}
              <div className="w-full md:w-2/5 relative h-[250px] md:h-auto min-h-[220px] bg-neutral-50 select-none">
                <img 
                  src={selectedFounder.image} 
                  alt={selectedFounder.name} 
                  className="w-full h-full object-cover"
                  style={{ objectPosition: selectedFounder.imagePosition || 'center' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-black/30 via-transparent to-transparent" />
              </div>

              {/* Right Column: bio, stats, and skills */}
              <div className="w-full md:w-3/5 p-6 md:p-8 flex flex-col justify-between text-left">
                <div>
                  <span className="text-[10px] font-bold text-primary uppercase tracking-wider block mb-1">
                    {selectedFounder.role}
                  </span>
                  <h3 className="text-xl font-bold text-text-primary tracking-tight mb-4">
                    {selectedFounder.name}
                  </h3>

                  <p className="text-xs text-text-secondary leading-relaxed font-normal mb-6">
                    {selectedFounder.bio}
                  </p>

                  {/* Stats Block */}
                  <h4 className="text-[10px] font-bold text-text-primary uppercase tracking-wider mb-3 flex items-center gap-1.5">
                    <Award size={12} className="text-primary" />
                    Impact Milestones
                  </h4>
                  <div className="grid grid-cols-3 gap-2 border border-neutral-100 rounded-2xl bg-neutral-50/50 p-4 mb-6">
                    {selectedFounder.stats.map((stat, sIdx) => (
                      <div key={sIdx} className="text-center">
                        <span className="block text-sm font-bold text-primary tracking-tight">{stat.value}</span>
                        <span className="block text-[8px] text-text-tertiary font-light mt-0.5 leading-none">{stat.label}</span>
                      </div>
                    ))}
                  </div>

                  {/* Skills Block */}
                  <h4 className="text-[10px] font-bold text-text-primary uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
                    <Briefcase size={12} className="text-primary" />
                    Core Skills
                  </h4>
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {selectedFounder.skills.map((skill, sIdx) => (
                      <span 
                        key={sIdx}
                        className="text-[9px] font-medium text-text-secondary bg-neutral-50 border border-neutral-100 px-2.5 py-0.5 rounded"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Social Links Row */}
                <div className="flex items-center gap-3 border-t border-neutral-100 pt-5 mt-auto">
                  <a 
                    href={selectedFounder.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-[10px] font-bold text-primary bg-primary/5 hover:bg-primary/10 border border-primary/10 px-4.5 py-2 rounded-full transition-colors cursor-pointer"
                  >
                    <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                      <rect width="4" height="12" x="2" y="9" />
                      <circle cx="4" cy="4" r="2" />
                    </svg>
                    LinkedIn
                  </a>
                  {selectedFounder.github && (
                    <a 
                      href={selectedFounder.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-[10px] font-bold text-text-primary bg-neutral-50 hover:bg-neutral-100 border border-neutral-100 px-4.5 py-2 rounded-full transition-colors cursor-pointer"
                    >
                      <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                        <path d="M9 18c-4.51 2-5-2-7-2" />
                      </svg>
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  )
}
