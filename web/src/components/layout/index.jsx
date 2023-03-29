import { useEffect } from "react";
import { useGetUserQuery } from "../../store/api/authApi";
import { useRouter } from "next/router";
import DefaultLayout from "./DefaultLayout";
import ProtectedLayout from "./ProtectedLayout";

export default function Layout({ children }) {
   const { isFetching, data } = useGetUserQuery();
   const router = useRouter();

   useEffect(() => {
      if (!isFetching && !data?.user) {
         router.push('/login');
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [data, router.pathname, isFetching]);

   if (data?.user) {
      return (<ProtectedLayout>{children}</ProtectedLayout>);
   } else {
      return (<DefaultLayout>{children}</DefaultLayout>);
   }

}