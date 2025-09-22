import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { useStateValue } from './StateProvider';
import { Link } from "react-router-dom";




function Header() {
  const [{basket},dispatch]=useStateValue()
  //console.log("Check",basket)
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div className="container">
        <a className="navbar-brand d-flex align-items-center" href="/">
          <i className="bi bi-shop-window fs-4 text-warning me-2"></i>
          Eshop
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">

          <form className="d-flex mx-auto my-2 my-lg-0" style={{ maxWidth: "900px", flex: 1 }}>
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="Search products"
                aria-label="Search products"
              />
              <button className="btn btn-warning" type="submit">
                <i className="bi bi-search"></i>
              </button>
            </div>
          </form>

          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" href="/Login">
                <small className="d-block text-white">Hi,Guest</small>
                <strong className="d-block text-white">Sign in</strong>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <small className="d-block text-white">Your</small>
                <strong className="d-block text-white">Shop</strong>
              </a>
            </li>
            <li className="nav-item">
  <Link className="nav-link d-flex align-items-center" to="/checkout">
    <i className="bi bi-basket2 text-white me-2 fs-4"></i>
    <span className='fs-5 text-white'>
      <strong>{basket.length}</strong>
    </span>
  </Link>
</li>

          </ul>

        </div>
      </div>
    </nav>
  );
}

export default Header;
