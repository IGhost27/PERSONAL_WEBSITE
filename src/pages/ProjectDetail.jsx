import { ArrowLeft, ArrowUpRight } from 'lucide-react'
import { Link, useParams } from 'react-router-dom'
import { MediaPlaceholder } from '../components/MediaPlaceholder'
import { Seo } from '../components/Seo'
import { projects } from '../data/projects'

const chapters = [['The context', 'problem'], ['My role', 'role'], ['The approach', 'approach'], ['The build', 'details'], ['Results', 'results'], ['What I learned', 'lessons']]

export function ProjectDetail() {
  const { slug } = useParams()
  const project = projects.find((item) => item.slug === slug)
  if (!project) return <div className="not-found page-shell"><p>PROJECT NOT FOUND</p><h1>This path ends here.</h1><Link className="button button-primary" to="/projects">Back to projects</Link></div>
  return <article className="case-page"><Seo title={`${project.title} | Ian Ortega`} description={project.description} /><header className="case-hero page-shell"><Link className="text-link back-link" to="/projects"><ArrowLeft /> All projects</Link><div className="case-heading"><div><span className="route-label">{project.category} / {project.year}</span><h1>{project.title}</h1></div><p>{project.question}</p></div><MediaPlaceholder src={project.image} alt={`${project.title} cover`} label={`Add ${project.title} hero media`} /></header><div className="case-layout page-shell"><aside><span>Case study</span><ul>{chapters.map(([label]) => <li key={label}>{label}</li>)}</ul><div className="case-links">{Object.entries(project.links).filter(([, value]) => value).map(([label, value]) => <a key={label} href={value} target="_blank" rel="noreferrer">{label}<ArrowUpRight /></a>)}</div></aside><div className="case-story"><section className="case-question"><span>The question</span><h2>{project.question}</h2></section>{chapters.map(([label, field]) => <section key={field}><span>{label}</span><h2>{label}</h2><p>{project[field]}</p></section>)}<section><span>Gallery / media</span><h2>The work, up close.</h2><div className="case-gallery"><MediaPlaceholder alt={`${project.title} process`} label="Add process photograph or diagram" /><MediaPlaceholder alt={`${project.title} detail`} label="Add result, CAD, or research figure" /></div></section></div></div></article>
}