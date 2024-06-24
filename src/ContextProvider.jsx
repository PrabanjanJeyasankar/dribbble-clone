import { createContext, useContext, useState } from 'react'
import feedData from '../src/assets/data'

const ChatContext = createContext()

const ContextProvider = ({ children }) => {
    const [suggestions, setSuggestions] = useState([])
    const [searchQuery, setSearchQuery] = useState('')
    const [selectedFilter, setSelectedFilter] = useState('Following')
    const [data, setData] = useState(feedData)

    return (
        <ChatContext.Provider
            value={{
                suggestions,
                setSuggestions,
                searchQuery,
                setSearchQuery,
                data,
                setData,
                selectedFilter,
                setSelectedFilter,
            }}>
            {children}
        </ChatContext.Provider>
    )
}

export const ChatState = () => {
    return useContext(ChatContext)
}

export default ContextProvider
