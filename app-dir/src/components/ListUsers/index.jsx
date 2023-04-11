"use client";

import Image from "next/image";
import React from "react";
import { TestContext } from "../Context/TestContext";

export default function ListUsers({ result }) {
   const { data, isLoading, isFetching, error } = result;
   // console.log(data);

   return (

      <section className="pt-[120px] pb-[120px]">
         <div className="container">

            <TestContext />

            {error ? (
               <p>Oh no, there was an error</p>
            ) : isLoading || isFetching ? (
               <p>Loading</p>
            ) : data ? (
               <div
                  style={{
                     display: "grid",
                     gridTemplateColumns: "1fr 1fr 1fr 1fr",
                     gap: 20,
                  }}
               >
                  {data?.map((user, i) => (
                     <div
                        key={i}
                        style={{ border: "1px solid #ccc", textAlign: "center" }}
                     >
                        <Image
                           src={`https://robohash.org/${user.id}?set=set2&size=180x180`}
                           alt={user.name}
                           height={180}
                           width={180}
                        />
                        <h3>{user.name}</h3>
                     </div>
                  ))}
               </div>
            ) : null}
         </div>
      </section>
   );
}
