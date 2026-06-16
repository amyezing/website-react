import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const projects = [
  {
    tag: '3D Design',
    title: 'Sushi 3D Design',
    desc: '3D product visualizations and design work showcased on Behance.',
    href: 'https://www.behance.net/gallery/200118979/3D-projects/modules/1134311787',
  },
  {
    tag: 'Graphic Design',
    title: 'Layout Illustration',
    desc: 'Editorial illustration and graphic design layouts for print and digital.',
    href: 'https://www.behance.net/gallery/200155973/Layout/modules/1134530117',
  },
  {
    tag: 'Video',
    title: 'Digital marketing video',
    desc: 'Video advertisement produced for digital marketing campaigns.',
    href: 'https://drive.google.com/file/d/1MIPY6OVJu6Tg_C_jIj-NTjFidnQ5jZS2/view',
  },
  {
    tag: 'Video Editing',
    title: 'Reels',
    desc: 'Short-form video content edited for social media engagement.',
    href: 'https://drive.google.com/file/d/11IZLpcVj5jjPDAS4-u34cFgAhcFTBRtD/view',
  },
]

export default function Portfolio() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="portfolio" style={{
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
      }}>Portfolio</p>

      <h2 style={{
        fontFamily: 'var(--font-display)',
        fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)',
        fontWeight: 700,
        letterSpacing: '-0.02em',
        lineHeight: 1.15,
        marginBottom: '3rem',
      }}>
        Selected work
      </h2>

      <div ref={ref} style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: '1.25rem',
      }}>
        {projects.map((p, i) => (
          <motion.a
            key={p.title}
            href={p.href}
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 28 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: i * 0.1, ease: [0.25, 1, 0.5, 1] }}
            whileHover={{ y: -4 }}
            style={{
              background: 'var(--bg2)',
              border: '1px solid var(--border)',
              borderRadius: 'var(--radius)',
              padding: '1.75rem',
              textDecoration: 'none',
              color: 'inherit',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.6rem',
              position: 'relative',
              transition: 'border-color 0.25s',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = 'var(--accent)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = 'var(--border)'
            }}
          >
            {/* Arrow */}
            <span style={{
              position: 'absolute',
              top: '1.25rem',
              right: '1.25rem',
              fontSize: '1rem',
              color: 'var(--muted)',
            }}>↗</span>

            {/* Tag */}
            <span style={{
              fontSize: '0.7rem',
              fontWeight: 600,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: 'var(--accent)',
              background: 'var(--pill-bg)',
              border: '1px solid rgba(184,240,200,0.12)',
              padding: '0.25rem 0.65rem',
              borderRadius: '999px',
              width: 'fit-content',
            }}>
              {p.tag}
            </span>

            <h3 style={{
              fontFamily: 'var(--font-display)',
              fontSize: '1rem',
              fontWeight: 600,
              letterSpacing: '-0.01em',
            }}>
              {p.title}
            </h3>

            <p style={{
              fontSize: '0.85rem',
              color: 'var(--muted)',
            }}>
              {p.desc}
            </p>
          </motion.a>
        ))}
      </div>
    </section>
  )
}