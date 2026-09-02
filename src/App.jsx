import { Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout'
import { About } from './pages/About'
import { Contact } from './pages/Contact'
import { FitOut } from './pages/FitOut'
import { Home } from './pages/Home'
import { NotFound } from './pages/NotFound'
import { ProjectDetail } from './pages/ProjectDetail'
import { Research } from './pages/Research'
import { Work } from './pages/Work'

export default function App() {
  return <Routes><Route element={<Layout />}><Route index element={<Home />} /><Route path="work" element={<Work />} /><Route path="work/:slug" element={<ProjectDetail />} /><Route path="about" element={<About />} /><Route path="research" element={<Research />} /><Route path="fitout" element={<FitOut />} /><Route path="contact" element={<Contact />} /><Route path="*" element={<NotFound />} /></Route></Routes>
}
