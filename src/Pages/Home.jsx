import React from 'react'
import Hero from '../Component/Hero'
import AboutSection from '../Component/AboutSection'
import ServicesSection from '../Component/ServicesSection'
import WhyChooseUs from '../Component/WhyChooseUs'
import CtaSection from '../Component/CTASection'

const Home = () => {
  return (
    <div>
        <Hero/>
        <AboutSection/>
        <ServicesSection/>
        <CtaSection/>
        <WhyChooseUs/>
    </div>
  )
}

export default Home