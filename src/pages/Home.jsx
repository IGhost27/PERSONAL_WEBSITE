import { ArrowDown, ArrowRight, Compass, Eye, Lightbulb, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'
import { MediaPlaceholder } from '../components/MediaPlaceholder'
import { Reveal } from '../components/Reveal'
import { Seo } from '../components/Seo'
import { currently } from '../data/resume'

const qualities = [
  { icon: Compass, title: 'Curious', text: 'I rarely leave a question alone. I want to understand how things work, why people choose what they choose, and what might happen if we try a different way.' },
  { icon: Eye, title: 'Wide-angle', text: 'I am most alive at the intersection of fields: when engineering meets storytelling, technology meets people, or training becomes an experiment.' },
  { icon: Lightbulb, title: 'Inventive', text: 'I like starting with an unfinished idea and giving it form, whether that becomes a system, a product, a research question, or a new adventure.' },
  { icon: Sparkles, title: 'Future-minded', text: 'I pay attention to what could be, then work backward toward something real. Possibility matters more when you are willing to build toward it.' },
]

const domains = [
  ['01', 'Technology', 'Tools that expand what people can understand and do.'],
  ['02', 'Human systems', 'Health, performance, teams, and the decisions behind them.'],
  ['03', 'Physical world', 'Hardware, infrastructure, water, terrain, and things that must actually work.'],
  ['04', 'Story', 'Documenting the experience so an idea can travel farther.'],
  ['05', 'Unknown', 'The projects, places, and questions I have not met yet.'],
]

const instincts = [
  ['Go toward the question', 'Curiosity is useful when it changes what you notice and where you are willing to begin.'],
  ['Learn by making', 'Thinking matters. So does putting an imperfect first version into the world.'],
  ['Stay adaptable', 'New terrain rewards preparation, but it also rewards the ability to change the plan.'],
  ['Make room for wonder', 'Not everything meaningful needs to optimize a metric. Some things are worth doing because they make life larger.'],
]

const paths = [
  ['Professional', "The work I've done", '/resume', 'Add professional or engineering photo'],
  ['Build', "Ideas made real", '/projects', 'Add project process photo'],
  ['Explore', 'Life beyond the map', '/fitout', 'Add FitOut landscape photo'],
]

export function Home() {
  return <div className="home-page"><Seo title="Ian Ortega | Curious by Nature" description="Meet Ian Ortega: a curious builder, explorer, and creative thinker working across technology, engineering, human performance, and adventure." />
    <section className="home-hero human-hero"><MediaPlaceholder src={`${import.meta.env.BASE_URL}images/Pictures/Turtle_Enhanced.png`} alt="Ian Ortega in a place that feels alive" className="hero-media" eager /><div className="hero-scrim" /><div className="hero-content"><span className="route-label">01 / A HUMAN IN PROGRESS</span><h1>Ian<br />Ortega</h1><p className="identity">Curious by nature / restless by choice</p><p className="hero-copy">I follow interesting questions across disciplines, build things to see what is possible, and collect a few good stories along the way.</p></div><div className="hero-field-note"><span>Current coordinates</span><strong>Somewhere between<br />an idea and an adventure</strong></div><a className="scroll-cue" href="#introduction"><span>Meet Ian</span><ArrowDown /></a></section>

    <Reveal as="section" className="human-intro page-shell"><span className="section-label">Not one lane</span><div id="introduction"><h2>I have never been very good at being just one thing.</h2><p className="lead-copy">Engineer. Researcher. Competitor. Creator. Traveler. Student of whatever catches my attention next.</p><p>The labels change with the room. The constant is curiosity: a pull toward difficult questions, unfamiliar environments, and ideas that are not fully formed yet. I enjoy learning fast, connecting dots between worlds, and making something useful from what I find.</p><p>I am less interested in fitting a category than becoming a more capable, imaginative, and fully awake person.</p></div></Reveal>

    <section className="qualities-section page-shell"><header><span className="section-label">What drives me</span><h2>More compass<br />than category.</h2></header><div className="quality-grid">{qualities.map(({ icon: Icon, title, text }, index) => <Reveal as="article" key={title}><div><span>0{index + 1}</span><Icon aria-hidden="true" /></div><h3>{title}</h3><p>{text}</p></Reveal>)}</div></section>

    <section className="range-band"><div className="page-shell"><Reveal as="header"><span className="section-label">A wide operating range</span><h2>Jack of many trades.<br /><em>Master of connection.</em></h2><p>I do not see separate interests. I see a larger system, with ideas crossing boundaries and making each other better.</p></Reveal><div className="domain-index">{domains.map(([number, title, text]) => <Reveal as="article" key={title}><span>{number}</span><h3>{title}</h3><p>{text}</p></Reveal>)}</div></div></section>

    <section className="instincts-section page-shell"><Reveal as="header"><span className="section-label">How I move through the world</span><h2>A few instincts<br />I trust.</h2></Reveal><div>{instincts.map(([title, text]) => <Reveal as="article" key={title}><h3>{title}</h3><p>{text}</p></Reveal>)}</div></section>

    <section className="philosophy-band"><div className="page-shell"><Reveal><h2>Why fit in,<br />when you can<br /><em>fit out?</em></h2><p>FitOut is a personal reminder to choose curiosity over comfort. Take the trip. Attempt the project. Ask the question that changes the conversation. Choose the path without instructions every now and then, not to be different for its own sake, but to find out who you become there.</p></Reveal></div></section>

    <Reveal as="section" className="currently page-shell"><header><span className="section-label">Life, lately</span><p>Greater Chicago Area</p></header><div>{currently.map(([label, value]) => <p key={label}><span>{label}</span><strong>{value}</strong></p>)}</div></Reveal>

    <section className="home-ending page-shell"><Reveal as="header"><span className="section-label">Follow a thread</span><h2>There is more<br />than one way in.</h2><p>The roles, projects, and adventures are different expressions of the same person. Start wherever your curiosity points.</p></Reveal><div className="pathways">{paths.map(([title, text, to, label]) => <Link to={to} key={title} className="pathway"><MediaPlaceholder alt={`${title} pathway`} label={label} /><div><span>{title}</span><h2>{text}</h2><ArrowRight /></div></Link>)}</div></section>
  </div>
}