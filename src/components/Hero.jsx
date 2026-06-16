import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="home" style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      padding: '6rem 3rem 4rem',
    }}>
      <div>
        {/* Eyebrow pill */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            background: 'var(--pill-bg)',
            border: '1px solid rgba(184,240,200,0.15)',
            color: 'var(--accent)',
            fontSize: '0.8rem',
            fontWeight: 500,
            letterSpacing: '0.06em',
            textTransform: 'uppercase',
            padding: '0.35rem 0.85rem',
            borderRadius: '999px',
            marginBottom: '2rem',
          }}
        >
          Available for work
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(3rem, 7vw, 5.5rem)',
            fontWeight: 800,
            lineHeight: 1.0,
            letterSpacing: '-0.03em',
            marginBottom: '1.5rem',
          }}
        >
          Frontend developer<br />
          <span style={{ color: 'var(--accent)' }}>&amp; UI designer</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.7 }}
          style={{
            fontSize: '1.1rem',
            color: 'var(--muted)',
            maxWidth: '520px',
            lineHeight: 1.7,
            marginBottom: '2.5rem',
          }}
        >
          Entry-level developer focused on Android &amp; web. I build
          user-friendly interfaces that look great and feel intuitive
          — from concept to code.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.7 }}
          className="hero-buttons"
          style={{ display: 'flex', gap: '1rem' }}
        >
          <a href="#portfolio" style={{
            background: 'var(--accent)',
            color: '#0d0d0f',
            padding: '0.75rem 1.75rem',
            borderRadius: 'var(--radius-sm)',
            fontWeight: 600,
            fontSize: '0.9rem',
            textDecoration: 'none',
          }}>
            See my work
          </a>
          <a href="#contact" style={{
            border: '1px solid var(--border2)',
            color: 'var(--text)',
            padding: '0.75rem 1.75rem',
            borderRadius: 'var(--radius-sm)',
            fontWeight: 500,
            fontSize: '0.9rem',
            textDecoration: 'none',
          }}>
            Hire me
          </a>
        </motion.div>
      </div>
    </section>
  )
}