import './index.css'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import About from './components/About'
import Services from './components/Services'
import Portfolio from './components/Portfolio'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Cursor from './components/Cursor'

export default function App() {
  return (
    <>
      <Nav />
      <Hero />
      <Marquee />
      <About />
      <Services />
      <Portfolio />
      <Experience />
      <Contact />
      <Cursor />
      <footer style={{
        borderTop: '1px solid var(--border)',
        padding: '2rem 3rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        color: 'var(--muted)',
        fontSize: '0.8rem',
      }}>
        <span style={{
          fontFamily: 'var(--font-display)',
          fontWeight: 700,
          color: 'var(--accent)',
          fontSize: '0.95rem',
        }}>Mary Rose Aquino</span>
        <span>© 2025 · Built with React & Framer Motion</span>
      </footer>
    </>
  )
}