import { getToken } from "next-auth/jwt";
const secret = process.env.NEXTAUTH_SECRET;

export default async function Token(req, res) {
   const token = await getToken({ req: req, secret: secret });
   if (token) {
      // Signed in
      // console.log("JSON Web Token", token);
      // res.send(token.user.token);
      res.json(token);
   } else {
      res.json({ message: 'token not found' });
   }
}