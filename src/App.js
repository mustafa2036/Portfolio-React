import { Component } from 'react'
import {Routes , Route} from 'react-router-dom'
import Home from './Component/Home'
import Navbar from './Component/Navbar'
import About from './Component/About'
import Works from './Component/Works'
import Footer from './Component/Footer'
import Services from './Component/Services'
import Skills from './Component/Skills'
import NotFound from './Component/NotFound'
import Content from './Component/Content'

export default class App extends Component {
  render() {
    return (
      <>
      <Navbar/>
        <Routes>
          <Route path='/' element={<About/>} />
          <Route path='/home' element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/works' element={<Works/>} />
          <Route path='/skills' element={<Skills/>} />
          <Route path='/content' element={<Content/>} />
          <Route path='/services' element={<Services/>} />
          <Route path='*' element={<NotFound/>} />
        </Routes>
      <Footer/>
      </>
    )
  }
}
