import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react'
import './App.css'
import PageAcceuil from './pages/pageAcceuil'
import Profil from './pages/Profil'
import Projets from './pages/Projets'
import Contacts from './pages/Contacts'
import Partenaire from './pages/Partenaire'

function App() {
  const [count, setCount] = useState(0)

  return (
  <Router>
      <Routes>
        <Route path="/portfolio-es/" element={<PageAcceuil/>} />
        <Route path="/portfolio-es/profil" element={<Profil/>} />
        <Route path="/portfolio-es/projets" element={<Projets/>} />
        <Route path="/portfolio-es/contacts" element={<Contacts/>} />
        <Route path="/portfolio-es/partenaire" element={<Partenaire/>} />
      </Routes>
    </Router>
  )
}

export default App
