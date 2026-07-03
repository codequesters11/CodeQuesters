'use client'

import { motion } from 'framer-motion'
import { MessageSquare, Calendar, Compass, UserCheck, ArrowRight, MessageCircle } from 'lucide-react'

export default function CommunitySnapshot() {
  const benefits = [
    {
      title: 'Active discussions',
      description: 'Daily threads covering compiler tools, React architectures, system design, and AI backend hacks.',
      icon: <MessageSquare className="w-5 h-5 text-primary" />,
    },
    {
      title: 'Weekly events',
      description: 'Join regular open source reviews, GSoC project panels, and live developer AMA sessions.',
      icon: <Calendar className="w-5 h-5 text-accent-blue" />,
    },
    {
      title: 'Direct mentorship',
      description: 'Get feedback directly from senior engineers and past hackathon winners active in the community.',
      icon: <UserCheck className="w-5 h-5 text-accent-amber" />,
    },
    {
      title: 'Peer collaboration',
      description: 'Find teammates for hack sprints, co-founders for startup MVPs, or reviewers for pull requests.',
      icon: <Compass className="w-5 h-5 text-accent-purple" />,
    },
  ]

  return (
    <section className="section-spacing bg-background-secondary border-t border-border">
      <div className="container-max">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column (7 cols): Copywriting & Benefits */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-10 text-left"
            >
              <span className="badge mb-3">Live ecosystem</span>
              <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
                Built by community
              </h2>
              <p className="text-xs md:text-sm text-text-secondary leading-relaxed max-w-xl">
                We are more than a technical forum. We are an active ecosystem of ambitious students, mentors, and engineers building the future together.
              </p>
            </motion.div>

            {/* Benefits List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex gap-4">
                  <div className="bg-card p-2 rounded-md border border-border h-fit">
                    {benefit.icon}
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-text-primary mb-1">
                      {benefit.title}
                    </h4>
                    <p className="text-xs text-text-secondary leading-relaxed font-normal">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column (5 cols): Live Snapshot Dashboard Card Placeholder */}
          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="card-base bg-card p-6 border border-border shadow-sm">
              <div className="flex justify-between items-center border-b border-border pb-4 mb-4">
                <div>
                  <h4 className="text-xs font-semibold text-text-primary">Ecosystem feed</h4>
                  <span className="text-[10px] text-primary font-medium flex items-center gap-1.5 mt-0.5">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full animate-ping" />
                    350+ Builders Online
                  </span>
                </div>
                <div className="bg-background-secondary px-3 py-1 rounded-md border border-border flex items-center gap-1.5">
                  <MessageCircle className="w-3.5 h-3.5 text-primary" />
                  <span className="text-[10px] font-semibold text-text-primary">Active hubs</span>
                </div>
              </div>

              {/* Feed List Simulator */}
              <div className="space-y-4 mb-6">
                <div className="p-3 bg-background-secondary rounded border border-border/50 text-[11px] font-normal leading-normal">
                  <div className="flex justify-between text-text-tertiary mb-1">
                    <span className="font-semibold text-text-secondary">@lakshya_dev</span>
                    <span>2 mins ago</span>
                  </div>
                  <p className="text-text-primary font-medium">Just merged my first pull request in a Tailwind v4 codebase. Mentors on #open-source helped debug post-css variables!</p>
                </div>
                <div className="p-3 bg-background-secondary rounded border border-border/50 text-[11px] font-normal leading-normal">
                  <div className="flex justify-between text-text-tertiary mb-1">
                    <span className="font-semibold text-text-secondary">@omkar_ founder</span>
                    <span>1 hour ago</span>
                  </div>
                  <p className="text-text-primary font-medium">Pitching our MVP tomorrow. Huge shoutout to the community peer reviewers for structural feedback on our slide deck!</p>
                </div>
                <div className="p-3 bg-background-secondary rounded border border-border/50 text-[11px] font-normal leading-normal">
                  <div className="flex justify-between text-text-tertiary mb-1">
                    <span className="font-semibold text-text-secondary">#announcements</span>
                    <span>Yesterday</span>
                  </div>
                  <p className="text-text-primary font-medium">Next week's System Design AMA will feature a staff engineer speaking about distributed caches.</p>
                </div>
              </div>

              {/* Tags and CTA */}
              <div className="flex flex-wrap gap-2 mb-4 border-b border-border pb-4">
                <span className="text-[9px] font-medium text-text-secondary bg-background-tertiary px-2 py-0.5 rounded">#nextjs-15</span>
                <span className="text-[9px] font-medium text-text-secondary bg-background-tertiary px-2 py-0.5 rounded">#rust-sprints</span>
                <span className="text-[9px] font-medium text-text-secondary bg-background-tertiary px-2 py-0.5 rounded">#hackathon-prep</span>
                <span className="text-[9px] font-medium text-text-secondary bg-background-tertiary px-2 py-0.5 rounded">#open-source</span>
              </div>

              <button className="w-full btn-primary text-xs py-2">
                Join our active channels
                <ArrowRight size={14} />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
