
import { Suspense, useState } from 'react'
import './App.css'
import DigitalTools from './Components/DigitalTools/DigitalTools'
import Navbar from './Components/Navbar/Navbar'
import GetStarted from './Components/GetStarted/GetStarted'
import { ToastContainer } from 'react-toastify'
import Pricing from './Components/Pricing/Pricing'
import Footer from './Components/Footer/Footer'
import Banner from './Components/Banner/Banner'
import Rating from './Components/Rating/Rating'

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
   <Banner></Banner>
   <Rating></Rating>
   <main className='container mx-auto'>
    <Suspense fallback={<span className="$$loading $$loading-spinner $$loading-xl"></span>}>
    <DigitalTools promisePricing={promisePricing} setCartNumber={setCartNumber} cartNumber={cartNumber}></DigitalTools>
    </Suspense>
   </main>
    <GetStarted></GetStarted>
    <Pricing></Pricing>
    <Footer></Footer>


    <ToastContainer></ToastContainer>
    </>



  )
}

export default App
