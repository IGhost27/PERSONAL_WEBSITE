import { MediaPlaceholder } from '../components/MediaPlaceholder'
import { Seo } from '../components/Seo'
import { experience } from '../data/experience'

const themes = [
  ['Engineer', 'Replace with how you approach complex systems, constraints, and technical decisions.'],
  ['Leader', 'Replace with how you create clarity, build trust, and take ambitious work from idea to execution.'],
  ['Researcher', 'Replace with your interests across AI, data, experimentation, and engineering research.'],
  ['Explorer', 'Replace with how travel, challenge, and the outdoors shape your point of view.'],
  ['Human performance', 'Replace with your relationship to strength, training, athleticism, and sustained capability.'],
]

export function About() {
  return <><Seo title="About" /><section className="page-hero about-hero page-shell"><div><p className="page-kicker">About</p><h1>Built by curiosity.<br />Shaped by challenge.</h1><p>Replace this with a short personal introduction that connects your work, values, and life beyond engineering.</p></div><MediaPlaceholder alt="Portrait of Your Name" label="Add your portrait" /></section><section className="theme-list page-shell">{themes.map(([title, body], i) => <article key={title}><span>0{i + 1}</span><h2>{title}</h2><p>{body}</p></article>)}</section><section className="quote-band"><blockquote>“Why fit in, when you can fit out?”</blockquote><p>The FitOut philosophy</p></section><section className="experience-section page-shell"><h2>Experience</h2><div className="timeline">{experience.map((item) => <article key={`${item.company}-${item.role}`}><div className="timeline-date">{item.dates}</div><div><h3>{item.role}</h3><p className="company">{item.company} / {item.location}</p><p>{item.description}</p><ul>{item.accomplishments.map((a) => <li key={a}>{a}</li>)}</ul><div className="tag-list">{item.technologies.map((t) => <span key={t}>{t}</span>)}</div></div></article>)}</div></section></>
}
