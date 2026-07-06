'use client'

import React from 'react'

interface LogoItem {
  name: string;
  logo?: string;
  color?: string;
}

interface LogoLoopProps {
  items: LogoItem[];
  speed?: number; // duration in seconds
  direction?: 'left' | 'right';
  hoverPause?: boolean;
}

export default function LogoLoop({
  items,
  speed = 25,
  direction = 'left',
  hoverPause = true,
}: LogoLoopProps) {
  // Duplicate items to ensure a seamless infinite scroll loop
  const duplicatedItems = [...items, ...items, ...items, ...items];

  return (
    <div className="w-full overflow-hidden relative select-none py-2">
      {/* Premium gradient fade overlays on edges */}
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background-secondary via-background-secondary/80 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background-secondary via-background-secondary/80 to-transparent z-10 pointer-events-none" />

      <div 
        className="flex gap-16 items-center w-max"
        style={{
          animation: `${direction === 'left' ? 'scroll-left-loop' : 'scroll-right-loop'} ${speed}s linear infinite`,
          animationPlayState: hoverPause ? 'var(--play-state, running)' : 'running',
        }}
        // Using inline styling trick or Tailwind hover rules to pause animation state
        onMouseEnter={(e) => hoverPause && e.currentTarget.style.setProperty('--play-state', 'paused')}
        onMouseLeave={(e) => hoverPause && e.currentTarget.style.setProperty('--play-state', 'running')}
      >
        {duplicatedItems.map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-center px-8 shrink-0"
          >
            {item.logo ? (
              <img
                src={item.logo}
                alt={item.name}
                className="h-12 w-auto max-w-full object-contain transition-all duration-300"
              />
            ) : (
              <span className={`font-semibold tracking-wide text-text-secondary transition-all duration-300 ${item.color || ''} text-base md:text-lg`}>
                {item.name}
              </span>
            )}
          </div>
        ))}
      </div>

      <style jsx global>{`
        @keyframes scroll-left-loop {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        @keyframes scroll-right-loop {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }
      `}</style>
    </div>
  )
}
