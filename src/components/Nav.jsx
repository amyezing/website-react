import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const links = ['about', 'service', 'portfolio', 'experience']

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.3, duration: 0.5 }}
        style={{
          position: 'fixed', top: 0, left: 0, right: 0,
          zIndex: 100,
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
          background: scrolled ? 'rgba(13,13,15,0.88)' : 'transparent',
          backdropFilter: scrolled ? 'blur(14px)' : 'none',
          transition: 'border-color 0.3s, background 0.3s',
        }}
      >
        <a href="#home" style={{
          fontFamily: 'var(--font-display)', fontWeight: 700,
          fontSize: '1.1rem', color: 'var(--accent)',
          letterSpacing: '-0.02em', textDecoration: 'none',
        }}>MRA</a>

        {/* Desktop links */}
        <ul className="nav-links" style={{ gap: '2rem', listStyle: 'none' }}>
          {links.map((link) => (
            <li key={link}>
              <a href={`#${link}`} style={{
                color: 'var(--muted)', textDecoration: 'none',
                fontSize: '0.875rem', fontWeight: 500,
              }}
                onMouseEnter={e => e.target.style.color = 'var(--text)'}
                onMouseLeave={e => e.target.style.color = 'var(--muted)'}
              >
                {link.charAt(0).toUpperCase() + link.slice(1)}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <a href="#contact" className="nav-cta" style={{
          background: 'var(--accent-dim)',
          border: '1px solid rgba(184,240,200,0.2)',
          color: 'var(--accent)',
          padding: '0.45rem 1.1rem',
          borderRadius: 'var(--radius-sm)',
          fontSize: '0.875rem', fontWeight: 500,
          textDecoration: 'none',
        }}>
          Get in touch
        </a>

        {/* Hamburger */}
        <button
          className="hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            background: 'none',
            border: 'none',
            color: 'var(--text)',
            fontSize: '1.5rem',
            cursor: 'none',
            padding: '0.25rem',
          }}
        >
          {menuOpen ? '✕' : '☰'}
        </button>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            style={{
              position: 'fixed',
              top: '60px', left: 0, right: 0,
              background: 'rgba(13,13,15,0.97)',
              backdropFilter: 'blur(14px)',
              borderBottom: '1px solid var(--border)',
              zIndex: 99,
              padding: '2rem 3rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.5rem',
            }}
          >
            {links.map(link => (
              <a
                key={link}
                href={`#${link}`}
                onClick={() => setMenuOpen(false)}
                style={{
                  color: 'var(--text)',
                  textDecoration: 'none',
                  fontSize: '1.2rem',
                  fontWeight: 500,
                  fontFamily: 'var(--font-display)',
                }}
              >
                {link.charAt(0).toUpperCase() + link.slice(1)}
              </a>
            ))}
            <a href="#contact" onClick={() => setMenuOpen(false)} style={{
              background: 'var(--accent)',
              color: '#0d0d0f',
              padding: '0.75rem 1.5rem',
              borderRadius: 'var(--radius-sm)',
              fontWeight: 600,
              textDecoration: 'none',
              width: 'fit-content',
            }}>
              Get in touch
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}