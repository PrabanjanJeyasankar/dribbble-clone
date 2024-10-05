import React from 'react'
import './FooterComponent.css'
import { FaTwitter, FaPinterest, FaInstagram } from 'react-icons/fa'
import { RiFacebookBoxFill } from 'react-icons/ri'
import { dribbbleLogoPath } from '../../svgPath'

function FooterComponent() {
    return (
        <>
            <div className='footer-container'>
                <div className='footer-upper'>
                    <div className='dribbble-logo'>
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            width='100'
                            height='30'
                            viewBox='0 0 210 59'
                            fill='#000000'>
                            <title>
                                Dribbble: the community for graphic design
                            </title>
                            <path d={dribbbleLogoPath}></path>
                        </svg>
                    </div>
                    <div className='footer-navbar'>
                        <ul>
                            <li>For Designers</li>
                            <li>Hire Talent</li>
                            <li>Inspiration</li>
                            <li>Advertising</li>
                            <li>Blog</li>
                            <li>About</li>
                            <li>Careers</li>
                            <li>Support</li>
                        </ul>
                    </div>
                    <div className='dribbble-socials'>
                        <FaTwitter className='dribbble-social-icon' />
                        <RiFacebookBoxFill className='dribbble-social-icon' />
                        <FaInstagram className='dribbble-social-icon' />
                        <FaPinterest className='dribbble-social-icon' />
                    </div>
                </div>
                <div className='lower'>
                    <ul className='lower-list-left'>
                        <li>© 2024 Dribbble</li>
                        <li>Terms</li>
                        <li>Privacy</li>
                        <li>Cookies</li>
                    </ul>
                    <ul className='lower-list-left'>
                        <li>Jobs</li>
                        <li>Designers</li>
                        <li>Freelancers</li>
                        <li>Tags</li>
                        <li>Places</li>
                        <li>Resources</li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default FooterComponent
