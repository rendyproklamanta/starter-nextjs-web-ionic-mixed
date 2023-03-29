import { useRouter } from "next/router";
import { useGetUserQuery } from "../../store/api/authApi";
import Navbar from "./Navbar";
import { useEffect } from "react";

const ProtectedLayout = ({ children }) => {

   const { isFetching, data } = useGetUserQuery();
   const router = useRouter();

   useEffect(() => {
      if (!isFetching && !data?.user) {
         router.push('/login');
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [data, router.pathname, isFetching]);

   if (data?.user) {
      return (
         <>
            <Navbar />
            {children}
         </>
      );
   }

};

export default ProtectedLayout;
