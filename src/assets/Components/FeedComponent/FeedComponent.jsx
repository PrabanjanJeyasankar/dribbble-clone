import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import './FeedComponent.css';
import FilterComponent from '../FilterComponent/FilterComponent';
import OverlayComponent from '../OverlayComponent/OverlayComponent';
import { IoHeart } from 'react-icons/io5';
import { TbEyeFilled } from 'react-icons/tb';
import { Bookmark, Heart } from 'lucide-react';
import { ChatState } from '../../../ContextProvider';

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

// Updated to accept showFilters prop
function FeedComponent({ showFilters = true }) {
    const { searchQuery, data } = ChatState();
    const query = useQuery();
    const [filteredData, setFilteredData] = useState(data);
    const [noResults, setNoResults] = useState(false);
    const [overlayVisible, setOverlayVisible] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);
    const [loadingImage, setLoadingImage] = useState(true);

    const handleThumbnailClick = (item) => {
        setSelectedItem(item);
        setOverlayVisible(true);
    };

    const closeOverlay = () => {
        setOverlayVisible(false);
        setSelectedItem(null);
    };

    const handleImageLoaded = () => {
        setLoadingImage(false);
    };

    useEffect(() => {
        const filteredData = data.filter((item) => {
            const thumbnailNameLower = item.thumbnailName.toLowerCase();
            const userNameLower = item.userName.toLowerCase();
            const searchQueryLower = searchQuery.toLowerCase();

            const matchesSearch =
                thumbnailNameLower.includes(searchQueryLower) ||
                userNameLower.includes(searchQueryLower);

            return matchesSearch;
        });

        setFilteredData(filteredData);
        setNoResults(filteredData.length === 0);
    }, [searchQuery, data]);

    return (
        <div className='feed-container'>
            {showFilters && <FilterComponent />}
            {noResults ? (
                <div className='no-results'>
                    No results found for "{searchQuery}": (
                </div>
            ) : (
                <div className='feed-shots-grid'>
                    {filteredData.map((item) => (
                        <div
                            key={item.id}
                            onClick={() => handleThumbnailClick(item)}>
                            <div className='shot'>
                                <div className='thumbnail-image'>
                                    {loadingImage && (
                                        <span className='loader'></span>
                                    )}
                                    <img
                                        src={item.thumbnailImage}
                                        alt={item.thumbnailName}
                                        onLoad={handleImageLoaded}
                                        style={
                                            loadingImage
                                                ? { visibility: 'hidden' }
                                                : {}
                                        }
                                    />
                                    <div className='hover-effect'>
                                        <div className='hover-effect-info'>
                                            <div className='thumbnail-name'>
                                                {item.thumbnailName}
                                            </div>
                                            <div className='actions'>
                                                <Bookmark
                                                    strokeWidth={2}
                                                    className='bookmark-icon'
                                                />
                                                <Heart
                                                    strokeWidth={2}
                                                    className='heart-icon-hover-effect'
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='shot-details'>
                                    <div className='user-details'>
                                        <img
                                            src={item.userImage}
                                            alt={item.userName}
                                        />
                                        <p>{item.userName}</p>
                                    </div>
                                    <div className='reach-counts'>
                                        <div className='likes'>
                                            <IoHeart className='heart-icon-user-details' />
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
            {overlayVisible && selectedItem && (
                <OverlayComponent item={selectedItem} onClose={closeOverlay} />
            )}
        </div>
    );
}

export default FeedComponent;
