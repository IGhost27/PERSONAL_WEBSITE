import { useEffect } from 'react'
import { site } from '../data/site'

export function Seo({ title, description = site.description }) {
  useEffect(() => {
    document.title = title ? `${title} | ${site.name}` : `${site.name} | ${site.title}`
    const tag = document.querySelector('meta[name="description"]')
    if (tag) tag.setAttribute('content', description)
    const ogTitle = document.querySelector('meta[property="og:title"]')
    if (ogTitle) ogTitle.setAttribute('content', document.title)
    const ogDescription = document.querySelector('meta[property="og:description"]')
    if (ogDescription) ogDescription.setAttribute('content', description)
  }, [title, description])
  return null
}
