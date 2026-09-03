import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { site, socialLinks } from '../data/site'

export function Footer() {
  return <footer className="site-footer"><div><Link className="brand footer-brand" to="/"><span>{site.initials}</span>{site.name}</Link><p>Engineer / Builder / Explorer</p><strong>Why fit in, when you can fit out?</strong></div><div className="footer-links">{socialLinks.filter((link) => link.label !== 'Email').map((link) => <a key={link.label} href={link.href} target="_blank" rel="noreferrer">{link.label}<ArrowUpRight aria-hidden="true" /></a>)}</div><small>© {new Date().getFullYear()} {site.name}</small></footer>
}