import { Link } from 'react-router-dom'
import './Home.css'

const projects = [
  {
    path: '/recipes',
    emoji: '🍳',
    title: "Recipes",
    description: 'A collection of recipes passed over to me.',
    accent: '#f97316',
  },
]

export default function Home() {
  return (
    <main className="home">
      <header className="home-header">
        <h1 className="home-title">Clayton Whitten</h1>
        <p className="home-tagline">a collection of things</p>
      </header>

      <section className="home-grid">
        {projects.map((p) => (
          <Link to={p.path} key={p.path} className="card" style={{ '--accent': p.accent }}>
            <span className="card-emoji">{p.emoji}</span>
            <h2 className="card-title">{p.title}</h2>
            <p className="card-desc">{p.description}</p>
          </Link>
        ))}
      </section>

      <footer className="home-footer">
        <p>made by clayton · <a href="https://github.com/YOUR_USERNAME/my-site" target="_blank" rel="noreferrer">github</a></p>
      </footer>
    </main>
  )
}