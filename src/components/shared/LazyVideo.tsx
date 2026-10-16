'use client'

import React, { useRef, useState, useEffect } from 'react'

interface LazyVideoProps extends React.VideoHTMLAttributes<HTMLVideoElement> {
  src: string
  rootMargin?: string
}

export default function LazyVideo({
  src,
  rootMargin = '200px',
  autoPlay = true,
  loop = true,
  muted = true,
  playsInline = true,
  className = '',
  ...props
}: LazyVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [shouldLoad, setShouldLoad] = useState(false)
  const [isInViewport, setIsInViewport] = useState(false)

  // IntersectionObserver directly on the video element
  useEffect(() => {
    const el = videoRef.current
    if (!el) return

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

  // Play/pause control without promise rejections
  useEffect(() => {
    const video = videoRef.current
    if (!video || !shouldLoad || !autoPlay) return

    if (isInViewport) {
      const playPromise = video.play()
      if (playPromise !== undefined) {
        playPromise.catch(() => {})
      }
    } else {
      video.pause()
    }
  }, [isInViewport, shouldLoad, autoPlay])

  return (
    <video
      ref={videoRef}
      src={shouldLoad ? src : undefined}
      muted={muted}
      loop={loop}
      playsInline={playsInline}
      preload="none"
      className={className}
      {...props}
    />
  )
}
