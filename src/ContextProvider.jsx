import { createContext, useContext, useState } from 'react'

const ChatContext = createContext()

const ContextProvider = ({ children }) => {
    const [suggestions, setSuggestions] = useState([])
    const [searchQuery, setSearchQuery] = useState('')
    const [selectedFilter, setSelectedFilter] = useState('following')
    const [data, setData] = useState([])

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
