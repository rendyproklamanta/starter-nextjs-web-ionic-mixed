import { useGetTokenDataQuery } from "../store/api/authApi";
import { useSelector } from "react-redux";

const useIsLoggedIn = () => {
   const userInfo = useSelector((state) => state.auth.value);
   // console.log("🚀 ~ file: useAuth.jsx:6 ~ useIsLoggedIn ~ userInfo:", userInfo)
   if (userInfo) {
      return true;
   } else {
      return false;
   }
};

const useGetUserInfo = () => {
   const userInfo = useSelector((state) => state.auth.value);
   // console.log("🚀 ~ file: useAuth.jsx:11 ~ useGetUserInfo ~ data:", typeof (userInfo));
   const token = userInfo ? userInfo.token : '';
   const { data, isLoading } = useGetTokenDataQuery({ token });

   return { data, isLoading };
};

const useGetToken = () => {
   const userInfo = useSelector((state) => state.auth.value);
   if (userInfo) {
      return userInfo.token;
   } else {
      return false;
   }
};

export { useIsLoggedIn, useGetUserInfo, useGetToken };