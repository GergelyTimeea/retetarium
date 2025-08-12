import { useMemo, useState } from 'react'
import recipes from '../data/recipes.json'
import RecipeCard from '../components/RecipeCard'

export default function Recipes() {
  const [q, setQ] = useState('')
  const [tag, setTag] = useState('all')

  const tags = useMemo(() => ['all', ...new Set(recipes.flatMap(r => r.tags))], [])
  const filtered = recipes.filter(r => {
    const okText = r.title.toLowerCase().includes(q.toLowerCase())
    const okTag = tag === 'all' || r.tags.includes(tag)
    return okText && okTag
  })

  return (
    <>
      <h1>Toate rețetele</h1>
      <div className="filters">
        <input value={q} onChange={e=>setQ(e.target.value)} placeholder="Caută după titlu…" />
        <select value={tag} onChange={e=>setTag(e.target.value)}>
          {tags.map(t => <option key={t} value={t}>{t}</option>)}
        </select>
      </div>
      <div className="grid">
        {filtered.map(r => <RecipeCard {...r} />)}
      </div>
    </>
  )
}
