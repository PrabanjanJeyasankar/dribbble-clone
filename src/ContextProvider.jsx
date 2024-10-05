import { createContext, useContext, useState } from 'react'
import feedData from '../src/assets/data'

const ChatContext = createContext()

const ContextProvider = ({ children }) => {
    const [suggestions, setSuggestions] = useState([])
    const [searchQuery, setSearchQuery] = useState('')
    const [selectedFilter, setSelectedFilter] = useState('Following')
    const [data, setData] = useState(feedData)

    const updateSuggestions = (searchQuery) => {
        const trimmedQuery = searchQuery.trim().toLowerCase()
        setSearchQuery(trimmedQuery)

        if (trimmedQuery === '') {
            setSuggestions([])
        } else {
            const filteredSuggestions = data.filter(
                (item) =>
                    item.userName.toLowerCase().includes(trimmedQuery) ||
                    item.thumbnailName.toLowerCase().includes(trimmedQuery)
            )
            setSuggestions(filteredSuggestions)
        }
    }

    return (
        <ChatContext.Provider
            value={{
                suggestions,
                setSuggestions,
                searchQuery,
                setSearchQuery,
                updateSuggestions,
                selectedFilter,
                setSelectedFilter,
                data,
                setData,
            }}>
            {children}
        </ChatContext.Provider>
    )
}

export const ChatState = () => {
    return useContext(ChatContext)
}

export default ContextProvider
