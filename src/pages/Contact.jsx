import { ArrowUpRight, Mail } from 'lucide-react'
import { Seo } from '../components/Seo'
import { site, socialLinks } from '../data/site'

export function Contact() {
  return <div className="contact-page page-shell"><Seo title="Contact | Ian Ortega" description="Start a conversation with Ian Ortega about technology, engineering, research, or the next trail." /><span className="route-label">05 / WHAT'S NEXT</span><h1>What's next?</h1><p className="contact-statement">Good people.<br />Hard problems.<br />Interesting ideas.</p><p>I'm always open to conversations about technology, engineering, research, building something new, or finding the next trail.</p><a className="email-link" href={`mailto:${site.email}`}><Mail />{site.email}</a><div className="contact-links">{socialLinks.filter((item) => item.label !== 'Email').map((item) => <a key={item.label} href={item.href} target="_blank" rel="noreferrer"><span>{item.label}</span><ArrowUpRight /></a>)}</div></div>
}