import React from 'react'
import classes from './CartItem.module.css'

function CartItem(props) {
  return (
    <div>
    <div className={classes.cartItem}>
        <h3>{props.item}</h3>
        <button  onClick={props.onClickAdd1} className={classes.button}>+</button><h4>{props.amount}</h4>
         <button onClick={props.onClickSub1} className={classes.button}>-</button>
          <h4>X</h4> <h4>{props.price}</h4> <h4>=</h4> <h4> Item-Total={props.singleItemTotal}</h4> 
    </div>
    
    </div>
  )
}

export default CartItem