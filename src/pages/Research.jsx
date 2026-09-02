import { ArrowUpRight } from 'lucide-react'
import { Seo } from '../components/Seo'
import { publications } from '../data/publications'

export function Research() {
  return <><Seo title="Research" description="Research and publications across artificial intelligence, data science, and engineering." /><section className="page-hero page-shell"><p className="page-kicker">Research</p><h1>Questions worth<br />testing rigorously.</h1><p>Research across artificial intelligence, data science, and engineering. Replace the sample entry with your verified work.</p></section><section className="publications page-shell"><h2>Publications and presentations</h2>{publications.map((item) => <article key={item.title}><div className="publication-year">{item.year}</div><div><h3>{item.title}</h3><p className="publication-meta">{item.authors}<br />{item.venue}</p><p>{item.summary}</p><details><summary>Citation</summary><p>{item.citation}</p></details><div className="publication-links">{item.links.paper && <a href={item.links.paper}>Paper<ArrowUpRight /></a>}{item.links.presentation && <a href={item.links.presentation}>Presentation<ArrowUpRight /></a>}</div></div></article>)}</section></>
}
