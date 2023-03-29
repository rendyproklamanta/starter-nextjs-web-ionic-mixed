import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";

export default async function handler(req, res) {
   const session = await getServerSession(req, res, authOptions);
   if (session) {
      res.json(session);
   } else {
      res.json({ message: 'session not found' });
   }
}