import Modal from './modals/Modal'
import React, { useState } from 'react'
import Nabvar from './components/Header/Nabvar'
import Items from './components/ShopItems/Items'
import CartItems from './components/Header/CartItems/CartItems'










function App() {
  
  const [openCart,setCartOpen]=useState(true)


  const manageCart =e=>{
    setCartOpen(false)
  }
  const onClickCloseCart =e=>{
    setCartOpen(true)
  }
  return (
    <>

    <Nabvar cartHandler={manageCart}/>
    {!openCart&&<CartItems closeCart={onClickCloseCart}/>}
    <Items/></>
  )
}

export default App