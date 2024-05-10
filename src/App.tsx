import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import './App.css'
import Home from './pages/Home'
import Events from './pages/Events'
import LiveEvents from './pages/LiveEvents'
import SpecialEvents from './pages/SpecialEvents'
import Help from './pages/Help'

import Header from './components/header/Header'
import Footer from './components/common/Footer'
import CouponToggle from './components/coupon/CouponToggle'

function App() {
  return (
    <Router>
      <div className="relative flex min-h-screen w-full flex-col bg-gray-200 font-sans dark:bg-gray-600">
        <Header />
        <div className="container mx-auto px-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/bülten" element={<Events />} />
            <Route path="/canli-maclar" element={<LiveEvents />} />
            <Route path="/ozel-etkinlikler" element={<SpecialEvents />} />
            <Route path="/yardim" element={<Help />} />
          </Routes>
        </div>
        <Footer />
        <CouponToggle />
      </div>
    </Router>
  )
}

export default App
