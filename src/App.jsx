import { useState } from 'react'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'



function App() {
  

  return (
    <>
    <Router>

     <Navbar />

    <Routes >
      <Route path='/' element={<Home />} ></Route>
      
     </Routes>
     
     <Footer />
    </Router>
     
    </>
  )
}

export default App
