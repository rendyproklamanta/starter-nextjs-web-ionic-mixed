import React from 'react';
import Counter from '../../components/Counter';
import Link from 'next/link';
import { NextSeo } from 'next-seo';
import DefaultLayout from '../../components/layout/DefaultLayout';

const Redux = () => {

   return (
      <>
         <NextSeo
            title='Redux Title'
            description="This example uses more of the available config options."
         />
         <DefaultLayout>
            <div className="container">
               <div className="row d-flex justify-content-center py-vh-5 pb-0">
                  <div className="col-12 col-lg-10 col-xl-8">
                     <div className="row">
                        <div className="col-12 mb-5">

                           <h2>Test Counter</h2>
                           <Counter />

                           <br />

                           <h2>Test Redux Toolkit Query</h2>
                           <button>
                              <Link href="/redux/ssr">Pokemon API</Link>
                           </button>
                           <button>
                              <Link href="/redux/users">Users API</Link>
                           </button>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </DefaultLayout>
      </>
   );


};

export default Redux;