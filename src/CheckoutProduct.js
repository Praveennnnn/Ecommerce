import React from 'react'
import { useStateValue } from './StateProvider'

function CheckoutProduct({ id, title, image, rating, price }) {
  const [{ basket }, dispatch] = useStateValue()

  const removecart = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id
    })
  }

  return (
    <div className='d-flex mb-3'>
      <div style={{ width: "140px" }}>
        <img src={`/Images/${image}`} className='w-100' alt='product' />
      </div>
      <div className='ms-4'>
        <h4>{title}</h4>
        <span>$<strong>{price}</strong></span>
        <p>
          {Array(rating).fill().map((_, i) => (
            <span key={i}>⭐</span>
          ))}
        </p>
        <button className='btn btn-sm btn-warning rounded-0' onClick={removecart}>
          Remove from Cart
        </button>
      </div>
    </div>
  )
}

export default CheckoutProduct
