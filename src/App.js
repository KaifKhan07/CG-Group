import React from 'react'
import BusinessTool from './component/BusinessTool'
import Acheivement from './component/Acheivement'
import Contact from './component/Contact'
import Footer from './component/Footer'
import Explore from './component/Explore'
import Navbar from './component/Navbar'
import LandingPage from './component/LandingPage'
import Product from './component/Product'

const App = () => {
  return (
    <div>
      <Navbar />
      <LandingPage/>
      <Explore />
      <Product/>
      <BusinessTool />
      <Acheivement />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
