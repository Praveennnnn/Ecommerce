import React, {  } from 'react';
import { useStateValue } from './StateProvider';

function Product({ image, id, title, rating, price }) {
  const [state,dispatch] =useStateValue()
  function addProduct(){

    dispatch({
      type:"ADD_TO_BASKET",
      item:{
        id :id,
        title:title,
        image:image,
        rating:rating,
        price:price
      }
    })

  }
  return (
    <div className='d-flex flex-column '>
      <h4>{title}</h4>
      <strong>${price}</strong>
      <p>
        {Array(rating).fill().map((_, i) => (
          <span >⭐</span>
        ))}
      </p>
      <div className='d-flex flex-column align-items-center'>
        <img src={`/Images/${image}`} className="w-50 mt-1" alt='img' />
        <button onClick={addProduct} className='btn btn-warning w-auto mt-3 '>Add Product</button>
      </div>
    </div>
  );
}

export default Product;
