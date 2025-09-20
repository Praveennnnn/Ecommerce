import React from 'react'
import CheckoutProduct from './CheckoutProduct'
import Subtotal from './Subtotal'
import { useStateValue } from './StateProvider'

function Checkout() {
  const [{ basket },] = useStateValue();
  //console.log("count", basket);

  return (
    <div className='container-fluid'>
      <div className='row mt-2 min-vh-100'>
        <div className='col-9'>
          <img  src="/Images/2ef2d9f7021761ac9762d9bdb836295d.jpg" className='w-100' style={{ height: "250px", paddingTop:"70px" }} alt='' />
          
          <div className='mt-3'>
            <h3>Your Shopping Cart</h3>

            {basket.length === 0 ? (
              <p>Your basket is empty 🛒</p>
            ) : (
              basket.map(item => (
                <CheckoutProduct
                  key={item.id}
                  id={item.id}
                  title={item.title}
                  image={item.image}
                  rating={item.rating}
                  price={item.price}
                />
              ))
            )}
          </div>
        </div>

        <div className='col-3'>
          <Subtotal />
        </div>
      </div>
    </div>
  )
}

export default Checkout;
