import { Seo } from '../components/Seo'
import { ProjectCard } from '../components/ProjectCard'
import { Reveal } from '../components/Reveal'
import { projects } from '../data/projects'

export function Projects() {
  return <div className="projects-page page-shell"><Seo title="Projects | Ian Ortega" description="Engineering, AI research, product, and humanitarian case studies by Ian Ortega." /><header className="page-hero"><span className="route-label">04 / WHAT I'VE BUILT</span><h1>Questions worth<br />building through.</h1><p>I like projects with an uncomfortable amount of “I'm not completely sure how we're going to do this yet.” Here's what happened next.</p></header><div className="projects-index">{projects.map((project, index) => <Reveal key={project.slug}><ProjectCard project={project} index={index} /></Reveal>)}</div></div>
}