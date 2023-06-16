// import Router from "next/router";

const PrivateRoutes = ({ children }) => {
   // const { data: session } = useSession();

   // if (!session?.user) {
   //    Router.push('refresh', '/login');
   //    return;
   // } else {
   //    return children;
   // }

   return children;

};

export default PrivateRoutes;