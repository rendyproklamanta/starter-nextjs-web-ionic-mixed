import { getServerSession } from "next-auth";

export default async function handler(req, res) {
   const session = await getServerSession(req, res);
   if (session) {
      res.json(session);
   } else {
      res.json({ message: 'session not found' });
   }
}