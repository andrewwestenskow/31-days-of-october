import React from 'react'
import '../styles/Home.scss'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Description from '../components/Description'
import Week from '../components/Week'
import data from '../data/data'
import Head from 'next/head'


const Home = () => (
  <div className='Home'>
    <Head>
      <title>31 Days of October</title>
      <link 
      rel="shortcut icon" 
      href="/static/bigger_movies.png" 
      type="image/x-icon"/>
    </Head>
    <Header />
    <Description />
    {/* <div style={{maxWidth: '1200px', margin: '20px auto'}} className="line"></div> */}
    <div className="film-hold">
      {data.map(element => {
        return <Week key={element.week} data={element} />
      })}
    </div>
    <Footer />
  </div>
)

export default Home
