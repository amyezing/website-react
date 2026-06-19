const items = [
  'Android Development', 'Web Development', 'UX/UI Design',
  'Figma', 'Kotlin', 'Java', 'HTML & CSS', 'JavaScript',
  'Adobe Suite', 'Freelance Designer',
]

export default function Marquee() {
  const doubled = [...items, ...items]
  return (
    <div className="marquee-wrap">
      <div className="marquee-track">
        {doubled.map((text, i) => (
          <span className="marquee-item" key={i}>
            <span className="marquee-dot" />
            {text}
          </span>
        ))}
      </div>
    </div>
  )
}