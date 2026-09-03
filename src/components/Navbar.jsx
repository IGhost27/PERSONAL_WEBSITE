import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { site } from '../data/site'

const links = [['01', 'Home', '/'], ['02', 'Resume', '/resume'], ['03', 'FitOut', '/fitout'], ['04', 'Projects', '/projects'], ['05', 'Contact', '/contact']]

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
  const isOverDarkHero = location.pathname === '/' || location.pathname === '/fitout'
  useEffect(() => { setOpen(false); window.scrollTo({ top: 0, behavior: 'instant' }) }, [location.pathname])
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32)
    onScroll(); window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  return <header className={`site-nav ${isOverDarkHero ? 'is-over-dark' : 'is-over-light'} ${scrolled ? 'is-scrolled' : ''} ${open ? 'menu-open' : ''}`}>
    <Link className="brand" to="/" aria-label="Ian Ortega home"><span>{site.initials}</span>{site.name}</Link>
    <nav aria-label="Main navigation" className={open ? 'is-open' : ''}>{links.map(([number, label, href]) => <NavLink key={href} to={href}><span>{number}</span>{label}</NavLink>)}</nav>
    <button className="menu-button" type="button" onClick={() => setOpen(!open)} aria-expanded={open} aria-label={open ? 'Close navigation' : 'Open navigation'}>{open ? <X /> : <Menu />}</button>
  </header>
}