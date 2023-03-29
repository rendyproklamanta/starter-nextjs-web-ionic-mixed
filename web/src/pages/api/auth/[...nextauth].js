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
            // Returning token to set in session
            // console.log(data);
            return {
               token: data,
            };
         },
      }),
   ],
   callbacks: {
      jwt: async ({ token, user }) => {
         user && (token.user = user.token);
         // console.log(token);
         return Promise.resolve(token);
      },
      session: async ({ session, token }) => {
         // session callback is called whenever a session for that particular user is checked
         // in above function we created token.user=user
         session.user = token.user;
         return Promise.resolve(session);
      },
   },
   session: {
      strategy: "jwt",
   },
   pages: {
      signIn: "/dashboard", //Need to define custom login page (if using)
   },
});