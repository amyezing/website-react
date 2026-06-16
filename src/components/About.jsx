import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const skills = [
  { label: 'Creative', value: 90 },
  { label: 'Accountable', value: 95 },
  { label: 'Hard working', value: 92 },
  { label: 'On-time delivery', value: 88 },
  { label: 'Value for money', value: 94 },
]

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" style={{
      padding: '5rem 3rem',
      maxWidth: '1080px',
      margin: '0 auto',
    }}>
      {/* Label */}
      <p style={{
        fontSize: '0.75rem',
        fontWeight: 600,
        letterSpacing: '0.12em',
        textTransform: 'uppercase',
        color: 'var(--accent)',
        marginBottom: '0.75rem',
      }}>About me</p>

      {/* Title */}
      <h2 style={{
        fontFamily: 'var(--font-display)',
        fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)',
        fontWeight: 700,
        letterSpacing: '-0.02em',
        lineHeight: 1.15,
        marginBottom: '3rem',
      }}>
        Passionate about building<br />things people love to use
      </h2>

      {/* Grid */}
      <div ref={ref} className="about-grid" style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '2rem',
        alignItems: 'start',
      }}>
        {/* Text box */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.25, 1, 0.5, 1] }}
          style={{
            background: 'var(--bg2)',
            border: '1px solid var(--border)',
            borderRadius: 'var(--radius)',
            padding: '1.75rem',
          }}
        >
          <p style={{ color: 'var(--muted)', lineHeight: 1.8, marginBottom: '1rem' }}>
            I'm <strong style={{ color: 'var(--text)', fontWeight: 500 }}>Mary Rose</strong>, a freelance frontend developer and UI/UX designer based in the Philippines. I'm entry-level but deeply motivated — constantly learning and pushing toward mastery.
          </p>
          <p style={{ color: 'var(--muted)', lineHeight: 1.8 }}>
            I'm adaptable, task-oriented, and a quick learner. My background spans creative design and HR, giving me a broad perspective on both people and products.
          </p>
        </motion.div>

        {/* Skill bars */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.25, 1, 0.5, 1] }}
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '0.75rem',
          }}
        >
          {skills.map((skill) => (
            <div key={skill.label} style={{
              background: 'var(--bg3)',
              border: '1px solid var(--border)',
              borderRadius: 'var(--radius-sm)',
              padding: '0.85rem 1rem',
            }}>
              <div style={{
                fontSize: '0.8rem',
                fontWeight: 500,
                color: 'var(--muted)',
                marginBottom: '0.5rem',
                display: 'flex',
                justifyContent: 'space-between',
              }}>
                {skill.label}
                <span style={{ color: 'var(--accent)' }}>{skill.value}%</span>
              </div>
              <div style={{
                height: 3,
                background: 'var(--border2)',
                borderRadius: 999,
                overflow: 'hidden',
              }}>
                <motion.div
                  initial={{ width: 0 }}
                  animate={inView ? { width: `${skill.value}%` } : {}}
                  transition={{ duration: 1.4, delay: 0.3, ease: [0.25, 1, 0.5, 1] }}
                  style={{
                    height: '100%',
                    background: 'linear-gradient(90deg, var(--accent2), var(--accent))',
                    borderRadius: 999,
                  }}
                />
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}