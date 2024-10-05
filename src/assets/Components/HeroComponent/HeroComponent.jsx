import React from 'react'
import './HeroComponent.css'
import MarqueeComponent from '../MarqueeComponent/MarqueeComponent'
import { Link } from 'react-router-dom'
import HomeFeedComponent from '../HomeFeedComponent/HomeFeedComponent'

function HeroComponent() {
    return (
        <React.Fragment>
            <div className='hero-container'>
                <a className='hero-badge' href=''>
                    Over 3 million ready-to-work creatives!
                </a>
                <h1 className='hero-heading'>
                    The world’s destination for design
                </h1>
                <p className='hero-sub-heading'>
                    Get inspired by the work of millions of top-rated designers
                    & agencies around the world.
                </p>
                <Link className='get-started-btn' to='/search'>
                    Get Started
                </Link>
            </div>
            <MarqueeComponent />
            <HomeFeedComponent />
        </React.Fragment>
    )
}

export default HeroComponent
