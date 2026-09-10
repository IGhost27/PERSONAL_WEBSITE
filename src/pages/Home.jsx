import { ArrowDown, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { MediaPlaceholder } from "../components/MediaPlaceholder";
import { Reveal } from "../components/Reveal";
import { Seo } from "../components/Seo";

const paths = [
  ["Resume", "The work", "/resume", "images/Pictures/Test_Rig.jpg"],
  [
    "Projects",
    "Ideas in motion",
    "/projects",
    "images/Pictures/Construction.jpg",
  ],
  ["FitOut", "Where I go", "/fitout", "images/Pictures/Allalinhorn_Summit.jpg"],
];

export function Home() {
  return (
    <div className="home-page home-direct">
      <Seo
        title="Ian Ortega"
        description="The story of Ian Ortega—an engineer, researcher, competitor, creator, and explorer driven by curiosity and the pursuit of excellence."
      />

      <section className="home-hero human-hero">
        <MediaPlaceholder
          src={`${import.meta.env.BASE_URL}images/Pictures/Turtle_Hero_Balanced.png`}
          alt="Ian Ortega scuba diving beneath a sea turtle"
          className="hero-media"
          eager
        />
        <div className="hero-scrim" />
        <div className="hero-content">
          <h1>
            Ian
            <br />
            Ortega
          </h1>
          <p className="identity">In pursuit of excellence</p>
        </div>
        <a className="scroll-cue" href="#story">
          <span>Enter the story</span>
          <ArrowDown />
        </a>
      </section>

      <section className="home-range page-shell" id="story">
        <Reveal
          as="div"
          className="range-roles"
          aria-label="Engineer, researcher, competitor, creator, explorer"
        >
          <span>Engineer</span>
          <span>Researcher</span>
          <span>Competitor</span>
          <span>Creator</span>
          <span>Explorer</span>
        </Reveal>
        <Reveal as="div" className="range-statement">
          <h2>Range is the Advantage</h2>
          <p>
            I am not defined by one title. Every success, challenge, and
            unfamiliar place adds another way to understand the world and
            another dimension to what I can offer it.
          </p>
        </Reveal>
      </section>

      <section className="home-drive">
        <div className="page-shell">
          <Reveal as="header">
            <h2>
              Curiosity is not a trait.
              <br />
              It is how I move.
            </h2>
          </Reveal>
          <div className="drive-principles">
            <Reveal as="article">
              <strong>Notice</strong>
              <p>See what others walk past.</p>
            </Reveal>
            <Reveal as="article">
              <strong>Pursue</strong>
              <p>Go deeper than the first answer.</p>
            </Reveal>
            <Reveal as="article">
              <strong>Become</strong>
              <p>Let every challenge expand what is possible.</p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="home-ending home-ending-compact page-shell">
        <Reveal as="header">
          <h2>Follow the story.</h2>
        </Reveal>
        <div className="pathways">
          {paths.map(([title, text, to, image]) => (
            <Link to={to} key={title} className="pathway">
              <MediaPlaceholder
                src={`${import.meta.env.BASE_URL}${image}`}
                alt={`${title} pathway`}
              />
              <div>
                <span>{title}</span>
                <h2>{text}</h2>
                <ArrowRight />
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="home-contact-cta page-shell">
        <Reveal>
          <h2>Piqued your attention?</h2>
          <Link className="text-link" to="/contact">
            Start a conversation <ArrowRight />
          </Link>
        </Reveal>
      </section>
    </div>
  );
}
