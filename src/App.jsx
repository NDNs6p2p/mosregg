import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { PATHS } from './routers/name'

import PageLanding from './pages/home/page.jsx'
import PageAbout from './pages/new/page.jsx'
import Header from './components/header/header'
import Footer from './components/footer/footer'

export default function App() {
  return (
  <>
   <Header />
    <Routes>
      <Route path={PATHS.home} element={<PageLanding />} />
      <Route path={PATHS.test} element={<PageAbout />} />
    </Routes>
    <Footer />
  </>
  )
}
