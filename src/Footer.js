import React from "react";

function Footer() {
  return (
    <div>
      <section>
        <footer className="text-center text-white" style={{ backgroundColor: "#000000ff" }} >
          <div className="container p-4 pb-0">
            <section>
              <p className="d-flex justify-content-center align-items-center">
                <span className="me-3">Register for free</span>
                <button data-mdb-ripple-init type="button" className="btn btn-outline-light btn-rounded">
                  Sign up!
                </button>
              </p>
            </section>
          </div>
          <div className="text-center p-3"style={{ backgroundColor:"black" }} >
            © 2025 Copyright:  
            <a className="text-white" href=""> Praveen❤Rose </a>
          </div>
        </footer>
      </section>
    </div>
  );
}

export default Footer;
