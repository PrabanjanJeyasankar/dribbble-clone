import React, { useEffect, useState, useRef } from 'react'
import './FeedComponent.css'
function FeedComponent() {
  const jsonData = [
    {
      id: 1,
      userName: 'John Doe',
      userImage: 'https://example.com/user1.jpg',
      thumbnailName: 'Thumbnail 1',
      thumbnailImage: 'https://example.com/thumb1.jpg',
      filters: 'popular',
      likesCount: 45,
      viewsCount: 89,
    },
    {
      id: 2,
      userName: 'Jane Smith',
      userImage: 'https://example.com/user2.jpg',
      thumbnailName: 'Thumbnail 2',
      thumbnailImage: 'https://example.com/thumb2.jpg',
      filters: 'following',
      likesCount: 30,
      viewsCount: 70,
    },
    {
      id: 3,
      userName: 'Alice Johnson',
      userImage: 'https://example.com/user3.jpg',
      thumbnailName: 'Thumbnail 3',
      thumbnailImage: 'https://example.com/thumb3.jpg',
      filters: 'new & noteworthy',
      likesCount: 60,
      viewsCount: 100,
    },
  ]
  const [selectedFilter, setSelectedFilter] = useState('popular')
  const [data, setData] = useState([])
  const [scrollX, setScrollX] = useState(0)
  const [scrollEnd, setScrollEnd] = useState(false)
  const scroll = useRef(null)

  const slideLeft = () => {
    const shift = -300;
    scroll.current.scrollBy({
      left: shift,
      behavior: 'smooth'
    });

    setScrollX(scrollX + shift);
    updateScrollEnd();
  };

  const slideRight = () => {
    const shift = 300;
    scroll.current.scrollBy({
      left: shift,
      behavior: 'smooth'
    });

    setScrollX(scrollX + shift);
    updateScrollEnd();
  };

  const updateScrollEnd = () => {
    if (scroll.current && Math.floor(scroll.current.scrollWidth - scroll.current.scrollLeft) <= scroll.current.offsetWidth) {
      setScrollEnd(true);
    } else {
      setScrollEnd(false);
    }
  };

  const scrollCheck = () => {
    setScrollX(scroll.current.scrollLeft);
    updateScrollEnd();
  };
  const handleChange = (event) => {
    setSelectedFilter(event.target.value)
  }
  useEffect(() => {
    const filteredData = jsonData.filter(
      (item) => item.filters === selectedFilter
    )
    setData(filteredData)
  }, [selectedFilter])

  return (
    <>
      <div className='container'>
        <div className='sub-navbar'>
          <div className='dropdown-filter'>
            <select onChange={handleChange} value={selectedFilter}>
              <option value='following'>Following</option>
              <option value='popular'>Popular</option>
              <option value='new & noteworthy'>New & Noteworthy</option>
            </select>
          </div>
          <div className='category-filter'>
            <div
              onClick={slideLeft}
              className={`left-arrow active${scrollX < 1 ? 'is-disabled' : ''}`}>
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
              <a>Discover</a>
              <a>Animation</a>
              <a>Branding</a>
              <a>Illustration</a>
              <a>Mobile</a>
              <a>Print</a>
              <a>Product Design</a>
              <a>Typography</a>
              <a>Web Design</a>
            </div>
            <div
              onClick={slideRight}
              className={`right-arrow active${!scrollEnd ? '' : 'is-disabled'}`}>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                class='w-6 h-6'>
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
                role='img'
                className='icon filter-icon icon-14'>
                <path d='M0 6C0 5.17157 0.671573 4.5 1.5 4.5H22.5C23.3284 4.5 24 5.17157 24 6C24 6.82843 23.3284 7.5 22.5 7.5H1.5C0.671573 7.5 0 6.82843 0 6ZM3 12C3 11.1716 3.67157 10.5 4.5 10.5H19.5C20.3284 10.5 21 11.1716 21 12C21 12.8284 20.3284 13.5 19.5 13.5H4.5C3.67157 13.5 3 12.8284 3 12ZM7.5 16.5C6.67157 16.5 6 17.1716 6 18C6 18.8284 6.67157 19.5 7.5 19.5H16.5C17.3284 19.5 18 18.8284 18 18C18 17.1716 17.3284 16.5 16.5 16.5H7.5Z'></path>
              </svg>{' '}
              Filters
            </button>
          </div>
        </div>
        <div className='feed'>
          {data.map((item) => (
            <div
              key={item.id}
              style={{
                border: '1px solid #ddd',
                padding: '10px',
                margin: '10px 0',
              }}>
              <h2>{item.userName}</h2>
              <img
                src={item.userImage}
                alt={item.userName}
                style={{ width: '50px', height: '50px', borderRadius: '50%' }}
              />
              <h3>{item.thumbnailName}</h3>
              <img
                src={item.thumbnailImage}
                alt={item.thumbnailName}
                style={{ width: '100px', height: '100px' }}
              />
              <p>Likes: {item.likesCount}</p>
              <p>Views: {item.viewsCount}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default FeedComponent
