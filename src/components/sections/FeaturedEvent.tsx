'use client'

import { motion } from 'framer-motion'
import { Calendar, MapPin, Users, ArrowRight } from 'lucide-react'

export default function FeaturedEvent() {
  return (
    <section className="section-spacing bg-background-secondary border-t border-border">
      <div className="container-max">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="badge mb-3">Hackathons & sprints</span>
          <h2 className="text-3xl font-bold text-text-primary">
            Featured event
          </h2>
        </motion.div>

        {/* Showcase Box Container */}
        <motion.div
          className="card-base p-0 overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-0 border border-border bg-card hover:border-primary/20 duration-300 shadow-sm hover:shadow-md"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Banner Placeholder (5 cols) */}
          <div className="lg:col-span-5 min-h-[220px] bg-gradient-to-br from-primary via-primary-dark to-accent-blue p-8 flex flex-col justify-between text-white relative">
            <div className="absolute top-0 right-0 w-48 h-48 bg-white/10 rounded-full blur-2xl" />
            <span className="self-start text-[10px] uppercase font-bold tracking-wider text-primary bg-white px-2.5 py-1 rounded-md shadow-sm">
              Registration open
            </span>
            <div>
              <span className="text-white/80 text-xs font-semibold uppercase tracking-wider block mb-1">CodeQuest 2026</span>
              <h3 className="text-2xl font-bold leading-tight">National builder hack sprint</h3>
            </div>
          </div>

          {/* Details (7 cols) */}
          <div className="lg:col-span-7 p-6 md:p-8 flex flex-col justify-between">
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-text-primary mb-3">
                CodeQuest 2026
              </h3>
              <p className="text-xs md:text-sm text-text-secondary leading-relaxed mb-6">
                Our flagship national 36-hour hack sprint where builders from across India team up to build functional products. Work directly with industry mentors, present to startup VC partners, and win cash prizes from a total pool of ₹3,00,000.
              </p>

              {/* Event Metadata */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 border-t border-b border-border py-4 mb-6">
                <div className="flex items-center gap-3 text-text-secondary">
                  <Calendar className="w-4 h-4 text-primary" />
                  <div>
                    <span className="text-[10px] text-text-tertiary block font-medium uppercase">Date</span>
                    <span className="text-xs font-semibold text-text-primary">August 14-16, 2026</span>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-text-secondary">
                  <MapPin className="w-4 h-4 text-primary" />
                  <div>
                    <span className="text-[10px] text-text-tertiary block font-medium uppercase">Location</span>
                    <span className="text-xs font-semibold text-text-primary">IIIT Delhi Campus</span>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-text-secondary">
                  <Users className="w-4 h-4 text-primary" />
                  <div>
                    <span className="text-[10px] text-text-tertiary block font-medium uppercase">Format</span>
                    <span className="text-xs font-semibold text-text-primary">In-Person Sprint</span>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA action */}
            <div className="flex flex-wrap gap-4 items-center">
              <button className="btn-primary py-2.5 px-6 text-sm">
                Register for hack sprint
                <ArrowRight size={16} />
              </button>
              <button className="btn-outline py-2.5 px-6 text-sm">
                View event guidelines
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
