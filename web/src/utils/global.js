import dynamic from 'next/dynamic';

/**
* Load page mode CSR, with SSR disabled
*/
export const loadCSR = (Component) => dynamic(
   () => Promise.resolve(Component),
   { ssr: false },
);

export const getMyToken = async () => {
   try {
      const res = await fetch("/api/auth/token");
      const token = await res.json();
      // console.log(token);
      return token.user;
   } catch (error) {
      console.log('getMyToken', error);
      return false;
   }
};