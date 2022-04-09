import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import './App.css'
import Home from './components/pages/Home'
import AboutUs from './components/pages/AboutUs'
import Careers from './components/pages/Careers'
import SignUp from './components/pages/SignUp'
import Login from './components/pages/Login'
import Location1 from './components/pages/Location1'
import Location2 from './components/pages/Location2'
import Location3 from './components/pages/Location3'
import Location4 from './components/pages/Location4'
import Location5 from './components/pages/Location5'
import Trailer from './components/pages/Trailer.js'
import Cards from './components/Cards'




export default function App() {
  return (
    <>
    <Router>
      <Navbar/>
        <Routes>
          <Route exact path='/' element={<Home/>} />
          <Route path='/aboutus' element={<AboutUs/>} />
          <Route path='/careers' element={<Careers/>} />
          <Route path='/signup' element={<SignUp/>} />
          <Route path='/login' element={<Login/>} />
          <Route path="/location1" element={<Location1/>} />
          <Route path="/location2" element={<Location2/>} />
          <Route path="/location3" element={<Location3/>} />
          <Route path="/location4" element={<Location4/>} />
          <Route path="/location5" element={<Location5/>} />
          <Route path="/trailer" element={<Trailer />} />
          <Route path="/destinations" element={<Cards />} />
        </Routes>
    </Router>
    </>
  )
}
