import { useRouter } from "next/router";
// import { useGetUserQuery } from "../../store/api/authApi";
import Navbar from "./Navbar";
import { loadCSR } from "../../utils/global";
import { useSession } from "next-auth/react";

const ProtectedLayout = ({ children }) => {

   const { data: session, status } = useSession();
   // const { isFetching, data } = useGetUserQuery();
   const router = useRouter();

   if (status !== 'loading' && !session?.user) {
      router.push('/login');
   }

   if (session?.user) {
      return (
         <>
            <Navbar />
            {children}
         </>
      );
   }

};

export default loadCSR(ProtectedLayout);
