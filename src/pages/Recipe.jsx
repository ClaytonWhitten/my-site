import { Link, useParams } from 'react-router-dom'
import { recipes } from '../data/recipes'
import './Recipe.css'

export default function Recipe() {
  const { id } = useParams()
  const recipe = recipes.find((r) => r.id === id)

  if (!recipe) {
    return (
      <main className="recipe-page">
        <nav className="recipes-nav">
          <Link to="/recipes" className="back-link">← Back to Recipes</Link>
        </nav>
        <p style={{ color: 'var(--text-muted)', marginTop: '80px', textAlign: 'center' }}>
          Recipe not found.
        </p>
      </main>
    )
  }

  return (
    <main className="recipe-page">
      <nav className="recipes-nav">
        <Link to="/recipes" className="back-link">← Back to Recipes</Link>
      </nav>

      <header className="recipe-header">
        <span className="recipe-category-tag">{recipe.category}</span>
        <h1 className="recipe-title">{recipe.title}</h1>
        {recipe.description && <p className="recipe-description">{recipe.description}</p>}
      </header>

      <div className="recipe-body">
        <section className="recipe-section">
          <h2>Ingredients</h2>
          <ul className="ingredients-list">
            {recipe.ingredients.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="recipe-section">
          <h2>Steps</h2>
          <ol className="steps-list">
            {recipe.steps.map((step, i) => (
              <li key={i}>{step}</li>
            ))}
          </ol>
        </section>
      </div>
    </main>
  )
}