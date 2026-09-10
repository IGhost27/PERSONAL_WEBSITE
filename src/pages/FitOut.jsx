import { ArrowUpRight } from "lucide-react";
import { MediaPlaceholder } from "../components/MediaPlaceholder";
import { Reveal } from "../components/Reveal";
import { Seo } from "../components/Seo";
import { adventures } from "../data/adventures";

export function FitOut() {
  const featured = adventures[0];
  const embedUrl = new URL(featured.embed);
  embedUrl.searchParams.set("origin", window.location.origin);
  embedUrl.searchParams.set("rel", "0");
  return (
    <div className="fitout-page">
      <Seo
        title="FitOut | Ian Ortega"
        description="FitOut is where curiosity gets physical: adventures, training, travel, and the path outside the ordinary."
      />
      <section className="fitout-hero">
        <MediaPlaceholder
          src={`${import.meta.env.BASE_URL}images/Pictures/elbert_solo.png`}
          alt="A cinematic FitOut landscape"
          label="Replace with a wide FitOut landscape"
          className="hero-media"
          eager
        />
        <div className="hero-scrim" />
        <div className="fitout-hero-copy">
          <h1>
            Why fit in,
            <br />
            when you can
            <br />
            <em>fit out?</em>
          </h1>
        </div>
      </section>
      <Reveal as="section" className="fitout-intro page-shell">
        <h2>
          Curiosity
          <br />
          gets physical.
        </h2>
        <div>
          <p>
            FitOut is hiking through fog, exploring somewhere unfamiliar,
            training for something difficult, traveling without knowing exactly
            what the day will look like, and documenting what happens along the
            way.
          </p>
          <p>
            It is less about escaping everyday life and more about making sure
            everyday life stays interesting.
          </p>
        </div>
      </Reveal>
      <section className="adventure-section page-shell">
        <header>
          <span className="section-label">Field notes</span>
          <h2>Adventures, not uploads.</h2>
        </header>
        <div className="adventure-grid">
          {adventures.map((adventure, index) => (
            <Reveal as="article" key={adventure.slug}>
              <MediaPlaceholder
                src={adventure.image}
                alt={adventure.title}
                label="Add this adventure's cover photo"
              />
              <div>
                <span>
                  0{index + 1} / {adventure.type}
                </span>
                <h3>{adventure.title}</h3>
                <p className="location">
                  {adventure.location} / {adventure.year}
                </p>
                <p>{adventure.description}</p>
                <a className="text-link" href="#featured-video">
                  Watch the adventure <ArrowUpRight />
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
      <Reveal
        as="section"
        className="featured-video page-shell"
        id="featured-video"
      >
        <div className="video-frame">
          <iframe
            src={embedUrl.toString()}
            title={`${featured.title} — FitOut video`}
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
        <div>
          <span className="section-label">Featured</span>
          <h2>{featured.title}</h2>
          <p>{featured.description}</p>
          <a
            className="text-link"
            href={featured.youtube}
            target="_blank"
            rel="noreferrer"
          >
            Watch on YouTube <ArrowUpRight />
          </a>
        </div>
      </Reveal>
      <section className="terrain-bridge">
        <Reveal>
          <h2>
            Different terrain.
            <br />
            Same approach.
          </h2>
          <p>
            Curiosity does not stop when I leave the trail. That same instinct
            to explore, learn, adapt, and keep moving is what pulls me toward
            difficult engineering problems too.
          </p>
        </Reveal>
      </section>
    </div>
  );
}
