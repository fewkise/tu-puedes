import React from 'react'
import Section17 from './Section17/Section17'
import Header from '../../components/Header/Header'
import Section8 from '../MainPage/Section8/Section8'
import Section11 from '../PlanesPage/Section11/Section11'
import Section19 from './Section19/Section19'
import Footer from '../../components/Footer/Footer'
const SobrePage = () => {
  return (
    <div>
        <Header/>
        <Section19/>
      <Section17/>
      <Section8/>
      <Section11/>
      <Footer/>
    </div>
  )
}

export default SobrePage
