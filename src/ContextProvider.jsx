import { createContext, useContext, useState } from 'react'

const ChatContext = createContext()

const ContextProvider = ({ children }) => {
  const [suggestions, setSuggestions] = useState([])
  const [searchQuery, setSearchQuery] = useState('')
  return (
    <ChatContext.Provider
      value={{
        suggestions,
        searchQuery
      }}>
      {children}
    </ChatContext.Provider>
  )
}

export const ChatState = () => {
  return useContext(ChatContext)
}

export default ContextProvider
