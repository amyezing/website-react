import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const services = [
  {
    icon: '📱',
    title: 'Android development',
    desc: 'Building native Android apps using Java and Kotlin, with sleek UIs and optimized performance.',
    link: 'https://developers.google.com/profile/u/116560337221149277861',
    linkText: 'View developer profile',
  },
  {
    icon: '🌐',
    title: 'Web development',
    desc: 'Crafting responsive, dynamic web experiences with clean front-end code focused on performance and accessibility.',
    link: 'https://drive.google.com/open?id=1k20vUq4w1CmO5OJjYlwYnelRILooM7rt',
    linkText: 'View projects',
  },
  {
    icon: '🎨',
    title: 'UX/UI design',
    desc: 'Designing pixel-perfect interfaces in Figma. Colors, typography, and components for smooth user interaction.',
    link: 'https://www.figma.com/proto/9Xk3gruTrS3A7vTONqAuz2/Tic-Tac-Toe',
    linkText: 'View Figma work',
  },
]

export default function Services() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="service" style={{
      padding: '5rem 3rem',
      maxWidth: '1080px',
      margin: '0 auto',
    }}>
      <p style={{
        fontSize: '0.75rem',
        fontWeight: 600,
        letterSpacing: '0.12em',
        textTransform: 'uppercase',
        color: 'var(--accent)',
        marginBottom: '0.75rem',
      }}>Services</p>

      <h2 style={{
        fontFamily: 'var(--font-display)',
        fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)',
        fontWeight: 700,
        letterSpacing: '-0.02em',
        lineHeight: 1.15,
        marginBottom: '3rem',
      }}>
        What I bring to the table
      </h2>

      <div ref={ref} className="services-grid" style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '1.25rem',
      }}>
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 28 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: i * 0.15, ease: [0.25, 1, 0.5, 1] }}
            whileHover={{ y: -8, boxShadow: '0 20px 50px rgba(0,0,0,0.5)' }}
            style={{
               background: 'var(--bg2)',
               border: '1px solid var(--border)',
               borderRadius: 'var(--radius)',
               padding: '2rem 1.75rem',
               cursor: 'default',
               transition: 'border-color 0.25s',
            }}
            onMouseEnter={e => {
                e.currentTarget.style.borderColor = 'var(--accent)'
            }}
            onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'var(--border)'
            }}
          >
            <div style={{
              width: 44, height: 44,
              background: 'var(--accent-dim)',
              borderRadius: 'var(--radius-sm)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '1.25rem',
              fontSize: '1.3rem',
            }}>
              {s.icon}
            </div>

            <h3 style={{
              fontFamily: 'var(--font-display)',
              fontSize: '1.05rem',
              fontWeight: 600,
              marginBottom: '0.6rem',
              letterSpacing: '-0.01em',
            }}>
              {s.title}
            </h3>

            <p style={{
              fontSize: '0.875rem',
              color: 'var(--muted)',
              lineHeight: 1.7,
              marginBottom: '1.25rem',
            }}>
              {s.desc}
            </p>

            <a href={s.link} target="_blank" rel="noreferrer" style={{
              fontSize: '0.8rem',
              color: 'var(--accent)',
              textDecoration: 'none',
              fontWeight: 500,
            }}>
              {s.linkText} →
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  )
}