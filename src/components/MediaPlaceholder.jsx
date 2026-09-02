import { Image as ImageIcon } from 'lucide-react'

export function MediaPlaceholder({ src, alt, label = 'Add your photo', className = '', eager = false }) {
  if (src) {
    return <img className={`media ${className}`} src={src} alt={alt} loading={eager ? 'eager' : 'lazy'} decoding="async" />
  }
  return (
    <div className={`media-placeholder ${className}`} role="img" aria-label={`${alt}. Placeholder image.`}>
      <ImageIcon aria-hidden="true" />
      <span>{label}</span>
    </div>
  )
}
