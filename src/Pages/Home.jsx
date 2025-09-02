import React from 'react'
import HomeHero from "../Components/HomeHero"
import HomeAbout from "../Components/HomeAbout"
import Products from '../Components/HomeProducts'
import Stats from '../Components/HomeStats'
import OnGridSystem from '../Components/HomeGrid'
import BenefitsOnGrid from '../Components/HomeBenefits'
import WhyVenusSolar from '../Components/WhyVenus'
import SolarRoofAdvantage from '../Components/HomeLast'
const Home = () => {
  return (
    <div>
      <HomeHero/>
      <HomeAbout/>
      <Products/>
      <Stats/>
      <OnGridSystem/>
      <BenefitsOnGrid/>
      <WhyVenusSolar/>
      <SolarRoofAdvantage/>
    </div>
  )
}

export default Home
