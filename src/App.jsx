import React from 'react'
import './App.css'
import NavBarComponent from './assets/Components/NavBarComponent/NavBarComponent'
import ContextProvider from './ContextProvider'
import FeedComponent from './assets/Components/FeedComponent/FeedComponent'

function App() {
    return (
        <ContextProvider>
            <NavBarComponent />
            <FeedComponent />
        </ContextProvider>
    )
}

export default App
