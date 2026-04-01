
import { Suspense, useState } from 'react'
import './App.css'
import DigitalTools from './Components/DigitalTools/DigitalTools'
import Navbar from './Components/Navbar/Navbar'
import GetStarted from './Components/GetStarted/GetStarted'

const fetchData = async() => {
  const res = await fetch('/pricingData.json')
  return res.json()
}


function App() {
  
  const promisePricing = fetchData()
  
  const [cartNumber, setCartNumber] = useState([])

  return (
    <>
   <header>
    <Navbar cartNumber={cartNumber}></Navbar>
   </header>
   <main className='container mx-auto'>
    <Suspense fallback={<span className="$$loading $$loading-spinner $$loading-xl"></span>}>
    <DigitalTools promisePricing={promisePricing} setCartNumber={setCartNumber} cartNumber={cartNumber}></DigitalTools>
    </Suspense>
    <GetStarted></GetStarted>
   </main>
    </>
  )
}

export default App
