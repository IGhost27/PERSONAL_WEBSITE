import { useEffect, useRef } from 'react'

export function Reveal({ children, className = '', as: Tag = 'div' }) {
  const ref = useRef(null)
  useEffect(() => {
    const node = ref.current
    if (!node || !('IntersectionObserver' in window)) return
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { node.dataset.visible = 'true'; observer.disconnect() }
    }, { threshold: 0.12 })
    observer.observe(node)
    return () => observer.disconnect()
  }, [])
  return <Tag ref={ref} className={`reveal ${className}`}>{children}</Tag>
}