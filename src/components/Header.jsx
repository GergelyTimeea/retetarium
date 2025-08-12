import { Link, NavLink } from 'react-router-dom'
import ThemeToggle from './ThemeToggle'

export default function Header() {
  return (
    <header className="header">
      <Link to="/" className="brand">🍳 Rețetarium</Link>
      <nav>
        <NavLink to="/" end>Acasă</NavLink>
        <NavLink to="/retete">Rețete</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav>
      <ThemeToggle />
    </header>
  )
}
