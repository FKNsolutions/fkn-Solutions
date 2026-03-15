import React, { useEffect } from 'react'
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import WhatsAppButton from './components/WhatsAppButton.jsx'
import Home from './pages/Home.jsx'
import CCTV from './pages/CCTV.jsx'
import Networking from './pages/Networking.jsx'
import Repairs from './pages/Repairs.jsx'
import PointOfSale from './pages/PointOfSale.jsx'
import Industries from './pages/Industries.jsx'
import Contact from './pages/Contact.jsx'
import Privacy from './pages/Privacy.jsx'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

function AppContent() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cctv" element={<CCTV />} />
          <Route path="/networking" element={<Networking />} />
          <Route path="/repairs" element={<Repairs />} />
          <Route path="/point-of-sale" element={<PointOfSale />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
        </Routes>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}

export default function App() {
  return (
    <HashRouter>
      <AppContent />
    </HashRouter>
  )
}
