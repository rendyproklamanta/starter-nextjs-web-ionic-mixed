// import NextAuth from "next-auth/next";
// import CredentialsProvider from "next-auth/providers/credentials";
// import axios from 'axios';

// export default NextAuth({
//    providers: [
//       CredentialsProvider({
//          name: 'credentials',
//          authorize: async (credentials) => {
//             const data = await axios.post('http://localhost:8000/api/auth/login/admin',
//                {
//                   password: credentials.password,
//                   email: credentials.email
//                },
//                {
//                   headers: {
//                      accept: '*/*',
//                      'Content-Type': 'application/json'
//                   }
//                });
//             // console.log(data);

//             if (data) {
//                return data;
//             } else {
//                return null;
//             }
//          }
//       }),
//    ],
//    callbacks: {
//       jwt: async ({ token, data }) => {
//          if (data) {
//             token.access_token = data.token;
//             token.id = data._id;
//          }

//          return token;
//       },
//       session: async ({ session, token }) => {
//          if (token) {
//             session.id = token.id;
//          }
//          return session;
//       },
//    },
//    secret: process.env.NEXTAUTH_SECRET,
//    session: {
//       strategy: "jwt",
//    },
// });

import NextAuth from "next-auth";
import CredentialProvider from "next-auth/providers/credentials";

export default NextAuth({
   providers: [
      CredentialProvider({
         async authorize(credentials) {
            const response = await fetch("http://localhost:8000/api/auth/login/admin",
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
      async jwt({ token, user }) {
         user && (token.user = user.token);
         // console.log(token);
         return token;
      },
      async session({ session, token }) {
         console.log(token);
         session.user = token.token;  // Setting token in session
         return session;
      },
   },
   session: {
      strategy: "jwt",
   },
   pages: {
      signIn: "/dashboard", //Need to define custom login page (if using)
   },
});