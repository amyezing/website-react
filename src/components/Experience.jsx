import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const jobs = [
  {
    period: 'Feb 2020 – Dec 2023',
    role: 'Freelance Designer',
    company: 'Self-employed',
    desc: 'Delivered creative solutions for clients including logos, marketing materials, and simple websites. Proficient in Adobe Creative Suite with basic HTML/CSS knowledge.',
  },
  {
    period: 'Feb 2018 – Apr 2018',
    role: 'HR Assistant',
    company: 'ES Transport',
    desc: 'Maintained employee compensation records, assisted with payroll processing, and supported benefits enrollment and employee inquiries.',
  },
  {
    period: 'Apr 2017 – Jun 2017',
    role: 'HR Assistant',
    company: 'Resorts World Manila / Steadfast Services Cooperative',
    desc: 'Supported the HR department in administering employee compensation programs and benefits packages with accuracy and timeliness.',
  },
]

export default function Experience() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="experience" style={{
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
      }}>Experience</p>

      <h2 style={{
        fontFamily: 'var(--font-display)',
        fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)',
        fontWeight: 700,
        letterSpacing: '-0.02em',
        lineHeight: 1.15,
        marginBottom: '3rem',
      }}>
        Work history
      </h2>

      <div ref={ref}>
        {jobs.map((job, i) => (
          <motion.div
            key={job.company}
            initial={{ opacity: 0, y: 28 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: i * 0.15, ease: [0.25, 1, 0.5, 1] }}
            style={{
              display: 'grid',
              gridTemplateColumns: '160px 1fr',
              gap: '2.5rem',
              padding: '2rem 0',
              borderTop: i === 0 ? '1px solid var(--border)' : undefined,
              borderBottom: '1px solid var(--border)',
              position: 'relative',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.paddingLeft = '1rem'
              e.currentTarget.style.transition = 'padding 0.3s'
              e.currentTarget.style.borderLeft = '2px solid var(--accent)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.paddingLeft = '0'
              e.currentTarget.style.borderLeft = 'none'
            }}
          >
            <div style={{
              fontSize: '0.78rem',
              color: 'var(--muted)',
              fontWeight: 500,
              paddingTop: '0.15rem',
            }}>
              {job.period}
            </div>

            <div>
              <div style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1rem',
                fontWeight: 600,
                marginBottom: '0.3rem',
                letterSpacing: '-0.01em',
              }}>
                {job.role}
              </div>
              <div style={{
                fontSize: '0.82rem',
                color: 'var(--accent)',
                marginBottom: '0.6rem',
                fontWeight: 500,
              }}>
                {job.company}
              </div>
              <p style={{
                fontSize: '0.875rem',
                color: 'var(--muted)',
                lineHeight: 1.75,
              }}>
                {job.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}