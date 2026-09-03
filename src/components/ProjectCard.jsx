import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { MediaPlaceholder } from './MediaPlaceholder'

export function ProjectCard({ project, index }) {
  return <article className="project-card"><Link to={`/projects/${project.slug}`} className="project-visual" aria-label={`View ${project.title} case study`}><MediaPlaceholder src={project.image} alt={`${project.title} project cover`} label={`Add ${project.title} cover`} /></Link><div className="project-card-copy"><div className="project-meta"><span>0{index + 1} / {project.category}</span><span>{project.year}</span></div><p className="project-question">{project.question}</p><h2><Link to={`/projects/${project.slug}`}>{project.title}<ArrowUpRight aria-hidden="true" /></Link></h2><p>{project.description}</p><ul className="tag-list">{project.technologies.map((item) => <li key={item}>{item}</li>)}</ul></div></article>
}