import React from 'react'
import Product from './Product'

function Cosmetics() {
  return (
<div>
        <div className='Products bg-light p-3 '>
          <div className='p-3 d-flex'>
            <div className='w-10 p-2 bg-white m-2'>
              <Product
              id={1231}
              title={"cosmetics"}
              image={"cosmetics1.png"}
              rating={3}
              price={999}
              />
            </div>
            <div className='w-50 p-2 bg-white m-2'>
              <Product
              id={1232}
              title={"cosmetics"}
              image={"cosmetics2.png"}
              rating={3}
              price={870}
              />
            </div>
          </div>

          <div className='p-3 d-flex'>
            <div className='p-2 bg-white m-2'>
              <Product
              id={1233}
              title={"cosmetics"}
              image={"cosmetics3.png"}
              rating={2}
              price={879}
              />            
            </div>
            <div className='p-2 bg-white m-2'>
            <Product
              id={1234}
              title={"cosmetics"}
              image={"cosmetics4.png"}
              rating={5}
              price={1100}
              />            
              </div>
             <div className='p-2 bg-white m-2'>
              <Product
              id={1235}
              title={"cosmetics"}
              image={"cosmetics5.png"}
              rating={4}
              price={1300}
              />            
              </div>
          </div>

          <div className='p-3 '>
            <div className='p-2 bg-white m-2 d-flex justify-content-center'>
            <Product
              id={1236}
              title={"cosmetics"}
              image={"cosmetics6.png"}
              rating={1}
              price={1250}
              />            
              </div>
          </div>

        </div>
    </div>  )
}

export default Cosmetics