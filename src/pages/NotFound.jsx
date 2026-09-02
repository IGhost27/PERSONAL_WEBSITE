import { ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Seo } from '../components/Seo'

export function NotFound() {
  return <><Seo title="Page not found" /><section className="not-found page-shell"><p>404</p><h1>This path ends here.</h1><span>The page may have moved, or it may never have existed.</span><Link className="button button-primary" to="/"><ArrowLeft />Return home</Link></section></>
}
