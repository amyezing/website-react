import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="home" style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      width: '100%',
      maxWidth: '100vw',
      boxSizing: 'border-box',
      padding: 'clamp(1.5rem, 5vw, 3rem)',
      paddingTop: 'clamp(5rem, 10vw, 7rem)',
      overflow: 'hidden',
    }}>
      <div style={{
        width: '100%',
        maxWidth: '900px',
        margin: '0 auto',
      }}>
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
            maxWidth: '100%',
          }}
        >
          Available for work
        </motion.div>

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          style={{
            background: 'var(--bg2)',
            border: '1px solid var(--border)',
            borderRadius: 'var(--radius)',
            padding: 'clamp(1.25rem, 4vw, 2rem)',
            marginBottom: '1.5rem',
            maxWidth: '100%',
            display: 'inline-block',
          }}
        >
          <h1 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2rem, 8vw, 5.5rem)',
            fontWeight: 800,
            lineHeight: 1.05,
            letterSpacing: '-0.03em',
            maxWidth: '100%',
            overflowWrap: 'break-word',
          }}>
            <span style={{ display: 'block' }}>Frontend developer</span>
            <span style={{ display: 'block', color: 'var(--accent)' }}>&amp; UI designer</span>
          </h1>
        </motion.div> 

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.7 }}
          style={{
            fontSize: 'clamp(0.95rem, 2vw, 1.1rem)',
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
          style={{
            display: 'flex',
            gap: '1rem',
            flexWrap: 'wrap',
          }}
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