export default function Nav() {
  return (
    <nav style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '1.1rem 3rem',
      borderBottom: '1px solid var(--border)',
    }}>
      <a href="#home" style={{
        fontFamily: 'var(--font-display)',
        fontWeight: 700,
        fontSize: '1.1rem',
        color: 'var(--accent)',
        textDecoration: 'none',
      }}>
        MRA
      </a>

      <ul style={{ display: 'flex', gap: '2rem', listStyle: 'none' }}>
        <li><a href="#about" style={{ color: 'var(--muted)', textDecoration: 'none' }}>About</a></li>
        <li><a href="#service" style={{ color: 'var(--muted)', textDecoration: 'none' }}>Services</a></li>
        <li><a href="#portfolio" style={{ color: 'var(--muted)', textDecoration: 'none' }}>Portfolio</a></li>
        <li><a href="#experience" style={{ color: 'var(--muted)', textDecoration: 'none' }}>Experience</a></li>
      </ul>

      <a href="#contact" style={{
        background: 'var(--accent-dim)',
        border: '1px solid rgba(184,240,200,0.2)',
        color: 'var(--accent)',
        padding: '0.45rem 1.1rem',
        borderRadius: 'var(--radius-sm)',
        fontSize: '0.875rem',
        fontWeight: 500,
        textDecoration: 'none',
      }}>
        Get in touch
      </a>
    </nav>
  )
}
