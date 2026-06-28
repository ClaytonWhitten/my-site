import { Link } from 'react-router-dom'
import { recipes } from '../data/recipes'
import './Recipes.css'

export default function Recipes() {
  return (
    <main className="recipes-page">
      <nav className="recipes-nav">
        <Link to="/" className="back-link">← Back</Link>
      </nav>
      <header className="recipes-header">
        <span className="recipes-emoji">🍳</span>
        <h1>Recipes</h1>
        <p>{recipes.length} recipes and counting</p>
      </header>

      <section className="recipes-grid">
        {recipes.map((recipe) => (
          <Link to={`/recipes/${recipe.id}`} key={recipe.id} className="recipe-card">
            <span className="recipe-category">{recipe.category}</span>
            <h2 className="recipe-title">{recipe.title}</h2>
            <p className="recipe-desc">{recipe.description}</p>
          </Link>
        ))}
      </section>
    </main>
  )
}