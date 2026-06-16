import { useEffect, useRef } from 'react'

export default function Cursor() {
  const dotRef = useRef(null)
  const ringRef = useRef(null)
  const mouse = useRef({ x: 0, y: 0 })
  const ring = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const onMove = (e) => {
      mouse.current = { x: e.clientX, y: e.clientY }
      if (dotRef.current) {
        dotRef.current.style.left = e.clientX + 'px'
        dotRef.current.style.top = e.clientY + 'px'
      }
    }

    const onEnter = () => {
      if (dotRef.current) {
        dotRef.current.style.width = '12px'
        dotRef.current.style.height = '12px'
      }
      if (ringRef.current) {
        ringRef.current.style.width = '52px'
        ringRef.current.style.height = '52px'
        ringRef.current.style.borderColor = 'rgba(184,240,200,0.7)'
      }
    }

    const onLeave = () => {
      if (dotRef.current) {
        dotRef.current.style.width = '8px'
        dotRef.current.style.height = '8px'
      }
      if (ringRef.current) {
        ringRef.current.style.width = '36px'
        ringRef.current.style.height = '36px'
        ringRef.current.style.borderColor = 'rgba(184,240,200,0.4)'
      }
    }

    // Animate the ring to follow with lag
    let raf
    const animate = () => {
      ring.current.x += (mouse.current.x - ring.current.x) * 0.12
      ring.current.y += (mouse.current.y - ring.current.y) * 0.12
      if (ringRef.current) {
        ringRef.current.style.left = ring.current.x + 'px'
        ringRef.current.style.top = ring.current.y + 'px'
      }
      raf = requestAnimationFrame(animate)
    }
    animate()

    // Add hover effect to all links and buttons
    const interactives = document.querySelectorAll('a, button')
    interactives.forEach(el => {
      el.addEventListener('mouseenter', onEnter)
      el.addEventListener('mouseleave', onLeave)
    })

    document.addEventListener('mousemove', onMove)

    return () => {
      cancelAnimationFrame(raf)
      document.removeEventListener('mousemove', onMove)
      interactives.forEach(el => {
        el.removeEventListener('mouseenter', onEnter)
        el.removeEventListener('mouseleave', onLeave)
      })
    }
  }, [])

  return (
    <>
      {/* Small dot */}
      <div ref={dotRef} style={{
        width: 8,
        height: 8,
        background: 'var(--accent)',
        borderRadius: '50%',
        position: 'fixed',
        pointerEvents: 'none',
        zIndex: 9999,
        transform: 'translate(-50%, -50%)',
        transition: 'width 0.2s, height 0.2s, background 0.2s',
      }} />

      {/* Trailing ring */}
      <div ref={ringRef} style={{
        width: 36,
        height: 36,
        border: '1.5px solid rgba(184,240,200,0.4)',
        borderRadius: '50%',
        position: 'fixed',
        pointerEvents: 'none',
        zIndex: 9998,
        transform: 'translate(-50%, -50%)',
        transition: 'width 0.25s, height 0.25s, border-color 0.25s',
      }} />
    </>
  )
}