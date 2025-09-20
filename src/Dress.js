import React from 'react'
import Product from './Product'


function Dress() {
  return (
    <div>
        <div className='Products bg-light p-3 '>
          <div className='p-3 d-flex'>
            <div className='w-10 p-2 bg-white m-2'>
              <Product
              id={1231}
              title={"dress"}
              image={"c06d098aa8358d4c83a7fd36c1763db5.jpg"}
              rating={3}
              price={999}
              />
            </div>
            <div className='w-50 p-2 bg-white m-2'>
              <Product
              id={1232}
              title={"dress"}
              image={"3c9b585879cbd4b146441ed74ac290d7.jpg"}
              rating={3}
              price={870}
              />
            </div>
          </div>

          <div className='p-3 d-flex'>
            <div className='p-2 bg-white m-2'>
              <Product
              id={1233}
              title={"dress"}
              image={"69d658b17168f44273e9bd094673d8fa.jpg"}
              rating={2}
              price={879}
              />            
            </div>
            <div className='p-2 bg-white m-2'>
            <Product
              id={1234}
              title={"dress"}
              image={"75abcab0a902ff20bf326e4b8df84d02.jpg"}
              rating={5}
              price={1100}
              />            
              </div>
             <div className='p-2 bg-white m-2'>
              <Product
              id={1235}
              title={"dress"}
              image={"169d14612ab5274fa429ac8772e1feb3.jpg"}
              rating={4}
              price={1300}
              />            
              </div>
          </div>

          <div className='p-3 '>
            <div className='p-2 bg-white m-2 d-flex justify-content-center'>
            <Product
              id={1236}
              title={"dress"}
              image={"a616d1387a2e427362c593c4cfbd8d65.jpg"}
              rating={1}
              price={1250}
              />            
              </div>
          </div>

        </div>
    </div>
  )
}
 

export default Dress