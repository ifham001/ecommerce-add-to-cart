
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Modal from '../../../modals/Modal'
import { cartAction } from '../../../store/cart-slice'
import classes from './CartItem.module.css'
import CartItem from './CartItemSingle/CartItem'








function CartItems(props) {
  const dispatch = useDispatch()
  const cartItems= useSelector(state=>state.cart.items)
  const totalAmount = useSelector(state=>state.cart.totalAmount)



    const add1ToCart =e=>{
      dispatch(cartAction.addToCart({
        id:e.id,
        amount:1
      }))
    }
    const remove1ToCart=e=>{
      dispatch(cartAction.removeToCart({
        id:e
      
      }))
    }


  return (
    <Modal>
        <h1 className={classes.heading}>CartItems</h1>

       { cartItems.map(item=>{
        return <CartItem
        item={item.item}
        amount={item.amount}
        singleItemTotal={item.totalPrice}
        price={item.price}
        onClickAdd1={add1ToCart.bind(null,item)}
        onClickSub1={remove1ToCart.bind(null,item.id)}/>
       })}

                <h3>total={totalAmount}</h3>

        <button onClick={props.closeCart}> close</button>
    </Modal>
  )
}

export default CartItems