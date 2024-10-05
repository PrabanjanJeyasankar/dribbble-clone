// App.js
import React from 'react'
import './App.css'
import NavBarComponent from './assets/Components/NavBarComponent/NavBarComponent'
import ContextProvider from './ContextProvider'
import FeedComponent from './assets/Components/FeedComponent/FeedComponent'
import FooterComponent from './assets/Components/FooterComponent/FooterComponent'
import HeroComponent from './assets/Components/HeroComponent/HeroComponent'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
    return (
        <ContextProvider>
            <Router>
                <div className='app'>
                    <NavBarComponent />
                    <Routes>
                        <Route path='/' element={<HeroComponent />} />
                        <Route path='/search' element={<FeedComponent />} />
                    </Routes>
                    <FooterComponent />
                </div>
            </Router>
        </ContextProvider>
    )
}

export default App
