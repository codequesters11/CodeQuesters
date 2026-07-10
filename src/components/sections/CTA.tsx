'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export default function CTA() {
  return (
    <section className="section-spacing bg-white relative overflow-hidden border-t border-border">
      {/* Subtle light background accent blobs */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent-blue/5 rounded-full blur-3xl" />

      <div className="container-max relative z-10">
        <motion.div
          className="text-center max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
            Ready to build something bigger?
          </h2>
          <p className="text-sm md:text-base text-text-secondary mb-8 leading-relaxed font-normal">
            Join a growing ecosystem helping students become builders.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="https://chat.whatsapp.com/Drc3SOwUSJiJnV3ZZgQz7I?mode=ac_t" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-full sm:w-auto btn-primary text-sm py-3 px-8 flex items-center justify-center gap-2"
            >
              Join community
              <ArrowRight size={16} />
            </a>
            <button className="w-full sm:w-auto btn-secondary text-sm py-3 px-8 flex items-center justify-center gap-2">
              Partner with us
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
