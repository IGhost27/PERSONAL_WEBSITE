import { Navigate, Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout'
import { Contact } from './pages/Contact'
import { FitOut } from './pages/FitOut'
import { Home } from './pages/Home'
import { NotFound } from './pages/NotFound'
import { ProjectDetail } from './pages/ProjectDetail'
import { Projects } from './pages/Projects'
import { Resume } from './pages/Resume'

export default function App() {
  return <Routes><Route element={<Layout />}><Route index element={<Home />} /><Route path="resume" element={<Resume />} /><Route path="fitout" element={<FitOut />} /><Route path="projects" element={<Projects />} /><Route path="projects/:slug" element={<ProjectDetail />} /><Route path="contact" element={<Contact />} /><Route path="work/*" element={<Navigate to="/projects" replace />} /><Route path="about" element={<Navigate to="/" replace />} /><Route path="research" element={<Navigate to="/resume" replace />} /><Route path="*" element={<NotFound />} /></Route></Routes>
}