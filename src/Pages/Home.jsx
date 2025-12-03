import React from 'react'
import Hero from '../Component/Hero'
import AboutSection from '../Component/AboutSection'
import ServicesSection from '../Component/ServicesSection'
import WhyChooseUs from '../Component/WhyChooseUs'

const Home = () => {
  return (
    <div>
        <Hero/>
        <AboutSection/>
        <ServicesSection/>
        <WhyChooseUs/>
    </div>
  )
}

export default Home