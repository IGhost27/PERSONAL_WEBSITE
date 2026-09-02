import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { site } from '../data/site'

const links = [['Work', '/work'], ['About', '/about'], ['Research', '/research'], ['FitOut', '/fitout'], ['Contact', '/contact']]

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => { setOpen(false); window.scrollTo({ top: 0, behavior: 'instant' }) }, [location.pathname])
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`site-nav ${scrolled ? 'is-scrolled' : ''}`}>
      <Link className="brand" to="/" aria-label="Home"><span>{site.initials}</span>{site.name}</Link>
      <nav aria-label="Main navigation" className={open ? 'is-open' : ''}>
        {links.map(([label, href]) => <NavLink key={href} to={href}>{label}</NavLink>)}
      </nav>
      <button className="menu-button" type="button" onClick={() => setOpen(!open)} aria-expanded={open} aria-label={open ? 'Close navigation' : 'Open navigation'}>
        {open ? <X /> : <Menu />}
      </button>
    </header>
  )
}
