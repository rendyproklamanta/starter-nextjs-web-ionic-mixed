import { getSession } from "next-auth/react";

export default async function Session(req, res) {
   // await getSession({ req });
   // res.end();
   res.send(true);
}

// import { getSession } from "next-auth/react";

// export default async function Session(req, res) {
//    const session = await getSession({ req: req });
//    if (session) {
//       // Signed in
//       console.log(session);
//       res.send(session);
//    } else {
//       // Not Signed in
//       res.status(401);
//    }
//    res.end();
// }