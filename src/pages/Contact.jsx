import { ArrowUpRight, Mail } from 'lucide-react'
import { Seo } from '../components/Seo'
import { site, socialLinks } from '../data/site'

export function Contact() {
  return <><Seo title="Contact" /><section className="contact-page page-shell"><p className="page-kicker">Contact</p><h1>LET’S BUILD SOMETHING<br />WORTH REMEMBERING.</h1><a className="email-link" href={`mailto:${site.email}`}><Mail />{site.email}</a><div className="contact-links">{socialLinks.filter((l) => l.label !== 'Email').map((link) => <a key={link.label} href={link.href} target="_blank" rel="noreferrer"><span>{link.label}</span><ArrowUpRight /></a>)}</div></section></>
}
