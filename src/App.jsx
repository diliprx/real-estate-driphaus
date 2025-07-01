import React from 'react'
import Header from './components/Header'
import About from './components/About'
import Projects from './components/Projects'
import Testimonalis from './components/Testimonials'
import Contact from './components/Contact'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from './components/Footer'

const App = () => {
  return (
    <>
      <div className='w-full  overflow-hidden bg-gray-100'>
        <ToastContainer/>
        <Header />
      </div>
      <About />
      <Projects />
      <Testimonalis />
      <Contact />
      <Footer />
    </>
  )
}

export default App