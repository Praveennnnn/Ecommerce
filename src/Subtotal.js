import React from 'react'
import { useStateValue } from './StateProvider'
import { total } from './Reducer';

function Subtotal() {
  const [{basket}]=useStateValue();
  return (
    <div style={{paddingTop:"100px"}}>
        <p>Subtotal ({basket.length} item):<strong>₹{total(basket)} </strong> </p>
        <input type='checkbox'/>This order contains a gift
        <button className='btn btn-warning rounded-0 w-100 mt-2'>Proced to Checkout</button>
    </div>
  )
}

export default Subtotal