import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../Component/Header'
import Footer from '../Component/Footer'
import ScrollToTop from '../Component/ScrollTotop'

const AppLayout = () => {
  return (
    <div>
      <ScrollToTop/>
        <Header/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default AppLayout