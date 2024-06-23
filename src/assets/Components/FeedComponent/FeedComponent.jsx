import React, { useEffect, useState, useRef, useContext } from 'react'
import './FeedComponent.css'
import feedData from '../../data'
import { IoHeart } from 'react-icons/io5'
import { TbEyeFilled } from 'react-icons/tb'
import { Bookmark, Heart } from 'lucide-react'

function FeedComponent({ searchQuery }) {
  const [selectedFilter, setSelectedFilter] = useState('following')
  const [data, setData] = useState([])
  const [noResults, setNoResults] = useState(false)
  const [scrollX, setScrollX] = useState(0)
  const [scrollEnd, setScrollEnd] = useState(false)
  const scroll = useRef(null)

  const slideLeft = () => {
    const shift = -300
    scroll.current.scrollBy({
      left: shift,
      behavior: 'smooth',
    })

    setScrollX(scrollX + shift)
    updateScrollEnd()
  }

  const slideRight = () => {
    const shift = 300
    scroll.current.scrollBy({
      left: shift,
      behavior: 'smooth',
    })

    setScrollX(scrollX + shift)
    updateScrollEnd()
  }

  const updateScrollEnd = () => {
    if (
      scroll.current &&
      Math.floor(scroll.current.scrollWidth - scroll.current.scrollLeft) <=
        scroll.current.offsetWidth
    ) {
      setScrollEnd(true)
    } else {
      setScrollEnd(false)
    }
  }

  const scrollCheck = () => {
    setScrollX(scroll.current.scrollLeft)
    updateScrollEnd()
  }
  const handleChange = (event) => {
    setSelectedFilter(event.target.value)
  }
  useEffect(() => {
    const filterData = () => {
      let filteredData = feedData.filter((item) => {
        return (
          item.filters === selectedFilter &&
          item.thumbnailName.toLowerCase().includes(searchQuery.toLowerCase())
        )
      })
      return filteredData
    }

    const filteredData = filterData()
    setData(filteredData)
    setNoResults(filteredData.length === 0)
  }, [selectedFilter, searchQuery])

  return (
    <>
      <div className='container'>
        <div className='sub-navbar'>
          <div className='dropdown-filter'>
            <select
              className='select-dropdown'
              onChange={handleChange}
              value={selectedFilter}>
              <option value='following'>Following</option>
              <option value='popular'>Popular</option>
              <option value='new & noteworthy'>New & Noteworthy</option>
            </select>
          </div>
          <div className='category-filter'>
            <div
              onClick={slideLeft}
              className={`left-arrow active${
                scrollX < 1 ? 'is-disabled' : ''
              }`}>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='size-6'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M15.75 19.5 8.25 12l7.5-7.5'
                />
              </svg>
            </div>
            <div ref={scroll} onScroll={scrollCheck} className='categories'>
              <div
                onClick={() => handleChange({ target: { value: 'discover' } })}>
                Discover
              </div>
              <div
                onClick={() =>
                  handleChange({ target: { value: 'animation' } })
                }>
                Animation
              </div>
              <div
                onClick={() => handleChange({ target: { value: 'branding' } })}>
                Branding
              </div>
              <div
                onClick={() =>
                  handleChange({ target: { value: 'illustration' } })
                }>
                Illustration
              </div>
              <div
                onClick={() => handleChange({ target: { value: 'mobile' } })}>
                Mobile
              </div>
              <div onClick={() => handleChange({ target: { value: 'print' } })}>
                Print
              </div>
              <div
                onClick={() =>
                  handleChange({ target: { value: 'productDesign' } })
                }>
                Product Design
              </div>
              <div
                onClick={() =>
                  handleChange({ target: { value: 'typography' } })
                }>
                Typography
              </div>
              <div
                onClick={() =>
                  handleChange({ target: { value: 'webDesign' } })
                }>
                Web Design
              </div>
            </div>
            <div
              onClick={slideRight}
              className={`right-arrow active${
                !scrollEnd ? '' : 'is-disabled'
              }`}>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='m8.25 4.5 7.5 7.5-7.5 7.5'
                />
              </svg>
            </div>
          </div>
          <div className='tag-filters'>
            <button className='filters'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='12'
                height='12'
                viewBox='0 0 24 24'
                color='black'
                role='img'>
                <path d='M0 6C0 5.17157 0.671573 4.5 1.5 4.5H22.5C23.3284 4.5 24 5.17157 24 6C24 6.82843 23.3284 7.5 22.5 7.5H1.5C0.671573 7.5 0 6.82843 0 6ZM3 12C3 11.1716 3.67157 10.5 4.5 10.5H19.5C20.3284 10.5 21 11.1716 21 12C21 12.8284 20.3284 13.5 19.5 13.5H4.5C3.67157 13.5 3 12.8284 3 12ZM7.5 16.5C6.67157 16.5 6 17.1716 6 18C6 18.8284 6.67157 19.5 7.5 19.5H16.5C17.3284 19.5 18 18.8284 18 18C18 17.1716 17.3284 16.5 16.5 16.5H7.5Z'></path>
              </svg>{' '}
              Filters
            </button>
          </div>
        </div>
        {/* <div className='search-bar'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='17'
            height='17'
            viewBox='0 0 17 17'
            fill='none'
            role='img'
          >
            <path
              d='M1.5 7.75C1.5 9.4076 2.15848 10.9973 3.33058 12.1694C4.50269 13.3415 6.0924 14 7.75 14C9.4076 14 10.9973 13.3415 12.1694 12.1694C13.3415 10.9973 14 9.4076 14 7.75C14 6.0924 13.3415 4.50269 12.1694 3.33058C10.9973 2.15848 9.4076 1.5 7.75 1.5C6.0924 1.5 4.50269 2.15848 3.33058 3.33058C2.15848 4.50269 1.5 6.0924 1.5 7.75V7.75Z'
              stroke='#6e6d7a'
            ></path>
            <path
              d='M12.814 12.8132L15.5 15.4999'
              stroke='#6e6d7a'
            ></path>
          </svg>
          <input
            type='text'
            placeholder='Search...'
            className='search-input'
            value={searchValue}
            onChange={handleOnChange}
          />
        </div> */}
        {noResults ? (
          <div className='no-results'>No results found for "{searchQuery}": (</div>
        ) : (
          <div className='feed-shots-grid'>
            {data.map((item) => (
              <div key={item.id}>
                <div className='shot'>
                  <div className='thumbnail-image'>
                    <img src={item.thumbnailImage} alt={item.thumbnailName} />
                    <div className='overlay'>
                      <div className='overlay-info'>
                        <div className='thumbnail-name'>
                          {item.thumbnailName}
                        </div>
                        <div className='actions'>
                          <Bookmark strokeWidth={2} className='bookmark-icon' />
                          <Heart
                            strokeWidth={2}
                            className='heart-icon-overlay'
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='shot-details'>
                    <div className='user-details'>
                      <img src={item.userImage} alt={item.userName} />
                      <p>{item.userName}</p>
                    </div>
                    <div className='reach-counts'>
                      <div className='likes'>
                        <IoHeart className='heart-icon' />
                        <p>{item.likesCount}</p>
                      </div>
                      <div className='views'>
                        <TbEyeFilled className='eye-icon' />
                        <p>{item.viewsCount}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  )
}

export default FeedComponent
