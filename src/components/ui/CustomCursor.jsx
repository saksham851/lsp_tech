// src/components/ui/CustomCursor.jsx
import { useEffect, useRef, useState } from 'react'

const CustomCursor = () => {
  const dotRef = useRef(null)
  const ringRef = useRef(null)
  const [isHovering, setIsHovering] = useState(false)
  const [isClicking, setIsClicking] = useState(false)
  const [isHidden, setIsHidden] = useState(false)

  const pos = useRef({ x: -200, y: -200 })
  const ring = useRef({ x: -200, y: -200 })
  const rafId = useRef(null)

  useEffect(() => {
    // Hide default cursor globally
    document.documentElement.style.cursor = 'none'

    const onMove = (e) => {
      pos.current = { x: e.clientX, y: e.clientY }
      setIsHidden(false)

      // Dot follows instantly
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`
      }
    }

    const onLeave = () => setIsHidden(true)
    const onEnter = () => setIsHidden(false)
    const onDown = () => setIsClicking(true)
    const onUp = () => setIsClicking(false)

    // Smooth ring animation loop
    const animate = () => {
      const ease = 0.12
      ring.current.x += (pos.current.x - ring.current.x) * ease
      ring.current.y += (pos.current.y - ring.current.y) * ease

      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ring.current.x}px, ${ring.current.y}px)`
      }

      rafId.current = requestAnimationFrame(animate)
    }

    // Hover detection on interactive elements
    const handleHoverIn = (e) => {
      if (
        e.target.closest('a, button, [role="button"], input, textarea, select, label, [data-cursor="pointer"]')
      ) {
        setIsHovering(true)
      }
    }
    const handleHoverOut = (e) => {
      if (
        e.target.closest('a, button, [role="button"], input, textarea, select, label, [data-cursor="pointer"]')
      ) {
        setIsHovering(false)
      }
    }

    document.addEventListener('mousemove', onMove)
    document.addEventListener('mouseleave', onLeave)
    document.addEventListener('mouseenter', onEnter)
    document.addEventListener('mousedown', onDown)
    document.addEventListener('mouseup', onUp)
    document.addEventListener('mouseover', handleHoverIn)
    document.addEventListener('mouseout', handleHoverOut)

    rafId.current = requestAnimationFrame(animate)

    return () => {
      document.documentElement.style.cursor = ''
      document.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseleave', onLeave)
      document.removeEventListener('mouseenter', onEnter)
      document.removeEventListener('mousedown', onDown)
      document.removeEventListener('mouseup', onUp)
      document.removeEventListener('mouseover', handleHoverIn)
      document.removeEventListener('mouseout', handleHoverOut)
      cancelAnimationFrame(rafId.current)
    }
  }, [])

  // Only show on non-touch devices
  if (typeof window !== 'undefined' && window.matchMedia('(hover: none)').matches) {
    return null
  }

  return (
    <>
      {/* Outer ring — smooth trailing */}
      <div
        ref={ringRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: isHovering ? 48 : 36,
          height: isHovering ? 48 : 36,
          marginLeft: isHovering ? -24 : -18,
          marginTop: isHovering ? -24 : -18,
          borderRadius: '50%',
          border: `2px solid ${isHovering ? 'rgba(213,43,30,0.8)' : 'rgba(213,43,30,0.5)'}`,
          background: isHovering ? 'rgba(213,43,30,0.08)' : 'transparent',
          pointerEvents: 'none',
          zIndex: 99999,
          transition: 'width 0.25s ease, height 0.25s ease, margin 0.25s ease, border-color 0.25s ease, background 0.25s ease, opacity 0.3s ease',
          opacity: isHidden ? 0 : isClicking ? 0.5 : 1,
          transform: 'translate(-200px, -200px)',
          willChange: 'transform',
          backdropFilter: isHovering ? 'blur(2px)' : 'none',
        }}
      />

      {/* Inner dot — instant follow */}
      <div
        ref={dotRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: isHovering ? 6 : 7,
          height: isHovering ? 6 : 7,
          marginLeft: isHovering ? -3 : -3.5,
          marginTop: isHovering ? -3 : -3.5,
          borderRadius: '50%',
          background: isHovering ? '#D52B1E' : '#ffffff',
          pointerEvents: 'none',
          zIndex: 100000,
          transition: 'width 0.2s ease, height 0.2s ease, background 0.2s ease, opacity 0.3s ease, transform 0.1s ease',
          opacity: isHidden ? 0 : isClicking ? 0.6 : 1,
          transform: 'translate(-200px, -200px)',
          willChange: 'transform',
          boxShadow: isHovering ? '0 0 12px rgba(213,43,30,0.8)' : '0 0 6px rgba(255,255,255,0.4)',
        }}
      />
    </>
  )
}

export default CustomCursor
