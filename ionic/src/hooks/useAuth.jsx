import Cookies from "js-cookie";
import { useGetTokenDataQuery } from "../store/api/authApi";

const useGetUserInfo = () => {
   let token = '';

   if (Cookies.get('userinfo')) {
      const userInfo = JSON.parse(Cookies.get('userinfo'));
      token = userInfo.token;
   }
   const result = useGetTokenDataQuery({ token });
   return result;
};

const useGetToken = () => {
   let token = '';

   if (Cookies.get('userinfo')) {
      const userInfo = JSON.parse(Cookies.get('userinfo'));
      token = userInfo.token;
   }
   return token;
};

export { useGetUserInfo, useGetToken };