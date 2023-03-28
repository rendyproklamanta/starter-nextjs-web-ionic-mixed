import { getToken } from 'next-auth/jwt';
import { getSession, signIn, useSession } from 'next-auth/react';
import React from 'react';
import { useEffect } from 'react';

const Dashboard = () => {

   useEffect(() => {
      const fetchData = async () => {
         // const session = await getToken({ req, secret: process.env.NEXTAUTH_SECRET })
         // console.log(session);

      };

      fetchData();
   }, []);



   const handleSubmit = async (e) => {
      e.preventDefault();

      signIn('credentials',
         {
            email: 'admin@email.com',
            password: '123qwe',
            // The page where you want to redirect to after a successful login
            callbackUrl: `/redux`
         }
      );
   };

   return (
      <>
         <div className="container mt-3 mb-5">
            <div className="row d-flex justify-content-center py-vh-5 pb-0">
               <h1 className='text-center'>Register a new account</h1>
               {/* {session && session} */}
               <form onSubmit={handleSubmit} className="row d-flex justify-content-center py-vh-4 pb-0">
                  <div className="col-12 col-lg-10 col-xl-8">
                     <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input name="email" type="email" className="form-control form-control-lg bg-gray-800 border-dark" id="exampleInputEmail1" aria-describedby="emailHelp" required />
                        <div id="emailHelp" className="form-text">Well never share your email with anyone else.</div>
                     </div>
                     <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input name="password" type="password" className="form-control form-control-lg bg-gray-800 border-dark" id="exampleInputPassword1" required />
                     </div>
                     <div className="mb-3 form-check py-3">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                        <label className="form-check-label" htmlFor="exampleCheck1">If you really don´t want any newsletter <strong>check this box</strong>. Then you just agree to receive our marketing mails and product stuff. If you check this box <strong>we will not send out our newsletter</strong> to you at all...on mondays.</label>
                     </div>
                     <button type="submit" className="btn btn-white btn-xl mb-4">Submit</button>
                  </div>
               </form>
            </div>
         </div>

      </>
   );
};

export default Dashboard;