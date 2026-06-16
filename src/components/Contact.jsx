import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const socials = [
  { icon: '📸', label: 'Instagram — @itsmyeh_', href: 'https://www.instagram.com/itsmyeh_' },
  { icon: '📘', label: 'Facebook — Mary Rose Aquino', href: 'https://www.facebook.com/aquinomaryrose/' },
  { icon: '🎨', label: 'Behance — maryroseaquino', href: 'https://www.behance.net/maryroseaquino' },
]

export default function Contact() {
  const [sent, setSent] = useState(false)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  const handleSubmit = async (e) => {
    e.preventDefault()
    const form = e.target
    const data = new FormData(form)
    await fetch('https://formspree.io/f/mjgdlnlo', {
       method: 'POST',
       body: data,
       headers: { 'Accept': 'application/json' }
  })
    setSent(true)
    form.reset()
    setTimeout(() => setSent(false), 3000)}

  const inputStyle = {
    background: 'var(--bg2)',
    border: '1px solid var(--border)',
    borderRadius: 'var(--radius-sm)',
    color: 'var(--text)',
    fontFamily: 'var(--font-body)',
    fontSize: '0.9rem',
    padding: '0.75rem 1rem',
    outline: 'none',
    width: '100%',
    transition: 'border-color 0.2s, box-shadow 0.2s',
  }

  return (
    <section id="contact" style={{
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
      }}>Contact</p>

      <h2 style={{
        fontFamily: 'var(--font-display)',
        fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)',
        fontWeight: 700,
        letterSpacing: '-0.02em',
        lineHeight: 1.15,
        marginBottom: '3rem',
      }}>
        Let's work together
      </h2>

      <div ref={ref} className="contact-grid" style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '5rem',
        alignItems: 'start',
      }}>
        {/* Left side */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.25, 1, 0.5, 1] }}
        >
          <p style={{ color: 'var(--muted)', lineHeight: 1.75, marginBottom: '1.5rem' }}>
            Have a project in mind? I'd love to hear about it. Send me a message and let's figure out how I can help.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
            {socials.map(s => (
              <motion.a
                key={s.href}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                whileHover={{ x: 4, color: 'var(--accent)' }}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.6rem',
                  color: 'var(--muted)',
                  textDecoration: 'none',
                  fontSize: '0.875rem',
                  width: 'fit-content',
                }}
              >
                {s.icon} {s.label}
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Right side - Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.25, 1, 0.5, 1] }}
          style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}
        >
          {[
            { id: 'name', label: 'Name', type: 'text', placeholder: 'Your name' },
            { id: 'email', label: 'Email', type: 'email', placeholder: 'you@example.com' },
          ].map(f => (
            <div key={f.id} style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
              <label htmlFor={f.id} style={{
                fontSize: '0.78rem', fontWeight: 500,
                color: 'var(--muted)', letterSpacing: '0.03em',
              }}>
                {f.label}
              </label>
              <input
                id={f.id} name={f.id} type={f.type} placeholder={f.placeholder} required
                style={inputStyle}
                onFocus={e => {
                  e.target.style.borderColor = 'rgba(184,240,200,0.35)'
                  e.target.style.boxShadow = '0 0 0 3px rgba(184,240,200,0.07)'
                }}
                onBlur={e => {
                  e.target.style.borderColor = 'var(--border)'
                  e.target.style.boxShadow = 'none'
                }}
              />
            </div>
          ))}

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
            <label htmlFor="message" style={{
              fontSize: '0.78rem', fontWeight: 500,
              color: 'var(--muted)', letterSpacing: '0.03em',
            }}>
              Message
            </label>
            <textarea
              id="message" name="message" placeholder="Tell me about your project..." required
              style={{ ...inputStyle, minHeight: 120, resize: 'vertical' }}
              onFocus={e => {
                e.target.style.borderColor = 'rgba(184,240,200,0.35)'
                e.target.style.boxShadow = '0 0 0 3px rgba(184,240,200,0.07)'
              }}
              onBlur={e => {
                e.target.style.borderColor = 'var(--border)'
                e.target.style.boxShadow = 'none'
              }}
            />
          </div>

          <motion.button
            type="submit"
            whileHover={{ y: -2, boxShadow: '0 8px 20px rgba(184,240,200,0.15)' }}
            style={{
              background: sent ? '#7edba0' : 'var(--accent)',
              color: '#0d0d0f',
              border: 'none',
              borderRadius: 'var(--radius-sm)',
              padding: '0.8rem 1.75rem',
              fontFamily: 'var(--font-body)',
              fontWeight: 600,
              fontSize: '0.9rem',
              cursor: 'pointer',
              alignSelf: 'flex-start',
              transition: 'background 0.2s',
            }}
          >
            {sent ? 'Sent! ✓' : 'Send message'}
          </motion.button>
        </motion.form>
      </div>
    </section>
  )
}