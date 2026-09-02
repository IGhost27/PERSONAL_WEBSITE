import { Play } from 'lucide-react'
import { MediaPlaceholder } from '../components/MediaPlaceholder'
import { Seo } from '../components/Seo'
import { adventures } from '../data/adventures'

export function FitOut() {
  return <div className="fitout-page"><Seo title="FitOut" description="Adventure, human performance, travel, and the choice to step outside the expected." /><section className="fitout-hero"><MediaPlaceholder alt="Defining FitOut landscape photograph" label="Add defining FitOut landscape" eager /><div className="fitout-hero-copy"><p>FitOut</p><h1>WHY FIT IN,<br />WHEN YOU CAN<br /><em>FIT OUT?</em></h1></div></section><section className="fitout-intro page-shell"><h2>A life built beyond the default.</h2><p>FitOut is the outdoor side of the same instinct that drives the work: choose the difficult route, stay curious, and become capable enough for what comes next.</p></section><section className="adventure-grid page-shell">{adventures.map((item, i) => <article key={item.slug} className={`adventure-${i + 1}`}><MediaPlaceholder src={item.image} alt={`${item.title} in ${item.location}`} label={`Add ${item.type.toLowerCase()} photo`} /><div><p>{item.type} / {item.year}</p><h2>{item.title}</h2><span>{item.location}</span><p>{item.description}</p>{item.youtube && <a href={item.youtube}>Watch story<Play /></a>}</div></article>)}</section><section className="video-slot page-shell"><div><Play /><span>YouTube embed ready</span></div><p>Add a YouTube URL to an adventure object, then replace this slot with your featured video embed.</p></section></div>
}
