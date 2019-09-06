import React from 'react'
import '../styles/Home.scss'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Description from '../components/Description'
import Week from '../components/Week'
import data from '../data/data'


const Home = () => (
  <div className='Home'>
    <Header />
    {/* <Description /> */}
    <div className="film-hold">
      {data.map(element => {
        return <Week key={element.week} data={element} />
      })}
    </div>
    <Footer />
  </div>
)

export default Home
