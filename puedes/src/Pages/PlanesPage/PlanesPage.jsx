import React from 'react'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import Section9 from './Section9/Section9'
import Section10 from './Section10/Section10'
import Section11 from './Section11/Section11'
const PlanesPage = () => {
  return (
    <div style={{display:'flex', flexDirection:'column', gap:'10px'}}>
      <Header/>
      <Section9/>
      <Section10/>
      <Section11/>
      <Footer/>
    </div>
  )
}

export default PlanesPage
