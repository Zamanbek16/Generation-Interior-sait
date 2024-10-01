import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import InfoBlock from './components/InfoBlock';
import GptPage from './components/GptPage';


function App() {

  return (
    <div className=''>
      <Navbar />
      {/* <InfoBlock number={5} /> */}
      <GptPage />
      <Footer />

      
    </div>
  )
}

export default App
