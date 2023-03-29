import NextAuth from "next-auth";
import CredentialProvider from "next-auth/providers/credentials";

export default NextAuth({
   providers: [
      CredentialProvider({
         async authorize(credentials) {
            const response = await fetch(process.env.NEXT_API_URL + 'auth/login/admin',
               {
                  method: "POST",
                  body: JSON.stringify(credentials),
                  headers: {
                     "Content-Type": "application/json",
                  },
               }
            );
            const data = await response.json();
            // console.log(data);
            if (!response.ok) {
               throw new Error(data.message);
            }

            if (response.ok && data) {
               return data;
            }

            // Return null if user data could not be retrieved
            return null;
         },
      }),
   ],
   callbacks: {
      jwt: async ({ token, user }) => {
         if (user) {
            token.user = user;
            token.accessToken = user.token;
         }
         // console.log(user);
         return token;
      },
      session: async ({ session, token }) => {
         // session callback is called whenever a session for that particular user is checked
         // in above function we created token.user=user
         session.user = token.user;
         session.accessToken = token.accessToken;
         return session;
      },

   },
   session: {
      strategy: "jwt",
   },
   pages: {
      signIn: "/login", //Need to define custom login page (if using)
   },
});