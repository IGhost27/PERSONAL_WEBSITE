import { ArrowDownRight, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { MediaPlaceholder } from '../components/MediaPlaceholder'
import { PhotoGallery } from '../components/PhotoGallery'
import { ProjectCard } from '../components/ProjectCard'
import { Seo } from '../components/Seo'
import { projects } from '../data/projects'

export function Home() {
  return (
    <>
      <Seo />
      <section className="hero">
        <MediaPlaceholder className="hero-media" alt="Your strongest outdoor or adventure photograph" label="Add your defining photograph or video still" eager />
        <div className="hero-scrim" />
        <div className="hero-content reveal">
          <p className="hero-kicker">Engineering beyond the expected</p>
          <h1>BUILD HARD THINGS.<br />GO FARTHER.</h1>
          <p>I work where engineering, intelligence, leadership, and exploration meet.</p>
          <div className="hero-actions"><Link className="button button-primary" to="/work">Explore work<ArrowRight /></Link><Link className="text-link light" to="/about">About me<ArrowDownRight /></Link></div>
        </div>
      </section>

      <section className="positioning page-shell reveal-on-scroll">
        <p className="index-mark">01</p>
        <div><h2>The most interesting problems live outside the obvious path.</h2><p>My work spans engineering, artificial intelligence, research, leadership, international development, and human performance.</p></div>
      </section>

      <section className="work-section page-shell">
        <div className="work-title"><h2>Selected work</h2><Link className="text-link" to="/work">View all projects<ArrowRight /></Link></div>
        <div className="project-grid">{projects.map((project, index) => <ProjectCard key={project.slug} project={project} index={index} />)}</div>
      </section>

      <section className="fitout-callout">
        <div className="fitout-copy"><p>FitOut</p><h2>WHY FIT IN,<br />WHEN YOU CAN<br /><em>FIT OUT?</em></h2><Link className="button button-light" to="/fitout">Enter FitOut<ArrowRight /></Link></div>
        <MediaPlaceholder alt="A cinematic personal outdoor photograph" label="Add full-height FitOut photograph" />
      </section>

      <section className="gallery-section page-shell"><h2>Life beyond the desk.</h2><PhotoGallery /></section>
      <section className="contact-band page-shell"><p>Have an ambitious problem?</p><h2>LET’S BUILD SOMETHING<br />WORTH REMEMBERING.</h2><Link className="button button-primary" to="/contact">Start a conversation<ArrowRight /></Link></section>
    </>
  )
}
