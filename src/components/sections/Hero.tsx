'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Calendar, Users, Trophy, GraduationCap, Laptop, Sparkles } from 'lucide-react'

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' as const },
    },
  }

  return (
    <section className="section-spacing pt-12 md:pt-20 bg-gradient-to-b from-white via-background-secondary to-white overflow-hidden">
      <div className="container-max">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Left Side: Copywriting & CTAs (7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <motion.div variants={itemVariants}>
              <span className="badge">
                🚀 Building India's next generation of builders
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight mt-6 mb-6 text-text-primary"
            >
              Building the next generation of <span className="text-primary">builders</span>.
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-base md:text-lg text-text-secondary mb-8 max-w-xl leading-relaxed font-normal"
            >
              CodeQuesters helps students learn, build, compete and grow through hackathons, workshops, open-source contributions, mentorship and real-world opportunities.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mb-12"
            >
              <button className="btn-primary w-full sm:w-auto text-sm">
                Join Community
                <ArrowRight size={16} />
              </button>
              <button className="btn-secondary w-full sm:w-auto text-sm">
                Explore Events
              </button>
            </motion.div>

            {/* Mini Stats Grid */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8 border-t border-border w-full"
            >
              <div>
                <div className="text-xl md:text-2xl font-bold text-text-primary">2000+</div>
                <p className="text-xs text-text-secondary mt-0.5">Builders</p>
              </div>
              <div>
                <div className="text-xl md:text-2xl font-bold text-text-primary">50+</div>
                <p className="text-xs text-text-secondary mt-0.5">Events</p>
              </div>
              <div>
                <div className="text-xl md:text-2xl font-bold text-text-primary">74+</div>
                <p className="text-xs text-text-secondary mt-0.5">Colleges</p>
              </div>
              <div>
                <div className="text-xl md:text-2xl font-bold text-text-primary">20+</div>
                <p className="text-xs text-text-secondary mt-0.5">Partners</p>
              </div>
            </motion.div>
          </div>

          {/* Right Side: Masonry Collage representation (5 cols) */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-5 relative w-full h-[450px]"
          >
            {/* Masonry Collage Grid - 5 Slots */}
            <div className="grid grid-cols-12 gap-3 h-full">
              {/* 1. Large Hackathon Image (left, tall) */}
              <div className="col-span-7 row-span-2 rounded-lg border border-border bg-gradient-to-br from-primary/10 via-primary-dark/20 to-primary/5 p-4 flex flex-col justify-between group hover:border-primary transition-all duration-300">
                <div className="flex justify-between items-start">
                  <span className="text-[10px] uppercase font-semibold tracking-wider text-primary-dark bg-primary-light px-2 py-0.5 rounded">Hackathon</span>
                  <Users size={18} className="text-primary" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-text-primary mb-1">CodeQuest hackathon</h4>
                  <p className="text-[10px] text-text-secondary leading-normal">Excited builders, laptops, mentors, and midnight energy.</p>
                </div>
              </div>

              {/* 2. Workshop Image (top right) */}
              <div className="col-span-5 h-[130px] rounded-lg border border-border bg-gradient-to-br from-accent-blue/15 to-accent-blue/5 p-3 flex flex-col justify-between group hover:border-primary transition-all duration-300">
                <div className="flex justify-between items-start">
                  <span className="text-[9px] uppercase font-semibold tracking-wider text-accent-blue bg-accent-blue/10 px-1.5 py-0.5 rounded">Learning</span>
                  <GraduationCap size={15} className="text-accent-blue" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-text-primary mb-0.5">Tech workshops</h4>
                  <p className="text-[9px] text-text-secondary leading-normal">Hands-on learning sessions.</p>
                </div>
              </div>

              {/* 3. Speaker Image (middle right) */}
              <div className="col-span-5 h-[130px] rounded-lg border border-border bg-gradient-to-br from-accent-purple/15 to-accent-purple/5 p-3 flex flex-col justify-between group hover:border-primary transition-all duration-300">
                <div className="flex justify-between items-start">
                  <span className="text-[9px] uppercase font-semibold tracking-wider text-accent-purple bg-accent-purple/10 px-1.5 py-0.5 rounded">Keynote</span>
                  <Laptop size={15} className="text-accent-purple" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-text-primary mb-0.5">Industry leaders</h4>
                  <p className="text-[9px] text-text-secondary leading-normal">Founders sharing journeys.</p>
                </div>
              </div>

              {/* 4. Winner Image (bottom left) */}
              <div className="col-span-6 h-[155px] rounded-lg border border-border bg-gradient-to-br from-accent-amber/15 to-accent-amber/5 p-3.5 flex flex-col justify-between group hover:border-primary transition-all duration-300">
                <div className="flex justify-between items-start">
                  <span className="text-[9px] uppercase font-semibold tracking-wider text-accent-amber bg-accent-amber/10 px-1.5 py-0.5 rounded">Trophy</span>
                  <Trophy size={16} className="text-accent-amber" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-text-primary mb-0.5">Winner showcase</h4>
                  <p className="text-[9px] text-text-secondary leading-normal">Teams celebrating real milestones.</p>
                </div>
              </div>

              {/* 5. Community Image (bottom right) */}
              <div className="col-span-6 h-[155px] rounded-lg border border-border bg-gradient-to-br from-primary/10 to-accent-blue/10 p-3.5 flex flex-col justify-between group hover:border-primary transition-all duration-300">
                <div className="flex justify-between items-start">
                  <span className="text-[9px] uppercase font-semibold tracking-wider text-primary bg-primary-light px-1.5 py-0.5 rounded">Ecosystem</span>
                  <Sparkles size={16} className="text-primary" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-text-primary mb-0.5">Peer networking</h4>
                  <p className="text-[9px] text-text-secondary leading-normal">Collaborating in student hubs.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
