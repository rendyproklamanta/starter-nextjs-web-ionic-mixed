import { NextSeo } from "next-seo";
import ProtectedLayout from "../../components/layout/ProtectedLayout";
import { loadCSR } from "../../utils/global";
import { useSession } from "next-auth/react";

const Dashboard = () => {
   const { data: session } = useSession();

   // console.log(session);

   return (
      <>
         <NextSeo
            title="Dashboard title"
            description="This example uses more of the available config options."
         />
         <ProtectedLayout>
            <div className="container mt-3 mb-5">
               <div className="row d-flex justify-content-center py-vh-5 pb-0">
                  <h1 className='text-center mb-5'>Dashboard Page</h1>
                  <h5 className='text-center'>Welcome {session?.user && session.user.name}</h5>
               </div>
            </div>
         </ProtectedLayout>
      </>
   );
};

export default loadCSR(Dashboard);