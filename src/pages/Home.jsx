import recipes from '../data/recipes.json'
import RecipeCard from '../components/RecipeCard'

export default function Home() {
  const latest = recipes.slice(0,3)
  return (
    <>
      <section className="hero">
        <h1>Caiet de rețete rapide</h1>
        <p>Rețete scurte pentru zile aglomerate. Filtrează după taguri și cere altele pe pagina de contact.</p>
      </section>
      <h2>Rețete noi</h2>
      <div className="grid">
        {latest.map(r => <RecipeCard key={r.id} {...r} />)}
      </div>
    </>
  )
}
