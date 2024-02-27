import React from 'react'

import './App.css'
import Navigation from './components/NavigationLogo/Navigation'
import MainContent from './components/mainContent/MainContent'
import Machines from './components/machines/Machines'
import Footer from './components/footer/Footer'

function App() {


  return (
    <div>
      <Navigation/>
      <main className='main_container'>
        <MainContent/>
        <Machines/>
      </main>
      <Footer/>
    </div>
  )
}

export default App
