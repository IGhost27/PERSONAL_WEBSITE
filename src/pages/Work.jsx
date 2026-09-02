import { ProjectCard } from '../components/ProjectCard'
import { Seo } from '../components/Seo'
import { projects } from '../data/projects'

export function Work() {
  return <><Seo title="Work" description="Selected engineering, AI, research, and product development work." /><section className="page-hero page-shell"><p className="page-kicker">Work</p><h1>Ideas tested<br />against reality.</h1><p>Selected engineering, research, and product work. Replace these placeholders with projects that reveal how you think.</p></section><section className="page-shell project-grid work-page-grid">{projects.map((p, i) => <ProjectCard key={p.slug} project={p} index={i} />)}</section></>
}
