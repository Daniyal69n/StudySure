"use client"
import { useEffect } from 'react'
import Lenis from '@studio-freight/lenis'

export default function SmoothScroll({ children }) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.8, // Increased from 1.6 for slower animations
      easing: (t) => t === 1 ? 1 : 1 - Math.pow(2, -10 * t), // exponential easing
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      smoothTouch: true,
      touchMultiplier: 1.5, // Decreased from 2 for slower touch scrolling
      infinite: false,
      wheelMultiplier: 0.8, // Decreased from 1.2 for slower wheel scrolling
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
    }
  }, [])

  return children
}