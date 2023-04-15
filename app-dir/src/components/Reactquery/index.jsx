import Image from "next/image";
import React from "react";

export default function Reactquery({ result }) {
   const { data, isLoading, error } = result;

   return (

      <section>
         <div className="container">

            {error ? (
               <p>Oh no, there was an error</p>
            ) : isLoading ? (
               <p>Loading</p>
            ) : data ? (
               <div
                  style={{
                     display: "grid",
                     gridTemplateColumns: "1fr 1fr 1fr 1fr",
                     gap: 20,
                  }}
               >
                  {data?.results.map((user, i) => (
                     <div
                        key={i}
                        style={{ border: "1px solid #ccc", textAlign: "center" }}
                     >
                        <center>
                           <Image
                              src={`https://robohash.org/${user.name}?set=set2&size=180x180`}
                              alt={user.name}
                              height={180}
                              width={180}
                           />
                           <h3 className="my-2 capitalize">{user.name}</h3>
                        </center>
                     </div>
                  ))}
               </div>
            ) : null}
         </div>

      </section >
   );
}
