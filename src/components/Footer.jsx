import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { site, socialLinks } from '../data/site'

export function Footer() {
  return (
    <footer className="site-footer">
      <div><Link className="brand footer-brand" to="/"><span>{site.initials}</span>{site.name}</Link><p>{site.title}</p></div>
      <div className="footer-links">
        {socialLinks.map((link) => <a key={link.label} href={link.href} target={link.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer">{link.label}<ArrowUpRight aria-hidden="true" /></a>)}
      </div>
      <small>© {new Date().getFullYear()} {site.name}. Built for the path outside the ordinary.</small>
    </footer>
  )
}
