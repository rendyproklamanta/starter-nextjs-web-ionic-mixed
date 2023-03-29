
export default async function Error(req, res) {
   res.json({ error: req.query.error });
}