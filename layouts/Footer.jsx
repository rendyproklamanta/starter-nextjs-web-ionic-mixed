import React from 'react'

const Footer = () => {
   return (
      <>
         <footer className="bg-black border-top border-dark">
            <div className="container py-vh-4 text-secondary fw-lighter">
               <div className="row">
                  <div className="col-12 col-lg-5 py-4 text-center text-lg-start">
                     <a className="navbar-brand pe-md-4 fs-4 col-12 col-md-auto text-center" href="index.html">
                        <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} fill="currentColor" className="bi bi-stack" viewBox="0 0 16 16">
                           <path d="m14.12 10.163 1.715.858c.22.11.22.424 0 .534L8.267 15.34a.598.598 0 0 1-.534 0L.165 11.555a.299.299 0 0 1 0-.534l1.716-.858 5.317 2.659c.505.252 1.1.252 1.604 0l5.317-2.66zM7.733.063a.598.598 0 0 1 .534 0l7.568 3.784a.3.3 0 0 1 0 .535L8.267 8.165a.598.598 0 0 1-.534 0L.165 4.382a.299.299 0 0 1 0-.535L7.733.063z" />
                           <path d="m14.12 6.576 1.715.858c.22.11.22.424 0 .534l-7.568 3.784a.598.598 0 0 1-.534 0L.165 7.968a.299.299 0 0 1 0-.534l1.716-.858 5.317 2.659c.505.252 1.1.252 1.604 0l5.317-2.659z" />
                        </svg>
                        <span className="ms-md-1 mt-1 fw-bolder me-md-5">Klar</span>
                     </a>
                  </div>
                  <div className="col border-end border-dark">
                     <span className="h6">Company</span>
                     <ul className="nav flex-column">
                        <li className="nav-item">
                           <a href="#" className="link-fancy link-fancy-light">About us</a>
                        </li>
                        <li className="nav-item">
                           <a href="#" className="link-fancy link-fancy-light">Legal</a>
                        </li>
                        <li className="nav-item">
                           <a href="#" className="link-fancy link-fancy-light">Career</a>
                        </li>
                        <li className="nav-item">
                           <a href="#" className="link-fancy link-fancy-light">Contact</a>
                        </li>
                     </ul>
                  </div>
                  <div className="col border-end border-dark">
                     <span className="h6">Services</span>
                     <ul className="nav flex-column">
                        <li className="nav-item">
                           <a href="#" className="link-fancy link-fancy-light">Pricing</a>
                        </li>
                        <li className="nav-item">
                           <a href="#" className="link-fancy link-fancy-light">Products</a>
                        </li>
                        <li className="nav-item">
                           <a href="#" className="link-fancy link-fancy-light">Customers</a>
                        </li>
                        <li className="nav-item">
                           <a href="#" className="link-fancy link-fancy-light">Portfolio</a>
                        </li>
                        <li className="nav-item">
                           <a href="#" className="link-fancy link-fancy-light">Success Stories</a>
                        </li>
                        <li className="nav-item">
                           <a href="#" className="link-fancy link-fancy-light">More</a>
                        </li>
                     </ul>
                  </div>
                  <div className="col">
                     <span className="h6">Support</span>
                     <ul className="nav flex-column">
                        <li className="nav-item">
                           <a href="#" className="link-fancy link-fancy-light">About us</a>
                        </li>
                        <li className="nav-item">
                           <a href="#" className="link-fancy link-fancy-light">Legal</a>
                        </li>
                        <li className="nav-item">
                           <a href="#" className="link-fancy link-fancy-light">Career</a>
                        </li>
                        <li className="nav-item">
                           <a href="#" className="link-fancy link-fancy-light">Contact</a>
                        </li>
                     </ul>
                  </div>
               </div>
            </div>
            <div className="container text-center small py-vh-2 border-top border-dark">Made by &nbsp;
               <a href="https://templatedeck.com" className="link-fancy link-fancy-light" target="_blank">templatedeck.com</a>&nbsp;
               Distributed by <a href="https://themewagon.com" className="link-fancy link-fancy-light" target="_blank">ThemeWagon</a>
            </div>
         </footer>
      </>
   )
}

export default Footer