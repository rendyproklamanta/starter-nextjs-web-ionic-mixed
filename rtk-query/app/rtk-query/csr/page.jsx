// ✅ This pattern works. You can pass a Server Component
// as a child or prop of a Client Component.
import CtnCsr from "./content/page";

export const metadata = {
   title: 'Content SSR',
   description: 'Welcome to Next.js',
};


// Pages are Server Components by default
export default function Page() {
   return (
      <>
         <br />
         <h3>Pokemon CSR</h3>
         <br />
         <CtnCsr />
      </>
   );
}