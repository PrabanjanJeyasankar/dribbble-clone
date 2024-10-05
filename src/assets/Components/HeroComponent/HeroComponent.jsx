import React from 'react'
import './HeroComponent.css'
import MarqueeComponent from '../MarqueeComponent/MarqueeComponent'

function HeroComponent() {
  return (
    <React.Fragment>
      <div className='hero-container'>
        <a className='hero-badge' href=''>Over 3 million ready-to-work creatives!</a>
        <h1 className='hero-heading'>The world’s destination for design</h1>
        <p className='hero-sub-heading'>
          Get inspired by the work of millions of top-rated designers & agencies
          around the world.
        </p>
        <a className='get-started-btn' href="">Get Started</a>
      </div>
      <MarqueeComponent/>
    </React.Fragment>
    
  )
}

export default HeroComponent
