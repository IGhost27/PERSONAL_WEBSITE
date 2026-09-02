import { MediaPlaceholder } from './MediaPlaceholder'

export function PhotoGallery() {
  return (
    <div className="photo-strip" aria-label="Personal photography gallery">
      <MediaPlaceholder alt="Personal adventure photograph one" label="Add landscape photo" />
      <MediaPlaceholder alt="Personal project photograph" label="Add making photo" />
      <MediaPlaceholder alt="Personal travel photograph" label="Add travel photo" />
    </div>
  )
}
