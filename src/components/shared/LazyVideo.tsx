'use client'

import React, { useRef, useState, useEffect } from 'react'

interface LazyVideoProps extends React.VideoHTMLAttributes<HTMLVideoElement> {
  src: string
  poster?: string
  className?: string
  rootMargin?: string
}

export default function LazyVideo({
  src,
  poster,
  className = '',
  rootMargin = '200px',
  autoPlay = true,
  loop = true,
  muted = true,
  playsInline = true,
  ...props
}: LazyVideoProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const [shouldLoad, setShouldLoad] = useState(false)
  const [isInViewport, setIsInViewport] = useState(false)

  // IntersectionObserver to defer setting src / loading until near viewport
  useEffect(() => {
    const el = containerRef.current
    if (!el) return

    // If IntersectionObserver is not supported, load immediately
    if (typeof IntersectionObserver === 'undefined') {
      setShouldLoad(true)
      setIsInViewport(true)
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShouldLoad(true)
            setIsInViewport(true)
          } else {
            setIsInViewport(false)
          }
        })
      },
      { rootMargin }
    )

    observer.observe(el)

    return () => {
      observer.disconnect()
    }
  }, [rootMargin])

  // Manage playback state safely without uncaught promise errors or redundant calls
  useEffect(() => {
    const video = videoRef.current
    if (!video || !shouldLoad || !autoPlay) return

    if (isInViewport) {
      const playPromise = video.play()
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // Ignore auto-play abort or user interaction errors
        })
      }
    } else {
      video.pause()
    }
  }, [isInViewport, shouldLoad, autoPlay])

  return (
    <div ref={containerRef} className={`relative ${className}`}>
      <video
        ref={videoRef}
        src={shouldLoad ? src : undefined}
        poster={poster}
        muted={muted}
        loop={loop}
        playsInline={playsInline}
        preload="none"
        className="w-full h-full object-cover"
        {...props}
      />
    </div>
  )
}
