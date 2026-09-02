import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { MediaPlaceholder } from './MediaPlaceholder'

export function ProjectCard({ project, index }) {
  return (
    <article className={`project-card project-card-${index + 1}`}>
      <Link to={`/work/${project.slug}`} className="project-visual" aria-label={`View ${project.title} case study`}>
        <MediaPlaceholder src={project.image} alt={`${project.title} project cover`} label={`Add ${project.title} cover`} />
      </Link>
      <div className="project-meta"><span>{project.category}</span><span>{project.year}</span></div>
      <h3><Link to={`/work/${project.slug}`}>{project.title}<ArrowUpRight aria-hidden="true" /></Link></h3>
      <p>{project.description}</p>
      <ul className="tag-list" aria-label="Technologies">
        {project.technologies.map((item) => <li key={item}>{item}</li>)}
      </ul>
    </article>
  )
}
