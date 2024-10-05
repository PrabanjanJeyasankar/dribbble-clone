import React, { useEffect, useRef, useState } from 'react'
import './NavBarComponent.css'
import userProfileImage from '../../img/user_images/user_profile_image.jpg'
import { ChatState } from '../../../ContextProvider'
import { dribbbleLogoPath, searchIcon } from '../../svgPath'

function NavBarComponent() {
    const { searchQuery, setSearchQuery, suggestions, updateSuggestions } =
        ChatState()
    const [searchValue, setSearchValue] = useState('')
    const [isActive, setIsActive] = useState(false)
    const inputRef = useRef(null)
    const suggestionsRef = useRef(null)

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (inputRef.current && !inputRef.current.contains(event.target)) {
                setSearchValue('')
                setIsActive(false)
            }
        }

        document.addEventListener('mousedown', handleClickOutside)

        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [])

    const handleOnChange = (event) => {
        const query = event.target.value
        setSearchQuery(query)
        setIsActive(true)
        setSearchValue(query)
        updateSuggestions(query)
    }

    const handleSuggestionClick = (suggestion) => {
        setIsActive(false)
        setSearchValue(suggestion.thumbnailName)
        setSearchQuery(suggestion.thumbnailName)
    }

    return (
        <React.Fragment>
            <div className='NavBar'>
                <div className='left-navbar'>
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
                    <ul>
                        <li>Find designers</li>
                        <li>Inspiration</li>
                        <li>Courses</li>
                        <li>Jobs</li>
                        <li>Go Pro</li>
                    </ul>
                </div>
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
                                placeholder='Search...'
                            />
                            {isActive && suggestions.length > 0 && (
                                <ul
                                    className='suggestions-list'
                                    ref={suggestionsRef}>
                                    {suggestions.map((suggestion, index) => (
                                        <li
                                            key={index}
                                            onClick={() =>
                                                handleSuggestionClick(
                                                    suggestion
                                                )
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
        </React.Fragment>
    )
}

export default NavBarComponent
