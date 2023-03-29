import { signIn } from 'next-auth/react';
import React from 'react';
import { useGetUserQuery } from '../../store/api/authApi';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import DefaultLayout from '../../components/layout/DefaultLayout';

const Login = () => {
   const { isFetching, data } = useGetUserQuery();
   const router = useRouter();

   useEffect(() => {
      if (!isFetching && data?.user) {
         router.push('/dashboard');
      }
   }, [isFetching, data, router]);

   const handleSubmit = async (e) => {
      e.preventDefault();

      const { email, password } = e.target.elements;

      signIn('credentials',
         {
            email: email.value,
            password: password.value,
            // The page where you want to redirect to after a successful login
            // callbackUrl: `/dashboard`
         }
      );
   };

   return (
      <>
         <DefaultLayout>
            <div className="container mt-3 mb-5">
               <div className="row d-flex justify-content-center py-vh-5 pb-0">
                  <h1 className='text-center'>Login to your account</h1>
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
         </DefaultLayout>
      </>
   );
};

export default Login;