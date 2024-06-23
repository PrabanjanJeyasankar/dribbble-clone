import React from 'react'
import './App.css'
import NavBarComponent from './assets/Components/NavBarComponent/NavBarComponent'
import ContextProvider from './ContextProvider'
function App() {
  return (
    <ContextProvider>
      <NavBarComponent />
    </ContextProvider>
  )
}

export default App
