import Image from 'next/image';
import React from 'react';
import Link from 'next/link';

const PageNotFound = () => {
   return (
      <>
         <div data-aos="fade">
            <div className="container">
               <div className="row d-flex justify-content-center py-vh-5 pb-5">
                  <div className="col-12 col-lg-10 col-xl-8">
                     <div className="row">
                        <div className="col-12 py-vh-2 text-center">
                           <Image src="/img/error-404.png" width={300} height={300} alt="abstract image" className="img-fluid position-relative rounded-5 shadow" data-aos="zoom-up" />
                        </div>
                        <div className="col-12 text-center">
                           <Link href="/" className="btn btn-xl btn-light">{'<< '}Back home</Link>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
};

export default PageNotFound;