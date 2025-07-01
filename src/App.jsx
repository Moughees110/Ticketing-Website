import './App.css'
import Navbar from './components/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from "./components/Footer"
import ScrollToTop from './components/Scrolltop'
// import { useEffect } from 'react'


function App() {
 

  return (
    <>
     <ScrollToTop/>
      <Navbar />
      <div className="pt-[90px]"> {/* 40px top bar + 50px navbar */}
  <Outlet /> {/* Or your page content */}
</div>

      <Footer />
    </>
  )
}

export default App
