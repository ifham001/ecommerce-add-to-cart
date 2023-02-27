import React, { useState } from 'react'
import { cartAction } from '../../../store/cart-slice'
import classes from './SingleItem.module.css'
import {useDispatch} from 'react-redux'



function SingleItem(props) {
  const [amount,setAmount]=useState()
  const dispatch = useDispatch();

 const getAmountHandler =e=>{
      const gotAmount=  +e.target.value
      setAmount(gotAmount)
  }

  const addTocartHadler=e=>{
    e.preventDefault()
    dispatch(cartAction.addToCart({
          id:props.id,
          item:props.item,
          price:props.price,
          amount:amount

    
    }))

  }
  return (
    <div className={classes.itemBox}>
        <div className={classes.textItem}><h3>{props.item}</h3> <h4>{props.price}</h4></div>
        <div>{props.description}</div>
        <div className={classes.itemInput}>
           <form onSubmit={addTocartHadler}>
           <input 
                onChange={getAmountHandler}
                
                type={'number'}
                min={1}
                max={5}
                defaultValue={0}
                step={1}
                
        /> <button>Add</button>
            
            
            </form></div>
        
    </div>
  )
}

export default SingleItem