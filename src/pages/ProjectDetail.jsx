import { ArrowLeft, ArrowUpRight, Github } from 'lucide-react'
import { Link, useParams } from 'react-router-dom'
import { MediaPlaceholder } from '../components/MediaPlaceholder'
import { Seo } from '../components/Seo'
import { projects } from '../data/projects'
import { NotFound } from './NotFound'

export function ProjectDetail() {
  const { slug } = useParams()
  const project = projects.find((item) => item.slug === slug)
  if (!project) return <NotFound />
  const sections = [['The problem', project.problem], ['My approach', project.approach], ['Engineering details', project.details], ['Challenges', project.challenges], ['Results', project.results], ['Impact', project.impact], ['Lessons learned', project.lessons]]
  return <><Seo title={project.title} description={project.description} /><article className="case-study"><header className="case-hero page-shell"><Link className="text-link" to="/work"><ArrowLeft />All work</Link><div className="case-title"><div><p>{project.category} / {project.year}</p><h1>{project.title}</h1></div><p>{project.description}</p></div><MediaPlaceholder src={project.image} alt={`${project.title} hero visual`} label="Add project hero image" /></header><div className="case-body page-shell"><aside><strong>Role</strong><p>{project.role}</p><strong>Technologies</strong><ul>{project.technologies.map((item) => <li key={item}>{item}</li>)}</ul><div className="case-links">{project.links.github && <a href={project.links.github}><Github />GitHub</a>}{project.links.external && <a href={project.links.external}>Live project<ArrowUpRight /></a>}</div></aside><div className="case-narrative">{sections.map(([title, body]) => <section key={title}><h2>{title}</h2><p>{body}</p></section>)}<section><h2>Gallery</h2><div className="case-gallery"><MediaPlaceholder alt={`${project.title} detail one`} label="Add project detail" /><MediaPlaceholder alt={`${project.title} detail two`} label="Add project detail" /></div></section></div></div></article></>
}
