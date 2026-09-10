import { ArrowDownToLine, ArrowUpRight } from "lucide-react";
import { Seo } from "../components/Seo";
import { Reveal } from "../components/Reveal";
import { MediaPlaceholder } from "../components/MediaPlaceholder";
import { resume } from "../data/resume";

function Section({ title, children }) {
  return (
    <Reveal as="section" className="resume-section">
      <header>
        <h2>{title}</h2>
      </header>
      {children}
    </Reveal>
  );
}

function EditorialList({ items }) {
  return (
    <div className="editorial-list">
      {items.map((item) => (
        <article key={item.title}>
          <span>{item.meta ?? item.dates}</span>
          <div>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
            {item.link && (
              <a
                className="text-link"
                href={item.link}
                target="_blank"
                rel="noreferrer"
              >
                Read publication <ArrowUpRight />
              </a>
            )}
          </div>
        </article>
      ))}
    </div>
  );
}

export function Resume() {
  return (
    <div className="resume-page page-shell">
      <Seo
        title="Resume | Ian Ortega"
        description="Ian Ortega's experience in aerospace AI, healthcare engineering, research, humanitarian infrastructure, and technical leadership."
      />
      <header className="page-hero resume-hero">
        <div className="resume-hero-copy">
          <h1>
            Work with
            <br />a point of view.
          </h1>
          <p>{resume.summary}</p>
          <a
            className="button button-outline"
            href={`${import.meta.env.BASE_URL}resume/IanOrtega_Resume.pdf`}
            download="IanOrtega_Resume.pdf"
          >
            <ArrowDownToLine /> Download resume
          </a>
        </div>
        <figure className="resume-portrait">
          <MediaPlaceholder
            src={`${import.meta.env.BASE_URL}images/Pictures/headshot_enhanced.png`}
            alt="Portrait of Ian Ortega"
            eager
          />
          <figcaption>
            <span>Ian Ortega</span>
            <span>Greater Chicago Area</span>
          </figcaption>
        </figure>
      </header>
      <Section title="Experience">
        <div className="timeline">
          {resume.experience.map((item) => (
            <article key={item.organization}>
              <div className="timeline-marker" />
              <div className="timeline-meta">
                <span>{item.dates}</span>
                <strong>{item.organization}</strong>
                <small>{item.location}</small>
              </div>
              <div>
                <h3>{item.role}</h3>
                <p className="statement">{item.statement}</p>
                <ul>
                  {item.accomplishments.map((accomplishment) => (
                    <li key={accomplishment}>{accomplishment}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </Section>
      <Section title="Research">
        <EditorialList items={resume.research} />
      </Section>
      <Section title="Selected projects">
        <EditorialList items={resume.projects} />
      </Section>
      <Section title="Education">
        <div className="editorial-list">
          {resume.education.map((item) => (
            <article key={item.school}>
              <span>{item.dates}</span>
              <div>
                <h3>{item.school}</h3>
                <p className="statement">{item.degree}</p>
                <p>{item.details}</p>
                <small>{item.location}</small>
              </div>
            </article>
          ))}
        </div>
      </Section>
      <Section title="Leadership">
        <EditorialList items={resume.leadership} />
      </Section>
      <Section title="Recognition">
        <ol className="award-list">
          {resume.awards.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ol>
      </Section>
    </div>
  );
}
