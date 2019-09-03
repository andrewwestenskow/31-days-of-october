import React from 'react'
import '../styles/Home.scss'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Description from '../components/Description'


const Home = () => (
  <div className='Home'>
    <Header/>
    <Footer/>
    <Description/>
  </div>
)

export default Home
