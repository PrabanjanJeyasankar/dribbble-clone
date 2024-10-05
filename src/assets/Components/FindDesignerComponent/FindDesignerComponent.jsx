import React from 'react'
import './FindDesignerComponent.css'
import { Link } from 'react-router-dom'

function FindDesignerComponent() {
    return (
        <div className='find-designer-container'>
            <h1 className='find-designer-heading'>
                Find your next designer today
            </h1>
            <p className='find-designer-subheading'>
                The world’s leading brands use Dribbble to hire creative talent.
                Browse millions of top-rated portfolios to find your perfect
                creative match.
            </p>
            <div className='button-container'>
                <Link to='/get-started' className='get-started-button-footer'>
                    Get started now
                </Link>
                <Link
                    to='/learn-about-hiring'
                    className='learn-hiring-button-footer'>
                    Learn about hiring
                </Link>
            </div>
            <p className='join-dribbble'>
                Are you a designer?{' '}
                <Link to='/join-dribbble' className='join-dribbble-link'>
                    Join Dribbble
                </Link>
            </p>
        </div>
    )
}

export default FindDesignerComponent
