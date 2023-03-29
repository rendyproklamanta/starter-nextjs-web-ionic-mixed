import { NextSeo } from "next-seo";
import ProtectedLayout from "../../components/layout/ProtectedLayout";

const Dashboard = () => {
   return (
      <>
         <NextSeo
            title="Dashboard title"
            description="This example uses more of the available config options."
         />
         <div className="container mt-3 mb-5">
            <div className="row d-flex justify-content-center py-vh-5 pb-0">
               <h1 className='text-center'>Dashboard Page</h1>
            </div>
         </div>
      </>
   );
};

Dashboard.getLayout = (page) => {
   return (
      <>
         <ProtectedLayout>
            {page}
         </ProtectedLayout>
      </>
   );
};


export default Dashboard;