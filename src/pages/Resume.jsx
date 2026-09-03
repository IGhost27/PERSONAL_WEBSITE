import { ArrowDownToLine, ArrowUpRight } from 'lucide-react'
import { Seo } from '../components/Seo'
import { Reveal } from '../components/Reveal'
import { MediaPlaceholder } from '../components/MediaPlaceholder'
import { resume } from '../data/resume'

function Section({ number, title, children }) {
  return <Reveal as="section" className="resume-section"><header><span>{number}</span><h2>{title}</h2></header>{children}</Reveal>
}

export function Resume() {
  return <div className="resume-page page-shell">
    <Seo title="Resume | Ian Ortega" description="Ian Ortega's experience, research, education, leadership, skills, and recognition." />
    <header className="page-hero resume-hero"><div className="resume-hero-copy"><span className="route-label">02 / WHAT I'VE DONE</span><h1>Work with<br />a point of view.</h1><p>{resume.summary}</p><a className="button button-outline" href={`${import.meta.env.BASE_URL}resume/Ian-Ortega-Resume.pdf`} download><ArrowDownToLine /> Download resume</a></div><figure className="resume-portrait"><MediaPlaceholder src={`${import.meta.env.BASE_URL}images/Pictures/headshot_enhanced.png`} alt="Portrait of Ian Ortega" eager /><figcaption><span>Ian Ortega</span><span>Greater Chicago Area</span></figcaption></figure></header>
    <Section number="01" title="Experience"><div className="timeline">{resume.experience.map((item) => <article key={item.organization}><div className="timeline-marker" /><div className="timeline-meta"><span>{item.dates}</span><strong>{item.organization}</strong></div><div><h3>{item.role}</h3><p className="statement">{item.statement}</p><ul>{item.accomplishments.map((a) => <li key={a}>{a}</li>)}</ul></div></article>)}</div></Section>
    <Section number="02" title="Research"><div className="editorial-list">{resume.research.map((item) => <article key={item.title}><span>{item.meta}</span><div><h3>{item.title}</h3><p>{item.text}</p>{item.link && <a className="text-link" href={item.link} target="_blank" rel="noreferrer">Read publication <ArrowUpRight /></a>}</div></article>)}</div></Section>
    <Section number="03" title="Education"><div className="education-lockup"><div><h3>{resume.education.school}</h3><p>{resume.education.degree}<br />{resume.education.minor}</p></div><div><strong>{resume.education.year}</strong><span>{resume.education.gpa}</span><span>{resume.education.program}</span></div></div></Section>
    <Section number="04" title="Leadership"><div className="editorial-list">{resume.leadership.map((item) => <article key={item.title}><span>{item.dates}</span><div><h3>{item.title}</h3><p>{item.text}</p></div></article>)}</div></Section>
    <div className="resume-duo"><Section number="05" title="Skills"><ul className="skill-list">{resume.skills.map((item) => <li key={item}>{item}</li>)}</ul></Section><Section number="06" title="Recognition"><ol className="award-list">{resume.awards.map((item) => <li key={item}>{item}</li>)}</ol></Section></div>
  </div>
}