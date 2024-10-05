import React from 'react'
import Marquee from 'react-fast-marquee'
import './MarqueeComponent.css'

function MarqueeComponent() {
    const marqueeData = [
        {
            id: 1,
            name: 'Tyler Durden',
            imageUrl:
                'https://cdn.dribbble.com/uploads/47173/original/Vladimir_Gruev.png?1689174896&format=webp&resize=546x680&vertical=center',
            profession: 'Design Director',
            skillOne: 'UI/UX',
            skillTwo: 'Mobile',
            skillThree: 'Web',
        },
        {
            id: 2,
            name: 'Elif Kames',
            imageUrl:
                'https://cdn.dribbble.com/uploads/47172/original/d85ae8c7db2421e9a01ecac942978d4b.png?1685645079&format=webp&resize=546x680&vertical=center',
            profession: 'Creative Director',
            skillOne: 'Brand',
            skillTwo: 'Illustration',
            skillThree: 'Web',
        },
        {
            id: 3,
            name: 'Solomon Drake',
            imageUrl:
                'https://cdn.dribbble.com/uploads/47178/original/mercedes-bazan.png?1689174566&format=webp&resize=546x680&vertical=center',
            profession: 'Illustration + Brand',
            skillOne: 'UI/UX',
            skillTwo: 'Mobile',
            skillThree: 'Web',
        },
        {
            id: 4,
            name: 'Tyler Durden',
            imageUrl:
                'https://cdn.dribbble.com/uploads/47171/original/daniele-buffa-3.png?1689174763&format=webp&resize=546x680&vertical=center',
            profession: 'Lead Product Designer',
            skillOne: 'UI/UX',
            skillTwo: 'Mobile',
            skillThree: 'Web',
        },
        {
            id: 5,
            name: 'Christy Chris',
            imageUrl:
                'https://cdn.dribbble.com/uploads/47170/original/cd3266dde4f00a5d6a509c7375ddaecd.png?1685644840&format=webp&resize=400x498&vertical=center',
            profession: 'Lead Product Designer',
            skillOne: 'UI/UX',
            skillTwo: 'Mobile',
            skillThree: 'Web',
        },
        {
            id: 6,
            name: 'Robert Owens',
            imageUrl:
                'https://cdn.dribbble.com/uploads/47176/original/9b22cd83bde1809976bec0722d1f8923.jpeg?1685645213&format=webp&resize=546x680&vertical=center',
            profession: 'Lead Product Designer',
            skillOne: 'UI/UX',
            skillTwo: 'Mobile',
            skillThree: 'Web',
        },
        {
            id: 7,
            name: 'Tyler Durden',
            imageUrl:
                'https://cdn.dribbble.com/uploads/47173/original/Vladimir_Gruev.png?1689174896&format=webp&resize=546x680&vertical=center',
            profession: 'Design Director',
            skillOne: 'UI/UX',
            skillTwo: 'Mobile',
            skillThree: 'Web',
        },
        {
            id: 8,
            name: 'Elif Kames',
            imageUrl:
                'https://cdn.dribbble.com/uploads/47172/original/d85ae8c7db2421e9a01ecac942978d4b.png?1685645079&format=webp&resize=546x680&vertical=center',
            profession: 'Creative Director',
            skillOne: 'Brand',
            skillTwo: 'Illustration',
            skillThree: 'Web',
        },
        {
            id: 9,
            name: 'Solomon Drake',
            imageUrl:
                'https://cdn.dribbble.com/uploads/47178/original/mercedes-bazan.png?1689174566&format=webp&resize=546x680&vertical=center',
            profession: 'Illustration + Brand',
            skillOne: 'UI/UX',
            skillTwo: 'Mobile',
            skillThree: 'Web',
        },
    ]
    return (
        <>
            <div className='hero-marquee'>
                <Marquee speed={60}>
                    {marqueeData.map((data) => (
                        <div className='marquee-images' key={data.id}>
                            <img
                                className='marquee-image'
                                src={data.imageUrl}></img>
                            <div className='marquee-persona-info'>
                                <p className='marquee-name'>{data.name}</p>
                                <p className='marquee-prof'>
                                    {data.profession}
                                </p>
                                <div className='skill-sets'>
                                    <p>{data.skillOne}</p>
                                    <p>{data.skillTwo}</p>
                                    <p>{data.skillThree}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </Marquee>
            </div>
        </>
    )
}

export default MarqueeComponent
