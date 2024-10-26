
import { useState } from 'react'
import './App.css'
import Allproduct from './component/Allproduct'
import CardContainer from './component/CardContainer'
import Navber from './component/Navber'

function App() {
  const [isActive, setIsActive]=useState({
    cart: true,
    Status:"active"
  })
  
  const handleActive = (status) => {
   
    if (status == "cart") {
      
      setIsActive({
        cart: true,
        status: "cart" 
      })
    } else {
      setIsActive({
        cart: false,
        status: "about"
      })
    }
  }

  return (
    <>
      <Navber></Navber>
      <div className='flex justify-between px-8'>
      <Allproduct></Allproduct>
      <CardContainer isActive={isActive} handleActive={handleActive}></CardContainer>
      </div>
    </>
  )
}

export default App
