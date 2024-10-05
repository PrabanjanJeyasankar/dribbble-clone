import React from 'react'
import './HomeFeedComponent.css'
import FeedComponent from '../FeedComponent/FeedComponent'
import { Link } from 'react-router-dom'
import FindDesignerComponent from '../FindDesignerComponent/FindDesignerComponent'

function HomeFeedComponent() {
    return (
        <div className='home-container'>
            <h2 className='home-heading'>Explore inspiring designs</h2>
            <div className='design-grid'>
                <FeedComponent showFilters={false} />
            </div>
            <Link to='/search' className='browse-more-link'>
                Browse more inspiration
            </Link>
            <FindDesignerComponent />
        </div>
    )
}

export default HomeFeedComponent
