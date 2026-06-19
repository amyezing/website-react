const items = [
  'Android Development', 'Web Development', 'UX/UI Design',
  'Figma', 'Kotlin', 'Java', 'HTML & CSS', 'JavaScript',
  'Adobe Suite', 'Freelance Designer',
]

export default function Marquee() {
  const doubled = [...items, ...items]
  return (
    <div style={{
      position: 'relative',
      width: '100vw',
      maxWidth: '100vw',
      overflow: 'hidden',
      borderTop: '1px solid var(--border)',
      borderBottom: '1px solid var(--border)',
      padding: '0.9rem 0',
      background: 'var(--bg2)',
    }}>
      <div style={{
        display: 'flex',
        width: 'max-content',
        animation: 'marquee 22s linear infinite',
        willChange: 'transform',
      }}>
        {doubled.map((text, i) => (
          <span key={i} style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1.5rem',
            padding: '0 2.5rem',
            fontSize: '0.78rem',
            fontWeight: 600,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: 'var(--muted)',
            whiteSpace: 'nowrap',
          }}>
            <span style={{
              width: 5, height: 5,
              background: 'var(--accent)',
              borderRadius: '50%',
              display: 'inline-block',
              flexShrink: 0,
            }} />
            {text}
          </span>
        ))}
      </div>
    </div>
  )
}