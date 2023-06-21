import { useIsLoggedIn } from "../hooks/useAuth";
import { useIonRouter } from "@ionic/react";

const PrivateRoutes = ({ children }) => {
   const isLoggedIn = useIsLoggedIn();
   const router = useIonRouter();
   // const { data: session } = useSession();

   // if (!session?.user) {
   //    Router.push('refresh', '/login');
   //    return;
   // } else {
   //    return children;
   // }

   if (!isLoggedIn) {
      router.push('/login');
      return;
   } else {
      return children;
   }

};

export default PrivateRoutes;