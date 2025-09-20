import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <div className='w-100'>
        <img src="/Images/background.jpg"className='w-100'style={{ height: "400px", paddingTop:"90px"}}alt='Background'/>
      </div>
      <h1 className='text-center my-4'>HOT CATEGORIES</h1>

      <div className='d-flex justify-content-center gap-3 flex-wrap'>
        <div className='p-3 d-flex'>
          <Link to="/Dress" className="text-decoration-none text-dark">
            <div style={{ width: "200px", textAlign: 'center' }}>
              <img src="/Images/c7ef9ddf4de67f1b38fa594c730e7431.jpg" className='w-100 rounded shadow-sm' alt='Dress category' />
              <h5 className='mt-2'>Dress</h5>
            </div>
          </Link>
        </div>
        <div className='p-3 d-flex'>
          <Link to="/Tshirt" className="text-decoration-none text-dark">
              <div style={{ width: "180px", textAlign: 'center' }}>
                <img src="/Images/448d48a2dc4461d216a8f43f947be3fe.jpg" className='w-100 rounded shadow-sm' alt='Dress category' />
                <h5 className='mt-2'>T-Shirt</h5>
              </div>
          </Link>
        </div>  
        <div className='p-3 d-flex'>
          <Link to="/Jeans" className="text-decoration-none text-dark">
              <div style={{ width: "205px", textAlign: 'center' }}>
                <img src="/Images/Screenshot 2025-09-18 135750.png" className='w-100 rounded shadow-sm' alt='Dress category' />
                <h5 className='mt-2'>Jeans</h5>
              </div>
          </Link>
        </div>  
      </div>

       <div className='d-flex justify-content-center gap-3 flex-wrap'>
        <div className='p-3 d-flex'>
          <Link to="/Bags" className="text-decoration-none text-dark">
            <div style={{ width: "210px", textAlign: 'center' }}>
              <img src="/Images/1725055e4add523d8a6774db358916f8.jpg" className='w-100 rounded shadow-sm' alt='Dress category' />
              <h5 className='mt-2'>Bags</h5>
            </div>
          </Link>
        </div>
        <div className='p-3 d-flex'>
          <Link to="/Cosmetics" className="text-decoration-none text-dark">
              <div style={{ width: "190px", textAlign: 'center' }}>
                <img src="/Images/66cdcc121a5f1423764527f859072685.jpg" className='w-100 rounded shadow-sm' alt='Dress category' />
                <h5 className='mt-2'>Cosmetics</h5>
              </div>
          </Link>
        </div>  
        <div className='p-3 d-flex'>
          <Link to="/Footwear" className="text-decoration-none text-dark">
              <div style={{ width: "170px", textAlign: 'center' }}>
                <img src="/Images/080ba7f5f4409dba7d3464bd3a6700fd.jpg" className='w-100 rounded shadow-sm' alt='Dress category' />
                <h5 className='mt-2'>Footwears</h5>
              </div>
          </Link>
        </div>  
      </div>


    </div>
  );
}

export default Home;
