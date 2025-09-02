import React from 'react'
import VisionSection from '../Components/AboutVision'
import ValueSection from '../Components/AboutValue'
import AboutUsSection from '../Components/About'
import AboutBanner from '../Components/AboutBanner'
import Products from '../Components/AboutProduct'
import WaterHeaterSection from '../Components/AboutHeater'
import Certifications from '../Components/Certifications'

const About = () => {
  return (
    <div>
        <AboutBanner/>
        <AboutUsSection/>
      <VisionSection/>
      <ValueSection/>
      <Products/>
      <WaterHeaterSection/>
      <Certifications/>
    </div>
  )
}

export default About
