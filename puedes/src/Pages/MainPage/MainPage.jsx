import React from 'react'
import Header from '../../components/Header/Header'
import Section1 from './Section1/Section1'
import Section2 from './Section2/Section2'
import Section3 from './Section3/Section3'
import image_1 from '../../assets/cfd3a90a3f5053aebfcfa654b9a8117a6ca374c6.jpg'
import Section4 from './Section4/Section4'
import Section5Slider from './Section5/Section5'
import Section6 from './Section6/Section6'
import Section7 from './Section7/Section7'
import Section8 from './Section8/Section8'
import Footer from '../../components/Footer/Footer'
const MainPage = () => {
  return (
    <div style={{maxwidth:'100%'}}>
      <Header/>
      <Section1 imageUrl={image_1}/>
      <Section2/>
      <Section3/>
      <Section4/>
      <Section5Slider/>
      <Section6/>
      <Section7/>
      <Section8/>
      <Footer/>
    </div>
  )
}

export default MainPage
