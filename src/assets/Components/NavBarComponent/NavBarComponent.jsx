import React, { useEffect, useRef, useState } from 'react'
import './NavBarComponent.css'
import userProfileImage from '../../img/user_images/user_profile_image.jpg'
import { ChatState } from '../../../ContextProvider'
import { dribbbleLogoPath, searchIcon } from '../../svgPath'
import { useNavigate, Link } from 'react-router-dom'

function NavBarComponent() {
    const {
        searchQuery,
        setSearchQuery,
        suggestions,
        updateSuggestions,
        setSelectedFilter,
        resetSearchResults,
    } = ChatState()
    const [searchValue, setSearchValue] = useState('')
    const [isActive, setIsActive] = useState(false)
    const inputRef = useRef(null)
    const navigate = useNavigate()

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (inputRef.current && !inputRef.current.contains(event.target)) {
                setSearchValue('')
                setIsActive(false)
                resetSearchResults()
                setSelectedFilter('Following')
            }
        }

        document.addEventListener('mousedown', handleClickOutside)

        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [])

    const handleOnChange = (event) => {
        const query = event.target.value
        setSearchValue(query)
        setIsActive(true)
        updateSuggestions(query)

        if (query.trim() === '') {
            resetSearchResults()
            setSelectedFilter('Following')
        }
    }

    const handleSuggestionClick = (suggestion) => {
        setIsActive(false)
        setSearchValue(suggestion.thumbnailName)
        setSearchQuery(suggestion.thumbnailName)
        navigate('/search', { replace: true })
    }

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            event.preventDefault()
            setIsActive(false)
            setSearchQuery(searchValue)
            navigate('/search', { replace: true })
        }
    }

    return (
        <div className='NavBar'>
            <div className='left-navbar'>
                <Link to='/' className='logo-link'>
                    <svg
                        className='dribbble-logo-left'
                        xmlns='http://www.w3.org/2000/svg'
                        width='90'
                        height='30'
                        viewBox='0 0 210 59'
                        fill='#000000'>
                        <title>
                            Dribbble: the community for graphic design
                        </title>
                        <path d={dribbbleLogoPath}></path>
                    </svg>
                </Link>
                <ul>
                    <li>Find designers</li>
                    <li>Inspiration</li>
                    <li>Courses</li>
                    <li>Jobs</li>
                    <li>Go Pro</li>
                </ul>
            </div>
            <Link to='/' className='logo-link'>
                <svg
                    className='dribbble-logo-center'
                    xmlns='http://www.w3.org/2000/svg'
                    width='90'
                    height='30'
                    viewBox='0 0 210 59'
                    fill='#000000'>
                    <title>Dribbble: the community for graphic design</title>
                    <path d={dribbbleLogoPath}></path>
                </svg>
            </Link>
            <div className='right-navbar'>
                <div
                    ref={inputRef}
                    className={`search-bar ${isActive ? 'active' : ''}`}>
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='17'
                        height='17'
                        viewBox='0 0 17 17'
                        fill='none'
                        role='img'>
                        <path d={searchIcon} stroke='#6e6d7a'></path>
                        <path
                            d='M12.814 12.8132L15.5 15.4999'
                            stroke='#6e6d7a'></path>
                    </svg>
                    <div className='search'>
                        <input
                            type='text'
                            value={searchValue}
                            onChange={handleOnChange}
                            onKeyDown={handleKeyDown}
                            placeholder='Search...'
                        />
                        {isActive && suggestions.length > 0 && (
                            <ul className='suggestions-list'>
                                {suggestions.map((suggestion, index) => (
                                    <li
                                        key={index}
                                        onClick={() =>
                                            handleSuggestionClick(suggestion)
                                        }>
                                        {suggestion.thumbnailName}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                </div>
                <img
                    className='user-profile-image'
                    src={userProfileImage}
                    alt=''
                />
            </div>
        </div>
    )
}

export default NavBarComponent
