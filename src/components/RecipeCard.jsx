export default function RecipeCard({ title, time, ingredients, tags, image }) {
  return (
    <article className="card">
      {image && <img src={image} alt={title} />}
      <div className="card-body">
        <h3>{title}</h3>
        <p><strong>Timp:</strong> {time} min</p>
        <p className="ing">{ingredients.slice(0,4).join(', ')}{ingredients.length>4?'…':''}</p>
        <div className="tags">
          {tags.map(t => <span key={t} className="tag">#{t}</span>)}
        </div>
      </div>
    </article>
  )
}
